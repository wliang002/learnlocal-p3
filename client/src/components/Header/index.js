import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = props => (
  <header className='site-header'>
    <div className='site-logo'>Learn Local</div>
    <div class='dropdown'>
      <a
        class='btn btn-secondary dropdown-toggle'
        href='#'
        role='button'
        id='dropdownMenuLink'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Browse Classes
      </a>
      <div class='dropdown-content'>
        <a class='dropdown-item' href='#'>
          Creative
        </a>
        <a class='dropdown-item' href='#'>
          Business
        </a>
        <a class='dropdown-item' href='#'>
          Lifestyle
        </a>
        <a class='dropdown-item' href='#'>
          Other
        </a>
      </div>
      <div class='dropdown-content'>
        <a class='dropdown-item' href='#'>
          Creative
        </a>
        <a class='dropdown-item' href='#'>
          Business
        </a>
        <a class='dropdown-item' href='#'>
          Lifestyle
        </a>
        <a class='dropdown-item' href='#'>
          Other
        </a>
      </div>
    </div>
    <div style={{ float: 'left' }}>
      <ul>
        <li>
          <a href='/'>Teachers</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
