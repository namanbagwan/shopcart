import React, { useState } from "react";
import logo from '../img/logo.jpg';
import '../App.css';
// import {IoMdArrowDropdown} from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import Category from "./Category";
import { Link } from "react-router-dom";
function Header({ categories, selectedCategory, onSelectCategory }) {
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
            <Link to="/" className="menubar">Home</Link>
            <Link to="/about" className="menubar">About</Link>
            <Link to="/contact" className="menubar">Contact</Link>
            <Link to="/shop" className="menubar">Shop</Link>
            <Link to="/Bookig" className="menubar">Booking</Link>
            <Link to="/cart" className="menubar">Cart</Link>

            <Link className="menubar" onClick={toggleDropdown}>Product</Link>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Category
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onSelectCategory={onSelectCategory}
                    />
                  </li>
                </ul>
              </div>
            )}
            <Link to="/cart" className="cart"><BsCart3 /></Link>

          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;