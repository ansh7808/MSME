import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link ko import karein

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Website Name */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">MSMESaathi</a>
        </div>

           {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {/* <a> tag ko <Link> se replace karein */}
          <Link to="/contact" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {/* Yahan bhi <a> tag ko <Link> se replace karein */}
          <Link to="/contact" className="block w-full text-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;