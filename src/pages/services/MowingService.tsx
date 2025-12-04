import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';
import mowAndTrim from '../../assets/mow-and-trim.png';

const MowingService = () => {
  useEffect(() => {
    trackPageView('/services/mowing');
  }, []);

  return (
    <>
      <Helmet>
        <title>Lawn Mowing Service in New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Professional lawn mowing and trimming services in New Lenox, Frankfort, Mokena. Weekly, bi-weekly schedules available. Free estimates. Call (708) 274-2281." />
        <meta name="keywords" content="lawn mowing New Lenox, grass cutting Frankfort, lawn maintenance Mokena, weekly mowing service" />
        <link rel="canonical" href="https://patwslawncare.com/services/mowing" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Lawn Mowing Service in New Lenox, IL</h1>
          
          <img 
            src={mowAndTrim}
            onError={(e) => {
              e.currentTarget.src = "https://plus.unsplash.com/premium_photo-1661347864217-c6b83199b603?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3biUyMGNhcmV8ZW58MHx8MHx8fDA%3D";
            }}
            alt="Professional lawn mowing service in New Lenox - freshly cut grass with clean edges"
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            width="800"
            height="300"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Keep your New Lenox property looking its absolute best with Pat's Lawn Care's professional mowing and trimming services. 
              We provide reliable, consistent lawn maintenance that transforms your yard into the neighborhood's crown jewel.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mowing Services Include</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Precision Cutting:</strong> Professional-grade equipment ensures even, healthy cuts every time</li>
              <li><strong>Edge Trimming:</strong> Clean, crisp edges around walkways, driveways, and flower beds</li>
              <li><strong>Grass Clipping Management:</strong> Proper disposal or mulching based on your preference</li>
              <li><strong>Pattern Variation:</strong> Different cutting patterns to promote healthy grass growth</li>
              <li><strong>Height Adjustment:</strong> Seasonal height modifications for optimal lawn health</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Areas We Cover</h2>
            <p className="text-gray-700 mb-6">
              We proudly serve homeowners throughout Will County, including New Lenox, Frankfort, Mokena, Manhattan, and Joliet. 
              Our local expertise means we understand the unique challenges of maintaining beautiful lawns in our Illinois climate.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Scheduling Options</h2>
            <p className="text-gray-700 mb-4">
              Choose the mowing schedule that works best for your lawn and budget:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Weekly Service:</strong> Ideal for maintaining pristine appearance during growing season</li>
              <li><strong>Bi-weekly Service:</strong> Perfect balance of maintenance and value</li>
              <li><strong>Custom Schedules:</strong> Tailored timing based on grass growth and weather conditions</li>
              <li><strong>One-time Service:</strong> Available for special occasions or catch-up maintenance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Pat's Lawn Care for Mowing?</h2>
            <p className="text-gray-700 mb-4">
              With over 3 years serving the New Lenox community, we've built our reputation on reliability, quality, and customer satisfaction. 
              Our team uses commercial-grade equipment and follows best practices to ensure your lawn receives the care it deserves.
            </p>
            
            <p className="text-gray-700 mb-6">
              We're fully insured, locally owned, and committed to treating your property with the same care we'd give our own. 
              Every mowing service includes a thorough inspection to identify potential issues before they become problems.
            </p>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready for a Beautiful, Well-Maintained Lawn?</h2>
              <p className="text-gray-700 mb-4">Get your free mowing service estimate today. We'll assess your property and provide a customized quote that fits your needs and budget.</p>
              <Link to="/#contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
                Get Free Estimate
              </Link>
              <p className="mt-4 text-sm text-gray-600">Or call us directly at <strong>(708) 274-2281</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MowingService;