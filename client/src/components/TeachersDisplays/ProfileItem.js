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
    social
  },
  auth
}) => {
  return (
    <div className='TeachersProfile'>
      <div className='widerViewProfile'>
        <div className='bioPhoto'>
          <img src={avatar} alt='' className='round-img' />
          <h1>{name}</h1>
          <p><strong>{location && <span>{location}</span>}</strong></p>
          <p>{titles}</p>
        </div>
      </div>
      <div className='narrowViewProfile'>
        <div className='bioPhoto'>
          <img src={avatar} alt='' className='round-img' />
        </div>
        <div className='teachersSubInfo'>
          <h1>{name}</h1>
          <p><strong>{location && <span>{location}</span>}</strong></p>
          <p>{titles}</p>
        </div>
        <div className='teachersSkills'><p><strong>My Skills:</strong></p>
          <ul>
            {skills.slice(0, 8).map((skill, index) => (
              <li key={index}>
                <p><i className='fas fa-check' /> {skill}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='bioSection'>
        <h1>About Me:</h1>
        <p>{bio}</p>
        {social ? (<p>
          {social.facebook ? (<a href={`${social.facebook}`} target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook fa-2x' /></a>) : (<span />)}
          {social.twitter ? (<a href={`${social.twitter}`} target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter fa-2x' /></a>) : (<span />)}
          {social.instagram ? (<a href={`${social.instagram}`} target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram fa-2x' /></a>) : (<span />)}
        </p>) : (<span />)}
      </div>
      <div className='widerViewProfile'>
        <div className='teachersSkills'><p><strong>My Skills:</strong></p>
          <ul>
            {skills.slice(0, 8).map((skill, index) => (
              <li key={index}>
                <p><i className='fas fa-check' /> {skill}</p>
              </li>
            ))}
          </ul>
          {auth ? (
            <span />
          ) : (
            <Link to={`/classes/${_id}`} className='selectTeachersClassesBtn btn'>
            My Classes
            </Link>
          )}
        </div>
      </div>
      <div className='narrowViewProfile'>
        {auth ? (
          <span />
        ) : (
          <Link to={`/classes/${_id}`} className='selectTeachersClassesBtn btn'>
            My Classes
          </Link>
        )}
      </div>
    </div>
  )
}
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
}
export default ProfileItem
