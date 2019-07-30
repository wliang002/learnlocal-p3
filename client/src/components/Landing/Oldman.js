import React, { Fragment } from 'react'
import Oldman from '../../images/404.gif'

export default () => (
  <Fragment>
    <img
      src={Oldman}
      style={{ width: '300px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
)