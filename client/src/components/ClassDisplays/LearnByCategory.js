import React, { Fragment } from 'react'
import './ClassDisplays.css'
import MapBox from '../ClassCard/MapBox'

const LearnByCategory = (props) => {
  return [
    <Fragment>
      <div className='LearnByCategoryContainer'>
        <h1>Learn!</h1>
        <hr />
        {/* classes in this category */}
        <MapBox />
      </div>
    </Fragment>
  ]
}
export default LearnByCategory
