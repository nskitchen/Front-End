import React from "react";
import FooterBg from "../assets/footerbg.png";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <img
        src={FooterBg}
        className="absolute top-0 left-0 h-full w-full max-md:object-cover"
        alt=""
      />
      <div className="flex flex-col items-center justify-center relative z-10 gap-8">
        <h1 className="abril text-3.2mid max-md:text-2xl max-md:px-4 max-md:text-center ">
          We look forward to have you dine with us
        </h1>
        <div className="flex p-2 max-md:flex-col max-md:gap-4">
            <div className="flex items-center justify-center gap-2">
            <i className="ri-phone-fill text-1.7s"></i>
            <div className="flex flex-col text-base">
                <h3>Call us at</h3>
                <h3>+91 82828 28282</h3>
            </div>
            </div>
            <div className="flex items-center justify-center gap-2">
            <i class="ri-map-pin-2-fill text-1.7s"></i>
            <h3 className="w-[60%] text-base">NSK restaurant Bhopal.</h3>
            </div>
        </div>
      </div>
      <div className="bottom w-full flex absolute bottom-0 left-0 items-center justify-between px-14 p-4 max-md:justify-center">
        <Link to={"#"} className="text-base font-light max-md:hidden ">
        terms & Condition applied
        </Link>
        <img src={Logo} className="h-10" alt="" />
        <Link to={"#"} className="text-base font-light max-md:hidden ">
        terms & Condition applied
        </Link>
      </div>
    </div>
  );
};

export default Footer;
