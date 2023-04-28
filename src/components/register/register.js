import { Button, Form, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";
import "./register.css";
const formItemLayout = {
  labelcol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrappercol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = (props) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const data = {
      email: values.email,
      password: values.password,
      nickname: values.nickname,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:3000/api/register", data, { headers })
      .then((response) => {
        console.log(response.data);
        alert("注册成功");
        props.onClose();
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.message);
      });
  };
  const handleCloseClick = () => {
    props.onClose();
  };
  return (
    <div className="background">
      <div className="closebutton">
        <Button
          type="primary"
          shape="circle"
          icon={<CloseOutlined />}
          size="medium"
          block="true"
          onClick={handleCloseClick}
        />
      </div>
      <Form
        {...formItemLayout}
        form={form}
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        style={{
          maxWidth: 700,
        }}
        scrollToFirstError
        size="large"
      >
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: "email",
              message: "请输入有效的邮箱地址!",
            },
            {
              required: true,
              message: "请输入你的邮箱!",
            },
          ]}
          style={{
            marginTop: "20px",
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请输入你的密码!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请确认你的密码!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="昵称"
          rules={[
            {
              required: true,
              message: "请输入你想要的昵称!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
