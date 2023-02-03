import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo.jpg";

const footerAboutLinks = [
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Privacy",
    path: "/privacy",
  },
  {
    display: "Terms and Conditions",
    path: "/terms",
  },
  {
    display: "Career",
    path: "/career",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
];

const footerCustomerLinks = [
  {
    display: "Return Policy",
    path: "/return",
  },
  {
    display: "Refun Policy",
    path: "/refun",
  },
  {
    display: "Shipping Policy",
    path: "/shipping",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Fashion Store</div>
            <div className="footer__content">
              <p>&copy; All Rights Reserved.</p>
              <p>
                Customer Care: <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Links</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Important Links</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Since 2007 We have been building premium quality fashion products
              for merchants and customers around the globe.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
