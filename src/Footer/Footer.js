import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-message'>
        <div className='footer-message-title'>
          <span className='footer-message-step'>StepUp</span>
          <span className='footer-message-her'>.Her</span>
        </div>
        <div className='footer-message-message'>
          <span>Here to inspire and equip the next generation of female leaders by 
            providing mentorship, guidance, and a strong network of women supporting women.</span>
        </div>
      </div>
      <div className='quick-links'>
        <div className='quick-links-title'>
          <span>Quick Links</span>
        </div>
        <div className='quick-links-links'>
          <ul>
            <li><a href='#about'> About Us</a></li>
            <li><a href='#career'> Career</a></li>
            <li><a href='#faqs'> FAQs</a></li>
            <li><a href='#contact'> Contact</a></li>
            <li><a href='#login'> Login</a></li>
          </ul>
        </div>
      </div>
      <div className='poweredby'>
        <div className='poweredby-title'>
          <span>Powered By</span>
        </div>
        <div className='poweredby-message'>
          <span>Vanessa  M, project owner, designer and developer</span>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
