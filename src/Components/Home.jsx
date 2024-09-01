import React from "react";
import backgroundImage from "../assets/homebg.png";
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center flex-col gap-10">
      <div className="header w-full flex items-center justify-between px-10 py-4 absolute top-0 left-0 z-30">
        <img src={Logo} className="h-10 object-contain" alt="" />
        <div className="flex gap-0">
          <div className="flex items-center justify-center gap-1">
            <i className="ri-phone-fill text-1.7s"></i>
            <div className="flex flex-col text-base">
              <h3>Call us at</h3>
              <h3>+91 82828 28282</h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <i class="ri-map-pin-2-fill text-1.7s"></i>
            <h3 className="w-[50%] text-base">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative z-10 items-center justify-center w-[72.494rem] leading-tight">
        <h3 className="alex text-2.3s">Chef Sarvagya Singh</h3>
        <h1 className="abril text-7.5xl">North-South Kitchen</h1>
        <h4 className="mont text-customGray w-[62.25rem] text-center px-32">
          Lorem ipsum dolor sit amet consectetur. Eget vel porta vulputate
          tristique tellus sed volutpat. Accumsan sed consectetur sollicitudin.
        </h4>
      </div>
      <div className="flex gap-10 items-center justify-center absolute z-10 bottom-28 left-1/2 -translate-x-1/2">
        <button className="btn">Our Menu</button>
        <button className="btn">Restaurant</button>
      </div>
      <img
        src={backgroundImage}
        className="h-full w-full absolute top-0 left-0 object-fill"
        alt=""
      />
    </div>
  );
};

export default Home;
