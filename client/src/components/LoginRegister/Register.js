import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register }) => {
  // formData is the state
  // use setFormData to update the state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formData
  // setState, e.target.name -> name attribute in each input tag
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async e => {
    e.preventDefault()
    setAlert('Success', 'success')
    register({ name, email, password })
  }
  return (
    <div className='wrapper'>
      <h1 className='sign-up'>Sign Up</h1>
      <p className='lead'><i className='fas fa-user' /> Create Your Account</p>
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
        <input type='submit' className='btn btn-success reg' value='Create' />
      </form>
      <p className='my-1'>
      Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}
// takes in the state and actions
export default connect(null, { setAlert, register })(Register)
