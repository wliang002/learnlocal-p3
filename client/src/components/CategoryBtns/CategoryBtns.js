import React from 'react'
import './CategoryBtns.css'
import { Link } from 'react-router-dom'

const CategoryBtns = props => (
  <div className='categoryBtnContainer'>
    <hr />
    <p>Search for a class happening in your neighborhood.</p>
    <div className='buttons'>
      <Link to='/map-all-classes' className='btn'>
        <i className='fas fa-cat' />&nbsp;<span className='wideViewText'>Map View of All Classes</span><span className='narrowViewText'>All Classes</span>
      </Link>
      <Link to='/art' className='btn'>
        <i className='fas fa-palette' />&nbsp;Art
      </Link>
      <Link to='/cooking' className='btn'>
        <i className='fas fa-utensils' />&nbsp;Cooking
      </Link>
      <Link to='/craft' className='btn'>
        <i className='fas fa-drafting-compass' />&nbsp;Craft
      </Link>
      <Link to='/creative' className='btn'>
        <i className='far fa-lightbulb' />&nbsp;Creative
      </Link>
      <Link to='/garden' className='btn'>
        <i className='fas fa-seedling' />&nbsp;Garden
      </Link>
      <Link to='/movement' className='btn'>
        <i className='fas fa-running' />&nbsp;Movement
      </Link>
      <Link to='/social' className='btn'>
        <i className='fas fa-glass-cheers' />&nbsp;Social
      </Link>
      <Link to='/technology' className='btn'>
        <i className='fas fa-laptop' />
          &nbsp;Technology
      </Link>
      <Link to='/wellness' className='btn'>
        <i className='fas fa-spa' />
          &nbsp;Wellness
      </Link>
      <Link to='/other' className='btn'>
        <i className='fas fa-cat' />&nbsp;Other
      </Link>
    </div>
  </div>
)

export default CategoryBtns
