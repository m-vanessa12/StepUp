import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <div className='sidebar'>

        <div className='sidebar-first'>
            <div className='sidebar-details'>
                <div className='icon-icon'>
                    <FontAwesomeIcon icon='home'/>
                </div>
                <div className='icon-Name'>
                    <span>Home</span>
                </div>
            </div>
            <div className='sidebar-details'>
                <div className='icon-icon'>
                    <FontAwesomeIcon icon='person'/>
                </div>
                <div className='icon-Name'>
                    <span>Profile</span>
                </div>
            </div>
        </div>


        <div className='sidebar-second'>
            <div className='sidebar-details'>
                <div className='icon-icon'>
                    <FontAwesomeIcon icon={faPeopleGroup}/>
                </div>
                <div className='icon-Name'>
                    <span>Mentorship</span>
                </div>
            </div>
            <div className='sidebar-details'>
                <div className='icon-icon'>
                    <FontAwesomeIcon icon='comment'/>
                </div>
                <div className='icon-Name'>
                    <span>Community</span>
                </div>
            </div>
            <div className='sidebar-details'>
                <div className='icon-icon'>
                    <FontAwesomeIcon icon='file'/>
                </div>
                <div className='icon-Name'>
                    <span>Resources</span>
                </div>
            </div>
        </div>

        <div className='sidebar-third'>
            <div className='sidebar-details'>
                <div className='icon-icon'>
                    <FontAwesomeIcon icon={faSignOut}/>
                </div>
                <div className='icon-Name'>
                    <span>Logout</span>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Sidebar
