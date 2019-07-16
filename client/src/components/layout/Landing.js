import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
    
        <div className='landing-inner'>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>

    </section>

  )
}
export default Landing
