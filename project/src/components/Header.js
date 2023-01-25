import { Link } from "react-router-dom";
import Logo from "../../public/foodLogo.png";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="Logo" src={Logo} />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div>
        <Title />
      </div>

      <div className="nav-list">
        <ul>
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
