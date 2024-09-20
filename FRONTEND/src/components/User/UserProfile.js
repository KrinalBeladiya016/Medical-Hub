import React, { useState, useEffect } from 'react';

// Function to retrieve CSRF token from cookies
const getCsrfToken = () => {
    const name = 'csrftoken';
    const cookieValue = `; ${document.cookie}`;
    const parts = cookieValue.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const UserProfile = () => {
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [password, setPassword] = useState(localStorage.getItem('password'));

    const fetchProfileData = async () => {
        const token = localStorage.getItem('authToken'); // Assuming you're storing token in localStorage
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/userProfile/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Send token in Authorization header
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log("Profile data: ", data);
    
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    };
    
    
    

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
            fetchProfileData();
        } else {
            console.error("No login credentials found");
        }
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {/* Render profile data here */}
                    {profileData && <div>{JSON.stringify(profileData)}</div>}
                </div>
            )}
        </div>
    );
};

export default UserProfile;
