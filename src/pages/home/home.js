import React from "react";
import "./home.css";
import { Input, Menu } from "antd";
import {
  StarOutlined,
  DislikeOutlined,
  QuestionOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { useState, useContext } from "react";
import HomeList from "../../components/HomeList/HomeList";

const { Search } = Input;
function Home() {
  const items = [
    {
      label: "分享",
      key: "share",
      icon: <StarOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: "吐槽",
      key: "complain",
      icon: <DislikeOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: "提问",
      key: "ask",
      icon: <QuestionOutlined style={{ fontSize: "20px" }} />,
    },
    {
      label: "美食",
      key: "food",
      icon: <CoffeeOutlined style={{ fontSize: "20px" }} />,
    },
  ];
  const [current, setCurrent] = useState("share");
  const [content, setContent] = useState("");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const onSearch = (value) => setContent(value);
  return (
    <div className="home-wrapper">
      <div className="home-background">
        <img className="home-logo" src="img2.png" />
        <div className="home-search">
        <Search
      placeholder="搜索内容"
      allowClear
      enterButton
      size="large"
      onSearch={onSearch}
    />
        </div>
      </div>

      <div className="home-content-wrapper">
        <Menu
          onClick={handleClick}
          className="home-menu"
          items={items}
          selectedKeys={[current]}
          mode="horizontal"
        />
        <div className="home-content"><HomeList current={current} content={content}/></div>
      </div>
    </div>
  );
}

export default Home;
