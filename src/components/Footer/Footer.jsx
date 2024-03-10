import React from "react";
import logo from "../../assets/logo.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      {/* copy right */}
      <div className="footer-c-right">
        <p>© 2024 | THEEBAN M</p>
      </div>
      {/* social */}
      <ul className="footer-s-media">
        <li>
          <a href="https://www.youtube.com/channel/UC0HlQa-6kXzSmkSKf-mJFeg">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC0HlQa-6kXzSmkSKf-mJFeg">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC0HlQa-6kXzSmkSKf-mJFeg">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC0HlQa-6kXzSmkSKf-mJFeg">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC0HlQa-6kXzSmkSKf-mJFeg">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
