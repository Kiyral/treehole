import React, { useState, useEffect } from "react";
import axios from "axios";
import "./title.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Register from "../register/register";
import Login from "../login/login";

function Title() {
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
    <div className="title-wrapper">
      <div style={{ display: "flex" }}>
        <img className="title-logo" src="img.png" />
        <div className="title-search-input">
          <Input
            style={{ width: "300px" }}
            prefix={
              <SearchOutlined style={{ color: "#7cb0a7", fontSize: "16px" }} />
            }
            placeholder="请输入搜索内容"
          />
        </div>
      </div>
      <div className="title-action">
        <div className="title-login" onClick={handleLoginClick}>登录</div>
        {showLogin && (
          <div className="overlay">
            <Login onClose={handleCloseLogin} goRegister={handleGoRegister} />
        </div>
  )}
        <div className="title-sign" onClick={handleGoRegister}>注册</div>
        {showRegister && (
          <div className="overlay">
          <Register onClose={handleCloseLogin} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Title;