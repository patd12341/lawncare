import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Star, Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { trackPageView } from './lib/analytics';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DataDeletion from './pages/DataDeletion';
import LightInstallation from './pages/LightInstallation';
import MowingService from './pages/services/MowingService';
import AerationService from './pages/services/AerationService';
import FertilizationService from './pages/services/FertilizationService';
import CleanupService from './pages/services/CleanupService';
import SnowRemovalService from './pages/services/SnowRemovalService';
import ContactForm from './components/ContactForm';
import TestimonialsSlider from './components/TestimonialsSlider';

// Import all images using Vite's asset handling
import mowAndTrim from './assets/mow-and-trim.png';
import aerationService from './assets/aeration-service.png';
import fertilizationService from './assets/fertilization-service.png';
import seasonalCleanup from './assets/seasonal-cleanup.png';
import snowRemoval from './assets/snow-removal.avif';
import aboutUsImage from './assets/about-us.png';
import heroBackground from './assets/hero-background.png';
import logo from './assets/patws-logo.png';

function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Pat's Lawn Care</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="pt-32 pb-24 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-600">We'll get back to you shortly with your free quote.</p>
        <Link to="/" className="mt-8 inline-block text-green-600 hover:text-green-700">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolledToForm, setHasScrolledToForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const formEl = document.getElementById('contact');
      if (!formEl) return;

      const rect = formEl.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isVisible) setHasScrolledToForm(false);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Services with proper Vite asset imports
  const services = [
    {
      title: 'Mow & Trim',
      description: 'Regular maintenance to keep your lawn looking pristine',
      image: mowAndTrim,
      fallbackImage: 'https://plus.unsplash.com/premium_photo-1661347864217-c6b83199b603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3biUyMGNhcmV8ZW58MHx8MHx8fDA%3D',
      link: '/services/mowing',
      alt: 'Professional lawn mowing service in New Lenox - freshly cut grass'
    },
    {
      title: 'Aeration',
      description: 'Promote healthy root growth and reduce soil compaction',
      image: aerationService,
      fallbackImage: 'https://images.unsplash.com/photo-1630311853242-edd0c07766c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhd24lMjBjYXJlfGVufDB8fDB8fHww',
      link: '/services/aeration',
      alt: 'Lawn aeration service in New Lenox - core aeration for healthy grass growth'
    },
    {
      title: 'Snow Removal',
      description: 'Reliable snow plowing and removal services',
      image: snowRemoval,
      fallbackImage: 'https://images.unsplash.com/photo-1478265409131-1f65c88f965c?w=500&auto=format&fit=crop&q=60',
      link: '/services/snow-removal',
      alt: 'Professional snow removal and plowing service in New Lenox'
    },
    {
      title: 'Landscaping Design',
      description: 'Custom landscape design and installation services',
      image: '/image.png',
      fallbackImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBpbmd8ZW58MHx8MHx8fDA%3D',
      link: '/landscaping.html',
      alt: 'Professional landscaping design and installation in New Lenox - custom outdoor spaces'
    }
  ];

  const HomePage = () => (
    <>
      <Helmet>
        <title>Lawn Care in New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Professional lawn care services in New Lenox, IL. Mowing, fertilization, aeration & more. Serving Frankfort, Mokena, Manhattan. Free estimates. Call (708) 274-2281." />
        <link rel="canonical" href="https://patwslawncare.com" />
        <meta name="keywords" content="lawn care New Lenox, lawn mowing Frankfort, fertilization Mokena, aeration service Will County, professional landscaping Illinois" />
        <meta property="og:title" content="Professional Lawn Care Services in New Lenox, IL | Pat's Lawn Care" />
        <meta property="og:description" content="Expert lawn mowing, fertilization, and aeration services in New Lenox, Frankfort, and Mokena. Get your free estimate today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwslawncare.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="New Lenox, Illinois" />
        <meta name="geo.position" content="41.5117;-87.9673" />
        <meta name="ICBM" content="41.5117, -87.9673" />
      </Helmet>
      
      <div className="relative bg-green-800 pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={heroBackground}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            }}
            alt="Beautiful home with professionally maintained lawn in New Lenox - Pat's Lawn Care services"
            width="2000"
            height="1200"
          />
          <div className="absolute inset-0 bg-green-800 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Lawn Care & Landscaping Services in New Lenox, IL
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Expert lawn care, landscaping design, and property maintenance services serving New Lenox, Frankfort, Mokena, Manhattan, and Joliet. 
            Professional, reliable lawn care and custom landscaping that keeps your property looking pristine all year round.
          </p>
          <div className="mt-10">
            <button
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el && !hasScrolledToForm) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  setHasScrolledToForm(true);
                }
              }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get a Free Quote <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Professional Lawn Care & Landscaping Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive lawn care and landscaping services tailored to your needs
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="h-48 w-full object-cover"
                  src={service.image}
                  onError={(e) => {
                    e.currentTarget.src = service.fallbackImage;
                  }}
                  alt={service.alt}
                  loading={index > 2 ? "lazy" : "eager"}
                  width="800"
                  height="600"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600 mb-4">{service.description}</p>
                  {service.link.startsWith('#') ? (
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Learn More <ChevronRight className="ml-1" size={16} />
                    </a>
                  ) : (
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Learn More <ChevronRight className="ml-1" size={16} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Serving Will County & Surrounding Areas
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Professional lawn care services throughout the region
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              'New Lenox', 'Frankfort', 'Mokena', 'Manhattan', 'Joliet',
              'Orland Park', 'Tinley Park', 'Homer Glen', 'Lockport', 'Romeoville'
            ].map((city) => (
              <div key={city} className="bg-green-50 rounded-lg p-4 text-center">
                <h3 className="font-semibold text-gray-900">{city}</h3>
                <p className="text-sm text-gray-600">Lawn Care Services</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Pat's Lawn Care & Landscaping?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Local expertise in lawn care and landscaping, professional results, and exceptional service
            </p>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-600 text-white">
                  <Clock size={32} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Reliable & Punctual</h3>
              <p className="mt-4 text-gray-600">
                Consistent service you can count on. We show up when scheduled and complete every job to perfection.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-600 text-white">
                  <MapPin size={32} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Local Expertise</h3>
              <p className="mt-4 text-gray-600">
                As New Lenox residents, we understand local soil conditions, weather patterns, grass types, and the best plants for our climate.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-600 text-white">
                  <Star size={32} />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Quality Guaranteed</h3>
              <p className="mt-4 text-gray-600">
                Professional equipment, experienced team, and attention to detail ensure exceptional lawn care and landscaping results every time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}

      {/* Testimonials Section */}
      <div id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <TestimonialsSlider />
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact" className="scroll-mt-28 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>

      {/* Local SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pat's Lawn Care",
            "description": "Professional lawn care services in New Lenox, IL. Mowing, fertilization, aeration and more.",
            "url": "https://patwslawncare.com",
            "telephone": "(708) 274-2281",
            "email": "info@patslawncare.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "621 N Cooper Rd",
              "addressLocality": "New Lenox",
              "addressRegion": "IL",
              "postalCode": "60451",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.5117",
              "longitude": "-87.9673"
            },
            "areaServed": ["New Lenox", "Frankfort", "Mokena", "Manhattan", "Joliet", "Orland Park", "Tinley Park", "Homer Glen", "Lockport", "Romeoville"],
            "serviceType": ["Lawn Mowing", "Fertilization", "Aeration", "Seasonal Cleanup", "Landscaping Design", "Landscape Installation"]
          })
        }}
      />
    </>
  );

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-green-800 text-white fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img 
                    src={logo}
                    onError={(e) => {
                      e.currentTarget.src = "/Patws landscaping.png";
                    }}
                    alt="Pat's Lawn Care - Professional Lawn Care Services in New Lenox, IL" 
                    className="h-10 w-auto" 
                  />
                </Link>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-4">
                <div className="flex items-baseline space-x-4">
                  <a href="/#services" className="hover:bg-green-700 px-3 py-2 rounded-md">Services</a>
                  <a href="/#testimonials" className="hover:bg-green-700 px-3 py-2 rounded-md">Reviews</a>
                  <a href="/#contact" className="hover:bg-green-700 px-3 py-2 rounded-md">Contact</a>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700 focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/#services" className="block hover:bg-green-700 px-3 py-2 rounded-md">Services</a>
                <a href="/#testimonials" className="block hover:bg-green-700 px-3 py-2 rounded-md">Reviews</a>
                <a href="/#contact" className="block hover:bg-green-700 px-3 py-2 rounded-md">Contact</a>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/light-installation" element={<LightInstallation />} />
          <Route path="/services/mowing" element={<MowingService />} />
          <Route path="/services/aeration" element={<AerationService />} />
          <Route path="/services/fertilization" element={<FertilizationService />} />
          <Route path="/services/cleanup" element={<CleanupService />} />
          <Route path="/services/snow-removal" element={<SnowRemovalService />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        {/* Footer with Enhanced NAP and Map - Hide on lighting page */}
        {location.pathname !== '/light-installation' && (
        <footer className="bg-green-800 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <img 
                  src={logo}
                  onError={(e) => {
                    e.currentTarget.src = "/Patws landscaping.png";
                  }}
                  alt="Pat's Lawn Care Logo" 
                  className="h-16 w-auto mb-4" 
                />
                <p className="text-green-200">
                  Professional lawn care services in Will County and surrounding areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <div className="space-y-2">
                  <Link to="/services/mowing" className="block text-green-200 hover:text-white transition-colors">
                    Lawn Mowing
                  </Link>
                  <Link to="/services/aeration" className="block text-green-200 hover:text-white transition-colors">
                    Aeration
                  </Link>
                  <Link to="/services/fertilization" className="block text-green-200 hover:text-white transition-colors">
                    Fertilization
                  </Link>
                  <Link to="/services/cleanup" className="block text-green-200 hover:text-white transition-colors">
                    Seasonal Cleanup
                  </Link>
                  <a href="/landscaping.html" className="block text-green-200 hover:text-white transition-colors">
                    Landscaping Design
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone size={20} className="mr-2" /> 
                    <a href="tel:7082742281" className="hover:text-green-200">(708) 274-2281</a>
                  </p>
                  <p className="flex items-center">
                    <Mail size={20} className="mr-2" /> 
                    <a href="mailto:info@patwslawncare.com" className="hover:text-green-200">info@patwslawncare.com</a>
                  </p>
                  <p className="flex items-center">
                    <MapPin size={20} className="mr-2" /> 621 N Cooper Rd, New Lenox, IL 60451
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Clock size={20} className="mr-2" /> Mon-Fri: 7am - 5pm
                  </p>
                  <p className="ml-6">Sat: 7am - 5pm</p>
                  <p className="ml-6">Sun: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Google Map Embed */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Find Us</h3>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.8!2d-87.9673!3d41.5117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e39c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2s621%20N%20Cooper%20Rd%2C%20New%20Lenox%2C%20IL%2060451!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pat's Lawn Care Location - 621 N Cooper Rd, New Lenox, IL 60451"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-green-700 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left text-green-200 mb-4 md:mb-0">
                <p>&copy; 2025 Pat's Lawn Care. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                <a href="/sitemap.html" className="text-green-200 hover:text-white transition-colors">
                  Site Map
                </a>
              </div>
            </div>
          </div>
        </footer>
        )}

        {/* Sticky Mobile CTA - Hide on lighting page */}
        {location.pathname !== '/light-installation' && (
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-green-600 p-4 text-white text-center z-40">
          <a 
            href="tel:7082742281" 
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors text-lg"
          >
            Call Now: (708) 274-2281
          </a>
        </div>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;