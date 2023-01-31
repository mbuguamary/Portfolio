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
import sacco from '../Images/sacco.jpg';
import helpdesk from '../Images/helpdesk.jpg';
import travel from '../Images/travel.jpg';

const Projects = () => {
  return (
    <div className='projects'>
       <h1>Projects</h1> 
       <div className='project-icons'>
       <div>
        <h3>Sacco Website</h3>
        <img  src={sacco} alt='Sacco'/>
        
       <h3>This is a web application <br/>where sacco members can  <br/>view their diviends,apply <br/>for loans </h3>
       </div>
       <div>
        <h3>Help desk App</h3>
       <img  src={helpdesk} alt='Help Desk'/>
       <h3>This is a web application <br/>where users can raise tickets <br/>to IT Department For Help</h3>
       </div>
       <div>
        <h3>Travel Website</h3>
       <img  src={travel} alt='Travel'/>
       <h3>This is a website where <br/> users can view travel <br/>information and book for <br/>holidays</h3>
       </div>
       </div>
       <div className='social-icons'>
        <h1>Social Icons</h1>
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
       <div>
       
       </div>
       {/* <div><button > <a href='Images/CV.pdf' download={Images/CV.pdf}></a>Download Resume</button></div> */}
 
  </div>
  )
}

export default Projects