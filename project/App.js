import React from "react";
import  ReactDOM  from "react-dom/client";


 const heading1 = React.createElement("h1",{id:"title"},"Hello this is React it is from parcel!");
 const pharagraf1 = React.createElement("p",{id:"phra"},"Hello this is React! Hello this is React Hello this is React");


 const heading2 = React.createElement("h2",{id:"title"},"This heading is 2");
 const pharagraf2 = React.createElement("p",{id:"phra"},"Hello this is React! Hello this is React Hello this is React");


 const heading3 = React.createElement("h3",{id:"title"},"This heading is 3");

 const container = React.createElement("div",{id:"container"},[heading1,pharagraf1])

 const container1 = React.createElement("div",{id:"container1"},[heading1,pharagraf2])

console.log("I am running ...!")

 const root = ReactDOM.createRoot(document.getElementById("root"))

 root.render([container,container1,heading3])

