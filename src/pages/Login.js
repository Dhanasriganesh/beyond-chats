import React, { useState, useEffect } from "react";
import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Registration() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [hoveredField, setHoveredField] = useState(null);
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    verificationCode: ''
  });

  const messages = [
    "Welcome! Let's create your account",
    "Join us to make great things happen",
    "Get started with your new account",
    "Sign up to begin your journey",
  ];

  const tooltipMessages = {
    name: "Please enter your full name",
    email: "Enter a valid email address",
    password: "Password must be at least 8 characters with numbers and special characters",
    verification: "Enter the 6-digit code sent to your email"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!showVerification) {
      // Simulate sending verification code
      setShowVerification(true);
    } else {
      // Handle final registration
      console.log('Registration complete:', formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-orange-200 w-full max-w-md transform transition-all duration-300 hover:shadow-orange-200/50">
          <div className="text-center mb-6 flex flex-col items-center space-y-4">
            <div className="w-52 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-white font-bold">BeyondChats</span>
            </div>
            
            <h1 className="text-lg font-semibold text-gray-800 animate-fade-in opacity-100 transition-all duration-500">
              {messages[currentMessage]}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!showVerification ? (
              <>
                {/* Name Input */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onMouseEnter={() => setHoveredField("name")}
                    onMouseLeave={() => setHoveredField(null)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                    required
                  />
                  <div className={`absolute -right-64 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm p-3 rounded-lg shadow-lg transition-all duration-300 ${
                    hoveredField === "name" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  } w-56`}>
                    {tooltipMessages.name}
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    onMouseEnter={() => setHoveredField("email")}
                    onMouseLeave={() => setHoveredField(null)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                    required
                  />
                  <div className={`absolute -right-64 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm p-3 rounded-lg shadow-lg transition-all duration-300 ${
                    hoveredField === "email" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  } w-56`}>
                    {tooltipMessages.email}
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative group">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onMouseEnter={() => setHoveredField("password")}
                    onMouseLeave={() => setHoveredField(null)}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                  >
                    {isPasswordVisible ? <FaRegEye size={20} /> : <FaEyeSlash size={20} />}
                  </button>
                  <div className={`absolute -right-64 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm p-3 rounded-lg shadow-lg transition-all duration-300 ${
                    hoveredField === "password" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  } w-56`}>
                    {tooltipMessages.password}
                  </div>
                </div>
              </>
            ) : (
              // Verification Code Input
              <div className="relative group">
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="Enter Verification Code"
                  value={formData.verificationCode}
                  onChange={handleInputChange}
                  onMouseEnter={() => setHoveredField("verification")}
                  onMouseLeave={() => setHoveredField(null)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-400 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-orange-400"
                  required
                  maxLength="6"
                />
                <div className={`absolute -right-64 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm p-3 rounded-lg shadow-lg transition-all duration-300 ${
                  hoveredField === "verification" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                } w-56`}>
                  {tooltipMessages.verification}
                </div>
              </div>
            )}

            {/* Submit Button */}
          
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:from-orange-500 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-300/50 transform hover:-translate-y-0.5"
              >
                {showVerification ? "Complete Registration" : "Register"}
              </button>
            

            {/* Google Sign In */}
            {!showVerification && (
              <button
                type="button"
                className="w-full mt-4 bg-white text-gray-700 font-semibold py-3 px-4 rounded-lg border border-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;