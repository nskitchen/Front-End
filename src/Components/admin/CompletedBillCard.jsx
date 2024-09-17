import React from "react";
import { Divider } from "antd";
import CompletedDetail from "./CompletedDetail";
const CompletedBillCard = () => {
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
        <button className="p-2 text-white bg-[#68AADA] rounded-md">
          Ready to Pay
        </button>
      </div>
      <div className="flex items-center justify-between w-full text-gray-400 mt-2">
        <h1 className="text-xs font-extralight">Wed. July 12, 2024</h1>
        <span className="text-xs font-extralight">08:28 PM</span>
      </div>

      <div className="flex w-full items-center text-xs justify-between p-2 mt-2">
        <div className="flex gap-2 items-center justify-center">
          <h3>Order No.</h3>
          <span className="h-3 w-[1px] bg-black"></span>
          <h3>Serve No.</h3>
        </div>
        <div className="flex items-center justify-center gap-3 ">
          <h3>Qua.</h3>
          <h3>DT</h3>
          <h3>Price</h3>
        </div>
      </div>
      <Divider className="bg-gray-200 -mt-[0.1px]" />
      <div className="billcard flex flex-col h-[30vh] relative overflow-y-auto ">
        <CompletedDetail />
        <CompletedDetail />
        <CompletedDetail />
      </div>
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xs">5 Total Items
            <br />
            2 Servings
        </h3>
        <h1 className="text-[#FF8144] boldf">
          <span className="text-gray-400 text-xs">Total Amount</span> ₹1143
          <br />
        </h1>
    
      </div>
      <div className="flex items-center justify-between gap-3 py-2">
      <button className="border-2 p-2 rounded-md text-black w-[50%]">
          See Details
        </button>
      <button className="bg-[#FF8144] p-2 rounded-md w-[50%] text-white">
          Print Bill
        </button>
      </div>
    </div>
  );
};

export default CompletedBillCard;
