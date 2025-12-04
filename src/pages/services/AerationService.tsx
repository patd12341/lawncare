import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';
import aerationService from '../../assets/aeration-service.png';

const AerationService = () => {
  useEffect(() => {
    trackPageView('/services/aeration');
  }, []);

  return (
    <>
      <Helmet>
        <title>Lawn Aeration Service in New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Professional core aeration services in New Lenox, Frankfort, Mokena. Improve soil compaction, root growth, water absorption. Fall & spring aeration available." />
        <meta name="keywords" content="lawn aeration New Lenox, core aeration Frankfort, soil compaction Mokena, fall aeration service" />
        <link rel="canonical" href="https://patwslawncare.com/services/aeration" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Lawn Aeration Service in New Lenox, IL</h1>
          
          <img 
            src={aerationService}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1630311853242-edd0c07766c0?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhd24lMjBjYXJlfGVufDB8fDB8fHww";
            }}
            alt="Professional lawn aeration service in New Lenox - core aeration equipment creating holes for better root growth"
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            width="800"
            height="300"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Transform your New Lenox lawn from struggling to thriving with Pat's Lawn Care's professional core aeration services. 
              Our expert aeration process relieves soil compaction, improves water and nutrient absorption, and promotes deeper, 
              healthier root systems for a more resilient lawn.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Best Aeration Times in Illinois</h2>
              <p className="text-gray-700"><strong>Fall (September-October):</strong> Ideal for cool-season grasses<br />
              <strong>Early Spring (March-April):</strong> Alternative timing for recovery before summer stress</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Is Core Aeration?</h2>
            <p className="text-gray-700 mb-6">
              Core aeration involves removing small plugs of soil and thatch from your lawn, creating channels that allow air, 
              water, and nutrients to penetrate deep into the root zone. This process is essential for maintaining healthy 
              grass in Illinois's clay-heavy soils common throughout Will County.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Signs Your New Lenox Lawn Needs Aeration</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Compacted Soil:</strong> Difficulty inserting a screwdriver into the ground</li>
              <li><strong>Water Runoff:</strong> Water pools on the surface instead of absorbing</li>
              <li><strong>Thin Grass:</strong> Sparse or struggling grass growth despite proper care</li>
              <li><strong>Heavy Thatch:</strong> More than ½ inch of thatch buildup</li>
              <li><strong>High Traffic Areas:</strong> Worn paths from foot traffic or play areas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Professional Aeration</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Improved Root Development:</strong> Deeper, stronger root systems</li>
              <li><strong>Better Water Absorption:</strong> Reduces runoff and improves drought tolerance</li>
              <li><strong>Enhanced Nutrient Uptake:</strong> Fertilizers reach the root zone more effectively</li>
              <li><strong>Reduced Soil Compaction:</strong> Relieves pressure from foot traffic and equipment</li>
              <li><strong>Thatch Reduction:</strong> Helps break down excessive thatch buildup</li>
              <li><strong>Improved Air Circulation:</strong> Promotes beneficial soil microorganisms</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Revitalize Your Lawn?</h2>
              <p className="text-gray-700 mb-4">Schedule your professional aeration service today. We'll assess your lawn's condition and recommend the optimal timing for maximum results.</p>
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

export default AerationService;