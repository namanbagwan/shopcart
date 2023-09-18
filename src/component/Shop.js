import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css'; // Import your CSS file for Shop styling

function Shop() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="shop-container">
                    {data.map((item) => {
                        return (
                            <div className="shop-item" key={item.id}>
                                <li>
                                    <div className="shop-title">
                                        <Link to={`/product/${item.id}`} target="_blank" style={{ color: "black", textDecoration: "none" }}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    <div className="shop-image">
                                        <Link to={`/product/${item.id}`} target="_blank">
                                            <img src={item.image} alt="" width="220px" height="300px" loading="lazy" />
                                        </Link>
                                    </div>
                                    <div className="button-container1">
                                        <button className="add-to-cart-button">
                                        <Link to={`/product/${item.id}`} target="_blank" style={{ color: "black", textDecoration: "none" }} >Read More</Link>
                                        </button>

                                    </div>
                                </li>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Shop;
