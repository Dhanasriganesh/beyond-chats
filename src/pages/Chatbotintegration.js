import React, { useState } from 'react';
import { Code, Share2, Settings, MessageCircle, Mail, Check, X } from 'lucide-react';

const ChatbotIntegration = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const dummyCode = `<!-- Add this code to your website's <head> section -->
<script src="https://your-chatbot-url.com/widget.js"></script>
<link rel="stylesheet" href="https://your-chatbot-url.com/styles.css">`;

  const handleTestIntegration = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Chatbot Integration & Testing
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Test Chatbot Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 space-y-4">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-center">Test Chatbot</h2>
            <p className="text-gray-600 text-center">
              Preview your chatbot on a demo website
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Launch Test Environment
            </button>
            <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
              Chatbot not working as intended? Share feedback
            </div>
          </div>

          {/* Integration Instructions Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 space-y-4">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-center">
              Integrate on Your Website
            </h2>
            <div className="space-y-3">
              <button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors"
                onClick={() => setShowInstructions(!showInstructions)}
              >
                View Integration Guide
              </button>
              <button 
                className="w-full border border-purple-200 hover:bg-purple-50 text-purple-600 py-2 px-4 rounded-md transition-colors flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email to Developer
              </button>
            </div>
            
            {showInstructions && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                  {dummyCode}
                </pre>
              </div>
            )}
          </div>

          {/* Test Integration Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 space-y-4">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-center">
              Test Integration
            </h2>
            <p className="text-gray-600 text-center">
              Verify your chatbot installation
            </p>
            <button 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
              onClick={handleTestIntegration}
            >
              Verify Installation
            </button>
          </div>
        </div>

        {/* Success State */}
        {showSuccess && (
          <div className="animate-fadeIn">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <Check className="w-4 h-4 text-green-600 mt-1" />
                <div className="ml-3">
                  <h3 className="text-green-800 font-semibold">Integration Successful!</h3>
                  <p className="text-green-700">Your chatbot is now ready to use.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Explore Admin Panel
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Talking to Your Chatbot
              </button>
              <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md transition-colors flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share on Social Media
              </button>
            </div>
          </div>
        )}

        {/* Integration Not Detected State */}
        {!showSuccess && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <X className="w-4 h-4 text-yellow-600 mt-1" />
              <div className="ml-3">
                <h3 className="text-yellow-800 font-semibold">Integration Not Detected</h3>
                <p className="text-yellow-700">Please follow the integration instructions and try again.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotIntegration;