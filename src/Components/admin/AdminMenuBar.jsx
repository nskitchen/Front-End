import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFood } from "../../store/slices/menuSlice";
import { getMenu } from "../../store/actions/menuActions";

const AdminMenuBar = () => {
  const dispatch = useDispatch();

  const { menuCategory } = useSelector((state) => state.menu);

  const handelClickFood = (name) => {
    dispatch(setFood(name));
    dispatch(getMenu());
  };

  return (
    <>
      <div className="flex pl-7 items-center justify-center">
      <div onClick={() => handelClickFood("all")} className="cursor-pointer menu-item mr-2 text-xs flex flex-col items-center justify-center  bg-[#ffffff] rounded-md">
        <h3 className="text-black text-base px-4 py-1">All</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {menuCategory.map((index, i) => (
          <div key={i} onClick={() => handelClickFood(index.name)} className="cursor-pointer menu-item text-xs flex flex-col items-center justify-center  bg-[#ffffff] rounded-md">
            <h3 className="text-black text-base px-4 py-1">{index.name}</h3>
          </div>
        ))}
      </div>
      <div className="menu-item text-xs flex pl-2 ml-2 items-center justify-center cursor-pointer bg-[#ffffff] rounded-md">
        <i className="ri-add-large-line"></i>
        <h3 className="text-black text-base px-2 py-1">Add New</h3>
      </div>
      </div>
    </>
  );
};

export default AdminMenuBar;
