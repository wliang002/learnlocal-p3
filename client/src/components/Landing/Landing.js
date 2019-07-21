import React from 'react'
import './Landing.css'
import { Link, Redirect } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-header'>
        <h1>Learn Local</h1>
        <hr />
        <h2>Building&nbsp;community by learning from one&nbsp;another.</h2>
        <div className='appDescriptionContainer'>
          <p><strong>Learn Local</strong> is a community building skillshare platform that connects passionate
                local artisans with one another.
          </p>
        </div>
      </div>
      <div className='landing-inner'>
        <p>Log in or create an account to host a class of your own.</p>
        <div className='buttons'>
          <Link to='/login' className='btn btn-success'>
            Login
          </Link>
          <Link to='/register' className='btn btn-success'>
            Create Account
          </Link>
        </div>
      </div>
    </section>

  )
}
export default Landing
