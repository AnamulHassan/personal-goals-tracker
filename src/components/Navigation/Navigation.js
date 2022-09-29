import React from 'react';
import './Navigation.css';
import user from '../../img/user.jpg';
import location from '../../img/location.png';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="user-info">
        <img className="user-img" src={user} alt="" />
        <div>
          <p className="user-name">Mahmudul Hassan</p>
          <p className="user-location">
            <span>
              <img className="location-user" src={location} alt="" />
            </span>
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="user-other-info">
        <ul className="info-item">
          <li>Profession</li>
          <li>Student</li>
        </ul>
        <ul className="info-item">
          <li>Age</li>
          <li>
            28 <span>yrs</span>
          </li>
        </ul>
      </div>
      <div className="break-btn-container">
        <h3>Add a Break</h3>
        <ul className="btn-break-item">
          <li className="btn-break">
            <span>5m</span>
          </li>
          <li className="btn-break">
            <span>10m</span>
          </li>
          <li className="btn-break">
            <span>10m</span>
          </li>
          <li className="btn-break">
            <span>20m</span>
          </li>
          <li className="btn-break">
            <span>20m</span>
          </li>
        </ul>
      </div>
      <div className="goal-details">
        <h3>Goal Details</h3>
        <ul>
          <li>Working time</li>
          <li>200 minutes</li>
        </ul>
        <ul>
          <li>Break time</li>
          <li>200 minutes</li>
        </ul>
        <button className="btn btn-navigation"> Activity Completed</button>
      </div>
    </div>
  );
};

export default Navigation;
