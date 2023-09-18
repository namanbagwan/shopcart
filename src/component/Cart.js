import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for Cart styling
import { Link } from 'react-router-dom';

function Cart() {
  // Initialize cartItems state by reading from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);

    // Update the state
    setCartItems(updatedCartItems);

    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity += 1;
      }
      return item;
    });

    // Update the state
    setCartItems(updatedCartItems);

    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        item.quantity -= 1;
      }
      return item;
    });

    // Update the state
    setCartItems(updatedCartItems);

    // Update localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">              
                <p className="item-title">
                  <Link to={`/product/${item.id}`} style={{color:"black"}}>{item.title}</Link></p>
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="quantity-buttons" style={{display:"contents"}}>
                  <button onClick={() => decreaseQuantity(item.id)} className="quantity-button">
                    -
                  </button>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                  <button onClick={() => increaseQuantity(item.id)} className="quantity-button">
                    +
                  </button>
                </div>
                <p className="item-price">Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="remove-button-container">
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            </li>
          ))}
          <li className="cart-total">
            <strong>Total: ${calculateTotal()}</strong>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Cart;
