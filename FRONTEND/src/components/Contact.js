import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Handle form submission logic here
    // For example, send formData to your server
    console.log('Form submitted', formData);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 bg-teal-600 text-white">
        <img src="https://via.placeholder.com/1920x600" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative flex items-center justify-center h-full bg-teal-600 bg-opacity-70">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl mb-8">We're here to help. Get in touch with us!</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500" 
                  required
                ></textarea>
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button 
                type="submit" 
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600">Our Contact Information</h2>
          <p className="text-base md:text-lg mb-4">Have questions or need support? Reach out to us using the information below.</p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0A8 8 0 012 10zm9.293-2.293a1 1 0 00-1.414 0L7 10.586 5.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">info@medicalhub.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0A8 8 0 012 10zm9.293-2.293a1 1 0 00-1.414 0L7 10.586 5.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0A8 8 0 012 10zm9.293-2.293a1 1 0 00-1.414 0L7 10.586 5.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700">123 Health St, Suite 100, Health City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
