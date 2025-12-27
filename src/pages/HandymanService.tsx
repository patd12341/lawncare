import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';
import ContactForm from '../components/ContactForm';
import {
  Wrench,
  Hammer,
  PaintBucket,
  Drill,
  Home,
  Clock,
  CheckCircle,
  Star,
  Shield,
  Phone,
  ChevronRight
} from 'lucide-react';

const HandymanService = () => {
  useEffect(() => {
    trackPageView('/handyman');
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Hammer,
      title: 'General Repairs',
      description: 'Door repairs, drywall patching, cabinet fixes, and general household repairs',
      items: ['Door & window repairs', 'Drywall patching', 'Cabinet repairs', 'Fixture replacements']
    },
    {
      icon: PaintBucket,
      title: 'Painting',
      description: 'Interior and exterior painting for rooms, trim, doors, and accent walls',
      items: ['Interior painting', 'Exterior touch-ups', 'Trim & molding', 'Accent walls']
    },
    {
      icon: Drill,
      title: 'Installation Services',
      description: 'TV mounting, shelf installation, curtain rods, and fixture installations',
      items: ['TV mounting', 'Shelving installation', 'Curtain rods', 'Light fixtures']
    },
    {
      icon: Wrench,
      title: 'Assembly',
      description: 'Furniture assembly for all major retailers and custom pieces',
      items: ['Furniture assembly', 'Deck construction', 'Shed assembly', 'Outdoor furniture']
    },
    {
      icon: Home,
      title: 'Carpentry',
      description: 'Custom shelving, trim work, deck repairs, and woodworking projects',
      items: ['Custom shelving', 'Trim installation', 'Deck repairs', 'Door installation']
    },
    {
      icon: Shield,
      title: 'Home Maintenance',
      description: 'Seasonal maintenance, gutter cleaning, power washing, and preventive care',
      items: ['Gutter cleaning', 'Power washing', 'Weatherproofing', 'Seasonal inspections']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Handyman Services | New Lenox, IL | Pat's Home Services</title>
        <meta name="description" content="Professional handyman services in New Lenox, IL. General repairs, painting, installations, assembly & more. Same-day service available. Call (708) 274-2281." />
        <meta name="keywords" content="handyman New Lenox, home repairs Frankfort, handyman services Mokena, furniture assembly Will County, painting services Illinois" />
        <link rel="canonical" href="https://patwslawncare.com/handyman" />
        <meta property="og:title" content="Professional Handyman Services in New Lenox, IL" />
        <meta property="og:description" content="Expert handyman services for repairs, installations, painting & more. Serving New Lenox, Frankfort, and Mokena." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patwslawncare.com/handyman" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-orange-900/85"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-orange-500/20 border border-orange-400/30 rounded-full px-6 py-2 mb-6">
                <p className="text-orange-200 font-medium">Professional Handyman Services</p>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Handyman in New Lenox
              </h1>

              <p className="text-xl lg:text-2xl text-gray-200 mb-4 font-light">
                From small repairs to big projects, we handle it all with precision and care
              </p>

              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional handyman services for homeowners in New Lenox, Frankfort, Mokena, and surrounding areas. No job too small, no project too complex.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={scrollToForm}
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Estimate
                </button>
                <a
                  href="tel:7082742281"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  Call (708) 274-2281
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Same-Day Service Available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Services Grid */}
        <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Handyman Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever your home needs, we have the skills and experience to get the job done right
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Pat's Handyman Services?
              </h2>
              <p className="text-xl text-gray-600">
                Local, trusted, and committed to quality workmanship
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  Same-day and next-day appointments available. We work around your schedule.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for your peace of mind and protection.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Work</h3>
                <p className="text-gray-600">
                  Attention to detail and craftsmanship that exceeds expectations every time.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Experts</h3>
                <p className="text-gray-600">
                  Serving New Lenox and surrounding communities with pride since day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simple Process, Professional Results
              </h2>
              <p className="text-xl text-gray-600">
                Getting your home project done is easy
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Call or fill out our form with your project details
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Get Quote</h3>
                <p className="text-gray-600">
                  We'll provide a clear, upfront estimate for your project
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Schedule Work</h3>
                <p className="text-gray-600">
                  We'll find a convenient time that works for you
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Enjoy Results</h3>
                <p className="text-gray-600">
                  Sit back and enjoy your completed project
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-gray-900 to-orange-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Pat fixed several issues around our house - from drywall repairs to installing new light fixtures. Professional, efficient, and reasonably priced. Highly recommend!"
                </p>
                <p className="font-semibold">— Jennifer L., New Lenox</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Excellent service! Pat assembled all our new patio furniture and mounted our TV. He was on time, professional, and did quality work. Will definitely call again."
                </p>
                <p className="font-semibold">— Robert K., Frankfort</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">
                  "Had a long list of small projects that kept getting put off. Pat knocked them all out in one afternoon. Great attention to detail and fair pricing."
                </p>
                <p className="font-semibold">— Maria S., Mokena</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Will County & Surrounding Areas
              </h2>
              <p className="text-xl text-gray-600">
                Professional handyman services throughout the region
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {[
                'New Lenox', 'Frankfort', 'Mokena', 'Manhattan', 'Joliet',
                'Orland Park', 'Tinley Park', 'Homer Glen', 'Lockport', 'Romeoville'
              ].map((city) => (
                <div key={city} className="bg-orange-50 rounded-lg p-4 text-center border border-orange-100">
                  <h3 className="font-semibold text-gray-900">{city}</h3>
                  <p className="text-sm text-gray-600">Handyman Services</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate on your handyman project. No job too small!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7082742281"
                className="bg-white text-orange-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call (708) 274-2281
              </a>
              <button
                onClick={scrollToForm}
                className="bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg border-2 border-white inline-flex items-center justify-center"
              >
                Get Free Quote <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact" className="scroll-mt-28 py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Schema.org markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Pat's Handyman Services",
            "description": "Professional handyman services in New Lenox, IL. General repairs, installations, painting, and more.",
            "url": "https://patwslawncare.com/handyman",
            "telephone": "(708) 274-2281",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "621 N Cooper Rd",
              "addressLocality": "New Lenox",
              "addressRegion": "IL",
              "postalCode": "60451",
              "addressCountry": "US"
            },
            "areaServed": ["New Lenox", "Frankfort", "Mokena", "Manhattan", "Joliet"],
            "priceRange": "$$"
          })
        }}
      />
    </>
  );
};

export default HandymanService;
