import React from "react";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import Res1 from "../assets/res1.png"
import Res2 from "../assets/res2.png"
import Res3 from "../assets/res3.png"
const AboutRestro = ({setopen}) => {
  return (
    <div className="h-screen w-full bg-transparent flex relative z-20 bg-black">
      <div className="h-full w-1/2 relative flex items-center justify-center max-md:hidden ">
      <div className="flex items-center h-full p-20 gap-3 justify-center">
        <div className="grid grid-cols-1 gap-3">
           <img src={Res1} alt="" />
           <img src={Res2} alt="" />
        </div>
         <img src={Res3} className="h-[70%]" alt="" />
      </div>
      </div>
      <div className="h-full w-1/2 flex flex-col relative items-start justify-center leading-tight max-md:w-full max-md:p-4 max-md:justify-center">
        <div className="flex absolute top-[15%] left-0  gap-10 items-center justify-center  z-10 -translate-y-14 pl-5 max-md:top-[25%]">
        <button className="btn" onClick={()=>setopen(false)}>About Chef</button>
        <button className="btn" style={{borderColor:"orange"}} onClick={()=>setopen(true)}>About Restaurant</button>
        </div>
        <h3 className="alex text-2.3s max-md:text-2xl">place you wanna come back</h3>
        <h1 className="abril text-5.6lg leading-tight max-md:text-5xl">North-South Kitchen</h1>
        <p className="py-5 mont text-sm w-[38.5rem] text-customGray  max-md:w-fit">
          To be the premier destination for authentic Indian and international
          cuisine, offering traditional recipes and innovative dishes crafted
          with the finest ingredients.
          <br />
          <br />
          To honor and preserve the culinary heritage of India and the world
          while infusing modern touches to create unique, memorable dining
          experiences with exceptional service and a warm, inviting atmosphere.
          <br />
          <br />
          <span className="text-white">
          NSK offers more than just a meal; it provides an experience. The
          modern yet comfortable design reflects India's cultural richness,
          creating a warm and inviting space for guests to enjoy a delightful
          culinary journey.
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutRestro;
