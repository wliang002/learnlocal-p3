import React from 'react'
import './TeachForm.css'
import { connect } from 'react-redux'

const TeachForm = (props) => (

  <div className='container'>

    <h1>Teach</h1>
    <hr />
    <h2>Host a class for your neighbors.</h2>
    <div className='teachForm'>
      <form id='addClass'>

        <div className='form-group'>
          <label for='teachersName'>Teacher's Name</label>
          <textarea className='form-control' id='teachersName' rows='1' />
        </div>

        <div className='form-group'>
          <label for='eventname'>Event Name</label>
          <textarea className='form-control' id='eventName' rows='2' />
        </div>

        <div className='form-group'>
          <label for='categorySelect'>Select a category for your class type</label>
          <select className='form-control' id='categorySelect'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className='form-group'>
          <label for='location'>Location address:</label>
          <textarea className='form-control' id='location' rows='2' />
        </div>

        <div className='form-group'>
          <label for='location'>Date:</label>
          <textarea className='form-control' id='date' rows='1' />
        </div>

        <div className='form-group'>
          <label for='location'>Time:</label>
          <textarea className='form-control' id='time' rows='1' />
        </div>

        <div className='form-group'>
          <label for='description'>Description:</label>
          <textarea className='form-control' id='description' rows='8' />
        </div>
      </form>

    </div>
  </div>
)

export default TeachForm
