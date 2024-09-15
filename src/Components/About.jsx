import React from "react";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
const About = ({ setopen }) => {
  return (
    <div className="h-screen w-full bg-transparent flex relative z-20 bg-black">
      <div className="h-full w-1/2 relative max-md:hidden">
        <div className="h-[54vh] w-[22vw] bg-white absolute top-[25%] left-[14%] -rotate-12 flex items-center justify-center">
          <img
            src={chef2}
            alt=""
            className="-translate-y-7 w-[90%] h-[90%] object-contain"
          />
        </div>
        <div className="h-[54vh] w-[22vw] bg-white absolute bottom-[10%] right-24 flex items-center justify-center">
          <img
            src={chef1}
            alt=""
            className="-translate-y-7 w-[90%] h-[90%] object-contain"
          />
        </div>
      </div>
      <div className="h-full w-1/2 flex flex-col items-start justify-center leading-tight relative max-md:w-full max-md:px-4">
        <div className="flex gap-10 items-center justify-center  z-10 -translate-y-14 pl-5 absolute top-[15%] left-0 max-md:top-[25%]">
          <button
            className="btn"
            style={{ borderColor: "orange" }}
            onClick={() => setopen(false)}
          >
            About Chef
          </button>
          <button className="btn" onClick={() => setopen(true)}>
            About Restaurant
          </button>
        </div>
        <h3 className="alex text-2.3s max-md:text-2xl">
          know who’s cookin’ for you!
        </h3>
        <h1 className="abril text-5.6lg leading-tight max-md:text-5xl">
          Chef Sarvagya Singh
        </h1>
        <p className="py-5 mont text-sm w-[38.5rem] max-md:w-full">
          founder of NSK (North to South Kitchen) and a culinary expert with a
          degree in Hotel Management from the Oriental School of Hotel
          Management. With a career spanning prestigious brands like Radisson
          Blu, Oberoi Cecil, Caravela Beach Resort, Swissotel Al Ghurair,
          Fairmont The Palm, and Adagio The Palm, he specializes in
          multi-cuisine cooking and brings a wealth of diverse culinary
          traditions to his craft.
        </p>
      </div>
    </div>
  );
};

export default About;
