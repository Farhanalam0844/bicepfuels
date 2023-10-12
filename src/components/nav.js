import React from 'react';
import {Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { HashLink } from 'react-router-hash-link';
import cart from '../Png/shopping-cart.png'
export default function Nav(props) {
  return (
      <nav className='nav1'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><HashLink smooth to='/#categories'>Categories</HashLink></li>
          <li><Link to='/blog'>Blogs</Link></li>
          <li><Link to='/product'>Products</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/product/cart'> <img style={{width:'1.2em'}} src={cart} alt="" />  </Link> <sup> <Badge bg="secondary">{props.length}</Badge> </sup></li>

        </ul>
      </nav>
  );
}

