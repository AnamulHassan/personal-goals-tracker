import React from 'react';
import './Header.css';
import img from '../../logo.png';
const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={img} alt="" />
      <p className="header-description">
        This website helps you track how much time you spend on specific tasks
        to become more efficient at reaching your goals. This allows you — and
        your team members — to develop better work habits while increasing your
        efficiency overall.
      </p>
    </div>
  );
};

export default Header;
