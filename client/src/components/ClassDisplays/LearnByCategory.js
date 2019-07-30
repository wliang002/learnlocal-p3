import React from 'react'
import './ClassDisplays.css'
import MapBox from '../ClassCard/MapBox'
import ClassCard from '../ClassCard/ClassCard'

const LearnByCategory = (props) => {
  return [
    <div className='LearnByCategoryContainer'>
      <h1>Learn!</h1>
      <hr />
      <h2>Sign up for a <span className='selectedCategory'>Art-&amp;-Music</span> class happening in your
    neighborhood.
      </h2>
      {/* classes in this category */}
      {/* <div className='mobileViewCards'>
        <ClassCard />
      </div> */}
      <MapBox />
      <hr />

    </div>
  ]
}
export default LearnByCategory
