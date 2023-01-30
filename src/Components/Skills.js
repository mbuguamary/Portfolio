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
            <img src={HTML}/>
            </div>
            <div>
            <img src={CSS}/>
            </div>
            <div>
            <img src={JavaScript}/>
            </div>
            <div>
            <img src={ReactImg}/>
            </div>
        </div>
        <div className='image-2'>
        <div>
            <img src={JAVA}/>
            </div>
            <div>
            <img src={Node}/>
            </div>
            <div>
            <img src={GitHub}/>
            </div>
            <div>
            <img src={POSTGRESQL}/>
            </div>
        </div>
        </div>
  )
}

export default Skills