import React from 'react'
import { Link } from 'react-router-dom'
import './ClassCard.css'

const ClassCard = props => (
  <div className='class-card'>
    <h2 className='class-title'>Class: Wooden heart pendants</h2>
    <p>
      <strong>Taught by:</strong> Hetty Chin
    </p>
    <p>
      <strong>Location:</strong> 124 Bolinas Road, Fairfax, CA 94930
    </p>
    {/* need to code it to read the address -- https://www.google.com/maps/dir/?api=1&destination= PARAMETERS */}
    <button className='directions-btn'><a href='https://www.google.com/maps/dir/?api=1&destination=124+Bolinas+Road%2C+Fairfax%2C+CA+94930' target='_blank'>
      Get directions</a>
    </button>
    <p>
      <strong>Date:</strong> Wednesday, June 12th, 2019
    </p>
    <p>
      <strong>Time:</strong> 2:30PM - 5:30PM
    </p>
    <p>
      <strong>Description:</strong> Wooden blanks and carving tools provided.
      Beginners welcome. Come learn how to carve a wooden heart pendant, add an
      eyelet, and braid a new cord for your new necklace.{' '}
    </p>

    <button className='class-signup-btn'>Sign Up</button>
  </div>
)

export default ClassCard
