import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


const Header = props => (
  <header className='site-header'>
    {/* for wide desktop */}
    <div className='wideView'>
      <div className='site-logo'>
        <Link to='/' className='home'>Learn Local</Link>
      </div>
      {/* class categories */}
      <div className='dropdown first'>
        <a
          className='btn btn-secondary dropdown-toggle'
          href='#'
          role='button'
          id='categoryDropdownMenuLink'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Browse Classes
        </a>
        <div className='dropdown-content'>
          <Link to='/learn-by-category' className='dropdown-item'>Category placeholder</Link>
          <a className='dropdown-item' href='#'>
            Creative
          </a>
          <a className='dropdown-item' href='#'>
            Business
          </a>
          <a className='dropdown-item' href='#'>
            Lifestyle
          </a>
          <a className='dropdown-item' href='#'>
            Other
          </a>
        </div>
      </div>
      {/* teachers */}
      <div className='dropdown last'>
        <a
          className='btn btn-secondary dropdown-toggle'
          href='#'
          role='button'
          id='teacherDropdownMenuLink'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Browse Teachers
        </a>
        <div className='dropdown-content'>
          <Link to='/teacher-profile' className='dropdown-item'>TeacherProfile placeholder</Link>
          <a className='dropdown-item' href='#'>
            dummy teacher 2
          </a>
          <a className='dropdown-item' href='#'>
            dummy teacher 3
          </a>
          <a className='dropdown-item' href='#'>
            dummy teacher 4
          </a>
        </div>
      </div>
      <div style={{ float: 'right' }}>
        <div className='LogInBtns'>
          <Link to='/login' className='btn btn-success'>
            Log In
          </Link>
          <Link to='/register' className='btn btn-success'>
            Create an Account
          </Link>
        </div>
      </div>
    </div>
    {/* for narrower and mobile view */}
    <div className='narrowView'>
      <div className='site-logo'>
        <Link to='/' className='home'>Learn Local</Link>
      </div>
      {/* class categories */}
      <div className='dropdown first'>
        <a
          className='btn btn-secondary dropdown-toggle'
          href='#'
          role='button'
          id='categoryDropdownMenuLink'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Browse Classes
        </a>
        <div className='dropdown-content'>
          <Link to='/learn-by-category' className='dropdown-item'>Category placeholder</Link>
          <a className='dropdown-item' href='#'>
            Creative
          </a>
          <a className='dropdown-item' href='#'>
            Business
          </a>
          <a className='dropdown-item' href='#'>
            Lifestyle
          </a>
          <a className='dropdown-item' href='#'>
            Other
          </a>
        </div>
      </div>
      {/* teachers */}
      <div className='dropdown last'>
        <a
          className='btn btn-secondary dropdown-toggle'
          href='#'
          role='button'
          id='teacherDropdownMenuLink'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Browse Teachers
        </a>
        <div className='dropdown-content'>
          <Link to='/teacher-profile' className='dropdown-item'>TeacherProfile placeholder</Link>
          <a className='dropdown-item' href='#'>
            dummy teacher 2
          </a>
          <a className='dropdown-item' href='#'>
            dummy teacher 3
          </a>
          <a className='dropdown-item' href='#'>
            dummy teacher 4
          </a>
        </div>
      </div>
      <div style={{ float: 'right' }}>
        <div className='LogInBtns'>
          <Link to='/login' className='btn btn-success'>
            Log In
          </Link>
          <Link to='/register' className='btn btn-success'>
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
