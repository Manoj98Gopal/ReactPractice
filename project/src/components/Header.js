import { Link } from "react-router-dom";
import Logo from "../../public/foodLogo.png";
import React,{useContext} from "react";
import Context from "../utils/Context";
import { useSelector, useDispatch } from 'react-redux'

const Title = () => {
  return (
    <div className="w-24 m-3">
    <a href="/">
      <img className="logo" alt="Logo" src={Logo} />
    </a>
    </div>
  );
};

const Header = () => {

    const {user} = useContext(Context);
    const cartCont = useSelector((store) => store.cart.items)

    console.log("cart count =",cartCont)


  return (
    <div className="flex justify-between bg-orange-200 shadow-xl mb-2" >
      <div>
        <Title />
      </div>

      <span className="m-10 text-red-600 font-bold text-xl">{user.name}</span>

      <div>
        <ul className="flex gap-10 m-10 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart = No items:{cartCont.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
