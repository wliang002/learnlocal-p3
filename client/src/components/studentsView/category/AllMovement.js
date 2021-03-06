import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfiles } from '../../../actions/profile'
import '../../teachersView/dashboard/ClassDisplays.css'
import GeoCard from '../../mapFlyOver/GeoCard'
import Wrapper from '../../teachersView/ClassCard/Wrapper'

const AllMovement = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return (

    <Fragment>
      <div className='LearnByCategoryContainer'>
        <h1>Learn!</h1>
        <hr />
        <h2><i className='fas fa-running' />&nbsp;Sign up for a <span className='selectedCategory'>Movement</span> class happening in your&nbsp;neighborhood.</h2>
        <div className='AppDescriptionContainer'>
          <p>If there’s a class you’d like to take, click the “Sign up” buttom to&nbsp;RSVP.</p>
        </div>
        <hr />
        <div className='profiles'>
          <Wrapper>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <GeoCard userId={profile.user._id} event={profile.events.filter(e => e.eventType === 'Movement')} />
              ))
            ) : (
              <p className='sorry'>We&rsquo;re sorry, we did not find any classes in that category...</p>
            )}
          </Wrapper>
        </div>
      </div>
    </Fragment>

  )
}
AllMovement.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(AllMovement)
