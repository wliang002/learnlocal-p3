import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MapClassCard.css'
import ReactMapboxGl from 'react-mapbox-gl'
import ClassCard from './ClassCard'

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
  },
  'london-bridge': {
    bearing: 90,
    center: [-0.08533793, 51.50438536],
    zoom: 13,
    speed: 0.6,
    pitch: 40
    },
    'woolwich': {
    bearing: 90,
    center: [0.05991101, 51.48752939],
    zoom: 12.3
    },
    'gloucester': {
    bearing: 45,
    center: [-0.18335806, 51.49439521],
    zoom: 15.3,
    pitch: 20,
    speed: 0.5
    },
    'caulfield-gardens': {
    bearing: 180,
    center: [-0.19684993, 51.5033856],
    zoom: 12.3
    },
    'telegraph': {
    bearing: 90,
    center: [-0.10669358, 51.51433123],
    zoom: 17.3,
    pitch: 40
    },
    'charing-cross': {
    bearing: 90,
    center: [-0.12416858, 51.50779757],
    zoom: 14.3,
    pitch: 20
    }
}

let activeChapterName = 'wooden-heart-pendants';

class MapClassCard extends React.Component {
    state = {
        center: [-122.27087, 37.87189],
        zoom: [15.0],
        bearing: [0],
        pitch: [0]
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

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
            center={this.state.center}
            zoom={this.state.zoom}
            bearing={this.state.bearing}
            pitch={this.state.pitch}
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
          <section id='london-bridge'>
        <h3>London Bridge</h3>
        <p>Holmes and Watson's investigations take them across London. Sherlock deduces that West was murdered elsewhere, then moved to Aldgate Station to create the illusion that he was crushed on the tracks by a train. On their way to Woolwich Sherlock dispatches a telegram to Mycroft at London Bridge: "Send list of all foreign spies known to be in England, with full address."</p>
        </section>
        <section id='woolwich'>
        <h3>Woolwich Arsenal</h3>
        <p>While investigating at Woolwich Arsenal Sherlock learns that West did not have the three keys&mdash;door, office, and safe&mdash;necessary to steal the papers. The train station clerk mentions seeing an agitated West boarding the 8:15 train to London Bridge. Sherlock suspects West of following someone who had access to the Woolwich chief's keyring with all three keys.</p>
        </section>
        <section id='gloucester'>
        <h3>Gloucester Road</h3>
        <p>Mycroft responds to Sherlock's telegram and mentions several spies. Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's eye. He heads to the nearby Gloucester Road station to investigate and learns that the windows of Caulfield Gardens open over rail tracks where trains stop frequently.</p>
        </section>
        <section id='caulfield-gardens'>
        <h3>13 Caulfield Gardens</h3>
        <p>Holmes deduces that the murderer placed West atop a stopped train at Caulfield Gardens. The train traveled to Aldgate Station before West's body finally toppled off. Backtracking to the criminal's apartment, Holmes finds a series of classified ads from <em>The Daily Telegraph</em> stashed away. All are under the name Pierrot: "Monday night after nine. Two taps. Only ourselves. Do not be so suspicious. Payment in hard cash when goods delivered."</p>
        </section>
        <section id='telegraph'>
        <h3>The Daily Telegraph</h3>
        <p>Holmes and Watson head to The Daily Telegraph and place an ad to draw out the criminal. It reads: "To-night. Same hour. Same place. Two taps. Most vitally important. Your own safety at stake. Pierrot." The trap works and Holmes catches the criminal: Colonel Valentine Walter, the brother of Woolwich Arsenal's chief. He confesses to working for Hugo Oberstein to obtain the submarine plans in order to pay off his debts.</p>
        </section>
        <section id='charing-cross'>
        <h3>Charing Cross Hotel</h3>
        <p>Walter writes to Oberstein and convinces him to meet in the smoking room of the Charing Cross Hotel where he promises additional plans for the submarine in exchange for money. The plan works and Holmes and Watson catch both criminals.</p>
        <small id="citation">
        Adapted from <a href='http://www.gutenberg.org/files/2346/2346-h/2346-h.htm'>Project Gutenberg</a>
        </small>
        </section>
        </div>
      </div>
    )
  }
}

export default MapClassCard
