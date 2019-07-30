import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ClassDisplays.css'
import { Link } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'
import { connect } from 'react-redux'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'
import Spinner from '../Landing/Spinner'
import DashboardActions from './DashboardActions'
import ProfileItem from '../TeachersDisplays/ProfileItem'

const TeacherProfile = ({
  getCurrentProfile,
  auth: { user },
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
            <i className='fas fa-feather-alt' />&nbsp;Welcome <span class='selectedCategory'>{user && user.name}</span>!
          </h2>
          {profile !== null ? (
            <Fragment>
              {/* <ProfileItem key={profile._id} profile={profile} /> */}
              <DashboardActions />
              <hr />
              <div className='AppDescriptionContainer'>
                <p>These are the classes you are teaching:</p>
              </div>
              <ClassCard event={profile.events} />
              <button class='btn delete-account' onClick={() => deleteAccount()}>Delete Account</button>
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
