import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { trackPageView } from '../lib/analytics';
import GoveeContactForm from '../components/GoveeContactForm';
import LightingHeader from '../components/LightingHeader';
import LightingFooter from '../components/LightingFooter';
import { Smartphone, Zap, Cloud, DollarSign, Shield, CheckCircle, Star } from 'lucide-react';
import lightsImage from '../assets/Lights.webp';
import lights1Image from '../assets/lights1.webp';
import lights2Image from '../assets/lights2.jfif';

const LightInstallation = () => {
  useEffect(() => {
    trackPageView('/light-installation');
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Govee Permanent Outdoor Lighting Installation | New Lenox, IL</title>
        <meta name="description" content="Professional Govee permanent outdoor lighting installation in New Lenox, Frankfort, Mokena. App-controlled RGBIC lighting for rooflines, patios & more. Call (708) 274-2281." />
        <meta name="keywords" content="Govee installation New Lenox, permanent outdoor lights, RGBIC lighting Frankfort, app-controlled lights Mokena" />
        <link rel="canonical" href="https://patwslawncare.com/light-installation" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <LightingHeader />

      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{ backgroundImage: `url(${lightsImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/90 to-purple-900/80"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-2 mb-6">
                <p className="text-blue-200 font-medium">Professional Govee Installer</p>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Permanent Govee Outdoor Lighting Installation
              </h1>

              <p className="text-2xl lg:text-3xl text-blue-100 mb-4 font-light">
                Illuminate Your Home Year-Round With Smart, App-Controlled LED Lighting
              </p>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We professionally install Govee RGBIC permanent outdoor lighting for rooflines, patios, garages, and landscape features — fully customizable and built to last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={scrollToForm}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Govee Installation Quote
                </button>
                <a
                  href="tel:7082742281"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Call (708) 274-2281
                </a>
              </div>

              <p className="text-sm text-blue-200">
                Serving New Lenox, Mokena, Frankfort, Joliet, and surrounding areas • Fully insured • Fast installation • 100% satisfaction
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Featured Images Section */}
        <div id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-3 gap-4 p-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={lightsImage}
                  alt="Govee permanent outdoor lighting installation"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={lights1Image}
                  alt="Govee RGBIC permanent lights on home"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={lights2Image}
                  alt="Professional Govee lighting installation"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="bg-blue-600 text-white text-center py-4 px-4">
              <button onClick={scrollToForm} className="font-semibold hover:underline text-lg">
                Transform Your Home Like This → Get Your Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Why Govee Section */}
          <div id="why-govee" className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              Why Choose Govee Permanent Outdoor Lighting?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Govee isn't just another lighting system. It's the smart, modern solution that replaces traditional holiday lights forever.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="bg-blue-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">App-Controlled</h3>
                <p className="text-gray-700">
                  Control scenes, animations, and scheduling right from your phone. Change colors for any holiday or occasion instantly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="bg-purple-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weatherproof</h3>
                <p className="text-gray-700">
                  Built for year-round outdoor use. Rain, snow, heat, or cold — your lights keep shining beautifully.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="bg-green-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">RGBIC Technology</h3>
                <p className="text-gray-700">
                  Independent color zones create stunning multi-color effects. Display gradients, waves, and custom patterns.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                <div className="bg-orange-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Install Once</h3>
                <p className="text-gray-700">
                  Set it and forget it. No more climbing ladders or taking lights down in the cold — your lighting is permanent and app-controlled.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-20 border border-green-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Typical Govee Installation Pricing
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Final cost depends on roofline length, cable routing, and controller placement.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-green-500 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Small Homes</h3>
                <p className="text-4xl font-bold text-green-600 mb-4">$150 - $250</p>
                <p className="text-gray-600 mb-4">Perfect for smaller rooflines or single sections</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Up to 50ft roofline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>App setup included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-xl p-8 border-2 border-green-600 transform scale-105 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Medium Homes</h3>
                <p className="text-4xl font-bold text-white mb-4">$250 - $350</p>
                <p className="text-green-50 mb-4">Ideal for most single-family homes</p>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>50-100ft roofline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>App setup + training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom scene programming</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-green-500 transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Large Homes</h3>
                <p className="text-4xl font-bold text-green-600 mb-4">$350 - $450</p>
                <p className="text-gray-600 mb-4">For larger properties or multi-zone installs</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>100ft+ roofline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multiple zones/sections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Premium installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced scene setup</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={scrollToForm}
                className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg"
              >
                Get Your Custom Quote
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Why Govee Beats Traditional Lighting
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10">
              See why homeowners are switching to permanent smart lighting
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Govee Permanent</th>
                    <th className="px-6 py-4 text-center text-lg font-bold">Traditional Christmas Lights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Year-round use</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400 font-semibold">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">App control</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400 font-semibold">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Color zones (RGBIC)</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400 font-semibold">Single color</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Maintenance needed</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Minimal</td>
                    <td className="px-6 py-4 text-center text-gray-400 font-semibold">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Annual setup/removal</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Never</td>
                    <td className="px-6 py-4 text-center text-gray-400 font-semibold">Every year</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Cost over 5 years</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">$150-$450 (one time)</td>
                    <td className="px-6 py-4 text-center text-gray-400 font-semibold">$1,500-$3,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 mb-20 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Pat did an amazing job installing our permanent Govee lights. Clean, fast, and everything works perfectly! Love being able to change colors for any holiday."
                </p>
                <p className="font-semibold">— Sarah M., New Lenox</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Best investment we made for our home! No more climbing ladders every year. The app control is so easy to use. Highly recommend!"
                </p>
                <p className="font-semibold">— Mike & Jennifer R., Frankfort</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              How Govee Installation Works
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Simple, fast, professional installation from start to finish
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Send Us Photos</h3>
                <p className="text-gray-600">
                  Text or email photos of your home. We'll assess what you need.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Digital Measurement</h3>
                <p className="text-gray-600">
                  We measure your roofline digitally and provide an exact quote.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Professional Install</h3>
                <p className="text-gray-600">
                  We install your Govee lights with clean cable routing and secure mounting.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">App Setup</h3>
                <p className="text-gray-600">
                  We configure your app and program custom scenes for you to enjoy.
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
                  Do you supply the lights?
                </h3>
                <p className="text-gray-700">
                  We can install lights you already own, or help you choose and purchase the right Govee system for your home. We'll guide you through the options.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  How long does installation take?
                </h3>
                <p className="text-gray-700">
                  Most installations take 2-4 hours depending on home size. We'll complete everything in a single visit, including app setup and testing.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Can I use them year-round?
                </h3>
                <p className="text-gray-700">
                  Absolutely! Govee permanent outdoor lights are built for year-round use. Change colors for Christmas, Halloween, 4th of July, or any occasion — all from your phone.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Are they waterproof?
                </h3>
                <p className="text-gray-700">
                  Yes! Govee outdoor lights are IP65 rated waterproof and designed to withstand rain, snow, and extreme temperatures. They're built to last.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Before Form */}
          <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-2xl p-12 text-center mb-16">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              Professional Govee Installer You Can Trust
            </h2>
            <p className="text-xl mb-2 text-blue-100">
              Fully Insured • Fast Installation • 100% Satisfaction Guaranteed
            </p>
            <p className="text-lg mb-8 text-blue-100">
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
                className="bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all shadow-lg border-2 border-white"
              >
                Get Free Quote Below
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div id="quote"></div>
          <div id="contact" className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border-t-4 border-green-600">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Get Your Free Govee Installation Quote
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10">
              Fill out the form below and we'll contact you within 24 hours with a custom quote for your home.
            </p>
            <GoveeContactForm />
          </div>
        </div>
      </div>

      <LightingFooter />
    </>
  );
};

export default LightInstallation;
