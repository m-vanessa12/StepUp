import React from 'react'
import './career.css'
import career_coaching from '../img/coaching.jpg'

function Career() {
  return (
    <div className='career'>
        <div className='career-image'> 
          <img src={career_coaching} />
        </div>

        <div className='career-info'>
          <div className='career-title'>
            <span>Career-Coaching</span>
          </div>
          <div className='career-subtitle'>
            <span>Access our career coaching  that allows you to make life decisions</span>
          </div>
          <div className='career-content'>
            <span>Our mission is to create a community where every woman has access to the mentorship she needs to 
              succeed. We're here to provide the support and resources necessary to turn aspirations into achievements.</span>

          </div>
          <div className='career-button'>
            <button>Explore More</button>
          </div>
        </div>
      
    </div>
  )
}

export default Career
