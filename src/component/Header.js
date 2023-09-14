import React from "react";
import logo from '../img/logo.jpg';
import '../App.css';
import { BsCart3 } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Header() {

  return (
    <header>
      <img src={logo} alt="Logo" width="400px" height="200px" />
      <div className="header">
        <ul style={{ marginLeft: "80px" }}>
          <Link to="/" className="menubar">Home</Link>
          <Link to="/about" className="menubar">About</Link>
          <Link to="/contact" className="menubar">Contact</Link>
          <Link to="/shop" className="menubar">Shop</Link>
          <Link to="/booking" className="menubar">Booking</Link>
          <Link to="/cart" className="menubar">Cart</Link>     
          <Link to="/cart" className="cart"><BsCart3 /></Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
