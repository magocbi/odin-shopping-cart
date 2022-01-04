import React from 'react';
import { capitalizeString } from '../../Utils/stringHelper';

// styles
import './CategoryFilter.css';

const CategoryFilter = ({ categoryList, selectedCategory, onChange }) => {
  const categoryElems = categoryList.map((category) => (
    <div className='category-field' key={category.content}>
      <input
        type='radio'
        name='category'
        id={`category_${category.content}`}
        checked={selectedCategory === category.content}
        onChange={() => onChange(category.content, category.path)}
      />
      <label htmlFor={`category_${category.content}`}>
        {capitalizeString(category.content)}
      </label>
    </div>
  ));
  return (
    <div className='category-filter'>
      <h2 className='category-filter-title'>Categories</h2>
      <div className='category-field'>
        <input
          type='radio'
          name='category'
          id={`category_all`}
          checked={selectedCategory === ''}
          onChange={() => onChange('', 'category')}
        />
        <label htmlFor={`category_all`}>All</label>
      </div>
      {categoryElems}
    </div>
  );
};

export default CategoryFilter;
