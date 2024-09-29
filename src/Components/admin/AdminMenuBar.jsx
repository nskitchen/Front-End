import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFood } from "../../store/slices/menuSlice";
import { getMenu } from "../../store/actions/menuActions";

const AdminMenuBar = ({outOfStock,setcategory}) => {
  const dispatch = useDispatch();

  const { menuCategory,food } = useSelector((state) => state.menu);
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
      <div className="menu-item text-xs flex pl-2 ml-2 items-center justify-center cursor-pointer bg-[#ffffff] rounded-md">
        <i className="ri-add-large-line"></i>
        <h3 className="text-black text-base px-2 py-1" onClick={()=>setcategory(true)}>Add fd</h3>
      </div>
      </div>
    </>
  );
};

export default AdminMenuBar;
