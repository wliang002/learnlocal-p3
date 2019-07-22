import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginRegister.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    login(email, password)
  }
  return (
    <div className='wrapper'>
      <h1 className='sign-in'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Login To Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required />
        </div>
        {/* Might need this later */}
        {/* <div id='validator' className='alert alert-danger' style={{ display: 'none' }}>Invalid credentials</div> */}
        <input type='submit' className='btn btn-success log' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Create One!</Link>
      </p>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

export default connect(
  null,
  { login }
)(Login)
