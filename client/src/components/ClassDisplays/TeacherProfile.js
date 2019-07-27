import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ClassDisplays.css'
import { Link, Redirect } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../Landing/Spinner'
import DashboardActions from './DashboardActions'

const TeacherProfile = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='teacherProfile'>
        <h1>{user && user.name}&rsquo;s Dashboard</h1>
        <hr />
        <div className='events-container'>
          <h2><i className='fas fa-user' />&nbsp;Welcome <span class='selectedCategory'>{user && user.name}</span>!</h2>
          {profile !== null ? (
            <Fragment>
              <DashboardActions />
              <hr />
              <div className='AppDescriptionContainer'>
                <p>These are the classes you are teaching:</p>
              </div>
              <ClassCard event={profile.events} />
            </Fragment>
          ) : (
            <Fragment>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create Profile
              </Link>
            </Fragment>
          )}
        </div>
        <hr />

      </div>

    </Fragment>
  )
}

TeacherProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(TeacherProfile)
