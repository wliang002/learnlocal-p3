import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
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
    const newUser = {
      name,
      email,
      password
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newUser)
      const res = await axios.post('/api/users', body, config)
      setFormData({
        name: '',
        email: '',
        password: ''
      })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
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

export default Register
