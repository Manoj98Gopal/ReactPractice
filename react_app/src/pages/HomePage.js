import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { HomeOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons"; // Import icons

const { Header, Content, Footer } = Layout;

function HomePage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"flex-end",
          gap:"1rem"
        }}
      >
        <div className="demo-logo" />

       <Button type="primary">Admin</Button>
       <Button type="primary">Candidate</Button>
       <Button type="primary">Recruiter</Button>

      </Header>

      <Content
        style={{
          padding: "0 50px",
          background: `url('path/to/background-image.jpg')`, 
          backgroundSize: "cover",
          minHeight: "calc(100vh - 134px)", 
        }}
      >
        Content
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Manuman ©2023 Created by gopalson's
      </Footer>
    </Layout>
  );
}

export default HomePage;
