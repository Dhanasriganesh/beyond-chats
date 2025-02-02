import React, { useState } from 'react';
import { LoaderCircle, Check, Globe, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const SetupOrganization = () => {
  const [loading, setLoading] = useState(false);
  const [metaDescription, setMetaDescription] = useState('');
  const [selectedPage, setSelectedPage] = useState(null);

  // Dummy data for scraped pages
  const scrapedPages = [
    { 
      url: '/about', 
      status: 'completed',
      chunks: [
        'Company was founded in 2020',
        'We specialize in AI solutions',
        'Our team consists of experts in machine learning'
      ]
    },
    { 
      url: '/services', 
      status: 'completed',
      chunks: [
        'We offer consulting services',
        'Custom AI model development',
        'Training and workshops available'
      ]
    },
    { 
      url: '/contact', 
      status: 'pending',
      chunks: []
    },
    { 
      url: '/blog', 
      status: 'in_progress',
      chunks: [
        'Latest developments in AI'
      ]
    }
  ];

  const handleUrlBlur = () => {
    setLoading(true);
    // Simulate API call to fetch meta description
    setTimeout(() => {
      setMetaDescription('AI-powered customer service solutions for modern businesses');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Setup Your Organization</h1>
          <p className="text-gray-600">Configure your company details and train your AI chatbot</p>
        </div>

        {/* Company Information Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Company Information</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Company Name</label>
                <input 
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Website URL</label>
                <input 
                  type="url"
                  placeholder="https://your-company.com"
                  onBlur={handleUrlBlur}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {loading && (
                  <div className="flex items-center text-sm text-blue-600">
                    <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
                    Fetching website information...
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Company Description</label>
                <textarea 
                  placeholder="Describe your company..."
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  className="w-full h-32 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Website Scraping Status Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">Website Scraping Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scrapedPages.map((page) => (
                <div
                  key={page.url}
                  onClick={() => setSelectedPage(page)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all
                    ${selectedPage?.url === page.url ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}
                  `}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{page.url}</span>
                    </div>
                    {page.status === 'completed' && <Check className="h-5 w-5 text-green-500" />}
                    {page.status === 'pending' && <AlertCircle className="h-5 w-5 text-yellow-500" />}
                    {page.status === 'in_progress' && <LoaderCircle className="h-5 w-5 text-blue-500 animate-spin" />}
                  </div>
                  <div className="text-sm text-gray-600 capitalize">
                    Status: {page.status.replace('_', ' ')}
                  </div>
                </div>
              ))}
            </div>

            {selectedPage && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Scraped Content from {selectedPage.url}</h3>
                {selectedPage.chunks.length > 0 ? (
                  <div className="space-y-2">
                    {selectedPage.chunks.map((chunk, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-md text-sm">
                        {chunk}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-700">
                      No content has been scraped from this page yet.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end space-x-4">
          <Link to="/chatbotintegration">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Skip Training
              </button>
          </Link>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Continue Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupOrganization;