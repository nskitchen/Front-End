import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFood } from "../../store/slices/menuSlice";
import { getMenu } from "../../store/actions/menuActions";

const AdminMenuBar = ({outOfStock}) => {
  const dispatch = useDispatch();

  const {menuCategory,food,menu } = useSelector((state) => state.menu);
  const handelClickFood = (name) => {
    dispatch(setFood(name));
    dispatch(getMenu(null,null,outOfStock));
  };


  return (
    <>
      <div className="flex pl-7 items-center justify-center">
      <div onClick={() => handelClickFood("all")} className="cursor-pointer menu-item mr-2 text-xs flex flex-col items-center justify-center  bg-[#ffffff] rounded-md">
        <h3 className={`${food.toLowerCase() == 'all' ? "text-orange-400" : "text-black"} text-black text-base px-4 py-1`}>All</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {menuCategory.map((index, i) => (
          <div key={i} onClick={() => handelClickFood(index)} className={`cursor-pointer menu-item flex flex-col items-center justify-center  bg-[#ffffff] rounded-md`}>
            {console.log({food, index})}
            <h3 className={`${food.toLowerCase() == index.toLowerCase() ? "text-orange-400" : "text-black"}  capitalize text-base px-4 py-1`}>{index}</h3>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AdminMenuBar;
