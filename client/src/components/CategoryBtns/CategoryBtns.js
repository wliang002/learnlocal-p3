import React from 'react'
import './CategoryBtns.css'
import { Link, Redirect } from 'react-router-dom'
// ***** HC NOTES: do we use link to link each category button? *****
const CategoryBtns = props => (
  <div className='categoryBtnContainer'>
    <p>Search for a class happening in your neighborhood.</p>
    <div className='buttons'>
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
    </div>
  </div>
)

export default CategoryBtns
