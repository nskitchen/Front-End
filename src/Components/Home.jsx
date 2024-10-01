import React from "react";
import backgroundImage from "../assets/homebg.png";
import Logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="h-screen w-full relative flex items-center justify-center flex-col gap-10">
      <div className="header w-full flex items-center justify-between px-10 py-4 absolute top-0 left-0 z-30 max-md:px-2">
        <img src={Logo} className="h-10 object-contain" alt="" />
        <div className="flex gap-5">
          <div className="flex items-center justify-center gap-3 max-md:text-xs">
            <i className="ri-phone-fill text-1.7s max-md:text-xs"></i>
            <div className="flex flex-col text-base max-md:text-xs">
              <h3>Call us at</h3>
              <h3 className="font-bold">+91 82828 28282</h3>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 ">
            <i className="ri-map-pin-2-fill text-1.7s max-md:text-xs"></i>
            <h3 className="w-[60%] text-base max-md:text-xs max-md:w-20">
              NSK restaurant Bhopal.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative z-10 items-center justify-center w-[72.494rem] leading-tight max-md:gap-3">
        <h3 className="alex text-2.3s max-md:text-2xl">Chef Sarvagya Singh</h3>
        <h1 className="abril text-7.5xl max-md:text-4xl">
          North-South Kitchen
        </h1>
        <h4 className="mont text-customGray w-[62.25rem] text-center px-32 max-md:text-xs max-md:w-1/2">
          Welcome to North-South Kitchen, where we bring the best of India’s
          culinary heritage to your plate. Our chefs expertly blend the rich,
          hearty flavors of the North with the vibrant, spicy delicacies of the
          South, creating an unforgettable dining experience.
        </h4>
      </div>
      <div className="flex gap-10 items-center justify-center absolute z-10 bottom-28 left-1/2 -translate-x-1/2 max-md:bottom-[25%] max-md:flex-col">
        <button className="btn">Our Menu</button>
        <button className="btn">Restaurant</button>
      </div>
      <img
        src={backgroundImage}
        className="h-full w-full absolute top-0 left-0 object-fill max-md:object-cover"
        alt=""
      />
    </div>
  );
};

export default Home;
