import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../../mainDisplay/Landing/Spinner'
import { getProfileById } from '../../../actions/profile'
import ClassCard from '../../teachersView/ClassCard/ClassCard'
import '../../teachersView/dashboard/ClassDisplays.css'
import Wrapper from '../../teachersView/ClassCard/Wrapper'
// @resources https://github.com/prescottprue/react-redux-firebase/blob/master/docs/recipes/auth.md
// @resources https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/
const ClassBySelectTeacher = ({
  getProfileById,
  profile: { profile, loading },
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
            <Wrapper>{profile.events.length > 0 ? (
              <ClassCard userId={match.params.id} event={profile.events} />
            ) : (
              <p className='sorry'>We&rsquo;re sorry &mdash; this teacher is not hosting any classes right now.</p>

            )}</Wrapper>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}
// @resources https://learnetto.com/tutorials/typechecking-with-proptypes
ClassBySelectTeacher.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(
  mapStateToProps,
  { getProfileById }
)(ClassBySelectTeacher)
