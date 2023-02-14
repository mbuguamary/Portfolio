import React from 'react'
import  './About.css';
// import me from '../Images/me.jpg';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from '../Images/CV.pdf'


const About = () => {
  return (
    <div id='about'>
        <div className='container'>
            <div className='row'>
               
               
                <h1 className='sub-title'>About Me</h1>
                <p className='txt'>I am passionate about building excellent software that improves
            the lives of those around me. I specialize in creating software
            for clients ranging from individuals and small-businesses all the
            way to large enterprise corporations. Looking forward to interact in web development Projects.</p>
            </div>
            <div className='row-1'>
                <button className='btn1'>
              <a className='btn1' href="Mary Wairimu CV.pdf" download="Mary Wairimu CV.pdf">
               
              Download CV
              </a>
             
               
                 </button>
                </div>
        </div>
    </div>
  )
}

export default About