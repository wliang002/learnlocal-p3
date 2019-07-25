import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

const CraftEvents = ({
  profile: {
    user: { name, avatar },
    events
  }
}) => {
  const targets = events.filter(e => e.eventType === 'Craft')
  return (
    <div>
      {targets.map(e => (
        <div className='class-card'>
          <h2 className='class-title'>Class: {e.eventName}</h2>
          <p>
            <strong>Taught by:</strong> {e.teachersName}
          </p>
          <p>
            <strong>Category:</strong> {e.eventType}
          </p>
          <p>
            <strong>Location:</strong> {e.location}
          </p>
          <button className='directions-btn' > <a href={`https://www.google.com/maps/dir/?api=1&destination=${e.location.replace(/ /g, '+')}`} target='_blank'>
      Get directions</a>
      </button >
      <p>
        <Moment format='YYYY/MM/DD'>{moment.utc(e.eventDate)}</Moment> -{' '}
      </p>
      <p>
        <strong>Time:</strong> {e.eventTime}
      </p>
      <p>
        <strong>Description:</strong> {e.description}
      </p>

      <button className='class-signup-btn'>Sign Up</button>
        </div>
      ))}
    </div>
  )
}
CraftEvents.propTypes = {
  profile: PropTypes.object.isRequired
}
export default CraftEvents
