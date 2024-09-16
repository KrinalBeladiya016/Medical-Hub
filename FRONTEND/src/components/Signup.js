import React, { useState } from 'react';

function Signup({ onSignupComplete }) {
  const [error, setError] = useState('');
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (signupData.password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    onSignupComplete({
      email: signupData.email,
      password: signupData.password,
    });
  };

  return (
    <div>
      {/* Header bar */}
      <div className='h-10 bg-teal-600'></div>

      {/* Signup Form Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 text-center">Sign Up</h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                <input
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                <input
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleChange}
                  required
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
                <input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleChange}
                  required
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500"
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
