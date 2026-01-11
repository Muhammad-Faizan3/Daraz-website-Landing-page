import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Carousel from "./Components/Carousel";
import Image from './Components/Image';
import FlashSale from "./Components/FlashSale";
import Categories from './Components/Categories';
import JustForYou from "./Components/JustForYou";
import ProductDetail from "./Components/ProductDetail";
import Button from './Components/Button';
import Footer from './Components/Footer';
import FooterMain from './Components/FooterMain';
import FooterBottom from "./Components/FooterBottom";
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <div className='bg-gray-50'>
        <Carousel />
        <Image />
        <div className="max-w-7xl mx-auto">
          <FlashSale />
        </div>
        <div className="max-w-7xl mx-auto">
          <Categories />
        </div>

        <Routes>
          <Route path="/" element={<JustForYou />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <Button />
        <Footer />
        <FooterMain />
        <FooterBottom />
      </div>
    </Router>
  )
}

export default App;
