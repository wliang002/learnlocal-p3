import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import ClassCard from '../ClassCard/ClassCard'

const AllEvents = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return (

    <Fragment>
      <div className='container'>

        <h1 className='large text-primary'>All Classes</h1>
        <p className='lead'>
          <i className='fas fa-cat' /> Browse Classes
        </p>
        <div className='profiles'>
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ClassCard event={profile.events} />
            ))
          ) : (
            <h4>No profiles found...</h4>
          )}
        </div>
      </div>
    </Fragment>

  )
}
AllEvents.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(AllEvents)
