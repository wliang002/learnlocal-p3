import React from 'react'
import { Link } from 'react-router-dom'
import './LoginRegister.css'

const Login = () => {
  return (
    <div className='wrapper'>
      <h1 className='sign-in'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Login To Your Account
      </p>
      <form className='form' action='dashboard.html'>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            required
          />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' required />
        </div>
        {/* Might need this later */}
        {/* <div id='validator' className='alert alert-danger' style={{ display: 'none' }}>Invalid credentials</div> */}
        <input type='submit' className='btn btn-success log' value='Login' onClick='showDiv()' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Create One!</Link>
      </p>
    </div>
  )
}

export default Login
