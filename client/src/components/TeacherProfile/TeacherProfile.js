import React from 'react'
import './TeacherProfile.css'
import { Link, Redirect } from 'react-router-dom'
import ClassCard from '../ClassCard/ClassCard'

const TeacherProfile = (props) => {
  return [
    <div className='teacherProfile'>
      <h1>Teacher&rsquo;s classes:</h1>
      {/* insert profile */}
      {/* classes they're teaching */}
      <ClassCard />


    </div>
  ]
}
export default TeacherProfile
