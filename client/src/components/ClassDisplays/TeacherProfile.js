import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './ClassDisplays.css'
import { Link, Redirect } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

const TeacherProfile = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [])

  return [
    <div className='teacherProfile'>
      <h1>Teacher&rsquo;s Classes:</h1>
      <hr />
      {/* insert profile */}
      {/* classes they're teaching */}
      <ClassCard />
      <hr />


    </div>
  ]
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
