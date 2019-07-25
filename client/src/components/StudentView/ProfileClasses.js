import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

const ProfileClasses = ({
  events: { teachersName,
    eventName,
    eventType,
    location,
    eventDate,
    eventTime,
    description }
}) => (
  <div>
    <h3 className='text-dark'>{eventName}</h3>
    <p>
      <strong>Teacher: </strong> {teachersName}
    </p>
    <p>
      <Moment format='YYYY/MM/DD'>{moment.utc(eventDate)}</Moment> -{' '}
    </p>
    <p>
      <strong>Time: </strong> {eventTime}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
)

ProfileClasses.propTypes = {
  experience: PropTypes.object.isRequired
}

export default ProfileClasses
