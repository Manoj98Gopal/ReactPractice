import { Link } from "react-router-dom";
import Logo from "../../public/foodLogo.png";

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
  return (
    <div className="flex justify-between bg-orange-200 shadow-xl mb-2" >
      <div>
        <Title />
      </div>

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
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
