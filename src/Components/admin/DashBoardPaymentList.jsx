import { Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoardPaymentList = ({order}) => {
  const navigate = useNavigate()
  const totalQuantity = order.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
  }, 0)

  return (
    <>
      <div className="w-full flex text-xs items-center justify-between p-2 px-3 max-md:px-0">
        <button className="p-3 bg-black text-white boldf rounded-md px-3 ">
          T {order?.table}
        </button>
        <h1 className="text-base leading-tight font-bold">
          {order.user.name.firstName} {order.user.name.lastName}
          <br />
          <span className="text-sm font-extralight">Order #{order.billId} | {totalQuantity} Items</span>
        </h1>
        <button onClick={()=>navigate(`/admin/completedorder`)} className="p-2 px-3 rounded-md border-[1px] border-black">
          Pay Now
        </button>
        {/* <button className="bg-[#dab268a7] p-1 px-2 ">{data?.status}</button> */}
      </div>
      <Divider className="bg-gray-200 my-1" />
    </>
  );
};

export default DashBoardPaymentList;
