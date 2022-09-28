import React from 'react';
import './Card.css';

const Card = ({ cardData }) => {
  const { id, name, time, description, img } = cardData;
  console.log(description.split(' ').length);
  return (
    <div className="card-container">
      <div>
        <img className="card-img" src={img} alt="" />
      </div>
      <div className="card-info">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="time-require">Time required: {time}m</p>

        <button className="btn btn-card">Add to list</button>
      </div>
    </div>
  );
};

export default Card;
