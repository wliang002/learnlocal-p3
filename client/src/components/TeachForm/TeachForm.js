import React, { useState } from 'react'
import './TeachForm.css'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addClasses } from '../../actions/profile'
import Geocoder from 'react-native-geocoding'
import GEO_API from './config_keys'


// @resources https://itnext.io/how-i-tried-to-validate-react-forms-with-hooks-31634fc5385b
Geocoder.init(process.env.Geo_key)

const TeachForm = ({ addClasses, history }) => {
  const [formData, setFormData] = useState({
    teachersName: '',
    eventName: '',
    eventType: '',
    location: '',
    geocode: [],
    eventDate: '',
    eventTime: '',
    eventSize: '',
    description: ''
  })

  const {
    teachersName,
    eventName,
    eventType,
    location,
    eventDate,
    eventTime,
    eventSize,
    description
  } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  // h/t to https://github.com/marlove/react-native-geocoding
  // when the person adding a class moves on from the address field, geocode the location.
  const onLocationInputBlur = e => {
    Geocoder.from(e.target.value).then(json => {
      var locationObject = json.results[0].geometry.location
      // the geocode is in an object so extract it into an array in the order that we want
      var locationArray = []
      locationArray.push(locationObject.lng, locationObject.lat)
      // then turn it into a string before pushing to database
      var locationString = locationArray.toString()
      setFormData({ ...formData, 'geocode': locationString })
    }).catch(error => console.warn(error))
  }

  return (
    <div className='HostClassContainer'>
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
            <label htmlFor='teachersName'>Teacher's Name:</label>
            <textarea
              className='form-control'
              id='teachersName'
              rows='1'
              placeholder='List all the teachers for this class.'
              name='teachersName'
              value={teachersName}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='categorySelect'>What kind of class are you teaching?</label>
            <select className='form-control'
              id='categorySelect'
              name='eventType'
              value={eventType}
              onChange={e => onChange(e)}
            >
              <option value='0'>Select a category.</option>
              <option value='Art'>Art</option>
              <option value='Cooking'>Cooking</option>
              <option value='Craft'>Craft</option>
              <option value='Creative'>Creative</option>
              <option value='Garden'>Garden</option>
              <option value='Movement'>Movement</option>
              <option value='Social'>Social</option>
              <option value='Technology'>Technology</option>
              <option value='Wellness'>Wellness</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='eventname'>Class name:</label>
            <textarea
              className='form-control'
              id='eventName'
              rows='1'
              placeholder='Give you class a name.'
              name='eventName'
              value={eventName}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>
              Where is this class taking place?
            </label>
            <textarea
              className='form-control'
              id='location'
              rows='2'
              placeholder='Street, City, State'
              name='location'
              value={location}
              onBlur={e => onLocationInputBlur(e)}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='location'>Date:</label>
            <input
              className='form-control'
              id='date'
              type='date'
              placeholder='date'
              name='eventDate'
              value={eventDate}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>Time:</label>
            <textarea
              className='form-control'
              id='time'
              rows='1'
              placeholder='hh:mm am/pm'
              name='eventTime'
              value={eventTime}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>Class size: </label>
            <textarea
              className='form-control'
              id='eventSize'
              rows='1'
              placeholder='How many students can sign up for your class?'
              name='eventSize'
              value={eventSize}
              onChange={e => onChange(e)}
              required />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description:</label>
            <textarea
              className='form-control'
              id='description'
              rows='8'
              placeholder='What should students know about your class?'
              name='description'
              value={description}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' className='submit-btn btn ' />
          <Link className='btn back-btn' to='/dashboard'>
            <i className='fas fa-caret-left' />&nbsp;Go Back
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