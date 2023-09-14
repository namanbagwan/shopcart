import './App.css';
import React from 'react';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Booking from './component/Booking';
import Cart from './component/Cart';
import Contact from './component/Contact';
import Product from './component/Product';
import Shop from './component/Shop';
import PageError from './component/Page404';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/*" element={<PageError/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
