import React, { useState } from "react";
import logo from '../img/logo.jpg';
import '../App.css';
// import {IoMdArrowDropdown} from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logo" width="400px" height="200px" />
        <div className="header">
          <ul style={{ marginLeft: "80px" }}>
            <a href="#" className="menubar">Home</a>
            <a href="#" className="menubar">About</a>
            <a href="#" className="menubar">Contact</a>
            <a href="#" className="menubar">Shop</a>
            <a href="#" className="menubar">Booking</a>
            <a href="#" className="menubar">Cart</a>

            <a href="#" className="menubar" onClick={toggleDropdown}>Product</a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <ul>
                  <li><a href="#" className="dropdown">Option 1</a></li>
                  <li><a href="#" className="dropdown">Option 2</a></li>
                  <li><a href="#" className="dropdown">Option 3</a></li>
                </ul>
              </div>
            )}
            <a href="#" className="cart"><BsCart3 /></a>

          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;