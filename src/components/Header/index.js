import React from 'react'
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
    <div>
      <button className='login-btn'>Login</button>
    </div>
  </header>
)

export default Header
