import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./public/logo.jpeg";
import userIcon from "./public/userIcon.png";

const Header = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div>
        <img src={Logo} style={{ borderRadius: "40px", width: "65px",position:"relative",left:"20px" }} />
      </div>
      <div style={{width:"100%",position:"relative",left:"200px"}}>
        <input
          style={{ width: "70%", height: "20px", borderRadius: "10px",padding:"8px 14px 8px 32px",fontSize:"17px" }}
          placeholder="Search here ...."
        />
      </div>
      <div>
        <img src={userIcon} style={{ width: "90px",position:"relative",right:"35px",top:"10px" }} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
