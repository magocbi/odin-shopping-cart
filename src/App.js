import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCategories, getAllProducts } from './StoreAPI';
import { capitalizeString } from './Utils/stringHelper';

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
        content: capitalizeString(category),
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
      <Nav categoryList={categories} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category' element={<Categories productList={products} />}>
          <Route
            path=':category'
            element={<Categories productList={products} />}
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
