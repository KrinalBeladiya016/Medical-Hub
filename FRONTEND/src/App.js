import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import GetID from './components/GetID';
import Login from './components/Login';
import UserProfile from './components/User/UserProfile';
import axios from 'axios';


axios.defaults.headers.common['X-CSRFToken'] = getCookie('csrftoken');

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
function App() {
  // useEffect(() => {
  //   // Fetch CSRF token and store it for later use
  //   fetch('/api/csrf/')
  //     .then(response => response.json())
  //     .then(data => {
  //       document.cookie = `csrftoken=${data.csrfToken}; path=/`;
  //     })
  //     .catch(error => console.error('Error fetching CSRF token:', error));
  // }, []);
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/getid" element={<GetID />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
