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

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      const categoryList = data.map((category) => ({
        content: capitalizeString(category),
        path: `category/${category}`,
      }));

      setCategories(categoryList);
    });
  }, []);
  return (
    <div className='App'>
      <Nav categoryList={categories} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
