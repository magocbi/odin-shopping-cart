import React from 'react';
import { useParams } from 'react-router-dom';

const Categories = ({ productList }) => {
  const { category } = useParams();
  let filteredProducts = [];
  if (category)
    filteredProducts = productList.filter(
      (product) => product.category === category
    );
  return (
    <main>
      <section className='category-page'>
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
