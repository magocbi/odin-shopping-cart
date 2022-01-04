import React from 'react';

// styles
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { title, image, description } = product;

  return (
    <div className='product-card'>
      <div className='product-card-image'>
        <img src={image} alt='product' />
      </div>
      <div className='product-card-info'>
        <h3 className='product-card-title'>{title}</h3>
        <p className='product-card-desc'>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
