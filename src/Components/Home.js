import React from 'react'
import mary from '../Images/mary.png'

const Home = () => {
  return (
    <div className='home'>
      <div className= 'rows-1'>
        <h1>Hi, I,m <span>Mary</span></h1>
        <h1>Mbugua From Kenya</h1>
        <p>Full Stack Developer</p>
        </div>
        <div className='rows-2'>
        <img src={mary} alt='img'/>
       </div>
       
    </div>
    
  )
}

export default Home