import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import './Project.css';

const Projects = () => {
  return (
    <div className='projects'>
       <h1>Projects</h1> 
       <div>

       </div>
       <div>

       </div>
       <div>

       </div>
       <div className='social-icons'>
        <h6>Social Icons</h6>
        <ul>
            
        <a href="https://github.com/mbuguamary"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.facebook.com/mary.mbuguah.90"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
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
       {/* <div><button > <a href='Images/CV.pdf' download={Images/CV.pdf}></a>Download Resume</button></div> */}
  </div>
  )
}

export default Projects