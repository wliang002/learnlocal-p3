import React from 'react'
import { Link } from 'react-router-dom'
import './ClassDisplays.css'

const ActionButtons = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn'>
        <i className='fa fa-address-card' />&nbsp;Edit Profile
      </Link>
      <Link to='/add-classes' className='btn'>
        <i className='fas fa-book' />&nbsp;Add Classes
      </Link>
    </div>
  )
}

export default ActionButtons
