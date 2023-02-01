import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className='contact'>
       <div className='social-icons'>
        <h1>Contact Me</h1>
        <ul>
            
        <a href="https://github.com/mbuguamary"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      {/* <a href="https://www.facebook.com/mary.mbuguah.90"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a> */}
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/mary-w-mbugua/" className="linkened social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.instagram.com/mbuguahmian/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
        </ul>

       </div> 
       <div className='message'>
        <label>Message me</label>
        <input text='name' placeholder='Name'/>
        <input text='name' placeholder='Email'/>
        <textarea placeholder='Message'/>
       </div>
    </div>
  )
}

export default Contact