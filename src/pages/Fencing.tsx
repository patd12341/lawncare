import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';
import ContactForm from '../components/ContactForm';
import { Shield, Ruler, Clock, CheckCircle, Star, Home, Lock, Trees } from 'lucide-react';

const Fencing = () => {
  useEffect(() => {
    trackPageView('/fencing');
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fenceTypes = [
    {
      title: 'Wood Fencing',
      description: 'Classic cedar or pine fencing for privacy and beauty',
      features: ['Natural appearance', 'Customizable height', 'Privacy options', 'Cost-effective']
    },
    {
      title: 'Vinyl Fencing',
      description: 'Low-maintenance, durable vinyl in various styles',
      features: ['No painting needed', 'Weather resistant', 'Easy to clean', 'Long-lasting']
    },
    {
      title: 'Chain Link',
      description: 'Affordable, durable fencing for security',
      features: ['Budget-friendly', 'Low maintenance', 'Various heights', 'Pet-friendly']
    },
    {
      title: 'Ornamental Iron',
      description: 'Elegant decorative fencing for curb appeal',
      features: ['Premium look', 'Very durable', 'Security focused', 'Custom designs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Fence Installation | New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Expert fence installation in New Lenox, Frankfort, Mokena. Wood, vinyl, chain link & ornamental iron fencing. Free estimates. Call (708) 274-2281." />
        <meta name="keywords" content="fence installation New Lenox, vinyl fencing Frankfort, wood fence Mokena, chain link fence Will County" />
        <link rel="canonical" href="https://patwslawncare.com/fencing" />
      </Helmet>

      <div className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/90 to-green-700/90"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-green-600/30 border border-green-400/30 rounded-full px-6 py-2 mb-6">
                <p className="text-green-100 font-medium">Professional Fence Installation</p>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Quality Fence Installation in New Lenox
              </h1>

              <p className="text-2xl lg:text-3xl text-green-100 mb-4 font-light">
                Enhance Your Property with Professional Fencing Solutions
              </p>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We install wood, vinyl, chain link, and ornamental iron fencing for residential and commercial properties throughout Will County.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={scrollToForm}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Fence Estimate
                </button>
                <a
                  href="tel:7082742281"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Call (708) 274-2281
                </a>
              </div>

              <p className="text-sm text-green-200">
                Serving New Lenox, Mokena, Frankfort, Joliet, and surrounding areas • Fully insured • Professional installation
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Why Choose Our Fencing Section */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              Why Choose Pat's Lawn Care for Fencing?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Professional installation, quality materials, and exceptional service
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="bg-green-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-700">
                  Licensed and insured for your peace of mind. Professional installation with warranty protection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="bg-blue-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Ruler className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-700">
                  Tailored fencing solutions to match your property's needs, style, and budget requirements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <div className="bg-orange-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Installation</h3>
                <p className="text-gray-700">
                  Efficient installation process that respects your time. Most projects completed in 1-3 days.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="bg-purple-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Materials</h3>
                <p className="text-gray-700">
                  Premium materials from trusted suppliers. Built to last through all weather conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Fence Types Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Fence Types We Install
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Choose from a variety of fencing options to suit your needs
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {fenceTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-green-500 transition-all">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-20 border border-green-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Professional Fence Installation
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy & Security</h3>
                <p className="text-gray-700">
                  Keep your property secure and private with professionally installed fencing.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Property Value</h3>
                <p className="text-gray-700">
                  Increase your home's curb appeal and market value with quality fencing.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Define Boundaries</h3>
                <p className="text-gray-700">
                  Clearly mark property lines and create distinct outdoor spaces.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={scrollToForm}
                className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
              >
                Request Your Free Estimate
              </button>
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Fence Installation Process
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Simple, straightforward process from consultation to completion
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600">
                  Contact us to discuss your fencing needs and receive a free estimate.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Site Assessment</h3>
                <p className="text-gray-600">
                  We measure your property and identify any potential challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Professional Install</h3>
                <p className="text-gray-600">
                  Our experienced team installs your fence with precision and care.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Final Inspection</h3>
                <p className="text-gray-600">
                  We ensure everything is perfect and clean up all materials.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Do I need a permit for fence installation?
                </h3>
                <p className="text-gray-700">
                  In many areas, yes. We'll help you understand local requirements and can assist with the permit process for your New Lenox area property.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How long does installation take?
                </h3>
                <p className="text-gray-700">
                  Most residential fence installations are completed in 1-3 days, depending on the size and complexity of your project.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  What's the best fence for privacy?
                </h3>
                <p className="text-gray-700">
                  Wood and vinyl privacy fences are excellent choices. They typically stand 6-8 feet tall with no gaps between boards for complete privacy.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Do you offer warranties?
                </h3>
                <p className="text-gray-700">
                  Yes! We stand behind our work with installation warranties, and many materials come with manufacturer warranties as well.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 mb-20 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Pat installed a beautiful vinyl fence around our backyard. Professional work, fair pricing, and completed on time. Highly recommend!"
                </p>
                <p className="font-semibold">— Tom & Lisa K., New Lenox</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Excellent service from start to finish. The fence looks great and has really improved our property. Worth every penny!"
                </p>
                <p className="font-semibold">— Michael D., Frankfort</p>
              </div>
            </div>
          </div>

          {/* Final CTA Before Form */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-12 text-center mb-16">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Enhance Your Property with a New Fence?
            </h2>
            <p className="text-xl mb-2 text-green-100">
              Fully Insured • Professional Installation • Free Estimates
            </p>
            <p className="text-lg mb-8 text-green-100">
              Serving New Lenox, Frankfort, Mokena, Joliet, Orland Park, Tinley Park, Homer Glen, Lockport, Romeoville & surrounding Will County areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7082742281"
                className="bg-white text-green-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block"
              >
                Call Now: (708) 274-2281
              </a>
              <button
                onClick={scrollToForm}
                className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg border-2 border-white"
              >
                Get Free Estimate Below
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border-t-4 border-green-600">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Get Your Free Fence Installation Estimate
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10">
              Fill out the form below and we'll contact you within 24 hours with a custom quote for your fencing project.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-200 mb-4">Professional Fence Installation Services</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a href="tel:7082742281" className="text-white hover:text-green-200">
                (708) 274-2281
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:info@patwslawncare.com" className="text-white hover:text-green-200">
                info@patwslawncare.com
              </a>
            </div>
            <div className="border-t border-green-700 pt-6">
              <Link to="/" className="text-green-200 hover:text-white">
                ← Back to Home
              </Link>
              <p className="mt-4 text-green-200">&copy; 2025 Pat's Lawn Care. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fencing;
