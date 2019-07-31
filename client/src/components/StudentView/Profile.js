import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../Landing/Spinner'
import { getProfileById } from '../../actions/profile'
import ClassCard from '../ClassCard/ClassCard'
import '../ClassDisplays/ClassDisplays.css'

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
      <div className='SpecificTeachersClassesContainer'>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1><i className='fab fa-earlybirds' />
              &nbsp;{profile.user.name}&rsquo;s Classes</h1>
            {profile.events.length > 0 ? (
              <ClassCard event={profile.events} />
            ) : (
              <p className='sorry'>We&rsquo;re sorry &mdash; this teacher is not hosting any classes right now.</p>
            )}
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
