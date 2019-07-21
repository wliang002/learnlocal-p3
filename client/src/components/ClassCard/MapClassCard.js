import React from 'react'
import { Link } from 'react-router-dom'
import './MapClassCard.css'

const MapClassCard = props => (
  <div className='MapClass-card'>
    <div id='map' />
    <div id='MapClassCard-features'>
      <section id='baker' class='active'>
        <h3>221b Baker St.</h3>
        <p>November 1895. London is shrouded in fog and Sherlock Holmes and Watson pass time restlessly awaiting a new case. "The London criminal is certainly a dull fellow," Sherlock bemoans. "There have been numerous petty thefts," Watson offers in response. Just then a telegram arrives from Sherlock's brother Mycroft with a mysterious case.</p>
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
        <small id='citation'>
Adapted from <a href='http://www.gutenberg.org/files/2346/2346-h/2346-h.htm'>Project Gutenberg</a>
        </small>
      </section>
    </div>
  </div>
)

export default MapClassCard
