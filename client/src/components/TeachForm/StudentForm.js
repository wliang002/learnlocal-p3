import React, { useState } from 'react'
import './TeachForm.css'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { studentSignUp } from '../../actions/profile'

const StudentForm = ({ studentSignUp, history, userId, match }) => {
  const [formData, setFormData] = useState({
    studentsName: '',
    studentsEmail: '',
    studentsPhone: ''
  })
  const {
    studentsName,
    studentsEmail,
    studentsPhone
  } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className='container'>

      <h1>Sign Up</h1>
      <hr />
      <div className='teachForm'>
        <form id='addClass'
          className='form'
          onSubmit={e => {
            e.preventDefault()
            studentSignUp(match.params.userId, match.params.id, formData, history)
          }}
        >

          <div className='form-group'>
            <label for='studentsName'>Your Name:</label>
            <textarea
              className='form-control'
              id='studentsName'
              rows='1'
              placeholder='Your name ...'
              name='studentsName'
              value={studentsName}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <label for='studentsEmail'>Your Email:</label>
            <input
              className='form-control'
              type='email'
              id='studentsEmail'
              rows='1'
              placeholder='Your Email ...'
              name='studentsEmail'
              value={studentsEmail}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <label for='studentsPhone'>Your Phone Number:</label>
            <textarea
              className='form-control'
              id='studentsPhone'
              rows='1'
              placeholder='Your phone number ...'
              name='studentsPhone'
              value={studentsPhone}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/profiles'>
            Go Back
          </Link>
        </form>

      </div>
    </div >
  )
}

StudentForm.propTypes = {
  studentSignUp: PropTypes.func.isRequired
}

export default connect(
  null,
  { studentSignUp }
)(withRouter(StudentForm))
