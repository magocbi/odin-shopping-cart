import React from 'react';

const CategoryFilter = ({ categoryList, selectedCategory, onChange }) => {
  const categoryElems = categoryList.map((category) => (
    <div key={category.content}>
      <input
        type='radio'
        name='category'
        id={`category_${category.content}`}
        checked={selectedCategory === category.content}
        onChange={() => onChange(category.content, category.path)}
      />
      <label htmlFor={`category_${category.content}`}>{category.content}</label>
    </div>
  ));
  return (
    <div>
      <h2>Categories</h2>
      <input
        type='radio'
        name='category'
        id={`category_all`}
        checked={selectedCategory === ''}
        onChange={() => onChange('', 'category')}
      />
      <label htmlFor={`category_all}`}>All</label>
      {categoryElems}
    </div>
  );
};

export default CategoryFilter;
