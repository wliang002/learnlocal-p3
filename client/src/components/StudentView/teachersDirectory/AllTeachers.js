import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProfileAbout from './ProfileAbout'
import Spinner from '../../mainDisplay/Landing/Spinner'
import { getProfiles } from '../../../actions/profile'
import './AllTeachers.css'

const AllTeachers = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='listOfTeachersContainer'>
            <h1><i className='fab fa-earlybirds' />&nbsp;Our Teachers</h1>
            <p className='lead'>
                Learn a bit about our teachers and see what classes they&rsquo;re teaching!
            </p>
            <div className='profiles'>
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileAbout profile={profile} />
                ))
              ) : (
                <p>We're sorry, we did not find any profiles...</p>
              )}
            </div>
          </div>
        </Fragment>
      )}

    </Fragment>

  )
}
// @resources https://learnetto.com/tutorials/typechecking-with-proptypes
AllTeachers.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(AllTeachers)
