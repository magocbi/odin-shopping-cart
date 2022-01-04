import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

// components
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import ProductCard from '../components/ProductCard/ProductCard';
import AddToCart from '../components/AddToCart/AddToCart';

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
                  <div className='product-item' key={product.id}>
                    <ProductCard product={product} />
                    <AddToCart
                      addToCart={() => null}
                      id={product.id}
                      price={product.price}
                    />
                  </div>
                ))
              : productList.map((product) => (
                  <div className='product-item' key={product.id}>
                    <ProductCard product={product} />
                    <AddToCart
                      addToCart={() => null}
                      id={product.id}
                      price={product.price}
                    />
                  </div>
                ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Categories;
