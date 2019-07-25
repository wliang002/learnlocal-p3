
import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../Landing/Spinner'
import { getProfileById } from '../../actions/profile'
import ProfileClasses from './ProfileClasses'

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id)
  }, [getProfileById, match.params.id])

  return (
    <Fragment>
      <div className='container'>
        {profile === null || loading ? (
            <Spinner />
        ) : (
          <Fragment>

            <Link to='/profiles' className='btn btn-light'>
          Back To Teachers
            </Link>
            {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === profile.user._id && (
          <Link to='/edit-profile' className='btn btn-dark'>
              Edit Profile
              </Link>
            )}
            <div className='profile-grid my-1'>
              <div className='profile-exp bg-white p-2'>
                <h2 className='text-primary'>Classes</h2>
                {profile.events.length > 0 ? (
                  <Fragment>
                    {profile.events.map(events => (
                      <ProfileClasses
                        key={events._id}
                        events={events}
                      />
                    ))}
                  </Fragment>
                ) : (
                  <h4>No class available for this teacher </h4>
                )}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile)
