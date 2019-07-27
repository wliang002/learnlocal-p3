import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './MapClassCard.css'
import ReactMapboxGl from 'react-mapbox-gl'
import ClassCard from './ClassCard'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import Geocode from 'react-geocode'

Geocode.setApiKey('AIzaSyBKMivIunMptvLe8cBRYFsGZ3PBZKPp3yU')

Geocode.enableDebug()

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGVhcm5sb2NhbCIsImEiOiJjanlkZ2dram4wcHY1M2ptZm8wNGZrNzVkIn0.SnFaLsmeVQkX5XSj8-pp-A'
})

const chapters = {
  'wooden-heart-pendants': {
    bearing: 27,
    center: [-122.59213, 37.983088],
    zoom: 15.5,
    pitch: 20
  },
  'aldgate': {
    duration: 6000,
    center: [-0.07571203, 51.51424049],
    bearing: 150,
    zoom: 15,
    pitch: 0
  }
}
const handleScroll = () => {
  const chapterNames = Object.keys(chapters)
  for (let i = 0; i < chapterNames.length; i++) {
    let chapterName = chapterNames[i]
    if (isElementOnScreen(chapterName)) {
      console.log('handleScroll | chapterName', chapterName)
      setActiveChapter(chapterName)
      break
    }
  }
}

const setActiveChapter = (chapterName) => {
  if (chapterName === activeChapterName) return
  console.log('setActiveChapter | setState to', chapters[activeChapterName]['center'])
  // this.setState({ 'center': chapters[activeChapterName]['center'] })

  document.getElementById(chapterName).setAttribute('class', 'active')
  document.getElementById(activeChapterName).setAttribute('class', '')

  activeChapterName = chapterName
}

const isElementOnScreen = (id) => {
  const element = document.getElementById(id)
  const bounds = element.getBoundingClientRect()
  return bounds.top < window.innerHeight && bounds.bottom - 1000 > 0
}

let activeChapterName = 'wooden-heart-pendants'
let stats = {
  center: [-122.27087, 37.87189],
  zoom: [15.0],
  bearing: [0],
  pitch: [0]
}

const MapBox = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    getProfiles()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [getProfiles])

  profiles.map(prof => {
    Geocode.fromAddress("san francisco, CA").then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        console.log('')
        console.log(lat, lng)
      },
      error => {
        console.error(error)
      }
    )
  })
  
  return (
    <div className='MapClassCardContainer'>
      <Map
        style='mapbox://styles/mapbox/streets-v10'
        center={stats.center}
        zoom={stats.zoom}
        bearing={stats.bearing}
        pitch={stats.pitch}
        className='the-map'
      />
      <div id='features'>
        <section id='wooden-heart-pendants' class='active'>
          {/* <ClassCard /> */}
        </section>
        <section id='aldgate'>
          <h3>Aldgate Station</h3>
          <p>Arthur Cadogan West was found dead, head crushed in on train tracks at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich Arsenal on the Bruce-Partington submarine, a secret military project. Plans for the submarine had been stolen and seven of the ten missing papers were found in West's possession. Mycroft implores Sherlock to take the case and recover the three missing papers.</p>
        </section>
        {profiles.length > 0 ? (
          profiles.map(profile => (
            <ClassCard event={profile.events} />
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>
    </div>
  )
}

MapBox.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(
  mapStateToProps,
  { getProfiles }
)(MapBox)