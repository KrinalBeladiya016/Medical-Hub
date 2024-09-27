import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState(""); // State for user ID (email)
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const [csrfToken, setCsrfToken] = useState(""); // State for CSRF token
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Hook for redirection
  const location = useLocation(); // Access location state
  const email = 'p@gmail.com'; // const email = location.state?.email; // Retrieve the email from location state

  // Fetch CSRF token from the backend
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/csrf_token/', {
          method: 'GET',
          credentials: 'include', // This ensures cookies are sent and received
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCsrfToken(data.csrfToken); // Store the CSRF token
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
        setError("Unable to fetch CSRF token. Please try again.");
      }
    };
    fetchCsrfToken();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const loginData = { userId, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken, // Include CSRF token if needed
        },
        body: JSON.stringify(loginData),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Invalid email or password");
      } else {
        const data = await response.json();
        console.log("Login successful:", data);
        if (userId) {
          navigate(`/userProfile?userId=${decodeURIComponent(userId)}`);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div>
      {/* Login Form Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 text-center">Login</h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
                <input
                  name="email"
                  placeholder="Email"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  type="email"
                  className="rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500 w-full px-4 py-2 border border-gray-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                <input
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  className="rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500 w-full px-4 py-2 border border-gray-300"
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl w-full"
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
              <div className="mt-4 text-center">
                <p className="text-gray-600">Or</p>
                <a href="/Hospital_login" className="text-teal-600 hover:text-teal-800 underline transition duration-300 ease-in-out mt-2 block">
                  Hospital Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
