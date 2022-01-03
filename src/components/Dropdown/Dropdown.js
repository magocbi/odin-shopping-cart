import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ listItems }) => {
  const listElements = listItems.map((item, index) => (
    <li key={index}>
      <Link to={`${item.path}`}>{item.content}</Link>
    </li>
  ));

  return (
    <div className='nav-dropdown'>
      <ul className='dropdown-links'>{listElements}</ul>
    </div>
  );
};

export default Dropdown;
