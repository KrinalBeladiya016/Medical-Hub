import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Hook for redirection

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/csrf_token/', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCsrfToken(data.csrfToken);  // Adjust based on your actual response structure
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
        setError("Unable to fetch CSRF token. Please try again.");
      }
    };
    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    const loginData = {
      userId,
      password,
    };
    console.log("Login data being sent:", loginData);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken, // Add the CSRF token here
        },
        body: JSON.stringify(loginData),
        credentials: 'include', // Ensure this is included
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        alert("Login successful:", data);
        // Redirect to another page on successful login
        localStorage.setItem('email', userId);
        localStorage.setItem('password', password);

        navigate(`/userProfile`);
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Invalid userId or password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div>
    {/* Header bar */}
    <div className='h-10 bg-teal-600'></div>
  
    {/* Login Form Section */}
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600 text-center">Login</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200 ">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition duration-300 ease-in-out hover:border-teal-500"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl flex items-center gap-2 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Login;
