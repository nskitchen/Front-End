import React, { useState } from "react";
import Menu from "../Components/Menu";
import Menubg from "../assets/menubg.png";
import MenuItem from "../Components/MenuItem";
const MenuPage = () => {
  const [open, setopen] = useState(false);
 const [counter, setcounter] = useState(1);
 const pages = [
    { id: 1, content: "Page 1 content",active:false },
    { id: 2, content: "Page 2 content",active:false },
    { id: 3, content: "Page 3 content",active:false },

  ];
  return (
    <>
      <div className="w-full h-screen relative flex">
        <img
          src={Menubg}
          className="h-full w-full absolute top-0 left-0"
          alt=""
        />
        {/* <div className="overlay h-full w-full absolute top-0 left-0"></div> */}
   {
    !open ?  <Menu setopen={setopen} /> : <MenuItem setopen={setopen} counter={counter} setcounter={setcounter} pages={pages}/>
   }
       
      </div>
    </>
  );
};

export default MenuPage;
