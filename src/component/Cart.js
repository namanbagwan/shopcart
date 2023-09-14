import React from 'react';

function Cart({cartItems}) {

  console.log(cartItems,"cartpage")

  if (!cartItems || cartItems.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
