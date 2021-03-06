import React, { Fragment } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './MapClassCard.css'

const GeoCard = ({ userId, event }) => {
  const events = event.map(eve => (

    <section id={eve.eventName.replace(/\s+/g, '-').toLowerCase()} className='active'>
      <div className='class-card'>
        <h2 className='class-title'>{eve.eventType} Class:<br /> {eve.eventName}</h2>
        <p>
          <strong>Taught by:</strong> {eve.teachersName}
        </p>
        <p>
          <strong>Location:</strong> {eve.location}
        </p>
        {/* h/t https://developers.google.com/maps/documentation/urls/guide */}
        <button className='btn directions-btn' > <a href={`https://www.google.com/maps/dir/?api=1&destination=${eve.location.replace(/ /g, '+')}`} target='_blank' rel='noopener noreferrer'>
          <i className='fas fa-directions' />&nbsp;Get directions</a>
        </button >
        <p>
          <strong>Date:</strong> <Moment format='MM/DD/YYYY'>{moment.utc(eve.eventDate)}</Moment>
        </p>
        <p>
          <strong>Time:</strong> {eve.eventTime}
        </p>
        <div className='classDescription'>
          <p>
            <strong>Description:</strong> {eve.description}
          </p>
        </div>
        <div className='classSizeRow'>
          <div className='classSizeCol'>
            <p>
              <strong>Class Size:</strong> {eve.eventSize}
            </p>
          </div>
          <div className='classSizeCol'>
            <p>
              <strong>Currently enrolled:</strong> {eve.students.length}
            </p>
          </div>
        </div>

        {eve.students.length >= eve.eventSize ? (
          <p className='sorry-full'>
            <i className='far fa-frown' />&nbsp;We&rsquo;re sorry &mdash; this class is full.</p>
        ) : (
          <Link className='btn class-signup-btn' to={`/sign-up/${userId}/${eve._id}`}>
            <i className='fas fa-user-plus' />&nbsp;Sign Up
          </Link>
        )}
      </div>
    </section>

  ))

  return (

    <Fragment>{events}</Fragment>

  )
}

export default GeoCard
