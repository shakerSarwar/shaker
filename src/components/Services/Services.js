import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Front-End Development</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Front-End Development</h3>
              <p className="services__modal-description">
                Service with more than three years experience.Providing Quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    I Develop User Interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">Web Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    Single Page Application
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    Html, CSS, Bootstrap, Tailwind CSS, Javascript, jQuery,
                    React js , Next js
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Full-Stack Development</h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Full-Stack Development</h3>
              <p className="services__modal-description">
                Service with more than three years experience.Providing Quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    I Develop User Interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">Web Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    Expertise: Html, CSS, Bootstrap, Tailwind CSS, Javascript,
                    jQuery, React js , Next js
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    Comfortable: PHP, Mysql, Nodejs, Express, MongoDB, Firebase,
                    Typescript, React Bootstrap.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title">Mobile App Development</h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Mobile App Development</h3>
              <p className="services__modal-description">
                Service with more than three years experience.Providing Quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">
                    I Develop User Interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">Android Development</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">React Native</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle  services__modal_icon"></i>
                  <p className="services__modal-info">IOS Development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
