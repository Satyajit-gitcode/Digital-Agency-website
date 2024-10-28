import logo from './logo.svg';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Navbar from './Components/Navbar';
import Article1 from './Components/Article1';
import Article2 from './Components/Article2';
import Article3 from './Components/Article3';
import Article4 from './Components/Article4';
import Footer from './Components/Footer';
import PreFooter from './Components/PreFooter';

function App() {
  return (
    <div>
      <Navbar/>
      <Article1/>
      <Article2/>
      <Article3/>
      <Article4/>
      <PreFooter/>
      <Footer/>
      
    </div>
  );
}

export default App;
