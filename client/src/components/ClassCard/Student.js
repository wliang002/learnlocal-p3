import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Student = ({ student }) => {
  const students = student.map((student, i) => {
    return (
      <Fragment>
        <tr key={student._id}>
          <th scope='row'>{i}</th>
          <td>{student.studentsName}</td>
          <td>{student.studentsEmail}</td>
          <td>{student.studentsPhone}</td>
        </tr>
      </Fragment>
    )
  })
  return (
    <table className='table table-responsive-sm'>
      <thead>
        <tr className='student-table-header'>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
        </tr>
      </thead>
      <tbody>
        {students}
      </tbody>
    </table>
  )
}
// @resources https://learnetto.com/tutorials/typechecking-with-proptypes
Student.prototype = {
  students: PropTypes.array.isRequired
}

export default connect(null, {})(Student)
