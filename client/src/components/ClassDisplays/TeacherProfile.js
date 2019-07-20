import React from 'react'
import './ClassDisplays.css'
import { Link, Redirect } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'

const TeacherProfile = (props) => {
  return [
    <div className='teacherProfile'>
      <h1>Teacher&rsquo;s classes:</h1>
      <hr />
      {/* insert profile */}
      {/* classes they're teaching */}
      <ClassCard />
      <hr />


    </div>
  ]
}
export default TeacherProfile
