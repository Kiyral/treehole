import React, { useState } from 'react';
import Register from "./register/register";
import Login from './login/login';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleGoRegister = () => {
    console.log('1');
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLoginClick}>Login</button>
      {showLogin && (
        <div className="overlay">
          <Login onClose={handleCloseLogin} goRegister={handleGoRegister}/>
        </div>
      )}
      {showRegister && (
        <div className="overlay">
          <Register onClose={handleCloseLogin}/>
        </div>
      )}
    </div>
  );
}

export default App;