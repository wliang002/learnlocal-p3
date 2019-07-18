import React from 'react'
import './CategoryBtns.css'
import { Link, Redirect } from 'react-router-dom'
// ***** HC NOTES: do we use link to link each category button? *****
const CategoryBtns = props => (
  <div className='categoryBtnContainer'>
    <p>Search for a class happening in your neighborhood.</p>
    <div className='buttons'>
      <Link to='' className='btn btn-success'>
                dummy category 1
      </Link>
      <Link to='' className='btn btn-success'>
                dummy category 2
      </Link>
      <Link to='' className='btn btn-success'>
                dummy category 3
      </Link>
    </div>
  </div>
)

export default CategoryBtns
