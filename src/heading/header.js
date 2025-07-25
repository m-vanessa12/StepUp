import React from 'react'
import './header.css'

const MenuBar = () => {
  return (
    <div className='menu-bar'>
      <div className='title'>
          <span className='Step'>StepUp</span>
          <span className='Her'>.Her</span>
        </div>
        <div className='Links'>
          <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Career'>Career</a></li>
            <li><a href='#FAQs'>FAQs</a></li>
            <li><a href='#Contact'>Contact</a></li>
            <li><a href='#Login' className='loginn'>Get Started</a></li>

          </ul>
          
        </div>
        
    </div>
  )
}

export default MenuBar