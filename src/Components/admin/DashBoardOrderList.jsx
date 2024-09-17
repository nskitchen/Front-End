import { Divider } from "antd";
import React from "react";

const DashBoardOrderList = ({ data }) => {
  return (
    <>
      <div className="w-full flex text-xs items-center justify-between p-2 px-3 max-md:p-0">
        <button className="p-2 bg-black text-white boldf rounded-md px-3 ">
          T1
        </button>
        <h1 className="text-base leading-tight font-bold">
          Nobita Sharma
          <br />
          <span className="text-sm font-extralight">Order #531 | 5 Items</span>
        </h1>
        {data?.status === "Completed" ? (
          <button className="bg-[#68abda85] p-1 px-2 ">{data?.status}</button>
        ) : data?.status === "Pending Orders" ? (
          <button className="bg-[#dab268a7] p-1 px-2 ">{data?.status}</button>
        ) : (
          <button className="bg-[#68da8198] p-1 px-2 ">{data?.status}</button>
        )}
        {/* <button className="bg-[#dab268a7] p-1 px-2 ">{data?.status}</button> */}
      </div>
      <Divider className="bg-gray-200 my-0" />
    </>
  );
};

export default DashBoardOrderList;
