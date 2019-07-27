import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../actions/profile'
import './Profiles.css'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return (

    <Fragment>
      <div className='listOfTeachersContainer'>

        <h1><i className='fab fa-earlybirds' />&nbsp;Our Teachers</h1>
        <p className='lead'>
           Browse and connect with
            teachers
        </p>
        <div className='profiles'>
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <p>We're sorry, we did not find any profiles...</p>
          )}
        </div>
      </div>
    </Fragment>

  )
}
Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles)
