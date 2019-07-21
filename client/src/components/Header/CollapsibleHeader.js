import React from 'react'
import Collapsible from 'react-collapsible'
import { Link } from 'react-router-dom'

const CollapsibleHeader = () => {
  return [
    <div className='collapsibleHeader'>
      <Collapsible trigger='☰'>
        <div className='collapsibleCategories'>
          <Collapsible trigger='Browse Classes'>
            <p>
              <Link to='/learn-by-category' className='dropdown-item'>Category placeholder</Link>
            </p>
            <p>
              <Link to='/learn-by-category' className='dropdown-item'>Category placeholder</Link>
            </p>
          </Collapsible>
        </div>
        <div className='collapsibleTeachers'>
          <Collapsible trigger='Browse Teachers'>
            <p>
              <Link to='/teacher-profile' className='dropdown-item'>TeacherProfile placeholder</Link>
            </p>
            <p>
              <Link to='/teacher-profile' className='dropdown-item'>TeacherProfile placeholder</Link>
            </p>
          </Collapsible>
        </div>
        <div className='collapsibleLogInBtns'>
          <Link to='/login'className='dropdown-item'>
            Log In
          </Link>
        </div>
        <div className='collapsibleLogInBtns'>
          <Link to='/register' className='dropdown-item'>
            Create an Account
          </Link>
        </div>
      </Collapsible>
    </div>
  ]
}

export default CollapsibleHeader
