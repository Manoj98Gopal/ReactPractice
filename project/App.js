import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => {

  return (
  <a href="/">
  <img 
      className="logo"
      alt="Logo"
  src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"/></a>)
}

const Header = () => {
  return (
    
      <div className="header">
        <div>
        <Title />
        </div>
        <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        </div>
        

      </div>
    
  );
};


const data = {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgv_7WcHGDMSb2j_ZbjdqXWr9s0UEumDMag&usqp=CAU",
    name : "Burgar King",
    stars : "4.8",
}

const RestrauntCard = () => {

  return (
    <div className="food-card">
      <img src={data.image} alt="img"/>
      <h2>{data.name}</h2>
      <h3>{data.stars} stars</h3>
    </div>
  )
}

const Body = () => {

  return(
    <div className="food-card-list">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
    </div>
  )
}

const Footr = () => {

  return(
    <h3>I am footer</h3>
  )
}


const Applayout = () => {

  return(
    <>
    <Header />
    <Body/>
    <Footr/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
