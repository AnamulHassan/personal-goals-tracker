import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetch('my-activities.json')
      .then(response => response.json())
      .then(data => setCardsData(data));
  }, []);
  return (
    <div className="cards-container">
      {cardsData.map(cardData => (
        <Card key={cardData.id} cardData={cardData}></Card>
      ))}
    </div>
  );
};

export default Cards;
