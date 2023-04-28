import React, { useState, useEffect } from 'react';
import "./App.css";
import Home from "./pages/home/home";
import Title from "./components/title/title";
import { ConfigProvider } from "antd";


function App() {
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
      </div>
    </ConfigProvider>
  );
}

export default App;
