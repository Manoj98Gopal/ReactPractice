import React from "react";

function LoginPage({ data }) {
  return (
    <div className="center-content">
      <h1>Login page of {data}</h1>
      <div>
        <a href={`/${data != "User" ? "user" : "admin"}-login`}>
          change to {data != "User" ? "user" : "admin"}
        </a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
      <div>
        <a href="/About">About</a>
      </div>
      <div>
        <a href={`/${data != "User" ? "user" : "admin"}-dashboard`}>Login</a>
      </div>
    </div>
  );
}

export default LoginPage;
