import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteEvent } from '../../actions/profile'
import './ClassCard.css'
import Student from './Student'

const ClassCard = ({ userId, event, deleteEvent, auth }) => {
  const [displayStudents, toggleStudents] = useState(false)
  const events = event.map(eve => (
    <div className='class-card' key={eve._id}>
      <h2 className='class-title'>{eve.eventType} Class:<br />{eve.eventName}</h2>
      <p>
        <strong>Taught by:</strong> {eve.teachersName}
      </p>
      <p>
        <strong>Location:</strong> {eve.location}
      </p>

      {auth ? (
        <span />
      ) : (
        <button className='directions-btn' > <a href={`https://www.google.com/maps/dir/?api=1&destination=${eve.location.replace(/ /g, '+')}`} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-directions' />&nbsp;Get directions</a>
        </button >
      )}

      <p>
        <strong>Date: </strong> <Moment format='MM/DD/YYYY'>{moment.utc(eve.eventDate)}</Moment>
      </p>
      <p>
        <strong>Time: </strong>{eve.eventTime}
      </p>
      <div className='classDescription'>
        <p>
          <strong>Description:</strong> {eve.description}
        </p>
      </div>
      <div className='classSizeRow'>
        <div className='classSizeCol'>
          <p>
            <strong>Class Size: </strong>{eve.eventSize}
          </p>
        </div>
        <div className='classSizeCol'>
          <p>
            <strong>Currently enrolled:</strong> {eve.students.length}
          </p>
        </div>
      </div>
      {auth ? (
        <Fragment>
          <hr />
          <div
            onClick={() => toggleStudents(!displayStudents)}
            className='class-signup-btn'
          >
            <i className='fas fa-users' />&nbsp;Students enrolled in your class&nbsp;<i className='fas fa-caret-down' />
          </div>
          {eve.students.length > 0 ? (
            <Fragment>
              {displayStudents && (
                <Fragment>
                  <Student student={eve.students} />
                </Fragment>
              )}
            </Fragment>
          ) : (
            <span />
          )}
          <div className='dash-buttons'>
            <button className='DeleteBtn btn'
              onClick={() => deleteEvent(eve._id)}>
              <i className='fas fa-times' />&nbsp;Delete Class</button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {eve.students.length >= eve.eventSize ? (
            <p className='sorry-full'>
              <i className='far fa-frown' />&nbsp;We&rsquo;re sorry &mdash; this class is full.</p>
          ) : (
            <Link className='btn class-signup-btn' to={`/sign-up/${userId}/${eve._id}`}>
              <i className='fas fa-user-plus' />&nbsp;Sign Up
            </Link>
          )}
        </Fragment>
      )}

    </div>
  ))

  return (
    <Fragment>{events}</Fragment>
  )
}
// @resources https://learnetto.com/tutorials/typechecking-with-proptypes
ClassCard.prototype = {
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

export default connect(null, { deleteEvent }
)(ClassCard)
