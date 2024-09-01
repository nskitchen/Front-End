import React, { useState } from 'react'
import About from './About';
import AboutRestro from './AboutRestro';
import Restro from "../assets/Restro.png"
const AboutPage = () => {
    const [open, setopen] = useState(false);

  return (
    <div className="w-full h-screen relative">
    {
        !open ?
        <About setopen={setopen} /> : 
        <AboutRestro setopen={setopen}/>
    }
    <img src={Restro} className='h-fit w-full absolute top-0 object-contain' alt="" />
    </div>
  )
}

export default AboutPage