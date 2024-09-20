import React from "react";
import BillDetails from "../admin/BillDetails";
import { Divider } from "antd";

const OrderListDetail = ({setdetail}) => {
  
  return (
    <div className="w-full h-full mont">
      <div className="w-full flex items-center justify-between p-4">
        <h1 className="boldf text-2xl">Order Details</h1>
        <i className="ri-close-large-fill boldf text-xl" onClick={()=>setdetail("")}></i>
      </div>
      <div className="w-full bg-white rounded-xl mont p-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="bg-black text-white boldf rounded-md p-5 px-6 text-xl">
              T1
            </button>
          </div>
          <h1 className="text-sm font-extralight">
            Wed. July 12, 2024
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
        <Divider className="bg-gray-200 my-1" />
        <div className="billcard flex flex-col h-fit relative">
          <BillDetails />
          <BillDetails />
          <BillDetails />
        </div>
        <div className="flex flex-col items-center justify-between px-2">
          <div className="flex items-center justify-between w-full">
            <span className="font-extralight text-sm text-gray-400">
              Total 5 Items
            </span>
            <h1 className="text-[#FF8144] boldf mont text-2xl">₹1143</h1>
          </div>

        <div className="flex items-center justify-between w-full">
            <button className="px-6 py-3 bg-black text-white flex items-center justify-center gap-3 rounded-md">
            <i className="ri-add-large-line"></i>
            <h1>Add more item</h1>
            </button>
        <button className="border-2 text-gray-300 p-2 rounded-md">
            Checkout
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListDetail;
