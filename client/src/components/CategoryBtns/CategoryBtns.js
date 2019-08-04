import React from 'react'
import './CategoryBtns.css'
import { Link } from 'react-router-dom'

const CategoryBtns = props => (
  <div className='categoryBtnContainer'>
    <hr />
    <p>Search for a class happening in your neighborhood.</p>
    <div className='buttons'>
      <Link to='/learn-by-category' className='btn btn-success'>
        <i className='fas fa-cat' />&nbsp;All Classes
      </Link>
      <Link to='/art' className='btn btn-success'>
        <i className='fas fa-palette' />&nbsp;Art
      </Link>
      <Link to='/cooking' className='btn btn-success'>
        <i className='fas fa-utensils' />&nbsp;Cooking
      </Link>
      <Link to='/craft' className='btn btn-success'>
        <i className='fas fa-drafting-compass' />&nbsp;Craft
      </Link>
      <Link to='/creative' className='btn btn-success'>
        <i className='far fa-lightbulb' />&nbsp;Creative
      </Link>
      <Link to='/garden' className='btn btn-success'>
        <i className='fas fa-seedling' />&nbsp;Garden
      </Link>
      <Link to='/movement' className='btn btn-success'>
        <i className='fas fa-running' />&nbsp;Movement
      </Link>
      <Link to='/social' className='btn btn-success'>
        <i className='fas fa-glass-cheers' />&nbsp;Social
      </Link>
      <Link to='/technology' className='btn btn-success'>
        <i className='fas fa-laptop' />
          &nbsp;Technology
      </Link>
      <Link to='/wellness' className='btn btn-success'>
        <i className='fas fa-spa' />
          &nbsp;Wellness
      </Link>
      <Link to='/other' className='btn btn-success'>
        <i className='fas fa-cat' />&nbsp;Other
      </Link>
    </div>
  </div>
)

export default CategoryBtns
