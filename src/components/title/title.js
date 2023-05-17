import React, { useState, useEffect, useContext } from "react";
import { Dropdown, Button } from 'antd';
import "./title.css";
import Register from "../register/register";
import Login from "../login/login";
import {UserContext} from "../../UserContext";

function Title() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const {userInfo,SaveUserInfo} = useContext(UserContext);    

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

  const handleLoggedin = () => {
    setIsLoggedin(true);
  }
  const handleLoggedout = () => {
    setIsLoggedin(false);
    localStorage.removeItem('userInfo');
    SaveUserInfo('');
  }
  const items = [
    {
      label: <a href="http://localhost:4000/user">个人中心</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <a href="http://localhost:4000">返回首页</a>,
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: <div onClick={handleLoggedout}>退出登录</div>,
      key: '3',
    },
  ];
  /*useEffect(() => {
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
  }, []);*/
  return (
    <div className="title-wrapper">
      <div style={{ display: "flex" }}>
        <img className="title-logo" src='/img.png'></img>
        <div className="title-search-input">
        </div>
      </div>
      <div className="title-action">
        {userInfo.nickname ? (
          <>
  <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button className="user-nickname-button"><div className="user-nickname">欢迎 {userInfo.nickname}</div></Button>
      </Dropdown>
          </>
      ) : null }
      {!userInfo.nickname ? (
        <>
        <div className="title-login" onClick={handleLoginClick}>登录</div>
        {showLogin && (
          <div className="overlay">
            <Login onClose={handleCloseLogin} goRegister={handleGoRegister} handleLoggedin={handleLoggedin}/>
        </div>)}
        <div className="title-sign" onClick={handleGoRegister}>注册</div>
        {showRegister && (
          <div className="overlay">
          <Register onClose={handleCloseLogin} />
          </div>
        )}
        </>
      ) : null}
      </div>
    </div>
  );
}

export default Title;