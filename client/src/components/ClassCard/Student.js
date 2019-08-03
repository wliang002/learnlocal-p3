import React from 'react'
import { connect } from 'react-redux'

const Student =  ({ student }) => {
  return (
    <div>
      <p>Name: {student.studentsName}</p>
      <p>Email: {student.studentsEmail}</p>
      <p>Phone: {student.studentsPhone}</p>
    </div>
  )
}

export default connect(null, { })(Student)
