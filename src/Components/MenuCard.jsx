import React from "react";
import Pagenation from "./Pagenation";
import { motion } from "framer-motion";

const MenuCard = ({ number, counter, setcounter, pages, index, page }) => {
  const animate = {
    initial: { transform: "translateX(0%)", zIndex: pages.length - index },
    open: {
      transform: "translateX(-100%)",
      zIndex: index,
      transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <motion.div
      variants={animate}
      animate={counter > 1 ? "open" : "initial"}
      className={`mont text-base border-2 h-full w-full bg-white absolute top-0 left-0 text-black flex flex-col p-4 items-center justify-center ${
        counter === index ? "rounded-r-2xl" : "rounded-l-2xl"
      } max-md:rounded-xl`}
      style={{ zIndex: pages.length - index }}
    >
      <div className="flex flex-col mont">
        <h1 className="text-base text-[#FF8144] ">Choose Type of pasta </h1>
        <div className="w-full flex items-center justify-center gap-2 max-md:flex-wrap">
          <div className="flex flex-col gap-1 text-black p-2">
            <img src="/penneMenu.png" className="object-contain max-md:h-16" alt="" />
            <h3 className="text-black boldf">Penne</h3>
          </div>
          <div className="flex flex-col gap-1 text-black p-2">
            <img src="/fusili.png" className="object-contain max-md:h-16" alt="" />
            <h3 className="text-black boldf">Fussli</h3>
          </div>
          <div className="flex flex-col gap-1 text-black p-2">
            <img src="/Macroni.png" className="object-contain max-md:h-16" alt="" />
            <h3 className="text-black boldf">Maccroni</h3>
          </div>
          <div className="flex flex-col gap-1 text-black p-2">
            <img src="/Farfalle.png" className="object-contain max-md:h-16" alt="" />
            <h3 className="text-black boldf">Farfalle</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start mont w-full px-4 h-full relative overflow-y-auto">
        <h1 className="text-base text-[#FF8144] ">Choice of Sauce</h1>
        <div className="flex items-center justify-between w-full border-2 p-2 rounded-xl py-3">
          <div className="flex w-[70%] flex-col">
            <h1 className="text-sm">White Sauce Pasta (Alfraedo sauce)</h1>
            <p className="text-xs">
            Penne pasta, sweet corn, heavy. cream, red pepper, red onion
            </p>
            <h3 className="boldf
            ">₹120</h3>
          </div>
          <img src="/menuImg.png" alt="" />
        </div>
        <div className="flex items-center justify-between w-full border-2 p-2 rounded-xl py-3">
          <div className="flex w-[70%] flex-col">
            <h1 className="text-sm">White Sauce Pasta (Alfraedo sauce)</h1>
            <p className="text-xs">
            Penne pasta, sweet corn, heavy. cream, red pepper, red onion
            </p>
            <h3 className="boldf
            ">₹120</h3>
          </div>
          <img src="/menuImg.png" alt="" />
        </div>
        <div className="flex items-center justify-between w-full border-2 p-2 rounded-xl py-3">
          <div className="flex w-[70%] flex-col">
            <h1 className="text-sm">White Sauce Pasta (Alfraedo sauce)</h1>
            <p className="text-xs">
            Penne pasta, sweet corn, heavy. cream, red pepper, red onion
            </p>
            <h3 className="boldf
            ">₹120</h3>
          </div>
          <img src="/menuImg.png" alt="" />
        </div>
        <div className="flex items-center justify-between w-full border-2 p-2 rounded-xl py-3">
          <div className="flex w-[70%] flex-col">
            <h1 className="text-sm">White Sauce Pasta (Alfraedo sauce)</h1>
            <p className="text-xs">
            Penne pasta, sweet corn, heavy. cream, red pepper, red onion
            </p>
            <h3 className="boldf
            ">₹120</h3>
          </div>
          <img src="/menuImg.png" alt="" />
        </div>
      </div>
      <Pagenation
        number={number}
        counter={counter}
        setcounter={setcounter}
        pages={pages}
      />
    </motion.div>
  );
};

export default MenuCard;
