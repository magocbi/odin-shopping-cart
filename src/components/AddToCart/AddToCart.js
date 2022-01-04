import React from 'react';
import { useState } from 'react/cjs/react.development';

// styles
import './AddToCart.css';

const AddToCart = ({ addToCart, id, price }) => {
  const [amount, setAmount] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    addToCart(id, amount);
  };

  const changeAmount = (e) => {
    const value = e.target.value;
    if (value >= 1) {
      setAmount(value);
    }
  };

  const incrementAmount = () => {
    setAmount(amount + 1);
  };
  const decrementAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className='add-cart'>
      <h3 className='add-cart-price'>{`$${price * amount}`}</h3>
      <form className='add-cart-form' onSubmit={onSubmit}>
        <div className='add-cart-amount-btns'>
          <button className='inc-btn' type='button' onClick={decrementAmount}>
            {' '}
            -{' '}
          </button>
          <input
            className='add-cart-amount'
            type='number'
            min='1'
            name='amount'
            value={amount}
            onInput={changeAmount}
            required
          />
          <button className='inc-btn' type='button' onClick={incrementAmount}>
            {' '}
            +{' '}
          </button>
        </div>
        <button className='add-cart-btn' type='submit'>
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddToCart;
