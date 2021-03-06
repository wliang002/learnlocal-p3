import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import axios from 'axios'
import GeoCard from './GeoCard'
import StickyBox from 'react-sticky-box'

// h/t to https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/
// h/t to https://github.com/alex3165/react-mapbox-gl

const Map = ReactMapboxGl({
  // accessToken: 'pk.eyJ1IjoibGVhcm5sb2NhbCIsImEiOiJjanlkZ2dram4wcHY1M2ptZm8wNGZrNzVkIn0.SnFaLsmeVQkX5XSj8-pp-A'
  accessToken: 'pk.eyJ1IjoibGVhcm5sb2NhbCIsImEiOiJjanowbjUzZmUwZTZ1M2xucXRiMTB2MW05In0.HDkoLSx_IJwG56ZseWacWQ'
})

// anchor the beginning center for the map
let activeChapterName = `full-stack-coding-bootcamp`

class MapBox extends React.Component {
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
  // add all of the classes
  addClassCard() {
    return this.state.profiles.map(profile => {
      return <GeoCard userId={profile.user._id} event={profile.events} />
    })
  }

  addChapters() {
    const chaps = []
    const newChaps = {}
    this.state.profiles.map(profile => {
      chaps.push(this.makeChapters(profile.events))
      return null
    })

    chaps.map(chap => {
        if (Object.keys(chap).length  === 1) {
          newChaps[Object.keys(chap)[0]] = Object.values(chap)[0]
        } 
        if (Object.keys(chap).length  > 1) {
          Object.keys(chap).map( (k,i) => {
            newChaps[k] = Object.values(chap)[i]
            return null
          })
        }
        return null
    })
    this.setState({ chapters: newChaps })
  }
  // for each event set their center based on the geocode from the database
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
      return null
    })
    return allevents
  }

  componentWillUnmount() {
    this.setState({ chapters: this.addChapters() })
    window.removeEventListener('scroll', this.handleScroll);
  }
  // define the active chapter as the one that is one the screen
  handleScroll = () => {
    const chapterNames = Object.keys(this.state.chapters);
    for (let i = 0; i < chapterNames.length; i++) {
      let chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        console.log('the element on screen:', chapterName)
        break;
      }
    }
  }
  // the active chapter centers at the geocode
  setActiveChapter = (chapterName) => {
    if (chapterName === activeChapterName) return;
    this.setState({ 'center': this.state.chapters[activeChapterName]['center'] })
    console.log('centered at:', activeChapterName)
    activeChapterName = chapterName;
    console.log('active chapter switched to:', activeChapterName)
  }
  // read which chapter is on the screen
  isElementOnScreen = (id) => {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom - 800 > 0;
  }

  render() {
    const obj = {'s':'mapbox://styles/mapbox/streets-v10'}
    return (

        <div className='MapClassCardContainer'>
          {/* keep the map fixed */}
          <StickyBox>
            <Map
              style= {obj.s}
              center={this.state.center}
              zoom={[15.0]}
              bearing={[0]}
              pitch={[0]}
              className='the-map'
            />
          </StickyBox>
          {/* but not the classcards */}
          <div id='features'>
            <h2>Sign up for a class happening in your neighborhood.</h2>
            {this.addClassCard()}
          </div>
        </div>
    )
  }
}

export default MapBox
