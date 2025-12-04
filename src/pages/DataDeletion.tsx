import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

const DataDeletion = () => {
  useEffect(() => {
    trackPageView('/data-deletion');
  }, []);

  return (
    <>
      <Helmet>
        <title>Data Deletion | Pat's Lawn Care</title>
        <meta name="description" content="Data deletion instructions for Pat's Lawn Care auto post generator and Facebook API integration." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-green-600 hover:text-green-700">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Deletion Instructions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                This page provides instructions for requesting the deletion of your personal data collected through 
                Pat's Lawn Care's auto post generator that integrates with Facebook's API. We are committed to 
                respecting your privacy rights and providing you with control over your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data We Collect</h2>
              <p className="text-gray-700 mb-4">
                Through our Facebook API integration for auto post generation, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Basic profile information (name, profile picture)</li>
                <li>Page interaction data</li>
                <li>Post engagement metrics</li>
                <li>Comments and messages related to our lawn care services</li>
                <li>Audience insights and demographics (aggregated)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request Data Deletion</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Method 1: Direct Contact</h3>
              <p className="text-gray-700 mb-4">
                Contact us directly using the information below to request deletion of your personal data:
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Contact Information:</h4>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@patslawncare.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> (708) 274-2281</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 621 N Cooper Rd, New Lenox, IL 60451</p>
                <p className="text-gray-700 mb-4"><strong>Subject Line:</strong> "Data Deletion Request"</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Required Information:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Your full name</li>
                  <li>Facebook profile name/username (if different)</li>
                  <li>Email address associated with your Facebook account</li>
                  <li>Specific data you want deleted (or request "all data")</li>
                  <li>Reason for deletion (optional)</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Method 2: Facebook Settings</h3>
              <p className="text-gray-700 mb-4">
                You can also manage your data through Facebook's own privacy controls:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li>Go to your Facebook Settings & Privacy</li>
                <li>Select "Apps and Websites"</li>
                <li>Find "Pat's Lawn Care Auto Post Generator"</li>
                <li>Click "Remove" or adjust permissions</li>
                <li>This will revoke our access to your data</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Deletion Process</h2>
              <p className="text-gray-700 mb-4">
                When you request data deletion, here's what happens:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4">
                <li><strong>Request Received:</strong> We acknowledge your request within 48 hours</li>
                <li><strong>Identity Verification:</strong> We may ask for additional information to verify your identity</li>
                <li><strong>Data Location:</strong> We identify all systems where your data is stored</li>
                <li><strong>Deletion Process:</strong> We permanently delete your data from our systems</li>
                <li><strong>Confirmation:</strong> We send you confirmation once deletion is complete</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Timeline</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Acknowledgment:</strong> Within 48 hours</li>
                  <li><strong>Identity Verification:</strong> 1-3 business days (if required)</li>
                  <li><strong>Data Deletion:</strong> Within 30 days of verified request</li>
                  <li><strong>Confirmation:</strong> Within 5 business days of completion</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Gets Deleted</h2>
              <p className="text-gray-700 mb-4">
                When you request data deletion, we will remove:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your personal profile information</li>
                <li>Individual interaction records</li>
                <li>Personal messages and comments</li>
                <li>Any stored preferences or settings</li>
                <li>Analytics data tied to your identity</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Data We May Retain</h3>
              <p className="text-gray-700 mb-4">
                We may retain certain information if required by law or for legitimate business purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Aggregated, anonymized analytics data</li>
                <li>Legal compliance records</li>
                <li>Financial transaction records (if applicable)</li>
                <li>Security logs (without personal identifiers)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Rights</h2>
              <p className="text-gray-700 mb-4">
                In addition to data deletion, you also have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Request a copy of your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Restrict processing of your data</li>
                <li>Object to certain types of data processing</li>
                <li>Data portability (where technically feasible)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions or Concerns</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about the data deletion process or need assistance, please don't hesitate to contact us:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Pat's Lawn Care</strong></p>
                <p className="text-gray-700 mb-2">621 N Cooper Rd, New Lenox, IL 60451</p>
                <p className="text-gray-700 mb-2">Phone: (708) 274-2281</p>
                <p className="text-gray-700">Email: info@patwslawncare.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complaints</h2>
              <p className="text-gray-700 mb-4">
                If you're not satisfied with how we handle your data deletion request, you have the right to 
                file a complaint with relevant data protection authorities in your jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataDeletion;