import React from 'react';

function Category({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-sidebar">
      <h3>Categories</h3>
      <ul>
        <li
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => onSelectCategory('all')}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
