import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "/public/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
