import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Questions from './components/Questions/Questions';

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  useEffect(() => {
    fetch('my-activities.json')
      .then(response => response.json())
      .then(data => setCardsData(data));
  }, []);

  const handlerAddList = cardsData => {
    const oldData = retrievedData();
    const { name, id, time } = cardsData;
    let newCardInfo = { name, id, time };
    if (oldData) {
      console.log('if');
      const updateCardInfo = [...oldData, newCardInfo];
      setCardInfo(updateCardInfo);
      localStorage.setItem('card-info', JSON.stringify(updateCardInfo));
    } else {
      setCardInfo([newCardInfo]);
      localStorage.setItem('card-info', JSON.stringify([newCardInfo]));
    }
  };
  // console.log(cardInfo);
  const retrievedData = () => {
    const rawData = localStorage.getItem('card-info');
    const parseData = JSON.parse(rawData);
    return parseData;
  };
  return (
    <div>
      <div className="App">
        <div className="left-side-container">
          <Header></Header>
          <Cards cardsData={cardsData} handlerAddList={handlerAddList}></Cards>
          <Questions></Questions>
        </div>
        <div className="right-side-container">
          <Navigation cardInfo={cardInfo}></Navigation>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
