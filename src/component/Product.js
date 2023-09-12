import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Product() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0); // Initialize quantity with 1

    useEffect(() => {
        // Fetch data for a single product based on the ID
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((productData) => {
                setProduct(productData);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, [id]);

    const handleIncreaseQuantity = () => {
        // Increase the product quantity
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        // Decrease the product quantity, but ensure it doesn't go below 1
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
   
    return (
        <>
            <Header />
            <div className='container'>
                {product && (
                    <div className="product-details">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} loading="lazy" />
                        <p className="product-price">${product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <div className="quantity-container">
                            <button className="quantity-button" onClick={handleDecreaseQuantity}>
                                -
                            </button>
                            <span className="quantity">{quantity}</span>
                            <button className="quantity-button" onClick={handleIncreaseQuantity}>
                                +
                            </button>
                        </div>
                        <div className="total-price">
                            Total: ${(quantity * product.price).toFixed(2)}
                        </div>
                        <div className="button-container1">
                            <button className="add-to-cart-button">
                                Add To Cart
                            </button>
                            <button className="order-now-button">Order Now</button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Product;
