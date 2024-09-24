import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate} from 'react-router-dom';
// import images from '../images'; // Import the image mapping

const SearchUser = () => {
const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId');
  const navigate = useNavigate();
  

useEffect(()=> {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user_profile/?userId=${encodeURIComponent(userId)}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [userId]);


  return (
    <div className="find-cruise-container">
        
      <h1>Search Results for "{userId}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length ? (
        <div className="cruise-list">
          {results.map(user => (
            <div key={user.id} className="cruise-card">
              {/* <img 
                src={images[user.image_url] || images['default-image.jpg']} 
                alt={user.name} 
                className="cruise-image"
              /> */}
              <div className="cruise-content">
              <h2>{user.name}</h2>
              <img src='D:\Medical Hub\BACKEND\medical_hub\media\profiles/cv_WGfnNXL.png' alt='pro' />
              <p>{user.description}</p>
              <p>contact: ${user.contact}</p>
              <p>Location: {user.address}</p>
              
            </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchUser;
