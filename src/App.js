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

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
      <Nav categoryList={categories} shoppingCartAmount={0} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='category'
          element={
            <Categories productList={products} categoryList={categories} />
          }
        >
          <Route
            path=':category'
            element={
              <Categories productList={products} categoryList={categories} />
            }
          />
        </Route>
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
