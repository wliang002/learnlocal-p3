import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    bio,
    skills
  }
}) => {
  return (
    <div className='TeachersProfile'>
      <div className='bioPhoto'>
        <img src={avatar} alt='' className='round-img' />
        <h1>{name}</h1>
      </div>
      <div className='bioSection'>
        <p>Bio: {bio}</p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/classes/${_id}`} className='btn btn-primary'>
          View Classes
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}
export default ProfileItem
