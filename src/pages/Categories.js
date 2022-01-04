import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

// components
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import ProductCard from '../components/ProductCard/ProductCard';

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

        <div className='products'>
          <h1 className='category-title'>{category ? category : 'Products'}</h1>
          <ul className='product-grid'>
            {category
              ? filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : productList.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Categories;
