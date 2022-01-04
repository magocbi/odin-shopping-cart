import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCategories, getAllProducts } from './StoreAPI';

// components
import Nav from './components/Nav/Nav';

// Pages

import Home from './pages/Home';

// styles
import './App.css';
import Categories from './pages/Categories';
import CartPage from './pages/CartPage';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCartList = (id, amount) => {
    const product = products.find((p) => p.id === id);
    const productInCart = cart.find((p) => p.id === id);
    if (productInCart) {
      setCart([
        ...cart.filter((p) => p.id !== id),
        { id, amount: amount + productInCart.amount, product },
      ]);
    } else {
      setCart([...cart, { id, amount, product }]);
    }
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      const categoryList = data.map((category) => ({
        content: category,
        path: `category/${category}`,
      }));

      setCategories(categoryList);
    });
  }, []);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div className='App'>
      <Nav categoryList={categories} shoppingCartAmount={cart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/category'
          element={
            <Categories
              productList={products}
              categoryList={categories}
              addToCartList={addToCartList}
            />
          }
        >
          <Route
            path=':category'
            element={
              <Categories
                productList={products}
                categoryList={categories}
                addToCartList={addToCartList}
              />
            }
          />
        </Route>
        <Route path='/cart' element={<CartPage cartList={cart} />} />
        <Route
          path='*'
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
