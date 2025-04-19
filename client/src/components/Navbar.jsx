import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='container'>
      <Link className='logo' to="/">Logo</Link>
      <ul className='cont'> 
        <li className='btn-cont'>
          <Link className='btn' to="/">Home</Link>
        </li>
        <li className='btn-cont'>
          <Link className='btn'  to="/login">Login</Link>
        </li>
        <li className='btn-cont'>
          <Link className='btn'  to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar