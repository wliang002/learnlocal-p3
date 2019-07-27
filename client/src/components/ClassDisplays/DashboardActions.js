import React from 'react'
import { Link } from 'react-router-dom'
import './ClassDisplays.css'

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle' />&nbsp;Edit Profile
      </Link>
      <Link to='/add-classes' className='btn btn-light'>
        <i className='fab fa-black-tie' />&nbsp;Add Classes
      </Link>
    </div>
  )
}

export default DashboardActions
