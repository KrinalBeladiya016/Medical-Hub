import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import d3 from './d3.jpg'

const SearchUser = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search_user?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/search_user/?query=${encodeURIComponent(query)}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="find-cruise-container flex flex-col items-center justify-center min-h-screen">
  <div className="mb-4">
    <input
      type="text"
      placeholder="Search"
      className="search-input border rounded p-3 mr-2 shadow-md"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button
      className="search-button bg-teal-600 text-white rounded-lg p-3 hover:bg-teal-500 transition duration-300 shadow-md"
      style={{ width: '150px' }}
      onClick={handleSearch}
    >
      Search
    </button>
  </div>

  <h1 className="text-3xl font-semibold text-teal-600 mb-6 text-center">Search Results for "{query}"</h1>
  {loading ? (
    <p className="text-lg text-gray-700">Loading...</p>
  ) : results.length ? (
    <div className="cruise-list grid grid-cols-4 md:grid-cols-3 lg:grid-cols-1 gap-8" >
      {results.map((user) => (
        <div key={user.id} className="flex flex-col items-center justify-center">
          <div className="cruise-content p-8 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
            <img src={d3} alt='profile' className="rounded-full w-32 h-32 mb-4 border-4 border-teal-600 mx-auto" />
            
            <h2 className="text-3xl font-semibold text-teal-600 text-center mb-4">{user.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-700 leading-8"><strong>Email:</strong> {user.email}</p>
                <p className="text-gray-700 leading-8"><strong>Contact:</strong> {user.contact}</p>
                <p className="text-gray-700 leading-8"><strong>DOB:</strong> {user.dob}</p>
                <p className="text-gray-700 leading-8"><strong>Aadhar No:</strong> {user.aadhar_no}</p>
                <p className="text-gray-700 leading-8"><strong>Gender:</strong> {user.gender}</p>
                <p className="text-gray-700 leading-8"><strong>Blood Group:</strong> {user.blood_group}</p>
              </div>
              <div>
                <p className="text-gray-700 leading-8"><strong>Address:</strong> {user.address}</p>
                <p className="text-gray-700 leading-8"><strong>City:</strong> {user.city}</p>
                <p className="text-gray-700 leading-8"><strong>State:</strong> {user.state}</p>
                <p className="text-gray-700 leading-8"><strong>Pincode:</strong> {user.pincode}</p>
                <p className="text-gray-700 leading-8"><strong>Health ID:</strong> {user.health_id}</p>
                <p className="text-gray-700 leading-8"><strong>Start Date:</strong> {user.start_date}</p>
                <p className="text-gray-700 leading-8"><strong>Expiry Date:</strong> {user.exp_date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-lg text-gray-700">No results found.</p>
  )}
</div>

  );
};

export default SearchUser;
