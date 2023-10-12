import React, { useState } from 'react'
import image1 from '../images/icons8-hamburger-menu-50.png'
import image2 from '../images/icons8-cross-50.png'
import { Link } from 'react-router-dom';
import cart from '../Png/shopping-cart.png'

import { HashLink } from 'react-router-hash-link';
export default function Nav2(props) {
  const [navDis, setNavDis] = useState(false);
  return (
    <nav className='nav2'>
      {
        navDis ?
          <img src={image2} alt="" onClick={() => setNavDis(!navDis)} style={{ position: 'sticky', left: '5%', width: '2em', padding: '0.4em 0px' }} />
          :
          <img src={image1} alt="" onClick={() => setNavDis(!navDis)} style={{ position: 'sticky', left: '5%', width: '3em', padding: '0.4em 0px' }} />
      }

      {
        navDis ?
          <div className="nav2list">

            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><HashLink to='/#categories'>Categories</HashLink></li>
              <li><Link to='/blog'>Blogs</Link></li>
              <li><Link to='/product'>Products</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/product/cart'> <img style={{ width: '1.2em' }} src={cart} alt="" />  </Link> <sup> {props.length} </sup></li>


            </ul>
          </div>
          : null
      }

    </nav>
  )
}
