import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';

const CartPage = ({ cartList }) => {
  const navigate = useNavigate();
  const total = cartList.reduce(
    (sum, current) => sum + current.product.price * current.amount,
    0
  );

  return (
    <main>
      <h1 className='cart-title'>Cart</h1>
      <section className='cart-page'>
        <ul className='product-grid'>
          {cartList.length
            ? cartList.map((item) => (
                <li className='product-item' key={item.id}>
                  <ProductCard product={item.product} />
                  <div className='check-out-amount'>x {item.amount}</div>
                </li>
              ))
            : null}
        </ul>
        <section className='check-out'>
          <h2>Total: ${total.toFixed(3)}</h2>
          <button className='check-out-btn' onClick={() => navigate('/')}>
            Checkout
          </button>
        </section>
      </section>
    </main>
  );
};

export default CartPage;
