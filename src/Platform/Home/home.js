import React from 'react'
import './home.css';
import Sidebar from '../Sidebar/sidebar';
import Topbar from '../Topbar/topbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faPeopleGroup} from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='home'>
            <Topbar />              
            <Sidebar />
            <div className='home-content'>
                <div className='home-overview'>
                    <div className='overview-title'>
                        <span className='overview-stepup'>StepUp</span>
                        <span className='overview-her'>.Her</span>
                    </div>
                    <div className='home-overview-message'> 
                        <span>Join our vibrant community where every step you take is supported, every achievement celebrated, 
                            and every potential unleashed. Together, let's shape a future where women lead with confidence and vision.</span>
                    </div>
                </div>

                <div className='platform-feature'>

                    <div className='feature-overview'>
                        <div className='feature-overview-title'>
                            <span>Platform Features</span>
                        </div>
                        <div className='feature-overview-message'>
                            <span>Discover What StepUp.Her Platform Has to Offer</span>
                        </div>                    
                    </div>
                    <div className='features-sections'>
                        
                        <div className='feature-details'>

                            <div className='feature-iconsign'>
                                <FontAwesomeIcon icon={faPeopleGroup}/>

                            </div>
                            <div className='feature-name'>
                                <span>Mentorship</span>
                            </div>
                            <div className='feature-description'>
                                <span>Our discussion forum is a place for you to connect, exchange ideas with peers.</span>
                            </div>
                            <div className='feature-check'>
                                <span>check out</span>
                                 <FontAwesomeIcon icon={faArrowRight}/>
                            </div>

                        </div>
                        <div className='feature-details'>

                            <div className='feature-iconsign'>
                                <FontAwesomeIcon icon='comment'/>
                            </div>
                            <div className='feature-name'>
                                <span>Community/Forum</span>
                            </div>
                            <div className='feature-description'>
                                <span>Find the perfect mentor match to guide you on your journey to success.</span>
                            </div>
                            <div className='feature-check'>
                                <span>check out</span>
                                 <FontAwesomeIcon icon={faArrowRight}/>
                            </div>

                        </div>
                        <div className='feature-details'>

                            <div className='feature-iconsign'>
                                <FontAwesomeIcon icon='add'/>
                            </div>
                            <div className='feature-name'>
                                <span>Share a Discussion</span>
                            </div>
                            <div className='feature-description'>
                                <span>Get to share your thoughts and ideas and let the community learn from you.</span>
                            </div>
                            <div className='feature-check'>
                                <span>check out</span>
                                 <FontAwesomeIcon icon={faArrowRight}/>
                            </div>

                        </div>
                        <div className='feature-details'>

                            <div className='feature-iconsign'>
                                <FontAwesomeIcon icon='file'/>

                            </div>
                            <div className='feature-name'>
                                <span>Resources Library</span>
                            </div>
                            <div className='feature-description'>
                                <span>Access a wealth of knowledge to fuel your growth and inspire action.</span>
                            </div>
                            <div className='feature-check'>
                                <span>check out</span>
                                 <FontAwesomeIcon icon={faArrowRight}/>
                            </div>

                        </div>
                        <div className='feature-details'>

                            <div className='feature-iconsign'>
                                <FontAwesomeIcon icon='person'/>

                            </div>
                            <div className='feature-name'>
                                <span>Personal Profile</span>
                            </div>
                            <div className='feature-description'>
                                <span>Create your profile and let the community get to know you.</span>
                            </div>
                            <div className='feature-check'>
                                <span>check out</span>
                                 <FontAwesomeIcon icon={faArrowRight}/>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            
        
      
    </div>
  )
}

export default Home
