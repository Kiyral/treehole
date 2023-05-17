import "./App.css";
import Home from "./pages/home/home";
import Title from "./components/title/title";
import { ConfigProvider } from "antd";
import { UserProvider } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/user/user';

function App() {
  return (
          <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7cb0a7",
        },
      }}
    >
        <BrowserRouter>
        <UserProvider>
        <Title />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>}>
        </Route>
      </Routes>
      </UserProvider>
    </BrowserRouter>

    </ConfigProvider>
  );
}

export default App;
