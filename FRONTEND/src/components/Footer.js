import React from 'react';

function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-8">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
    {/* Logo and Name Section */}
    <div className="flex items-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
      <h1 className="text-2xl font-bold ml-2 mt-2">Medical Hub</h1> {/* Added mt-2 for top margin */}
    </div>

    {/* Contact Information */}
    <div className="mb-4 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Contact Us</h2>
      <p>Phone: +1 (234) 567-890</p>
      <p>Email: info@medicalhub.com</p>
      <p>Address: 123 Health St, Wellness City</p>
    </div>

    {/* Quick Links */}
    <div className="mb-4 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Quick Links</h2>
      <ul>
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/services" className="hover:underline">Services</a></li>
        <li><a href="/faq" className="hover:underline">FAQs</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
        <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
      </ul>
    </div>

   {/* Social Media Links */}
{/* Social Media Links */}
<div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <i className="fa fa-facebook w3-xlarge mr-2"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <i className="fa fa-twitter w3-xlarge mr-2"></i> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <i className="fa fa-instagram w3-xlarge mr-2"></i> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <i className="fa fa-linkedin w3-xlarge mr-2"></i> LinkedIn
            </a>
          </div>
        </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="mt-8 border-t border-teal-700 pt-4 text-center text-sm">
    <p>&copy; 2024 Medical Hub. All rights reserved.</p>
  </div>
</footer>

  );
}

export default Footer;
