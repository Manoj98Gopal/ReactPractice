import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(" parent  constractor");

    this.state = {
      count: 0,
      occupetion: "FrontEnd developer",
    };
  }

  componentDidMount() {
    console.log("parent component did mount ");
  }

  componentDidUpdate() {
    console.log("parent didUpdate");
  }

  render() {
    console.log(" parent  render method");

    return (
      <div>
        <h1>About us page</h1>
        <h3>This is our practice React about page</h3>
        <h4>Count is : {this.state.count}</h4>
        <h4> Occupetion = {this.state.occupetion}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              occupetion: "Fullstack developer",
            });
          }}
        >
          Click
        </button>
        <Profile name="Manoj Gopal" occupetion={this.state.occupetion} />

      </div>
    );
  }
}

export default About;
