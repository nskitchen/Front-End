import React from "react";
import { motion } from "framer-motion";
import Pagenation from "./Pagenation";

const DishPage = ({ number,counter, setcounter, page, index, pages }) => {
  const dishPageVariants = {
    initial: { transform: "rotate(2deg)", top: "1.5%", left: "2%" },
    open: {
      transform: "rotate(0deg)",
      top: "0%",
      left: "0%",
      opacity: 1,
      transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
    },
    slideLeft: {
        transform: "translateX(-100%) rotate(0deg)",
        transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] },
      },
  };

  const getAnimation = () => {
    if (counter === index) {
      return "open";
    } else if (counter > index) {
      return "slideLeft";
    } else {
      return "initial";
    }
  };
  return (
    <motion.div
      variants={dishPageVariants}
      animate={getAnimation() }
      className={`h-full w-full bg-white absolute border-2 rounded-r-2xl ${counter === index ? "rounded-r-2xl" : "rounded-l-2xl"}`}
      style={{ zIndex: pages?.length - index }}
    >
      <h1 className="text-black">{page?.content}</h1>
      <Pagenation number={number} counter={counter} setcounter={setcounter} pages={pages} />
    </motion.div>
  );
};

export default DishPage;
