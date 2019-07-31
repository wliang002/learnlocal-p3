import React, { Fragment } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import './ClassCard.css'
import './MapClassCard.css'

const GeoCard = ({ event }) => {
  const events = event.map(eve => (

    <section id={eve.eventName.replace(/\s+/g, '-').toLowerCase()} className='active'>
      <div className='class-card'>
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
        <button className='directions-btn' > <a href={`https://www.google.com/maps/dir/?api=1&destination=${eve.location.replace(/ /g, '+')}`} target='_blank'>
        Get directions</a>
        </button >
        <p>
          <strong>Date:</strong> <Moment format='MM/DD/YYYY'>{moment.utc(eve.eventDate)}</Moment>
        </p>
        <p>
          <strong>Time:</strong> {eve.eventTime}
        </p>
        <p>
          <strong>Description:</strong> {eve.description}
        </p>

        <button className='class-signup-btn'>Sign Up</button>
      </div>
    </section>

  ))

  return (

    <Fragment>{events}</Fragment>

  )
}

export default GeoCard
