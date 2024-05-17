import './App.scss';
import Navigation from "./components/navigation/Navigation";
import Home from './components/home/Home';
import Book from './components/book/Book';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Home />
    <Book/>
    </div>
  );
}

export default App;
