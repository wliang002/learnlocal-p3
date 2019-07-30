import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MapClassCard.css'
import ReactMapboxGl from 'react-mapbox-gl'
import ClassCard from './ClassCard'
import axios from 'axios'
import GeoCard from './GeoCard'




const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGVhcm5sb2NhbCIsImEiOiJjanlkZ2dram4wcHY1M2ptZm8wNGZrNzVkIn0.SnFaLsmeVQkX5XSj8-pp-A'
})


let activeChapterName = 'learn-javascript-with-me';

class MapTest extends React.Component {
  state = {
    profiles: [],
    chapters: {},
    center: [-122.27087, 37.87189],
    zoom: [15.0],
    bearing: [0],
    pitch: [0]
  }




  componentDidMount() { 
    axios.get('/api/profile')
      .then(res => {
        this.setState({ profiles: res.data })
        this.addChapters()
      })
      .catch(err => {
        console.log(err)
      })

    window.addEventListener('scroll', this.handleScroll);
  }
  addClassCard() {
    return this.state.profiles.map(profile => {
      return <GeoCard event={profile.events} />
    })
  }

  addChapters() {
    const chaps = []
    const newChaps = {}
    this.state.profiles.map(profile => {
      chaps.push(this.makeChapters(profile.events))
    })

    chaps.map(chap => {
        if (Object.keys(chap).length  === 1) {
          newChaps[Object.keys(chap)[0]] = Object.values(chap)[0]
        } 
        if (Object.keys(chap).length  > 1) {
          Object.keys(chap).map( (k,i) => {
            newChaps[k] = Object.values(chap)[i]
          })
        }
    })

    console.log(newChaps)

    this.setState({ chapters: newChaps })
  }

  makeChapters(events) {
    const allevents = {}
    events.map(event => {
      allevents[event.eventName.replace(/\s+/g, '-').toLowerCase()] = {
        address: event.location,
        bearing: 90,
        center: event.geocode[0].split(',').map(parseFloat),
        zoom: 13,
        pitch: 40
      }
    })
    return allevents

  }



  componentWillUnmount() {
    this.setState({ chapters: this.addChapters() })
    window.removeEventListener('scroll', this.handleScroll);
    
  }

  handleScroll = () => {
    
    const chapterNames = Object.keys(this.state.chapters);
    // console.log(chapterNames)
    for (let i = 0; i < chapterNames.length; i++) {
      let chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        console.log('handleScroll | chapterName', chapterName)
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }

  setActiveChapter = (chapterName) => {
    if (chapterName === activeChapterName) return;
    // console.log(this.state.chapters)
    // console.log(this.state.chapters)
    console.log('setActiveChapter | setState to', this.state.chapters[activeChapterName]['center'])
    this.setState({ 'center': this.state.chapters[activeChapterName]['center'] })

    document.getElementById(chapterName).setAttribute('className', 'active');
    document.getElementById(activeChapterName).setAttribute('className', '');

    activeChapterName = chapterName;
  }

  isElementOnScreen = (id) => {
    const element = document.getElementById(id);
    // console.log(element)
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom - 1000 > 0;
  }

  render() {
    return (
      <div className='MapClassCardContainer'>

        <Map
          style='mapbox://styles/mapbox/streets-v10'
          center={this.state.center}
          zoom={[15.0]}
          bearing={[0]}
          pitch={[0]}
          className='the-map'
        />
        <div id='features'>
        
          {this.addClassCard()}
          {/* {this.addChapters()} */}
        </div>
      </div>
    )
  }
}

export default MapTest
