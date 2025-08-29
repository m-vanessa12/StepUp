import React from 'react'
import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import personProfile from '../../img/vanessa.jpg';
import {useNavigate} from 'react-router-dom'


const Topbar = () => {

    const navigate = useNavigate();
    const handleGetStarted=() =>{
        navigate('/create-discussion');

    }


  return (
    <div className='topbar'>
        <div className='topbar-title'>
            <span className='topbar-stepup'>StepUp</span>
            <span className='topbar-her'>.Her</span>
        </div>

        <div className='topbar-tools'>
            <div className='topbar-search'>

                <div className='search-input'>
                    <input type='search' placeholder='search here....'/>
                </div>
                <div className='search-icon'>
                    <FontAwesomeIcon icon='search'/>               
                </div>

            </div>
            <div className='topbar-add' onClick={handleGetStarted}>
                <FontAwesomeIcon icon='add'/>
            </div>
            <div className='topbar-notification'>
                <FontAwesomeIcon icon='bell'/>
            </div>
            <div className='topbar-profile'>
                <img src={personProfile} alt="person Profile"/>

            </div>
        </div>
      
    </div>
  )
}

export default Topbar
