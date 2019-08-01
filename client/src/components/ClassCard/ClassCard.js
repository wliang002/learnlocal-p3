import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteEvent } from '../../actions/profile'
import './ClassCard.css'

const ClassCard = ({ event, deleteEvent, auth }) => {
  const events = event.map(eve => (
    <div className='class-card' key={eve._id}>
      <h2 className='class-title'>Class: {eve.eventName}</h2>
      <p>
        <strong>Taught by:</strong> {eve.teachersName}
      </p>
      <p>
        <strong>Category:</strong> {eve.eventType}
      </p>
      <p>
        <strong>Location:</strong> {eve.location}
      </p>

      {auth ? (
        <span />
      ) : (
        <button className='directions-btn' > <a href={`https://www.google.com/maps/dir/?api=1&destination=${eve.location.replace(/ /g, '+')}`} target='_blank'>
            Get directions</a>
        </button >
      )}

      <p>
        <strong>Date:</strong> <Moment format='MM/DD/YYYY'>{moment.utc(eve.eventDate)}</Moment>
      </p>
      <p>
        <strong>Time:</strong> {eve.eventTime}
      </p>
      <p>
        <strong>Description:</strong> {eve.description}
      </p>
      {auth ? (
        <div className='dash-buttons'>
          <button className='btn'
            onClick={() => deleteEvent(eve._id)}>
            <i class='fas fa-times' />&nbsp;Delete</button>
          <button className='btn'>
            <i class='fas fa-pen' />&nbsp;Update</button>
        </div>
      ) : (
        <button className='class-signup-btn'>Sign Up</button>
      )}

    </div>
  ))

  return (
    <div className='class-body'>{events}</div>
  )
}

ClassCard.prototype = {
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

export default connect(null, { deleteEvent }
)(ClassCard)
