import { Divider } from "antd";
import React from "react";

const DashBoardOrderList = ({ data }) => {

  const totalQuantity = (items) => items.items.reduce((total,order)=>{
    return total + order.count
  },0)
  const orders = [...data.orders].reverse();
  return (
    <>
    {orders.map((item,index)=>{
      return(
        <>
        <div className="w-full flex text-xs items-center justify-between p-2 px-3 max-md:p-0">
        <button className=" bg-black text-white boldf rounded-md p-3">
          T {data.table}
        </button>
        <h1 className="text-base leading-tight font-bold">
          {data.user.name.firstName} {data.user.name.lastName}
          <br />
          <span className="text-sm font-extralight">Order #{item.orderId} | {totalQuantity(item)} Items</span>
        </h1>
        {item?.status == "completed" ? (
          <button className="bg-[#68abda85] p-1 px-2 ">Ready to serve</button>
        ) : item?.status == "pending" ? (
          <button className="bg-[#dab268a7] p-1 px-2 ">In Kitchen</button>
        ) : (
          <button className="bg-[#70da6898] p-1 px-2 ">Served</button>
        )}
      </div>
      <Divider className="bg-gray-200 my-1" />
        </>
      )
    })}
      
    </>
  );
};

export default DashBoardOrderList;
