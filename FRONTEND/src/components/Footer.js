import React from 'react';

function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Health ID</h1>
            <p className="text-sm">Your Health, Our Priority</p>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <a href="/" className="text-gold-300 hover:text-gold-400 mb-2 md:mb-0">Home</a>
            <a href="/about" className="text-gold-300 hover:text-gold-400 mb-2 md:mb-0">About</a>
            <a href="/contact" className="text-gold-300 hover:text-gold-400 mb-2 md:mb-0">Contact</a>
            <a href="/getid" className="text-gold-300 hover:text-gold-400 mb-2 md:mb-0">Get ID</a>
          </div>
        </div>
        <div className="mt-8 border-t border-teal-700 pt-4 text-center text-sm">
          <p>&copy; 2024 Health ID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
