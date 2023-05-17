import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    nickname: ''
  });

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []); // 仅在组件挂载时执行一次

  const SaveUserInfo = (info) => {
    setUserInfo({ nickname: info });
    localStorage.setItem('userInfo', JSON.stringify({ nickname: info }));
  };

  return (
    <UserContext.Provider value={{ userInfo, SaveUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };