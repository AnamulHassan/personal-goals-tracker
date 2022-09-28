import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="left-side-container">
        <Header></Header>
        <Cards></Cards>
      </div>
      <div className="right-side-container"></div>
    </div>
  );
}

export default App;
