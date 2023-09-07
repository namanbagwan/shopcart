import React, { useState } from "react";
import logo from '../img/logo.jpg';
import '../App.css';
// import {IoMdArrowDropdown} from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
function Footer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <footer>

            </footer>
        </>
    );
}

export default Footer;