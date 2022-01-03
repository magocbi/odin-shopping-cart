import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home-container'>
      <section className='home-section'>
        <h1 className='home-title text-center'>Apparel & Jewelry</h1>
        <Link to='/categories' className='shop-btn'>
          Shop
        </Link>
      </section>
    </main>
  );
};

export default Home;
