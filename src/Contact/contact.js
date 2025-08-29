import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
                    <div className='contact-icon'>
                        <FontAwesomeIcon icon='envelope'/>
                    </div>
                    <div className='contact-contact'>
                        <span className='contact-type'>Email:</span>
                        <span className='contact-detail'>mukavanessa8@gmail.com</span>
                    </div>

                </div>
                <div className='contact-email'>
                    <div className='contact-icon'>
                        <FontAwesomeIcon icon='phone'/>
                    </div>
                    <div className='contact-contact'>
                        <span className='contact-type'>Phone:</span>
                        <span className='contact-detail'>(+250)780-705-984</span>
                    </div>

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

              <div className='input-button-send'> 
                <input type='submit' value='Send'/>  
              </div> 
              <div className='input-button-icon'>
                 <FontAwesomeIcon icon={faPaperPlane}/>
              </div>
              

            </div>
        </div>
      
    </div>
  )
}

export default Contact
