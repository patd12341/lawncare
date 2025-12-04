import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';
import fertilizationService from '../../assets/fertilization-service.png';

const FertilizationService = () => {
  useEffect(() => {
    trackPageView('/services/fertilization');
  }, []);

  return (
    <>
      <Helmet>
        <title>Lawn Fertilization Service in New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Custom lawn fertilization programs in New Lenox, Frankfort, Mokena. 4-step seasonal treatments for lush, green grass. Organic & traditional options available." />
        <meta name="keywords" content="lawn fertilization New Lenox, fertilizer service Frankfort, lawn feeding Mokena, grass nutrition program" />
        <link rel="canonical" href="https://patwslawncare.com/services/fertilization" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Lawn Fertilization Service in New Lenox, IL</h1>
          
          <img 
            src={fertilizationService}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1734303023518-71e656574f50?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhd24lMjBjYXJlfGVufDB8fDB8fHww";
            }}
            alt="Professional lawn fertilization service in New Lenox - applying fertilizer for lush green grass"
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            width="800"
            height="300"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Achieve the lush, green lawn you've always wanted with Pat's Lawn Care's custom fertilization programs. 
              Our expert team creates tailored nutrition plans specifically designed for New Lenox's soil conditions 
              and Illinois's unique growing seasons, ensuring your grass receives exactly what it needs to thrive.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our 4-Step Fertilization Program</h2>
            <p className="text-gray-700 mb-6">
              We've developed a comprehensive seasonal approach that provides your lawn with the right nutrients at the right time:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Early Spring (March-April)</h3>
                <p className="text-gray-700"><strong>Pre-emergent + Early Feeding:</strong> Prevents crabgrass while providing essential nutrients for spring green-up. Includes slow-release nitrogen for steady growth.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Late Spring (May-June)</h3>
                <p className="text-gray-700"><strong>Growth Enhancement:</strong> High-nitrogen formula promotes thick, healthy growth during peak growing season. Includes potassium for stress resistance.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Summer (July-August)</h3>
                <p className="text-gray-700"><strong>Stress Protection:</strong> Balanced nutrition with iron for color retention and drought tolerance. Slow-release formula prevents burning during hot weather.</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Fall (September-October)</h3>
                <p className="text-gray-700"><strong>Root Strengthening:</strong> High-potassium winterizer builds strong root systems and improves cold tolerance for better spring recovery.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Professional Fertilization Matters</h2>
            <p className="text-gray-700 mb-4">
              Many homeowners struggle with store-bought fertilizers that don't address their lawn's specific needs. 
              Our professional approach includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Soil Testing:</strong> We analyze your soil's pH and nutrient levels</li>
              <li><strong>Custom Blends:</strong> Fertilizers tailored to your grass type and soil conditions</li>
              <li><strong>Proper Timing:</strong> Applications scheduled for maximum effectiveness</li>
              <li><strong>Professional Equipment:</strong> Even distribution prevents burning and ensures coverage</li>
              <li><strong>Weather Monitoring:</strong> Applications timed with weather conditions for best results</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready for a Greener, Healthier Lawn?</h2>
              <p className="text-gray-700 mb-4">Start your custom fertilization program today. We'll assess your lawn and create a nutrition plan that delivers the results you want.</p>
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

export default FertilizationService;