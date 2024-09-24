import { Divider } from "antd";
import React from "react";
import BillDetails from "./BillDetails";

const BillCard = ({data}) => {
  console.log(data.user);
  return (
    <div className="w-full bg-white mont p-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-3 bg-black text-white boldf rounded-md px-4">
            T1
          </button>
          <h1 className="boldf text-sm">
            Garvit
            <br />
            <span className="font-medium">4 Members</span>
          </h1>
        </div>
        <h1 className="text-sm font-extralight">Wed. July 12, 2024
            <br />
            <span>08:28 PM</span>
        </h1>
       
      </div>
      <div className="flex w-full items-center text-xs justify-between p-2 mt-4">
           <div className="flex gap-2 items-center justify-center">
           <h3>Order No.</h3>
           <span className="h-3 w-[1px] bg-black"></span>
           <h3>Serve No.</h3>
           </div>
           <div className="flex items-center justify-center gap-3 ">
            <h3>Qua.</h3>
            <h3>DT</h3>
            <h3>Price</h3>
            <h3>Stat.</h3>
           </div>
        </div>
        <Divider className="bg-gray-200 -mt-[0.1px]"/>
        <div className="billcard flex flex-col h-[30vh] relative overflow-y-auto ">
        <BillDetails/>
        <BillDetails/>
        <BillDetails/>
        </div>
        <div className="flex items-center justify-between px-2">
            <h1 className="text-[#FF8144] boldf">₹1143
                <br />
                <span className="font-extralight text-gray-400">
                Total 5 Items
                </span>
            </h1>
            <button className="bg-[#FF8144] p-2 rounded-md text-white">
                Complete Order
            </button>
        </div>

    </div>
  );
};

export default BillCard;
