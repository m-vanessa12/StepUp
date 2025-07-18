import React from 'react'
import './hero.css'
import mockup from '../img/mockup.png'

function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-info'>
        <div className='hero-title'>
        <span> StepUp.Her</span>
      </div>
      <div className='hero-subtitle'>    
        <span>A Woman-to-Woman Mentorship Platform</span>
      </div>
      <div className='hero-content'>
        <span>Begin your journey with us and discover a world where women 
          uplift each other. Whether you're a professional eager to share your 
          expertise or a newcomer carving out your path — you belong here. Together, 
          let's create a legacy of mentorship and breakthroughs.</span>
      </div>
      <div className='hero-button'>
        <button>Get Started</button>
      </div>
      </div>
      <div className='hero-image'>
        <img src={mockup}/>
      </div>
      
    </div>
  )
}

export default HeroSection