import { Divider } from "antd";
import React from "react";

const DashboardDishes = () => {
  return (
    <>
    <div className="w-full flex items-center gap-3 justify-start mont">
      <h1 className="boldf text-xs text-[#9747FF]">01</h1>
      <div className="h-12 w-12 rounded-md relative overflow-hidden bg-red-500">
        <img src="/foodAdminDemo.png" className="h-full w-full" alt="" />
      </div>
      <h1 className="font-bold leading-tight">
        White Sauce Pasta
        <br />
        <span className="font-extralight text-xs">Ordered 24</span>
      </h1>
    </div>
    <Divider className="bg-gray-200 my-2"/>
    </>
  );
};

export default DashboardDishes;
