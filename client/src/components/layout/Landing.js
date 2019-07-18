import React from 'react'
import './Landing.css'
import { Link, Redirect } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-inner'>
        <p>Log in or create an account to host a class of your own.</p>
        <div className='buttons'>
          <Link to='/register' className='btn btn-success'>
            Log in
          </Link>
          <Link to='/login' className='btn btn-success'>
            Create an account
          </Link>
        </div>
      </div>
    </section>

  )
}
export default Landing
