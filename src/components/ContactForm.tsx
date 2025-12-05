import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    gtag: (command: string, event: string, params: object) => void;
    fbq: any;
  }
}

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: `Address: ${formData.address}\n\nAdditional Details: ${formData.message}`,
          source: 'lawn-care-website'
        }]);

      if (error) throw error;

      // Track form submission in Google Analytics
      if (window.gtag) {
        // Google Analytics 4 event
        window.gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: 'Contact Form'
        });

        // Google Ads conversion tracking
        window.gtag('event', 'conversion', {
          'send_to': 'AW-11416594700/lawn-care-conversion',
          'value': 1.0,
          'currency': 'USD'
        });
      }

      // Track form submission in Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Lawn Care Service',
          content_category: 'Lawn Care'
        });
      }

      setStatus('success');

      // Navigate to thank you page after short delay
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to submit form. Please try calling us directly at (708) 274-2281.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
        Get Your Free Quote
      </h2>
      <p className="mt-4 text-lg text-center text-gray-600">
        Fill out the form below and we'll get back to you with a custom quote for your lawn care needs.
      </p>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="">Select a service</option>
            <option value="mow-trim">Mow & Trim</option>
            <option value="aeration">Aeration</option>
            <option value="fertilization">Fertilization</option>
            <option value="seasonal-cleanup">Seasonal Cleanup</option>
            <option value="snow-removal">Snow Removal</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! We'll contact you within 24 hours to discuss your lawn care needs.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === 'loading' ? 'Submitting...' : 'Get Your Free Quote'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;