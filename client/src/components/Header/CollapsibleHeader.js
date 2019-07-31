import React, { Fragment } from 'react'
import Collapsible from 'react-collapsible'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const CollapsibleHeader = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div>
      <div className='collapsibleLogInBtns'>
        <Link to='/dashboard' className='dropdown-item'>
          <i className='fas fa-user' />&nbsp;Dashboard
        </Link>
      </div>
      <div className='collapsibleLogInBtns'>
        <a onClick={logout} href='#!' className='dropdown-item'>
          <i className='fas fa-sign-out-alt' />&nbsp;Logout
        </a>
      </div>
    </div>
  )

  const guestLinks = (
    <div>
      <div className='collapsibleLogInBtns'>
        <Link to='/login'className='dropdown-item'>
          <i className='fas fa-user' />&nbsp;Login
        </Link>
      </div>
      <div className='collapsibleLogInBtns'>
        <Link to='/register' className='dropdown-item'>
          <i className='fas fa-user' />&nbsp;Create an Account
        </Link>
      </div>
    </div>
  )

  return (
    <div className='collapsibleHeader'>
      <Collapsible trigger='☰'>
        <div className='collapsibleCategories'>
          <Collapsible trigger='Browse Classes'>
            <Link to='/learn-by-category' className='dropdown-item'>All Classes</Link>
            <Link to='/art' className='dropdown-item'>
            Art
            </Link>
            <Link to='/cooking' className='dropdown-item'>
              Cooking
            </Link>
            <Link to='/craft' className='dropdown-item'>
            Craft
            </Link>
            <Link to='/creative' className='dropdown-item'>
              Creative
            </Link>
            <Link to='/garden' className='dropdown-item'>
              Garden
            </Link>
            <Link to='/movement' className='dropdown-item'>
            Movement
            </Link>
            <Link to='/social' className='dropdown-item'>
            Social
            </Link>
            <Link to='/technology' className='dropdown-item'>
              Technology
            </Link>
            <Link to='/wellness' className='dropdown-item'>
              Wellness
            </Link>
            <Link to='/other' className='dropdown-item'>
            Other
            </Link>
          </Collapsible>
        </div>
        <div className='collapsibleTeachersBtn'>
          <p>
            <Link to='/profiles' className='dropdown-item'>
              Teacher Directory
            </Link>
          </p>
        </div>
        {/* different buttons depending on whether logged in */}
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Collapsible>
    </div>
  )
}

CollapsibleHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(CollapsibleHeader)
