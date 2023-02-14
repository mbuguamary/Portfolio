import React from 'react'

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
       <h3>This is a web application <br/>where users can raise tickets <br/>on various issues to IT<br/> Department For Help</h3>
       </div>
       <div>
        <h3>Travel Website</h3>
       <img  src={travel} alt='Travel'/>
       <h3>This is a website where <br/> users can view travel <br/>information and book for <br/>Activities</h3>
       </div>
       </div>
       
       <div>
       
       </div>
       {/* <div><button > <a href='Images/CV.pdf' download={Images/CV.pdf}></a>Download Resume</button></div> */}
 
  </div>
  )
}

export default Projects