import React from 'react'
import './account.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser} from '@fortawesome/free-solid-svg-icons';

function SignUp() {
  return (
    <div className='account'>
        <div className='account-info'>
          <div className='account-title'>
            <span>Welcome to StepUp.Her</span>
          </div>
          <div className='account-message'>
            <span>Women-to-Women Mentorship platform. This a place to get empowered and mentored </span>
          </div>
          <div className='account-read'>
            <span><a href='#landing Page'>Read More</a></span>
          </div>

        </div>

        <div className='createForm'>
          <div className='account-form'>

            <div className='google-SignIn'>
              <div className='createAccount-title'>
                 <span>Create Account</span>
              </div>

              <div className='createAccount-subtitle'>
                 <span>Let’s get you connected & mentored</span>
              </div>

              {/* <div className='personal-info'>
                  <div className='detail-icon'>
                    <FontAwesomeIcon icon='envelope'/>    
                  </div>
               <div className='detail-name'>
                  <input type='submit' value='Login with Google'/>
               </div>
            </div> */}

            </div>

              <div className='personal-info'>
                  <div className='detail-icon'>
                    <FontAwesomeIcon icon='user'/>    
                  </div>
               <div className='detail-name'>
                  <input type='text' placeholder='Full Names'/>
               </div>
            </div>

              <div className='personal-info'>
                  <div className='detail-icon'>
                    <FontAwesomeIcon icon='envelope'/>    
                  </div>
               <div className='detail-name'>
                  <input type='email' placeholder='Email'/>
               </div>
            </div>

              <div className='personal-info'>
                  <div className='detail-icon'>
                    <FontAwesomeIcon icon='lock'/>    
                  </div>
               <div className='detail-name'>
                  <input type='password' placeholder='Password'/>
               </div>
            </div>

              <div className='Sign-In'>
                <div className='signIn-button'>
                    <input type='submit' value='Sign In'/>
                </div>
            </div>

              <div className='have-account'>
                <span>Already have an account?</span>
                <span className='login'>Login</span>
              
            </div>

          </div>

        </div>
      
    </div>
  )
}

export default SignUp
