import React from "react";
import PageGif from "../img/404page.gif";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function PageError() {
    return (
        <>
            <Header />
            <p className="heading404">404 Page Not Found</p>
            <img src={PageGif} alt="" className="page-gif" />
            <div className="button-container2">
                <button className="home-button">
                    <Link to="/" className="home-link">Go To Home Page</Link>
                </button>
            </div>
            <Footer />
        </>
    )
}

export default PageError;