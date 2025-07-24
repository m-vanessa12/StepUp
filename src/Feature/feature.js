import React from 'react'
import './feature.css'
import feature from '../img/feature.png'

function Feature() {
  return (
    <div className='feature'>
        <div className='feature-image'>
            <img src={feature}/>
            

        </div>
        <div className='feature-details'>

            <div className='feature-1'>
                <div className='feature-title'>
                    <div className='feature-icon'> 
                        <span>1</span>                  
                    </div>
                    <div className='feature-title-name'>
                        <span>Career Advancement</span>
                    </div>
                </div>
                <div className='feature-content'>
                    <span>Navigate your career path with confidence, utilizing personalized advice 
                        and support systems to advance in your chosen field.</span>
                </div>
            </div>
            <div className='feature-1'>
                <div className='feature-title'>
                    <div className='feature-icon'> 
                        <span>2</span>                  
                    </div>
                    <div className='feature-title-name'>
                        <span>Skill Development</span>
                    </div>
                </div>
                <div className='feature-content'>
                    <span>Navigate your career path with confidence, utilizing personalized advice 
                        and support systems to advance in your chosen field.</span>
                </div>
            </div>
            <div className='feature-1'>
                <div className='feature-title'>
                    <div className='feature-icon'> 
                        <span>3</span>                  
                    </div>
                    <div className='feature-title-name'>
                        <span>Networking Opportunities</span>
                    </div>
                </div>
                <div className='feature-content'>
                    <span>Navigate your career path with confidence, utilizing personalized advice 
                        and support systems to advance in your chosen field.</span>
                </div>
            </div>


            {/* <div className='feature-2'></div>
            <div className='feature-2'></div> */}
        </div>
      
    </div>
  )
}

export default Feature
