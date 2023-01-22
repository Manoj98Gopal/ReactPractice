import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
console.log("child constructor");
        this.state = {
            count : 2,
            jsonData :"",
        }
    }

  //  async componentDidMount(){


  //       console.log("child  did mount ");

  //       const data = await fetch("https://api.github.com/users/akshaymarch7")
  //       const json = await data.json()
  //         console.log("json data ==",json);
  //         this.setState({
  //             jsonData : json
  //         })

  //         console.log("child did mount after api");
  //   }

    componentDidMount (){
      console.log("child second did mount")

     


    }



    componentDidUpdate(){
      console.log("child I am update component")
    }

    componentWillUnmount(){
      console.log("this will unmount..")

      


    }


  render() {

    console.log("child render method")
    return (
      <>
        <h1>This is profile</h1>
        
        <img src={this.state.jsonData.avatar_url} />

        <h3>Name : {this.state.jsonData.name}</h3>
      </>
    );
  }
}

export default Profile;
