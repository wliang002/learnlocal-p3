import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import CollapsibleHeader from './CollapsibleHeader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div style={{ float: 'right' }}>
      <div className='LogInBtns'>
        <Link to='/dashboard' className='btn btn-success'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
        <a onClick={logout} href='#!' className='btn btn-success'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </div>
    </div>
  )

  const guestLinks = (
    <div style={{ float: 'right' }}>
      <div className='LogInBtns'>
        <Link to='/login' className='btn btn-success'>
          Login
        </Link>
        <Link to='/register' className='btn btn-success'>
          Create Account
        </Link>
      </div>
    </div>
  )

  return (
    <header className='site-header' >
      {/* for wide desktop */}
      <div className='wideView' >
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
            <Link to='/art' className='dropdown-item'>
              Art
            </Link>
            <Link to='/craft' className='dropdown-item'>
              Craft
            </Link>
            <Link to='/movement' className='dropdown-item'>
              Movement
            </Link>
            <Link to='/social' className='dropdown-item'>
              Social
            </Link>
            <Link to='/other' className='dropdown-item'>
              Other
            </Link>
          </div>
        </div>
        {/* teachers */}
        <div className='btn-secondary teacherLinkBtn btn'>
          <Link to='/profiles'>
            Teacher Directory
          </Link>
        </div>
        {/* different buttons depending on whether logged in */}
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}

      </div >
      {/* for narrower and mobile view */}
      <div className='narrowView' >
        <div className='site-logo'>
          <Link to='/' className='home'>Learn Local</Link>
        </div>
        <CollapsibleHeader />
      </div >

    </header >
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Header)
