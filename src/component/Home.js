import React, { useState, useEffect } from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
import Cart from './Cart';


function Home() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  
  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        // Extract and set unique categories from the data
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleIncreaseQuantity = (productId) => {
    // Increase the product quantity
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    // Decrease the product quantity, but ensure it doesn't go below 0
    if (quantities[productId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const productId in quantities) {
      const quantity = quantities[productId];
      const product = data.find((item) => item.id === parseInt(productId));
      if (product) {
        subtotal += quantity * product.price;
      }
    }
    return subtotal.toFixed(2);
  };

  const addToCart = (productId) => {
    const product = data.find((item) => item.id === parseInt(productId));
    if (product) {
      const updatedCartItems = [...cartItems];
      const existingCartItem = updatedCartItems.find((item) => item.id === product.id);
  
      if (existingCartItem) {
        // If the item is already in the cart, increase its quantity by 1
        existingCartItem.quantity += 1;
      } else {
        // If it's a new item, add it to the cart with a quantity of 1
        updatedCartItems.push({ ...product, quantity: 1 });
      }
  
      // Update the state
      setCartItems(updatedCartItems);
  
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };
  
  

  return (
    <>
      <div className='container'>

        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={filterByCategory}
        />

        <div className="total-subtotal">
          Total Subtotal: ${calculateSubtotal()}
        </div>
        <ul className="item-list">
          {data.map((item) => {
            // Check if the selected category is 'all' or if the item's category matches the selected category
            const isCategoryMatch = selectedCategory === 'all' || selectedCategory === item.category;

            // Render the item only if it matches the selected category
            return (
              isCategoryMatch && (
                <li key={item.id} className="item">
                  <div className="item-title">
                    <Link
                      style={{ color: "black", textDecoration: "none", fontSize: "large" }}
                      to={`/product/${item.id}`}
                      target="_blank"
                    >
                      {item.title}
                    </Link>
                  </div>
                  <div className="item-image">
                    <img src={item.image} alt="" width="220px" height="300px" loading="lazy" />
                  </div>
                  <div className="item-button">
                    <p style={{ color: 'black', fontSize: '20px' }}>${item.price}</p>
                  </div>
                  <div className="quantity-container">
                    <button className="quantity-button" onClick={() => handleDecreaseQuantity(item.id)}>
                      -
                    </button>
                    <span className="quantity">{quantities[item.id] || 0}</span>
                    <button className="quantity-button" onClick={() => handleIncreaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <div className="button-container1">
                    <button className="add-to-cart-button" onClick={() => addToCart(item.id)}>
                     Add To Cart 
                    </button>
                  </div>
                </li>
              )
            );
          })}
        </ul>
        <Cart cartItems={cartItems} />
      </div>

    </>
  );
}

export default Home;