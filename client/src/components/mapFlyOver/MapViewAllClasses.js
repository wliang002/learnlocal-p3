import React, { Fragment } from 'react'
import '../teachersView/dashboard/ClassDisplays.css'
import MapBox from './MapBox'

const MapViewAllClasses = (props) => {
  return [
    <Fragment>
      <div className='LearnByCategoryContainer'>
        <h1>Learn!</h1>
        <hr />
        <MapBox />
      </div>
    </Fragment>
  ]
}
export default MapViewAllClasses
