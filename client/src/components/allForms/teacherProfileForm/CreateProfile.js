import React, { useState, Fragment } from 'react'
import '../TeachForm/TeachForm.css'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile } from '../../../actions/profile'
// @resources https://itnext.io/how-i-tried-to-validate-react-forms-with-hooks-31634fc5385b
const CreateProfile = ({ createProfile,
  history }) => {
  const [formData, setFormData] = useState({
    bio: '',
    titles: '',
    location: '',
    skills: '',
    facebook: '',
    twitter: '',
    instagram: ''
  })
  const [displaySocialInputs, toggleSocialInputs] = useState(false)
  const {
    bio,
    titles,
    location,
    skills,
    facebook,
    twitter,
    instagram
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    createProfile(formData, history)
  }

  return (
    <Fragment>
      <div className='teachersProfileContainer'>
        <h1>Create Your Profile</h1>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Titles'
              name='titles'
              value={titles}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>What do you call yourself? (Please separate each with a comma.)</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>Where are you located?</small>
          </div>
          <div className='form-group'>
            <textarea
              rows='8'
              placeholder='Bio'
              name='bio'
              value={bio}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>What would you like us to know about you?</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Skills'
              name='skills'
              value={skills}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>What skills do you have? (Please separate each with a comma.)</small>
          </div>
          <div className='socialLinks'>
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn'
            >
              <i className='fas fa-caret-down' />&nbsp;Add Social Network Links
            </button>
            <span className='socialOptional'>(Optional)</span>
          </div>
          {displaySocialInputs && (
            <Fragment>
              <div className='form-group social-input'>
                <i className='fab fa-twitter fa-2x' />
                <input
                  type='text'
                  placeholder='Twitter URL'
                  name='twitter'
                  value={twitter}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-facebook fa-2x' />
                <input
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  value={facebook}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group social-input'>
                <i className='fab fa-instagram fa-2x' />
                <input
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  value={instagram}
                  onChange={e => onChange(e)}
                />
              </div>
            </Fragment>
          )}
          <input type='submit' className='btn submit-btn' />
          <Link className='btn back-btn' to='/dashboard'>
            <i className='fas fa-caret-left' />&nbsp;Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  )
}
// @resources https://learnetto.com/tutorials/typechecking-with-proptypes
CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
}

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile))
