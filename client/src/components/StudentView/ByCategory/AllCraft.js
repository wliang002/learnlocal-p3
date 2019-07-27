import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfiles } from '../../../actions/profile'
import CraftEvents from './CraftEvents'
import '../../ClassDisplays/ClassDisplays.css'

const AllCraft = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles()
  }, [getProfiles])
  return (

    <Fragment>
      <div className='LearnByCategoryContainer'>
        <h1>Learn!</h1>
        <hr />
        <h2><i className='fas fa-cat' />&nbsp;Sign up for a <span className='selectedCategory'>Craft</span> class happening in your&nbsp;neighborhood.</h2>
        <div className='AppDescriptionContainer'>
          <p>If there’s a class you’d like to take, click the “Sign up” buttom to&nbsp;RSVP.</p>
        </div>
        <hr />
        <div className='profiles'>
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <CraftEvents key={profile._id} profile={profile} category={'craft '} />
            ))
          ) : (
            <p className='sorry'>We&rsquo;re sorry, we did not find any classes in that category...</p>
          )}
        </div>
      </div>
    </Fragment>

  )
}
AllCraft.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(AllCraft)
