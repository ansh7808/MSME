import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
          <a href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
          {/* Admin Login Link */}
          <a href="/admin-login" className="text-gray-600 hover:text-blue-600 font-semibold">Admin Login</a>
        </div>
        <p className="text-gray-600">&copy; 2025 MSMESaathi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;