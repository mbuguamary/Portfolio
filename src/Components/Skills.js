import React from 'react'
import './Skills.css'
import HTML from '../Images/html.png'
import CSS from '../Images/css.png'
import JavaScript from '../Images/javascript.png'
import ReactImg from '../Images/react.png'
import Node from '../Images/node.png'
import GitHub from '../Images/github.png'
import JAVA from '../Images/java.png'
import POSTGRESQL from '../Images/postgresql.jpeg'


const Skills = () => {
  return (
    <div className='skills'>
        <h1>Skills</h1>
        <p>These are the technologies i Have worked with</p>
        <div className='image-1'>
            <div>
            <img src={HTML} alt="Html"/>
            <h5>HTML</h5>
            </div>
            <div>
            <img src={CSS} alt="Css"/>
            <h5>Css</h5>
            </div>
            {/* <div>
            <img src={JavaScript} alt="Javascript"/>
            <h5>Javascript</h5>
            </div> */}
            <div>
            <img src={ReactImg} alt="React"/>
            <h5>React</h5>
            </div>
        </div>
        <div className='image-2'>
        <div>
            <img src={JAVA} alt="Java"/>
            <h5>Java</h5>
            </div>
            {/* <div>
            <img src={Node} alt="Node"/>
            <h5>Node</h5>
            </div> */}
            <div>
            <img src={GitHub} alt="Github"/>
            <h5>Github</h5>
            </div>
            <div>
            <img src={POSTGRESQL} alt="Postgresql"/>
            <h5>Postgresql</h5>
            </div>
        </div>
        </div>
  )
}

export default Skills