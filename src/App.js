import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <div className="left-side-container">
        <Header></Header>
        <Cards></Cards>
      </div>
      <div className="right-side-container">
        <Navigation></Navigation>
      </div>
    </div>
  );
}

export default App;
