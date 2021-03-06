import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfiles } from '../../../actions/profile'
import '../../teachersView/dashboard/ClassDisplays.css'
import GeoCard from '../../mapFlyOver/GeoCard'

const AllSocial = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return (

    <Fragment>
      <div className='LearnByCategoryContainer'>
        <h1>Learn!</h1>
        <hr />
        <h2><i className='fas fa-glass-cheers' />&nbsp;Sign up for a <span className='selectedCategory'>Social</span> class happening in your&nbsp;neighborhood.</h2>
        <div className='AppDescriptionContainer'>
          <p>If there’s a class you’d like to take, click the “Sign up” buttom to&nbsp;RSVP.</p>
        </div>
        <hr />
        <div className='profiles'>
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <GeoCard userId={profile.user._id} event={profile.events.filter(e => e.eventType === 'Social')} />
            ))
          ) : (
            <p className='sorry'>We&rsquo;re sorry, we did not find any classes in that category...</p>
          )}
        </div>
      </div>
    </Fragment>

  )
}
AllSocial.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(AllSocial)
