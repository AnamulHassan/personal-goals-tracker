import './App.css';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <div className="left-side-container">
        <Header></Header>
        <Cards></Cards>
        <Questions></Questions>
        <Footer></Footer>
      </div>
      <div className="right-side-container">
        <Navigation></Navigation>
      </div>
    </div>
  );
}

export default App;
