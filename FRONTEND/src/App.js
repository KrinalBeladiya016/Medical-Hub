import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hospital_Navbar from './components/Hospital/Hospital_Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import GetID from './components/GetID';
import Login from './components/Login';
import UserProfile from './components/User/UserProfile';
import Hospital_login from './components/Hospital/Hospital_login';
import Dashboard from './components/Hospital/Dashboard';
import SearchUser from './components/Hospital/SearchUser';
import axios from 'axios';
import User_Navbar from './components/User/User_Navbar';
import PatientEntry from './components/Hospital/PatientEntry';


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
  const location = useLocation();
  
  // Conditionally render navbar based on route
  const renderNavbar = () => {
    if (location.pathname === '/dashboard' || location.pathname === '/search_user' || location.pathname === '/patient_history') {
      return <Hospital_Navbar />;
    } else if (location.pathname === '/userProfile'){
      return <User_Navbar />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <>
    {/* <Navbar /> */}
    {renderNavbar()}
    <Routes>
      {/* <Route element={<Navbar />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/getid" element={<GetID />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/hospital_login" element={<Hospital_login />} />
      {/* </Route> */}
      {/* <Route element={<Hospital_Navbar />}> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/search_user" element={<SearchUser />} />
      <Route path="/patient_history" element={<PatientEntry />} />
      
      {/* </Route> */}
      </Routes>
    <Footer />
    </>
  );
}
function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default RootApp;
