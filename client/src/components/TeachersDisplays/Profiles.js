import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../actions/profile'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles]) 
  return (

    <Fragment>
      <div className='container'>

        <h1 className='large text-primary'>Our Teachers</h1>
        <p className='lead'>
          <i className='fas fa-cat' /> Browse and connect with
            teachers
        </p>
        <div className='profiles'>
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No profiles found...</h4>
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
