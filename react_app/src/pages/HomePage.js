import React from "react";
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { Button, Layout,theme } from "antd";
import bgImage from "../background.jpg"


const { Header, Content, Footer } = Layout;

function HomePage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

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
       <Button type="primary" onClick={() => {navigate("pdfViewer")}}  >Candidate</Button>
       <Button type="primary">Recruiter</Button>

      </Header>

      <Content
        style={{
          padding: "0 50px",
          background: `url(${bgImage})`, 
          backgroundSize: "70%", // or "contain" or "100% auto"
          backgroundPosition: "center", 
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
