import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState("");

  // Function to fetch user profile
  const fetchUserProfile = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/userProfile/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'), // Function to get the CSRF token from cookies
                'Authorization': `Token ${localStorage.getItem('token')}` // Assuming you're using token authentication
            },
            credentials: 'include' // Include cookies in the request
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('User Profile Data:', data);
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Check if this cookie string begins with the name we want
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};


  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p>Email: {userProfile.email}</p>
      {/* Add other profile fields as necessary */}
    </div>
  );
};

export default UserProfile;
