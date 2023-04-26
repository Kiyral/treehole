import React from "react";
import "./title.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Title() {
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
        <div className="title-login">登录</div>
        <div className="title-sign">注册</div>
      </div>
    </div>
  );
}

export default Title;
