import Dropdown from '../Dropdown/Dropdown';
import { NavLink } from 'react-router-dom';

// styles
import './nav.css';

const Nav = ({ categoryList }) => {
  return (
    <nav className='main-nav'>
      {/* 
          LOGO
          CATEGORIES
            -DROPDOWN
          CART
        */}
      <div className='nav-logo'>Sierra</div>
      <ul className='nav-links'>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/category'>
            Categories
          </NavLink>
          <Dropdown listItems={categoryList} />
        </li>
      </ul>
      {/* <CartLink /> */}
    </nav>
  );
};

export default Nav;
