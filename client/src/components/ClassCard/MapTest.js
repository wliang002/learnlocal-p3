import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MapClassCard.css'
import ReactMapboxGl from 'react-mapbox-gl'
import ClassCard from './ClassCard'
import axios from 'axios'
import Geocode from 'react-geocode'



Geocode.setApiKey('AIzaSyDnRYpEtmDx_-7PQ_xHhiF9els9bGTI6t4')

Geocode.enableDebug()

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoibGVhcm5sb2NhbCIsImEiOiJjanlkZ2dram4wcHY1M2ptZm8wNGZrNzVkIn0.SnFaLsmeVQkX5XSj8-pp-A'
})

const converter = (address) =>{
        Geocode.fromAddress(address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location
              console.log(address)
              console.log(lat, lng)
            },
            error => {
              console.error(error)
            }
      )
  // return [lat, lng]
    
}
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
  },
  'london-bridge': {
    bearing: 90,
    center: [-0.08533793, 51.50438536],
    zoom: 13,
    speed: 0.6,
    pitch: 40
    }
}

let activeChapterName = 'wooden-heart-pendants';
let data = {}

class MapTest extends React.Component {
    state = {
         profiles: []
    }

    

    getGeocode = (addresses) => {
        addresses.map(address => {
            Geocode.fromAddress(address).then(
                response => {
                  const { lat, lng } = response.results[0].geometry.location;
                  console.log(lat, lng);
                },
                error => {
                  console.error(error);
                }
              );
        })        
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        axios.get('/api/profile')
        .then(res => {
            this.setState({ profiles: res.data })  
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    addClassCard() {
      return this.state.profiles.map(profile => {
        return <ClassCard event={profile.events} />
      })
    }
    getAllEvents() {
      let events=[]
      return this.state.profiles.map(profile => {
        events.push(...profile.event)
        return <ClassCard event={events} />
      })
    }
    // addChapters() {
    //   let chapters = {}
    //   this.state.profiles.map(profile => {
    //     chapters.profile.event
    //   })


    // }

    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        
    }

    handleScroll = () => {
        const chapterNames = Object.keys(chapters);
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
        console.log('setActiveChapter | setState to', chapters[activeChapterName]['center'])
        this.setState({'center': chapters[activeChapterName]['center']})
         
        document.getElementById(chapterName).setAttribute('class', 'active');
        document.getElementById(activeChapterName).setAttribute('class', '');
         
        activeChapterName = chapterName;
        }

    isElementOnScreen = (id) => {
        const element = document.getElementById(id);
        const bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom-1000 > 0;
    }

  render () {
    return (
      <div className='MapClassCardContainer'>
         
            <Map 
            style='mapbox://styles/mapbox/streets-v10' 
            center={[-122.27087, 37.87189]}
            zoom={[15.0]}
            bearing={[0]}
            pitch={[0]}
            className='the-map'
        />
          
       
        
        <div id='features'>
          <section id='wooden-heart-pendants' class='active'>
          {/* {this.state.profiles.length > 0 ? (
            this.state.profiles.map(profile => (
              <ClassCard event={profile.events} />
            ))
          ) : (
            <p className='sorry'>We&rsquo;re sorry, we did not find any classes...</p>
          )} */}
          
          </section>

          <section id='aldgate'>
            <h3>Aldgate Station</h3>
            <p>Arthur Cadogan West was found dead, head crushed in on train tracks at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich Arsenal on the Bruce-Partington submarine, a secret military project. Plans for the submarine had been stolen and seven of the ten missing papers were found in West's possession. Mycroft implores Sherlock to take the case and recover the three missing papers.</p>
          </section>
          <section id='london-bridge'>
        <h3>London Bridge</h3>
        <p>Holmes and Watson's investigations take them across London. Sherlock deduces that West was murdered elsewhere, then moved to Aldgate Station to create the illusion that he was crushed on the tracks by a train. On their way to Woolwich Sherlock dispatches a telegram to Mycroft at London Bridge: "Send list of all foreign spies known to be in England, with full address."</p>
        </section>
       
        </div>
      </div>
    )
  }
}

export default MapTest
