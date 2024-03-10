import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* des */}
        <div className="services-des-container">
          <h1>
            My Aswome <span>Services</span>
          </h1>
          <p>
            Web Development: Designing and developing responsive websites .
            Full-Stack Development: Expertise in both front-end and back-end
            technologies, including frameworks like React.js for the front end
            and Node.js for the back end . Database Management: Proficient in
            database management systems like MongoDB. API Development: Creating
            robust APIs using technologies like Express.js, enabling smooth
            communication between the front end and back end of web
            applications.
          </p>
          <button>Hire Me</button>
        </div>
        {/* itens */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Designing and developing responsive websites and web
                applications using modern front-end technologies such as HTML,
                CSS, and JavaScript.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Desktop Development</h3>
              <p>
                "Offering bespoke desktop development solutions tailored to your
                needs, our website showcases our expertise in creating
                high-performance, user-friendly desktop applications. We
                specialize in delivering custom solutions using the latest
                technologies and best practices in desktop development.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>UX Design</h3>
              <p>
                Our website specializes in UX design and development, offering
                tailored solutions to enhance user experiences. From intuitive
                interfaces to seamless interactions, we combine creativity with
                technical expertise to craft websites that engage and delight
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
