import React, { Fragment } from 'react'
import './ClassDisplays.css'
import MapBox from '../ClassCard/MapBox'

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