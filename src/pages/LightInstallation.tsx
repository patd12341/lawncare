import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';
import ContactForm from '../components/ContactForm';
import { Lightbulb, Sparkles, Shield, Clock } from 'lucide-react';

const LightInstallation = () => {
  useEffect(() => {
    trackPageView('/light-installation');
  }, []);

  return (
    <>
      <Helmet>
        <title>Professional Light Installation Services | Pat's Lawn Care</title>
        <meta name="description" content="Professional holiday and landscape lighting installation in New Lenox, Frankfort, Mokena. Custom designs, professional installation, maintenance services. Call (708) 274-2281." />
        <meta name="keywords" content="light installation New Lenox, holiday lights Frankfort, landscape lighting Mokena, Christmas lights installation" />
        <link rel="canonical" href="https://patwslawncare.com/light-installation" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Lightbulb className="w-16 h-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Professional Light Installation Services</h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Transform your property with stunning holiday and landscape lighting. Professional installation, custom designs, and hassle-free service.
              </p>
              <Link to="/#contact" className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg">
                Get Your Free Lighting Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700 font-medium">
              ← Back to Home
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Holiday Lighting</h2>
              <p className="text-gray-700 mb-6">
                Make your home the highlight of the neighborhood this holiday season. We handle everything from design to installation to removal.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Christmas Lights:</strong> Classic and LED options in various colors and styles</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Roofline Lighting:</strong> Perfect illumination of your home's architecture</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Tree Wrapping:</strong> Professional wrapping of trees and landscaping</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Custom Displays:</strong> Unique designs tailored to your property</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Seasonal Installation & Removal:</strong> We handle setup and takedown</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Landscape Lighting</h2>
              <p className="text-gray-700 mb-6">
                Enhance your property's beauty and security with year-round landscape lighting that showcases your outdoor spaces.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Pathway Lighting:</strong> Safe and attractive illumination of walkways</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Accent Lighting:</strong> Highlight trees, shrubs, and architectural features</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Security Lighting:</strong> Motion-activated and strategic placement</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Patio & Deck Lighting:</strong> Create perfect outdoor entertaining spaces</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Low-Voltage Systems:</strong> Energy-efficient and safe installations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-green-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Pat's Lawn Care for Light Installation?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-700">
                  Professional installation with full insurance coverage for your peace of mind. We follow all safety protocols.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Designs</h3>
                <p className="text-gray-700">
                  Every property is unique. We create custom lighting plans that complement your home's architecture and landscape.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance Included</h3>
                <p className="text-gray-700">
                  We check and maintain your lights throughout the season. Bulb replacements and repairs included in service.
                </p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Simple Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-700 text-sm">We visit your property to discuss your vision and assess the space</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Custom Design</h3>
                <p className="text-gray-700 text-sm">We create a lighting plan tailored to your property and budget</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Installation</h3>
                <p className="text-gray-700 text-sm">Our team installs your lights with precision and care</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Enjoy & Maintain</h3>
                <p className="text-gray-700 text-sm">Sit back and enjoy while we handle maintenance and removal</p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-gray-700 mb-6">
              We proudly provide professional light installation services throughout Will County and surrounding areas:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• New Lenox, IL</li>
                <li>• Frankfort, IL</li>
                <li>• Mokena, IL</li>
                <li>• Manhattan, IL</li>
              </ul>
              <ul className="space-y-2">
                <li>• Joliet, IL</li>
                <li>• Orland Park, IL</li>
                <li>• Tinley Park, IL</li>
                <li>• Homer Glen, IL</li>
              </ul>
              <ul className="space-y-2">
                <li>• Lockport, IL</li>
                <li>• Romeoville, IL</li>
                <li>• And surrounding areas</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Light Up Your Property?</h2>
            <p className="text-xl mb-8 text-green-100">
              Contact us today for a free consultation and custom lighting design. Transform your home into a stunning showcase!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:7082742281" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg">
                Call (708) 274-2281
              </a>
              <a href="mailto:info@patwslawncare.com" className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition-colors shadow-lg">
                Email Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Request Your Free Lighting Consultation</h2>
            <p className="text-gray-700 text-center mb-8">
              Fill out the form below and we'll contact you to schedule a free consultation and provide a detailed quote.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LightInstallation;
