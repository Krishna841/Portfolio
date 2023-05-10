import "./navbar.scss";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="logo" height={50} width={50} />
      </div>
      <div className="navbar_links">
        <div className="navbar_links_about">
          <Link to="/about">About</Link>
        </div>
        <div className="navbar_links_projects">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="navbar_links_contact">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
