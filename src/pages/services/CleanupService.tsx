import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';
import seasonalCleanup from '../../assets/seasonal-cleanup.png';

const CleanupService = () => {
  useEffect(() => {
    trackPageView('/services/cleanup');
  }, []);

  return (
    <>
      <Helmet>
        <title>Seasonal Yard Cleanup Service in New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Professional spring & fall cleanup services in New Lenox, Frankfort, Mokena. Leaf removal, debris cleanup, garden bed maintenance. Prepare your yard for every season." />
        <meta name="keywords" content="yard cleanup New Lenox, leaf removal Frankfort, spring cleanup Mokena, fall cleanup service" />
        <link rel="canonical" href="https://patwslawncare.com/services/cleanup" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Seasonal Cleanup Service in New Lenox, IL</h1>
          
          <img 
            src={seasonalCleanup}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhZiUyMHJha2luZ3xlbnwwfHwwfHx8MA%3D%3D";
            }}
            alt="Professional seasonal yard cleanup service in New Lenox - leaf removal and property maintenance"
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            width="800"
            height="300"
          />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Keep your New Lenox property looking pristine year-round with Pat's Lawn Care's comprehensive seasonal cleanup services. 
              Our thorough approach ensures your yard transitions beautifully between seasons while maintaining the health and 
              appearance of your landscape investment.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spring Cleanup Services</h2>
              <p className="text-gray-700 mb-4">
                Prepare your property for the growing season with our comprehensive spring cleanup that gets your yard ready for summer enjoyment:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Winter Debris Removal:</strong> Clear branches, leaves, and storm damage</li>
                <li><strong>Lawn Dethatching:</strong> Remove dead grass and organic buildup</li>
                <li><strong>Garden Bed Cleanup:</strong> Remove old mulch, prune perennials, weed removal</li>
                <li><strong>Gutter Cleaning:</strong> Clear debris from gutters and downspouts</li>
                <li><strong>Walkway Clearing:</strong> Power wash and clear all hardscapes</li>
                <li><strong>Tree and Shrub Care:</strong> Light pruning and shaping</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fall Cleanup Services</h2>
              <p className="text-gray-700 mb-4">
                Protect your landscape investment and prepare for winter with our thorough fall cleanup services:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Leaf Removal:</strong> Complete removal from lawn, beds, and gutters</li>
                <li><strong>Final Mowing:</strong> Last cut of the season at proper height</li>
                <li><strong>Garden Bed Preparation:</strong> Cut back perennials, mulch application</li>
                <li><strong>Winterization:</strong> Protect sensitive plants and irrigation systems</li>
                <li><strong>Debris Disposal:</strong> Proper disposal of all organic waste</li>
                <li><strong>Property Inspection:</strong> Identify potential winter damage risks</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Professional Cleanup Matters</h2>
            <p className="text-gray-700 mb-4">
              Seasonal cleanups are more than just aesthetic improvements—they're essential for maintaining your property's health:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Disease Prevention:</strong> Removes fungal spores and pest habitats</li>
              <li><strong>Lawn Health:</strong> Prevents suffocation from leaf buildup</li>
              <li><strong>Property Value:</strong> Maintains curb appeal and landscape investment</li>
              <li><strong>Safety:</strong> Eliminates slip hazards and potential damage</li>
              <li><strong>Time Savings:</strong> Professional efficiency gets the job done quickly</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Refresh Your Property?</h2>
              <p className="text-gray-700 mb-4">Schedule your seasonal cleanup today and give your property the care it deserves. We'll handle all the hard work so you can enjoy your beautiful yard.</p>
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

export default CleanupService;