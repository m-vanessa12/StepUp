import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-info'>
            <div className='contact-title'>
                <span>Get In Touch</span>
            </div>
            <div className='contact-subtitle'>
                <span>Discuss Your Inquiries & Needs With Us!</span>
            </div>
            <div className='contact-content'>
                <span>For questions that wasn’t mention in our FQAs our please don't hesitate to reach out</span>
            </div>
            <div className='contact-address'>
                <div className='contact-email'>
                    <span>Ic:</span>
                    <span>Email:</span>
                    <span>steupher@gmail.com</span>
                </div>

                <div className='contact-email'>
                    <span>Ic:</span>
                    <span>Email:</span>
                    <span>steupher@gmail.com</span>
                </div>
            </div>

        </div>


        <div className='contact-form'>
            <div className='form-inputs'>
                <span>Names</span>
                <input placeholder='Ex: Vanessa Mukamanzi'/>
            </div>
            <div className='form-inputs'>
                <span>Email</span>
                <input placeholder='Ex: vanessa@gmail.com'/>
            </div>
            <div className='industry-list'>
                <span>Industry</span>
                <select>
                    <option>Select</option>
                    <option>Education</option>
                    <option>Hospitality</option>
                    <option>Student</option>
                    <option>None</option>
                    <option>Other</option>
                </select>
            </div>
            <div className='input-message'>
                <span>Message</span>
                <textarea placeholder='Send us a message...'></textarea>
            </div>
            <div className='input-button'>
              <input type='submit' value='Send'/>            
            </div>
        </div>
      
    </div>
  )
}

export default Contact
