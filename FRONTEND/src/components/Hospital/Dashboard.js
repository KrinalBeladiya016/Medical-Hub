import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const Dashboard = () => {
  const data = [
    { title: 'Children', value: 30, color: '#4CAF50' },
    { title: 'Adults', value: 50, color: '#2196F3' },
    { title: 'Seniors', value: 20, color: '#FFC107' },
  ];

  return (
    <div className="bg-gradient-to-r from-teal-50 to-white min-h-screen">
      {/* Header */}
      <header className="bg-teal-600 p-6 shadow-lg">
        <h1 className="text-white text-4xl font-bold text-center">Hospital Dashboard</h1>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hospital Details */}
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl relative">
            <div className="absolute inset-0 bg-teal-600 opacity-25 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-teal-600 text-xl font-semibold mb-3">Hospital Information</h2>
              <p className="text-gray-700"><strong>Name:</strong> Apollo Hospital</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Health St, Ahemdabad</p>
              <p className="text-gray-700"><strong>Contact:</strong> +91 9876543210</p>
              <p className="text-gray-700"><strong>Email:</strong> hospital@apollo.com</p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-xl font-semibold mb-3">Total Patients</h2>
            <p className="text-4xl font-bold text-gray-800">1,254</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-xl font-semibold mb-3">Doctors Available</h2>
            <p className="text-4xl font-bold text-gray-800">58</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-xl font-semibold mb-3">Beds Available</h2>
            <p className="text-4xl font-bold text-gray-800">23</p>
          </div>

          {/* Oxygen Tanks Available */}
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-xl font-semibold mb-3">Oxygen Tanks Available</h2>
            <p className="text-4xl font-bold text-gray-800">35</p>
          </div>

          {/* Daily Average Patients */}
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-xl font-semibold mb-3">Daily Average Patients</h2>
            <p className="text-4xl font-bold text-gray-800">45</p>
          </div>

          {/* Recent Activities */}
          <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-xl font-semibold mb-3">Recent Activities</h2>
            <ul className="text-gray-700">
              <li className="mb-3 hover:text-teal-600 transition duration-300">
                <span className="font-semibold">Dr. Keyur</span> performed surgery on patient ID JR0201360001.
              </li>
              <li className="mb-3 hover:text-teal-600 transition duration-300">
                <span className="font-semibold">Patient ID KR0201980001</span> was admitted for observation.
              </li>
              <li className="mb-3 hover:text-teal-600 transition duration-300">
                <span className="font-semibold">Dr. Ishika</span> conducted a health checkup for patient ID FR0201360001.
              </li>
            </ul>
          </div>
        </div>

        {/* Patient Demographics Chart */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-xl flex justify-center">
            <PieChart data={data} style={{ height: '300px', width: '300px' }} radius={50} /> {/* Increased radius */}
          </div>

          {/* Description Section */}
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300 hover:shadow-2xl">
            <h2 className="text-teal-600 text-2xl font-semibold mb-3">Patient Demographics</h2>
            <p className="text-gray-700 mb-4">
              This chart represents the demographic distribution of patients at the hospital. 
              The categories include Children, Adults, and Seniors, providing a clear insight 
              into the age group most frequently treated.
            </p>
            <a href="#" className="disabled text-gold-600 hover:text-teal-600 transition-colors duration-300 font-medium">
              Learn More &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
