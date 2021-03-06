import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './LoginRegister.css'
import { connect } from 'react-redux'
import { setAlert } from '../../../actions/alert'
import { register } from '../../../actions/auth'
import PropTypes from 'prop-types'
// @resources https://www.bignerdranch.com/blog/react-data-layer-part-3-login/
const Register = ({ setAlert, register, isAuthenticated }) => {
  // formData is the state
  // use setFormData to update the state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  // Captures the entered data and stores it in a variable
  const { name, email, password } = formData
  // setState, e.target.name -> name attribute in each input tag
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()
    register({ name, email, password })
  }

  // if login success, redirect to the user's dashboard
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='LoginRegisterContainer'>
      <h1 className='sign-up'>Sign Up</h1>
      <p className='lead'><i className='fas fa-user' /> Create your account.</p>
      <form className='form' onSubmit={e => onSubmit(e)} action='create-profile.html'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn create-btn' value='Create' />
      </form>
      <p className='haveAcctQ'>
      Already have an account? <Link to='/login'>Login!</Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register)
