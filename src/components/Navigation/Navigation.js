import React from 'react';
import './Navigation.css';
import user from '../../img/user.jpg';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="user-info">
        <img className="user-img" src={user} alt="" />
        <div>
          <p className="user-name">Mahmudul Hassan</p>
          <p className="user-location">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 location-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
