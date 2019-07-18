import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = props => (
  <header className='site-header'>
    <div className='site-logo'>Learn Local</div>
    {/* class categories */}
    <div class='dropdown'>
      <a
        class='btn btn-secondary dropdown-toggle'
        href='#'
        role='button'
        id='categoryDropdownMenuLink'
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
    </div>
    {/* teachers */}
    <div class='dropdown'>
      <a
        class='btn btn-secondary dropdown-toggle'
        href='#'
        role='button'
        id='teacherDropdownMenuLink'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Browse Teachers
      </a>
      <div class='dropdown-content'>
        <a class='dropdown-item' href='#'>
          dummy teacher 1
        </a>
        <a class='dropdown-item' href='#'>
          dummy teacher 2
        </a>
        <a class='dropdown-item' href='#'>
          dummy teacher 3
        </a>
        <a class='dropdown-item' href='#'>
          dummy teacher 4
        </a>
      </div>
    </div>
    <div style={{ float: 'right' }}>
      <div className='LogInBtns'>
        <Link to='/login' className='btn btn-success'>
            Log in
        </Link>
        <Link to='/register' className='btn btn-success'>
            Create an account
        </Link>
      </div>
    </div>
  </header>
)

export default Header
