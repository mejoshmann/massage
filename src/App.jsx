import './App.scss';
import Navigation from "./components/navigation/Navigation";
import Home from './components/home/Home';
import Book from './components/book/Book';
import Mobile from './components/mobile/Mobile';
import Packages from './components/packages/Packages';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Home />
    <Book/>
    <Mobile/>
    <Packages/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
