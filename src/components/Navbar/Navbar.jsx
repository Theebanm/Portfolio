import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">PortFolio</a>
          </li>
          <li>
            <a href="/">Hire Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
