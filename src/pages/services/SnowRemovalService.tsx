import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';
import snowRemoval from '../../assets/snow-removal.avif';

const SnowRemovalService = () => {
  useEffect(() => {
    trackPageView('/services/snow-removal');
  }, []);

  return (
    <>
      <Helmet>
        <title>Snow Removal Service in New Lenox, IL | Pat's Lawn Care</title>
        <meta name="description" content="Professional snow plowing and removal services in New Lenox, Frankfort, Mokena. Reliable winter snow clearing for driveways and sidewalks. Call (708) 274-2281." />
        <meta name="keywords" content="snow removal New Lenox, snow plowing Frankfort, driveway clearing Mokena, winter services Will County" />
        <link rel="canonical" href="https://patwslawncare.com/services/snow-removal" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Professional Snow Removal Service in New Lenox, IL</h1>

          <img
            src={snowRemoval}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?w=800&auto=format&fit=crop&q=80";
            }}
            alt="Professional snow removal and plowing service in New Lenox - cleared driveway and sidewalk"
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
            width="800"
            height="300"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Don't let winter weather disrupt your daily routine. Pat's Lawn Care provides reliable snow removal and plowing services
              throughout New Lenox and surrounding areas. We're ready when the snow falls, ensuring your property stays safe and accessible.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Snow Removal Services Include</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Snow Plowing:</strong> Professional equipment for efficient driveway and parking lot clearing</li>
              <li><strong>Sidewalk Clearing:</strong> Safe passage for pedestrians with thorough sidewalk snow removal</li>
              <li><strong>De-icing:</strong> Salt and ice melt application to prevent slippery surfaces</li>
              <li><strong>Snow Hauling:</strong> Removal of excess snow from your property when needed</li>
              <li><strong>Emergency Service:</strong> Priority response during heavy snowfall events</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Areas We Cover</h2>
            <p className="text-gray-700 mb-6">
              We serve residential and commercial properties throughout Will County, including New Lenox, Frankfort, Mokena, Manhattan,
              and Joliet. Our team knows the local area and can respond quickly when winter storms hit.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Flexible Service Options</h2>
            <p className="text-gray-700 mb-4">
              Choose the snow removal plan that works best for your property:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Per-Event Service:</strong> Pay only when we plow, ideal for occasional snow events</li>
              <li><strong>Seasonal Contracts:</strong> Guaranteed priority service all winter long</li>
              <li><strong>Trigger Depth Options:</strong> Customize when plowing begins based on snowfall amount</li>
              <li><strong>24/7 Availability:</strong> Snow doesn't wait, and neither do we</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Pat's Lawn Care for Snow Removal?</h2>
            <p className="text-gray-700 mb-4">
              When winter weather strikes, you need a snow removal service you can count on. We use professional-grade plowing equipment
              and have the experience to handle everything from light dustings to heavy snowstorms.
            </p>

            <p className="text-gray-700 mb-6">
              We're locally owned, fully insured, and committed to keeping your property safe and accessible throughout the winter season.
              Our team monitors weather forecasts closely and is ready to mobilize before the first flake falls.
            </p>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready for Winter? Get Prepared Now!</h2>
              <p className="text-gray-700 mb-4">Don't wait until the first snowfall. Get your free snow removal estimate today and secure your spot on our service route.</p>
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

export default SnowRemovalService;
