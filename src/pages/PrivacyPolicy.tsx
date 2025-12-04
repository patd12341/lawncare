import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

const PrivacyPolicy = () => {
  useEffect(() => {
    trackPageView('/privacy-policy');
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Pat's Lawn Care</title>
        <meta name="description" content="Privacy Policy for Pat's Lawn Care auto post generator and Facebook API integration." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Pat's Lawn Care ("we," "our," or "us") operates an auto post generator that integrates with Facebook's API 
                to automatically create and publish content related to our lawn care services. This Privacy Policy explains 
                how we collect, use, and protect your information when you interact with our auto post generator.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Facebook API Integration</h3>
              <p className="text-gray-700 mb-4">
                Our auto post generator may collect the following information through Facebook's API:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Basic profile information (name, profile picture)</li>
                <li>Page management permissions for our business page</li>
                <li>Post engagement data (likes, comments, shares)</li>
                <li>Audience insights and demographics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Automatically generate and publish lawn care content</li>
                <li>Schedule posts about our services and seasonal tips</li>
                <li>Analyze post performance and engagement</li>
                <li>Improve our content strategy and customer outreach</li>
                <li>Respond to customer inquiries and comments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Facebook API Compliance</h2>
              <p className="text-gray-700 mb-4">
                Our auto post generator complies with Facebook's Platform Policy and API Terms of Service. We:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Only access data necessary for our lawn care content generation</li>
                <li>Respect user privacy settings and permissions</li>
                <li>Do not store unnecessary personal data</li>
                <li>Regularly review and update our data practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Encrypted data transmission</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits</li>
                <li>Limited access to personal data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your information only as long as necessary to provide our auto post generation services 
                and comply with legal obligations. Data is automatically deleted when no longer needed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically. We will notify you of any material changes by 
                posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Pat's Lawn Care</strong></p>
                <p className="text-gray-700 mb-2">621 N Cooper Rd, New Lenox, IL 60451</p>
                <p className="text-gray-700 mb-2">Phone: (708) 274-2281</p>
                <p className="text-gray-700">Email: info@patwslawncare.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;