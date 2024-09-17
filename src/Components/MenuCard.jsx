import React from 'react';
import Pagenation from './Pagenation';
import { motion } from "framer-motion";

const MenuCard = ({ number,counter, setcounter, pages,index,page }) => {
  const animate = {
    initial: { transform: "translateX(0%)",zIndex: pages.length - index},
    open: {
      transform: "translateX(-100%)",
      zIndex:index,
      transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
    }
  };

  return (
    <motion.div
      variants={animate}
      animate={counter > 1 ? "open" : "initial"}
      className={`mont text-base border-2 h-full w-full bg-white absolute top-0 left-0 text-black flex items-center justify-center ${counter === index ? "rounded-r-2xl" : "rounded-l-2xl"}`}
      style={{ zIndex: pages.length - index }}
    >
      <h1 className='absolute top-[16%] left-[10%] text-black text-base'>Choose Type of pasta </h1>
      <div className="w-[68%] h-[38vh] gap-2 grid grid-cols-2 place-items-center place-content-center">
        <div className="w-40 h-36 flex flex-col gap-1 text-black p-2">
          <h3 className='text-black'>Penne</h3>
          <img src="/Penne.png" className='object-contain' alt="" />
        </div>
        <div className="w-40 h-36 flex flex-col gap-1 text-black p-2">
          <h3 className='text-black'>Penne</h3>
          <img src="/Penne.png" className='object-contain' alt="" />
        </div>
        <div className="w-40 h-36 flex flex-col gap-1 text-black p-2">
          <h3 className='text-black'>Penne</h3>
          <img src="/Penne.png" className='object-contain' alt="" />
        </div>
        <div className="w-40 h-36 flex flex-col gap-1 text-black p-2">
          <h3 className='text-black'>Penne</h3>
          <img src="/Penne.png" className='object-contain' alt="" />
        </div>
      </div>
      <Pagenation number={number} counter={counter} setcounter={setcounter} pages={pages} />
    </motion.div>
  );
};

export default MenuCard;
