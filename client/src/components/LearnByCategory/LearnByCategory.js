import React from 'react'
import './LearnByCategory.css'
import { Link, Redirect } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'

const LearnByCategory = (props) => {
  return [
    <div className='LearnByCategory'>
      <h1>Learn!</h1>
      <hr />
      <h2>Sign up for a <span class='selectedCategory'>Art-&amp;-Music</span> class happening in your
    neighborhood.
      </h2>
      {/* classes in this category */}
      <ClassCard />
      <hr />

    </div>
  ]
}
export default LearnByCategory
