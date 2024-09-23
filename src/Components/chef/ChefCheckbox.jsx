import React, { useState } from "react";

const ChefCheckbox = () => {
  const [chek, setchek] = useState(false);
  return (
    <div
      onClick={() => setchek(true)}
      className="checkbox flex items-center justify-center cursor-pointer max-md:h-[6vw] max-md:w-[6vw] max-md:text-lg"
    >
 <i className={`ri-check-double-line text-center flex items-center justify-center bg-black h-full w-full text-white transition-all ease-in-out duration-400 ${chek ? "opacity-100" : "opacity-0"}`}></i>
    </div>
  );
};

export default ChefCheckbox;
