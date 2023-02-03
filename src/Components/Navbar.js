import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
        <div>
        <p className='name'>Mary Mbugua.</p>
        </div>
        <div>
        <nav>
       
     <ul>
      <NavLink className='link' to =''>Home</NavLink>  
      <NavLink className='link' to ='/About'> About </NavLink>
       <NavLink className='link' to='/Skills'> Skills</NavLink>
       <NavLink className='link' to='/Projects'>Projects</NavLink> 
       <NavLink className='link' to='/Contact'>Contact</NavLink> 
     </ul>
     </nav>
     </div>
        </div>
  )
}

export default Navbar