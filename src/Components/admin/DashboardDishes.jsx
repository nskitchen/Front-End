import { Divider } from "antd";
import React from "react";

const DashboardDishes = ({number,dish}) => {
  return (
    <>
    
    <div className="w-full flex items-center gap-3 justify-start mont">
      <h1 className="boldf text-xs text-[#9747FF]">{number}</h1>
      <div className="h-12 w-12 rounded-md relative overflow-hidden bg-red-500">
        <img src={dish.menuDetails?.image} className="h-full w-full" alt="" />
      </div>
      <h1 className="font-bold leading-tight">
        {dish.menuDetails?.name}
        <br />
        <span className="font-bold opacity-45 text-xs">Ordered {dish.totalCount}</span>
      </h1>
    </div>
    <Divider className="bg-gray-200 my-2"/>
    </>
  );
};

export default DashboardDishes;
