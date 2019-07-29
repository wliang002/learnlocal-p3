import React from 'react'
import './CategoryBtns.css'
import { Link } from 'react-router-dom'

const CategoryBtns = props => (
  <div className='categoryBtnContainer'>
    <hr />
    <p>Search for a class happening in your neighborhood.</p>
    <div className='buttons'>
      <Link to='/allclasses' className='btn btn-success'>
        All Classes
      </Link>
      <Link to='/art' className='btn btn-success'>
        Art
      </Link>
      <Link to='/craft' className='btn btn-success'>
        Craft
      </Link>
      <Link to='/movement' className='btn btn-success'>
        Movement
      </Link>
      <Link to='/social' className='btn btn-success'>
        Social
      </Link>
      <Link to='/other' className='btn btn-success'>
        Other
      </Link>
    </div>
  </div>
)

export default CategoryBtns
