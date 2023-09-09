import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Category from './Category';

function Home() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to showing all products

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        // Extract and set unique categories from the data
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        console.log(uniqueCategories, "uniquecat")
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === 'all'
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (<>
    <Header
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={filterByCategory}
    />
    <div className='container'>
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={filterByCategory}
      />
      <ul className="item-list">
        {filteredData.map((item) => {
          console.log(item, 'naman');
          return (
            <li key={item.id} className="item">
              <div className="item-title">{item.title}</div>
              <div className="item-image">
                <img src={item.image} alt="" width="220px" height="300px" loading="lazy" />
              </div>
              <div className="item-button">
                <p style={{ color: 'black', fontSize: '20px' }}>${item.price}</p>
              </div>
              <div className="">{item.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
    <Footer />
  </>
  );
}

export default Home;
