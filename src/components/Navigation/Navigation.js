import React, { useEffect, useState } from 'react';
import './Navigation.css';
import user from '../../img/user.jpg';
import location from '../../img/location.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = ({ cardInfo }) => {
  const notify = () => toast('Activity Completed');
  const time = cardInfo
    ?.map(card => +card.time)
    .reduce((previous, current) => previous + current, 0);

  const [breakTime, setBreakTime] = useState('');
  useEffect(() => {
    setBreakTime(localStorage.getItem('break-time'));
  }, []);
  const handleBreakTime = e => {
    const button = e.target.childNodes[0].nodeValue;
    if (button) {
      const selectedBreakTime = button.slice(0, -1);
      setBreakTime(selectedBreakTime);
      localStorage.setItem('break-time', selectedBreakTime);
    } else {
      return;
    }
  };
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
        <ul onClick={e => handleBreakTime(e)} className="btn-break-item">
          <li className="btn-break">
            <span>5m</span>
          </li>
          <li className="btn-break">
            <span>10m</span>
          </li>
          <li className="btn-break">
            <span>15m</span>
          </li>
          <li className="btn-break">
            <span>20m</span>
          </li>
          <li className="btn-break">
            <span>30m</span>
          </li>
        </ul>
      </div>
      <div className="goal-details">
        <h3>Goal Details</h3>
        <ul>
          <li>Working time</li>
          <li>{time ? time + 'minutes' : '0 minutes'}</li>
        </ul>
        <ul>
          <li>Break time</li>
          <li>{breakTime ? breakTime + ' minutes' : '0 minutes'}</li>
        </ul>
        <div>
          <button onClick={notify} className="btn btn-navigation">
            {' '}
            Activity Completed
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
