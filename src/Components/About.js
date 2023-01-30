import React from 'react'
import  './About.css';
import me from '../Images/me.jpg';

const About = () => {
  return (
    <div id='about'>
        <div className='container'>
            <div className='row'>
                <div className='row-1'>
                    <img src={me} alt='img'/>
                </div>
                <div className='row-2'></div>
                <h1 className='sub-title'>About Me</h1>
                <p className='txt'>I am passionate about building excellent software that improves
            the lives of those around me. I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. Looking forward to interact in web development Projects?</p>
            </div>
        </div>
    </div>
  )
}

export default About