import React, { Fragment } from 'react'
import Oldman from './Oldman'

const NotFound = () => {
  return (
    <Fragment>
      <div className='badpage-container'>
        <h1>
          <i className='fas fa-exclamation-triangle' /> Page Not Found
        </h1>
        <Oldman />
      </div>
    </Fragment>
  )
}

export default NotFound
