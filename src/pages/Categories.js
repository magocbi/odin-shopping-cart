import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';

const Categories = ({ productList, categoryList }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { category } = useParams();
  let navigate = useNavigate();
  let filteredProducts = [];
  if (category) {
    filteredProducts = productList.filter(
      (product) => product.category === category
    );
  }

  useEffect(() => {
    if (!category) setSelectedCategory('');
    else setSelectedCategory(category);
  }, [category]);

  const selectCategory = (chosenCategory, categoryPath) => {
    setSelectedCategory(chosenCategory);
    navigate(`/${categoryPath}`);
  };
  return (
    <main>
      <section className='category-page'>
        <CategoryFilter
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          onChange={selectCategory}
        />
        <h1 className='category-title'>{category ? category : 'Products'}</h1>
        <ul>
          {category
            ? filteredProducts.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))
            : productList.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
        </ul>
      </section>
    </main>
  );
};

export default Categories;
