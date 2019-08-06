import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ClassDisplays.css'
import { Link } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Spinner from '../Landing/Spinner'
import ActionButtons from './ActionButtons'
import ProfileAbout from '../TeachersDisplays/ProfileAbout'
import Wrapper from '../ClassCard/Wrapper'

const TeacherProfile = ({
  getCurrentProfile,
  auth: { isAuthenticated, user },
  profile: { profile, loading },
  deleteAccount }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='teacherProfile'>
        <h1>{user && user.name}&rsquo;s Dashboard</h1>
        <hr />
        <div className='events-container'>
          <h2>
            <i className='fas fa-feather-alt' />&nbsp;Welcome <span className='selectedCategory'>{user && user.name}</span>!
          </h2>
          {profile !== null ? (
            <Fragment>
              <ProfileAbout profile={profile} auth={isAuthenticated} />
              <ActionButtons />
              <hr />
              <div className='AppDescriptionContainer'>
                <p>These are the classes you are teaching:</p>
              </div>
              <Wrapper>
                <ClassCard event={profile.events} auth={isAuthenticated} />
              </Wrapper>
              <button className='btn delete-account' onClick={() => deleteAccount()}>
                <i className='fas fa-heart-broken' />&nbsp;Delete your account
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <div className='AppDescriptionContainer'>
                <p>Before you host a class, tell us a little about yourself.</p>
              </div>
              <Link to='/create-profile' className='createProfileBtn btn'>
                    Create a Profile
              </Link>
            </Fragment>
          )}
        </div>
      </div>

    </Fragment>
  )
}

// @resources https://learnetto.com/tutorials/typechecking-with-proptypes
TeacherProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(TeacherProfile)
