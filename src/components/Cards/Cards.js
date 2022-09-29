import Card from '../Card/Card';
import './Cards.css';

const Cards = ({ cardsData, handlerAddList }) => {
  return (
    <div className="cards-container">
      {cardsData.map(cardData => (
        <Card
          key={cardData.id}
          cardData={cardData}
          handlerAddList={handlerAddList}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
