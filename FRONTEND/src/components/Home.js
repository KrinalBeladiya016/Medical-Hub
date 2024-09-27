import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import cc1 from '../images/cc.jpg'
import cc2 from '../images/cc2.jpg'
import cc3 from '../images/cc3.jpg'
import '../styles/animation.css'; // Import custom animations
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Carousel Section */}
      <div className="relative w-full overflow-hidden">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="h-[80vh] md:h-[90vh]" // Increased height by 15px
        >
          <div className="relative h-full">
            <img
              className="object-cover w-full h-full"
              src={cc2}
              alt="First slide"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Health, Our Priority</h2>
              <p className="text-lg md:text-xl mb-4">Manage your health records seamlessly with our Health ID system.</p>
              <a href="/getid" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">Get Your Health ID</a>
            </div>
          </div>
          <div className="relative h-full">
            <img
              className="object-cover w-full h-full"
              src={cc1}
              alt="Second slide"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 shadow-md">Secure and Reliable</h2>
<p className="text-lg md:text-xl mb-4 shadow-sm">Your data is encrypted and protected with the highest standards.</p>

              <a href="/getid" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">Get Your Health ID</a>
            </div>
          </div>
          <div className="relative h-full">
            <img
              className="object-cover w-full h-full"
              src={cc3}
              alt="Third slide"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Accessible Nationwide</h2>
              <p className="text-lg md:text-xl mb-4">Access your health records from any hospital across India.</p>
              <a href="/getid" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">Get Your Health ID</a>
            </div>
          </div>
        </Carousel>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-teal-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">How It Works</h2>
          <p className="text-base md:text-lg mb-8 text-gray-700">Our Health ID system simplifies healthcare management for both citizens and hospitals. Here's how it benefits everyone:</p>
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">For Citizens</h3>
              <p>Effortlessly manage your health records, track your medical history, and ensure your data is always up-to-date.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">For Hospitals</h3>
              <p>Doctors can access patients' past health records with ease, facilitating better diagnosis and continuity of care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">Secure</h3>
              <p>Our system ensures that your health data is encrypted and protected with the highest security standards.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">Accessible</h3>
              <p>Access your health records from any hospital across India with ease and convenience.</p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-teal-600">User-Friendly</h3>
              <p>Our platform is designed to be intuitive and easy to use, ensuring a seamless experience for all users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-teal-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-700">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-2 text-teal-600">How do I get my Health ID?</h3>
              <p>Visit our Get ID page and follow the instructions to apply for your Health ID.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-2 text-teal-600">Is my data secure?</h3>
              <p>Yes, we use advanced encryption and security measures to ensure your data is protected.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-lg font-semibold mb-2 text-teal-600">Can I access my records from any hospital?</h3>
              <p>Yes, your Health ID allows you to access your medical records from any participating hospital across India.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
