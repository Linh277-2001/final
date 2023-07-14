import { RetweetOutlined,MenuFoldOutlined,MenuUnfoldOutlined, CalculatorOutlined, UserOutlined,SwapOutlined , VideoCameraOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Layout, Menu,Image,Button,Avatar, Typography,Space } from 'antd';
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Calculator from "./calculator/App";
import Chessboard from "./chessboard/App";
import Pomodoro from "./pomodoro/App";
import Helloworld from "./helloworld/App";
import Convert from "./convert/App";
import Quote from "./quote/App";
import "./App.css";
import { useState } from 'react';
import reactImage from './assets/vite.svg';

const { Header, Content, Footer, Sider } = Layout;
const {Title}= Typography;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const menuItems = [
    {
      key: '/helloworld',
      icon: <UserOutlined />,
      label: 'Hello World',
      link: '/helloworld'
    },
    {
      key: '/convert',
      icon: <SwapOutlined />,
      label: 'Convert',
      link: '/convert'
    },
    {
      key: '/chessboard',
      icon: <VideoCameraOutlined />,
      label: 'Chess Board',
      link: '/chessboard'
    },
    {
      key: '/calculator',
      icon: <CalculatorOutlined />,
      label: 'Calculator',
      link: '/calculator'
    },
    {
      key: '/pomodoro',
      icon: <ClockCircleOutlined />,
      label: 'Pomodoro',
      link: '/pomodoro'
    },
    {
      key: '/quote',
      icon: <RetweetOutlined />,
      label: 'Quote',
      link: '/quote'
    },
  ];

  return (
    <BrowserRouter >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{margin:"-8px"}} theme="dark" trigger={null} collapsible collapsed={collapsed}>
          <Header style={{ paddingInline:"0"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
              <Image 
                width={50}
                height={50}
                preview={false}
                src={reactImage}
              />
            </div>
          </Header>
          <div className="demo-logo-vertical" />
          <Menu inlineCollapsed={collapsed} theme="dark"  mode="inline" defaultSelectedKeys={['1']}>
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{backgroundColor: '#fff',paddingInline:"10px", display:"flex",justifyContent:"space-between", alignItems:"center"}}>
            <Button
              onClick={toggleCollapsed}
              style={{
                width: 40,
                paddingLeft: 10,
                marginLeft: 20,
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Space>
              <Title style={{fontSize:"20px"}}> Nguyen Van Linh</Title>
              <Avatar style={{marginBottom:"12px"}} size={35} icon={<UserOutlined />} />
            </Space>
          </Header>
          <Content style={{ padding: '20px' }}>
            <Switch>
              <Route path="/helloworld">
                <Helloworld/>
              </Route>
              <Route path="/convert">
                <Convert/>
              </Route>
              <Route path="/chessboard">
                <Chessboard />
              </Route>
              <Route path="/calculator">
                <Calculator />
              </Route>
              <Route path="/pomodoro">
                <Pomodoro />
              </Route>
              <Route path="/quote">
                <Quote />
              </Route>
              <Route path="/quote">
                <Pomodoro />
              </Route>
              <Route exact path="/">
                <h1>Home Page</h1>
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2023 Created by Linh
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;