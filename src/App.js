import { Route, Routes } from 'react-router-dom';

// components
import Nav from './components/Nav/Nav';

// Pages

import Home from './pages/Home';

// styles
import './App.css';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
