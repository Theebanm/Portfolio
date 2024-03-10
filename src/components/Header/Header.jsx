import React from "react";
import "./Header.css";
import profile from "../../assets/profile.png";
import Typical from "react-typical";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hy! Am </h1>
        <h2 className="fullname">Theeban </h2>
        <h2>
          I am {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Front End Developer 🎉",
              1000,
              "Back End Developer 💾",
              1000,
              "React Developer 💻 ",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          "Theeban is a skilled full-stack developer with a strong foundation in
          front-end technologies like HTML, CSS, and JavaScript, complemented by
          expertise in back-end technologies such as Node.js, Express, and
          MongoDB."
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal "></i>
          <i className="fa-brands fa-cc-visa "></i>
          <i className="fa-brands fa-cc-master "></i>
          <i className="fa-brands fa-cc-amex "></i>
        </div>
      </div>

      {/* Image container */}
      <div className="profile-img-container">
        <img src={profile} alt="profile img" /> <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default Header;
