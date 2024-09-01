import React from 'react'
import Logo from "../assets/logo.png"
import menu1 from "../assets/menu1.png"
const Menu = ({setopen}) => {
  return (
    <>
  
    <div className="h-full relative z-10 w-1/2 flex flex-col items-start leading-tight pl-20 justify-center">
        <h3 className='alex text-2.3s'>Taste the mood</h3>
        <h1 className='text-7.5xl abril'>Our Menu</h1>
        <p className='mont w-[36.375rem] text-base px-6 text-customGray'>
        North Indian Cuisine: Rich and creamy curries, flavorful kebabs, and hearty dishes from Punjab to Lucknow. <br />
        South Indian Cuisine: Tangy, spicy dishes from Tamil Nadu, coconut-infused curries from Kerala, and a vibrant array of southern flavors.
        </p>
        <div className="flex gap-10 items-center justify-center relative z-10 translate-y-14 pl-5">
        <button className='btn' onClick={()=>setopen(true)}>View Menu</button>
        <button className='btn'>Book a table</button>
     </div>
        </div>
        <div className="h-full w-1/2 flex items-center justify-center relative z-10">
        <div className="shadow w-[55%] h-[80%] relative rounded-md overflow-hidden">
              <img src={Logo} className='absolute top-5 left-5 z-30 h-10 object-contain' alt="" />
              <div className="over h-full w-full absolute top-0 left-0 z-20"></div>
              <img src={menu1} className='absolute h-full w-full object-cover top-0 left-0 z-10' alt="" />
        </div>
        </div>
    </>
  )
}

export default Menu