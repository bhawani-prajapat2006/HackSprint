import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HideRoute from './components/HideRoute'
import Loader from './components/Loader'
import Quest from './pages/Quest'
import About from './pages/About'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFound';
import { GoogleOAuthProvider } from '@react-oauth/google'
import Signup from './pages/Signup.jsx';
import Verification from './components/Verification.jsx';
import ResetPassword from './components/ResetPassword.jsx';

import { ToastContainer } from 'react-toastify';

function App() {
  // const GoogleAuthWrapper = () => {
  //   return <Login />;
  // };

  // const GoogleAuthWrapper = () => {
  //   return (
  //     <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  //       <Account />
  //     </GoogleOAuthProvider>
  //   );
  // };

  return (
    <>
      <Router>
        <HideRoute>
          <Navbar />
        </HideRoute>

        <ToastContainer />
        
        <Routes>
          <Route path="/" element={<Home />} caseSensitive></Route>
          <Route path="/quest" element={<Quest />} caseSensitive></Route>
          <Route path="/about" element={<About />} caseSensitive></Route>
          {/* <Route path='/login' element={<GoogleAuthWrapper />} caseSensitive></Route> */}

          <Route path="/account/login" element={<Login />} caseSensitive></Route>
          <Route path="/account/signup" element={<Signup />} caseSensitive></Route>
          <Route path="/account/verify-email" element={<Verification />} caseSensitive></Route>
          <Route path="/account/reset-password" element={<ResetPassword />} caseSensitive></Route>


          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <HideRoute>
          <Footer />
        </HideRoute>
      </Router>
    </>
  );
}

export default App;
