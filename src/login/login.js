import { LockOutlined, UserOutlined, CloseOutlined} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import axios from 'axios'
import './login.css'
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
const Login = (props) => {
  const onFinish = (values) => {
    const data = {
        email: values.email,
        password: values.password,
      };
      
      const headers = {
        'Content-Type': 'application/json'
      };
      
      axios.post('http://localhost:3000/api/login', data, { headers })
        .then(response => {
            console.log(response.data);
            alert('登陆成功');
            props.onClose();
        })
        .catch(error => {
            console.error(error);
            alert(error.response.data.message);
        });
  };
  return (
    <div className='background'>
    <div className='closebutton'><Button type="primary" shape="circle" icon={<CloseOutlined />} size="medium" block='true' onClick={props.onClose}/></div>
    <Form
    {...formItemLayout}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      size='large'
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: '请输入你的邮箱!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入你的密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" {...tailFormItemLayout}>
          登录
        </Button>
        <a href="#" onClick={props.goRegister}>现在注册!</a>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;