import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    titles,
    bio,
    skills,
    social: { facebook, twitter, instagram }
  }
}) => {
  return (
    <div className='TeachersProfile'>
      <div className='bioPhoto'>
        <img src={avatar} alt='' className='round-img' />
        <h1>{name}</h1>
        <p><strong>{location && <span>{location}</span>}</strong></p>
        <p>{titles}</p>
      </div>
      <div className='bioSection'>
        <h1>About Me:</h1>
        <p>{bio}</p>
        <p><a href={`${facebook}`} target='_blank'><i className='fab fa-facebook fa-2x' /></a><a href={`${twitter}`} target='_blank'><i className='fab fa-twitter fa-2x' /></a> <a href={`${instagram}`} target='_blank'><i className='fab fa-instagram fa-2x' /></a></p>
      </div>
      <div className='teachersSkills'><p><strong>My Skills:</strong></p>
        <ul>
          {skills.slice(0, 8).map((skill, index) => (
            <li key={index}>
              <p><i className='fas fa-check' /> {skill}</p>
            </li>
          ))}
        </ul>
        <Link to={`/classes/${_id}`} className='selectTeachersClassesBtn btn'>
          My Classes
        </Link>
      </div>
    </div>
  )
}
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}
export default ProfileItem
