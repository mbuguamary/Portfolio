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
            </div>
        </div>
    </div>
  )
}

export default About