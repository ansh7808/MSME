import React from 'react';

// 'openModal' function ko props se receive karein
const HeroSection = ({ openModal }) => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Unlock Your Business Potential
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Your one-stop guide to finding and applying for the right government schemes for your MSME.
        </p>

        <div className="flex justify-center mb-8">
            <svg className="w-10 h-10 text-blue-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
        
        <div className="flex justify-center">
          {/* onClick event yahan add karein */}
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Find My Perfect Scheme
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;