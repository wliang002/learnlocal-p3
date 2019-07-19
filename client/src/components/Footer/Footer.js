import React from 'react'
import ghlogo from '../Footer/ghlogo.png'
import './Footer.css'

const Footer = (props) => (
  <footer className='site-footer'>
    <div>
      <a
        href='https://github.com/wliang002/learnlocal-p3'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={ghlogo} className='gh-logo' alt='github logo' />
      </a>
    </div>
  </footer>
)

export default Footer
