import {  PieChartOutlined,DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Modification from '../../components/modification/modification';
import Create from '../../components/create/create';
const { Header, Content,  Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('我的树洞', '1', <PieChartOutlined />),
  getItem('写树洞', '2', <DesktopOutlined />),
];
const User = () => {
    const [selectedKey, setSelectedKey] = useState('1');
    const handleMenuSelect = (key) => {
       setSelectedKey(key.key);
    };
  
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} selectedKeys={[selectedKey]} onSelect={handleMenuSelect} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '30px 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {selectedKey === '1' && <Modification/>}
            {selectedKey === '2' && <Create/>}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default User;