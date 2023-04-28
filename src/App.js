import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
    setShowLogin(false);
    setShowRegister(true);
  };

  useEffect(() => {
    // 从 localStorage 中获取 token
    const token = localStorage.getItem('token');

    // 发送请求时添加 Authorization 头
    axios.get('http://localhost:3000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


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