import React from 'react'
import './ClassDisplays.css'
import { Link, Redirect } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'
import MapClassCard from '../ClassCard/MapClassCard'
import MapBox from '../ClassCard/MapBox'
import MapTest from '../ClassCard/MapTest';

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
      <MapTest />
      {/* <MapClassCard /> */}
      <hr />

    </div>
  ]
}
export default LearnByCategory
