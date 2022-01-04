import Dropdown from '../Dropdown/Dropdown';
import { NavLink } from 'react-router-dom';

// styles
import './nav.css';

// images

import cartImage from '../../images/shopping-cart.svg';

const Nav = ({ categoryList, shoppingCartAmount }) => {
  return (
    <nav className='main-nav'>
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
        <li className='nav-item'>
          <NavLink className='nav-link' to='/cart'>
            <img
              className='shopping-cart-img'
              src={cartImage}
              alt='shopping cart'
            />
            <span
              className={`shopping-cart-amount ${
                shoppingCartAmount ? 'visible' : ''
              }`}
            >
              {shoppingCartAmount}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
