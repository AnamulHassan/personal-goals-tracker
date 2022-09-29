import React from 'react';
import './Footer.css';
import img from '../../logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={img} alt="logo" />
      <p className="copyright-text">
        Personal goals Tracker {new Date().getFullYear()}, &copy; All right
        reserved.
      </p>
    </div>
  );
};

export default Footer;
