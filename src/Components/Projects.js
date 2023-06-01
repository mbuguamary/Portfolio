import React from 'react'

import './Project.css';
import sacco from '../Images/sacco.jpg';
import helpdesk from '../Images/helpdesk.jpg';
import travel from '../Images/travel.jpg';
import realestate from '../Images/realestate.jpg'
import real from '../Images/real.jpg'
const Projects = () => {
  return (
    <div className='projects'>
       <h1>Projects</h1> 
       <div className='project-icons'>
       <div className='imges'>
        <h3>Comps Analytics</h3>
        <img  src={realestate} alt='Real estate'/>
        
       <h3>This is a web application which can be used to value differnt types of properties by property values</h3>
       <a className= 'a' href='https://comps-analytics.vercel.app/'>View Live Link</a>
       </div>
       <div className='imges'>
        <h3>Sacco Website</h3>
        <img  src={sacco} alt='Sacco'/>
        
       <h3>This is a web application where sacco members can  view their diviends,apply for loans </h3>
       <a className= 'a' href='https://metro-help-desk.netlify.app/'></a>
       </div>
       <div className='imges'>
        <h3>Help desk App</h3>
       <img  src={helpdesk} alt='Help Desk'/>
       <h3>This is a web application where users can raise tickets on various issues to IT Department For Help</h3>
       <a className= 'a' href='https://metro-help-desk.netlify.app/'>View Live Link</a>
       </div>
       <div className='imges'>
        <h3>Travel Website</h3>
       <img  src={travel} alt='Travel'/>
       <h3>This is a website where  users can view travelinformation and book for Activities</h3>
       <a className= 'a' href='https://cliiftravelwebsite.netlify.app/'>View Live Link</a>
       </div>
       <div className='imges'>
       <h3>Vallies Estate</h3>
       <img className='img' src={real} alt='real'/>
       <h3>This is a website where  users can view houses available for purchase <br/>in the Website</h3>
       <a className= 'a' href='https://metro-help-desk.netlify.app/'>View Live Link</a>
       </div>
       </div>
       
       
       {/* <div><button > <a href='Images/CV.pdf' download={Images/CV.pdf}></a>Download Resume</button></div> */}
 
  </div>
  )
}

export default Projects