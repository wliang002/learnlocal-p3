import React, { useEffect, useState, Fragment } from 'react'
import './TeachForm.css'
import { Link, withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'

const EditProfile = ({ profile: { profile, loading },
  createProfile,
  history, getCurrentProfile }) => {
  const [formData, setFormData] = useState({
    bio: '',
    location: '',
    skills: '',
    facebook: '',
    twitter: '',
    instagram: ''
  })
  const [displaySocialInputs, toggleSocialInputs] = useState(false)

  useEffect(() => {
    getCurrentProfile()

    setFormData({
      bio: loading || !profile.bio ? '' : profile.bio,
      location: loading || !profile.location ? '' : profile.location,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    })
  }, [loading, getCurrentProfile])

  const {
    bio,
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
      <div className='container'>
        <h1 className='large text-primary'>Create Your Profile</h1>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <textarea
              placeholder='A short bio of yourself'
              name='bio'
              value={bio}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>Tell us a little about yourself</small>
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Skills'
              name='skills'
              value={skills}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='my-2'>
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn btn-light'
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
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
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>

  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile))
