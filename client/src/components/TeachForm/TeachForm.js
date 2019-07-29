import React, { useState } from 'react'
import './TeachForm.css'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addClasses } from '../../actions/profile'

const TeachForm = ({ addClasses, history }) => {
  const [formData, setFormData] = useState({
    teachersName: '',
    eventName: '',
    eventType: '',
    location: '',
    eventDate: '',
    eventTime: '',
    description: ''
  })
  const {
    teachersName,
    eventName,
    eventType,
    location,
    eventDate,
    eventTime,
    description
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <div className='container'>

      <h1>Teach</h1>
      <hr />
      <h2>Host a class for your neighbors.</h2>
      <div className='teachForm'>
        <form id='addClass'
          className='form'
          onSubmit={e => {
            e.preventDefault()
            addClasses(formData, history)
          }}
        >

          <div className='form-group'>
            <label for='teachersName'>Teacher's Name</label>
            <textarea
              className='form-control'
              id='teachersName'
              rows='1'
              placeholder='Teachers Name'
              name='teachersName'
              value={teachersName}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <label for='eventname'>Event Name</label>
            <textarea
              className='form-control'
              id='eventName'
              rows='2'
              placeholder='event Name'
              name='eventName'
              value={eventName}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <label for='categorySelect'>Select a category for your class type</label>
            <select className='form-control'
              id='categorySelect'
              name='eventType'
              value={eventType}
              onChange={e => onChange(e)}
            >
              <option value='0'>* Select a Category</option>
              <option value='Cooking'>Cooking</option>
              <option value='Garden'>Garden</option>
              <option value='Wellness'>Wellness</option>
              <option value='Technology'>Technology</option>
              <option value='Creative'>Creative</option>
              <option value='Craft'>Craft</option>
              <option value='Movement'>Movement</option>
              <option value='Social'>Social</option>
              <option value='Misc'>Misc</option>
            </select>
          </div>

          <div className='form-group'>
            <label for='location'>Location address:</label>
            <textarea
              className='form-control'
              id='location'
              rows='2'
              placeholder='location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <label for='location'>Date:</label>
            <input
              className='form-control'
              id='date'
              type='date'
              placeholder='event Date'
              name='eventDate'
              value={eventDate}
              onChange={e => onChange(e)}
              required />
          </div>

          <div className='form-group'>
            <label for='location'>Time:</label>
            <textarea
              className='form-control'
              id='time'
              rows='1'
              placeholder='event Time'
              name='eventTime'
              value={eventTime}
              onChange={e => onChange(e)}
              required />
          </div>

          <div className='form-group'>
            <label for='description'>Description:</label>
            <textarea
              className='form-control'
              id='description'
              rows='8'
              placeholder='event description'
              name='description'
              value={description}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>

      </div>
    </div >
  )
}

TeachForm.propTypes = {
  addClasses: PropTypes.func.isRequired
}

export default connect(
  null,
  { addClasses }
)(withRouter(TeachForm))
