import React, { useState } from "react";
import Register from "./register/register";
import Login from "./login/login";
import "./App.css";
import Home from "./pages/home/home";
import Title from "./components/title/title";
import { ConfigProvider } from "antd";

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

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7cb0a7",
        },
      }}
    >
      <div>
        <Title />
        <Home />
        {/*<h1>Home Page</h1>*/}
        {/*<button onClick={handleLoginClick}>Login</button>*/}
        {/*{showLogin && (*/}
        {/*  <div className="overlay">*/}
        {/*    <Login onClose={handleCloseLogin} goRegister={handleGoRegister} />*/}
        {/*  </div>*/}
        {/*)}*/}
        {/*{showRegister && (*/}
        {/*  <div className="overlay">*/}
        {/*    <Register onClose={handleCloseLogin} />*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </ConfigProvider>
  );
}

export default App;
