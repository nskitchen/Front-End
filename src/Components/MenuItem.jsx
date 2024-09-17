import React from "react";
import MenuCard from "./MenuCard";
import DishPage from "./DishPage";
import SideMenu from "./SideMenu";
import Logo from "../assets/logo.png";

const MenuItem = ({ setopen, counter, setcounter, pages }) => {
  return (
    <div className="w-full relative flex items-center justify-center">
      <i
        className="ri-close-fill absolute top-[5%] left-[10%] text-2xl cursor-pointer"
        onClick={() => setopen(false)}
      ></i>
      <div className="h-[80%] w-[70%] bg-white rounded-2xl flex">
        <div className="w-1/2 h-full rounded-2xl relative bg-black rounded-r-none overflow-hidden">
          <img
            src="/PastaImg.png"
            className="h-full w-full 
         object-contain"
            alt=""
          />
          <img
            src={Logo}
            className="absolute w-10 object-contain top-5 left-5"
            alt=""
          />
        </div>
        <div className="h-full w-1/2 relative rounded-r-2xl">
          {pages?.map((page, index) => (
            <>
              {index == 0 ? (
                <MenuCard
                  number={1}
                  key={page.id}
                  counter={counter}
                  setcounter={setcounter}
                  pages={pages}
                  index={index + 1}
                  page={page}
                />
              ) : (
                <DishPage
                  number={index + 1}
                  key={page.id}
                  counter={counter}
                  setcounter={setcounter}
                  page={page}
                  index={index + 1}
                  pages={pages}
                />
              )}
            </>
          ))}
        </div>
      </div>
      <SideMenu />
    </div>
  );
};

export default MenuItem;
