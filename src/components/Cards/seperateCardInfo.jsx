
import React from 'react';
import { Link } from 'react-router-dom';

const CardInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      <section className="bg-gradient-to-r from-[#4267B2] to-[#5B8C51] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Healthcare Access for <span className="text-[#90EE90]">Everyone</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Find affordable, multilingual community health clinics near you — regardless of insurance or immigration status.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your zip code or city (e.g., 94601, Oakland)"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <Link
                to="/clinics"
                className="bg-[#5B8C51] hover:bg-[#4A7341] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Find Clinics
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">17+</p>
              <p className="text-blue-200">Verified Clinics</p>
            </div>
            <div>
              <p className="text-4xl font-bold">4</p>
              <p className="text-blue-200">Languages</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="text-blue-200">Free to Use</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2C3E50] text-center mb-4">
            Healthcare Shouldn't Be This Hard
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Millions of immigrants face barriers to basic healthcare. We're here to change that.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Language Barriers
              </h3>
              <p className="text-gray-600">
                43 million people in the U.S. speak limited English. Finding healthcare in your language shouldn't be impossible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">😰</span>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Fear & Misinformation
              </h3>
              <p className="text-gray-600">
                Many avoid care due to fear. <strong>You have the right to emergency care</strong> regardless of immigration status (EMTALA law).
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Cost & Insurance
              </h3>
              <p className="text-gray-600">
                33% of immigrants lack insurance. Community health centers offer sliding scale fees and accept patients without insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2C3E50] text-center mb-4">
            How CareCompass Helps
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your one-stop platform for finding affordable, accessible healthcare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                Find Clinics Near You
              </h3>
              <p className="text-gray-600 mb-4">
                Search by zip code or city. Filter by language, specialty, and insurance acceptance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Geospatial search with distance</li>
                <li>✓ Filter by language spoken</li>
                <li>✓ All clinics accept uninsured</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                🔒 Complete Privacy
              </h3>
              <p className="text-gray-600 mb-4">
                No immigration data collected. Your information stays private and secure.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Privacy-first</li>
                <li>✓ Secure by design</li>
                <li>✓ No data sharing</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">
                🌍 Multilingual Support
              </h3>
              <p className="text-gray-600 mb-4">
                Find clinics that speak your language — including underserved communities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ English, Spanish, Haitian Creole</li>
                <li>✓ French, Chinese, Vietnamese</li>
                <li>✓ Interface in 4 languages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#2C3E50] text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Enter Your Location</h3>
              <p className="text-gray-600 text-sm">Zip code or city name</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apply Filters</h3>
              <p className="text-gray-600 text-sm">Language, specialty, radius</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">View Results</h3>
              <p className="text-gray-600 text-sm">See clinics on map & list</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Directions</h3>
              <p className="text-gray-600 text-sm">One click to Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-[#4267B2] to-[#5B8C51] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Care?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who've found affordable healthcare through CareCompass
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/clinics"
              className="bg-white text-[#4267B2] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Find Clinics Now
            </Link>
            <Link
              to="/sign-up"
              className="bg-[#5B8C51] hover:bg-[#4A7341] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg border-2 border-white"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-yellow-50 border-y-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <span className="text-3xl">🚨</span>
            <div>
              <span className="text-red-600 font-bold text-xl mr-2">Medical Emergency?</span>
              <span className="text-gray-800 text-lg">
                Call <strong className="text-2xl">911</strong> immediately. You have the right to emergency care regardless of immigration status.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🔐</span>
              </div>
              <p className="font-semibold text-gray-800">256-Bit Encryption</p>
              <p className="text-sm text-gray-600">Bank-level security</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🛡️</span>
              </div>
              <p className="font-semibold text-gray-800">HIPAA Compliant</p>
              <p className="text-sm text-gray-600">Medical privacy protected</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🚫</span>
              </div>
              <p className="font-semibold text-gray-800">No Immigration Data</p>
              <p className="text-sm text-gray-600">Your status is private</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">💙</span>
              </div>
              <p className="font-semibold text-gray-800">Forever Free</p>
              <p className="text-sm text-gray-600">No hidden fees</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardInfo;
