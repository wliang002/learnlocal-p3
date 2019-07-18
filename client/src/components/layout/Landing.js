import React from 'react'
import './Landing.css'
import { Link, Redirect } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <p>Sign up or log in to host a class of your own.</p>
        <div className='buttons'>
          <Link to='/register' className='btn btn-success'>
            Sign Up
          </Link>
          <Link to='/login' className='btn btn-success'>
            Login
          </Link>
        </div>
      </div>
    </section>

  )
}
export default Landing
