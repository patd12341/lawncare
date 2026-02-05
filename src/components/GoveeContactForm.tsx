import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    gtag: (command: string, event: string, params: object) => void;
    fbq: any;
  }
}

const GoveeContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hasLights: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send to Supabase database
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'Govee Lighting Installation',
          message: `Has Lights: ${formData.hasLights}\n\nAdditional Info: ${formData.message}`,
          source: 'govee-landing-page'
        }]);

      if (error) throw error;

      // Send to webhook
      await fetch('https://hook.us2.make.com/o1r5uabdj45mubiom62d6cb444ofzz57', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'Govee Lighting Installation',
          hasLights: formData.hasLights,
          message: formData.message,
          source: 'govee-landing-page'
        }),
      });

      // Track form submission in Google Analytics
      if (window.gtag) {
        // Google Analytics 4 event
        window.gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: 'Govee Installation Form'
        });

        // Google Ads conversion tracking
        window.gtag('event', 'conversion', {
          'send_to': 'AW-11416594700/govee-conversion',
          'value': 1.0,
          'currency': 'USD'
        });
      }

      // Track form submission in Facebook Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Govee Installation',
          content_category: 'Lighting Services'
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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="(708) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Do you already own the Govee lights?
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="hasLights"
              value="yes"
              checked={formData.hasLights === 'yes'}
              onChange={(e) => setFormData({ ...formData, hasLights: e.target.value })}
              className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-3 text-gray-700">Yes, I already have them</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="hasLights"
              value="no"
              checked={formData.hasLights === 'no'}
              onChange={(e) => setFormData({ ...formData, hasLights: e.target.value })}
              className="w-5 h-5 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-3 text-gray-700">No, I need help picking the right set</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Any additional details about your project..."
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          Thank you! We'll contact you within 24 hours to discuss your Govee installation.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Get Govee Installation Quote'}
      </button>

      <p className="text-center text-sm text-gray-600">
        Or call us directly: <a href="tel:7082742281" className="text-green-600 font-semibold hover:text-green-700">(708) 274-2281</a>
      </p>
    </form>
  );
};

export default GoveeContactForm;
