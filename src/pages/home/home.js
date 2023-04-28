import React from "react";
import "./home.css";
import { Input, Menu } from "antd";
import {
  SearchOutlined,
  StarOutlined,
  DislikeOutlined,
  QuestionOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Home() {
  const onSearch = (value) => console.log(value);
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
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="home-wrapper">
      <div className="home-background">
        <img className="home-logo" src="img2.png" />
        <div className="home-search">
          <Input
            placeholder="搜索树洞"
            suffix={
              <SearchOutlined
                style={{
                  color: "#7cb0a7",
                  fontSize: "20px",
                  marginRight: "10px",
                }}
              />
            }
            className="home-search-input"
            size={"large"}
            allowClear
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
        <div className="home-content"></div>
      </div>
    </div>
  );
}

export default Home;
