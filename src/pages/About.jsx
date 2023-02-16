import React from "react";
import styled from "styled-components";
import lady from "../assets/images/about/lady.jpg";
import bg from "../assets/images/about/bg.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <AboutContainer>
      <section className="about-section">
        <div className="container">
          <div className="row clearfix">
            <div className="content-column ">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">About Us</div>
                  <h2>
                    We Are The Leader In <br /> The Ecommerce
                  </h2>
                </div>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </div>
                <div className="email">
                  Request Quote:{" "}
                  <span className="theme_color">ramrachaim@gmail.com</span>
                </div>
                <Link to="/contact" className="theme-btn btn-style-three">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="image-column">
              <div
                className="inner-column "
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img src={lady} alt="" />
                  <div className="overlay-box">
                    <div className="year-box">
                      <span className="number">15</span>Years of <br />{" "}
                      Ecommerce <br /> Business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  .about-section {
    position: relative;
    padding: 60px 0px;
  }

  .about-section .content-column {
    position: relative;
    margin-bottom: 40px;
    flex: 1;
  }
  .row {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .about-section .content-column .inner-column {
    position: relative;
    padding-top: 50px;
    padding-right: 100px;
  }

  .about-section .content-column .text {
    position: relative;
    color: #777777;
    font-size: 15px;
    line-height: 2em;
    margin-bottom: 40px;
  }

  .about-section .content-column .email {
    position: relative;
    color: #252525;
    font-weight: 700;
    margin-bottom: 50px;
  }

  .about-section .image-column {
    position: relative;
    margin-bottom: 50px;
    flex: 1;
  }

  .about-section .image-column .inner-column {
    position: relative;
    padding: 40px 40px 0px 0px;
    margin-left: 50px;
  }

  .about-section .image-column .inner-column:after {
    position: absolute;
    content: "";
    right: 0px;
    top: 0px;
    left: 40px;
    bottom: 100px;
    z-index: -1;
    border: 2px solid #d7a449;
  }

  .about-section .image-column .inner-column .image {
    position: relative;
  }

  .about-section .image-column .inner-column .image:before {
    position: absolute;
    content: "";
    left: -50px;
    bottom: -50px;
    width: 299px;
    height: 299px;
    background: url("img/pattern-2.png") no-repeat;
  }

  .about-section .image-column .inner-column .image img {
    position: relative;
    width: 100%;
    display: block;
  }

  .about-section .image-column .inner-column .image .overlay-box {
    position: absolute;
    left: 40px;
    bottom: 48px;
  }

  .about-section .image-column .inner-column .image .overlay-box .year-box {
    position: relative;
    color: #ebebeb;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4em;
    padding-left: 125px;
  }

  .about-section
    .image-column
    .inner-column
    .image
    .overlay-box
    .year-box
    .number {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 110px;
    height: 110px;
    color: #d7a449;
    font-size: 68px;
    font-weight: 700;
    line-height: 105px;
    text-align: center;
    background-color: #ffffff;
    border: 1px solid #d7a449;
  }
  .about-section .btn-style-three:before {
    position: absolute;
    content: "";
    left: 10px;
    top: 10px;
    z-index: -1;
    right: -10px;
    bottom: -10px;
    background: url("https://i.ibb.co/DKn55Qz/pattern-1.jpg") repeat;
  }
  .about-section .btn-style-three:hover {
    color: #ffffff;
    background: #d7a449;
  }
  .about-section .btn-style-three {
    position: relative;
    line-height: 24px;
    color: #252525;
    font-size: 15px;
    font-weight: 700;
    background: none;
    display: inline-block;
    padding: 11px 40px;
    background-color: #ffffff;
    text-transform: capitalize;
    border: 2px solid #d7a449;
    font-family: "Arimo", sans-serif;
  }
  .sec-title2 {
    color: #fff;
  }
  .sec-title {
    position: relative;
    padding-bottom: 40px;
  }
  .sec-title .title {
    position: relative;
    color: #d7a449;
    font-size: 18px;
    font-weight: 700;
    padding-right: 50px;
    margin-bottom: 15px;
    display: inline-block;
    text-transform: capitalize;
  }
  .sec-title .title:before {
    position: absolute;
    content: "";
    right: 0px;
    bottom: 7px;
    width: 40px;
    height: 1px;
    background-color: #bbbbbb;
  }
`;
