import { Divider } from "antd";
import React from "react";

const DashBoardPaymentList = ({ data }) => {
  return (
    <>
      <div className="w-full flex text-xs items-center justify-between p-2 px-3">
        <button className="p-3 bg-black text-white boldf rounded-md px-4 ">
          T1
        </button>
        <h1 className="text-base leading-tight font-bold">
          Nobita Sharma
          <br />
          <span className="text-sm font-extralight">Order #531 | 5 Items</span>
        </h1>
        <button className="bg-[#FF8144]  p-2 px-3 rounded-md text-white">Pay Now</button>
        {/* <button className="bg-[#dab268a7] p-1 px-2 ">{data?.status}</button> */}
      </div>
      <Divider className="bg-gray-200 my-0" />
    </>
  );
};

export default DashBoardPaymentList;
