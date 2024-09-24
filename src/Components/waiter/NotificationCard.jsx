import { Divider } from "antd";
import React from "react";

const NotificationCard = () => {
  return (
    <div className="w-full mont rounded-md bord-blerack p-3 gap-2 flex flex-col" style={{border:"1px solid"}}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 h-fit">
          <button className="bg-[#9747FF] p-2 text-white px-3 boldf rounded-md">
            T9
          </button>
          <Divider type="vertical" className="bg-black h-10" />
          <h1 className="boldf">
            Order #351
            <br />
            <span className="font-medium">08:28 PM</span>
          </h1>
        </div>
        <button className="border-[1px] p-2 rounded-md font-semibold px-4 border-black">Served</button>
      </div>
   <div className="item flex flex-col gap-2">
   <h1 className="text-lg w-[80%] font-medium leading-tight">White Sauce Pasta (Alfredo sauce)</h1>
      <div className="flex items-center justify-between w-full">
        <h3>No salt,no mushroom</h3>
        <div className="flex items-center gap-">
            <h3>x02</h3>
            <Divider type="vertical" className="bg-black mx-1"/>
            <h1 className="boldf text-[#9747FF]">Parcel</h1>
        </div>
      </div>
      <Divider className="w-full my-2 bg-gray-600"/>
   </div>
   <div className="item flex flex-col gap-2">
   <h1 className="text-lg w-[80%] font-medium leading-tight">Cold Coffee with ice-cream</h1>
      <div className="flex items-center justify-between w-full">
        <h3>Medium Sugar</h3>
        <div className="flex items-center gap-">
            <h3>x02</h3>
            {/* <Divider type="vertical" className="bg-black mx-1"/> */}
            {/* <h1 className="boldf text-[#9747FF]">Parcel</h1> */}
        </div>
      </div>
      <Divider className="w-full my-2 bg-gray-600"/>
   </div>
    </div>
  );
};

export default NotificationCard;
