import React from 'react';

function About() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96 bg-teal-600 text-white">
        <img src="https://via.placeholder.com/1920x600" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="relative flex items-center justify-center h-full bg-teal-600 bg-opacity-70">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl mb-8">Learn more about our mission, team, and history.</p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">Our Mission</h2>
          <p className="text-base md:text-lg mb-8 text-gray-700">Our mission is to revolutionize healthcare management through innovative solutions that empower citizens and streamline health records.</p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <img className="w-32 h-32 object-cover rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="text-gray-500 mt-2">John leads our organization with a vision for a more connected and efficient healthcare system.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <img className="w-32 h-32 object-cover rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="text-gray-500 mt-2">Jane ensures our technology is cutting-edge and our data security is top-notch.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
              <img className="w-32 h-32 object-cover rounded-full mx-auto mb-4" src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">Emily Johnson</h3>
              <p className="text-gray-600">Head of Operations</p>
              <p className="text-gray-500 mt-2">Emily manages our daily operations and ensures everything runs smoothly.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 text-center">Our History</h2>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-teal-600"></div>
            <div className="relative z-10">
              <div className="space-y-12">
                {/* History Event 1 */}
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">Founding Year</h3>
                    <p className="text-gray-700 mt-2">In 2024, we embarked on a journey to transform healthcare management with our innovative health ID system.</p>
                  </div>
                </div>
                {/* History Event 2 */}
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">Major Milestone</h3>
                    <p className="text-gray-700 mt-2">We successfully partnered with several hospitals to implement our health ID system, enhancing patient care and data accessibility.</p>
                  </div>
                </div>
                {/* History Event 3 */}
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600">Future Plans</h3>
                    <p className="text-gray-700 mt-2">We are continuously working to expand our services and improve our technology to better serve our community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600">Our Achievements</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Achievement 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold">🏆</div>
              <div>
                <h3 className="text-lg font-semibold text-teal-600">Healthcare Innovation Award</h3>
                <p className="text-gray-700">Recognized for our groundbreaking work in healthcare technology and patient data management.</p>
              </div>
            </div>
            {/* Achievement 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold">🏅</div>
              <div>
                <h3 className="text-lg font-semibold text-teal-600">Best Startup of 2024</h3>
                <p className="text-gray-700">Awarded for our rapid growth and impact in the healthcare industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-teal-50  text-center mb-5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">Contact Us</h2>
          <p className="text-base md:text-lg mb-8">Have questions or want to get in touch? Reach out to us at <a href="mailto:info@medicalhub.com" className="text-gold-300 hover:text-gold-400">info@medicalhub.com</a>.</p>
          <a href="/contact" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">Get In Touch</a>
        </div>
      </section>
    </div>
  );
}

export default About;
