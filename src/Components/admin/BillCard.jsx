import { Divider } from "antd";
import React, { useState } from "react";
import BillDetails from "./BillDetails";
import { checkoutOrder, getAllOrdersss } from "../../store/actions/orderActions";
import { useDispatch } from "react-redux";
import BillReceipt from "./BillReceipt";

const BillCard = ({data}) => {
  const dispatch = useDispatch()
  const [showBill, setShowBill] = useState(true)
  const totalPrice = data.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count) * Number(item.half ? item.id.halfPrice : item.id.price), 0);
  }, 0).toLocaleString('en-IN')

  const totalQuantity = data.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
  }, 0)

  const handleCompleteOrder = async(id)=>{
    await dispatch(checkoutOrder(id))
    dispatch(getAllOrdersss()) 
  }
  return (
    <div className="w-full bg-white mont p-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-3 bg-black text-white boldf rounded-md px-4">
            T {data.table}
          </button>
          <h1 className="boldf text-sm">
            {data.user.name.firstName} {data.user.name.lastName}
            <br />
            <span className="font-medium">4 Members</span>
          </h1>
        </div>
        <h1 className="text-sm flex flex-col items-end font-extralight">{new Date(data.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          <br />
          <span>{new Date(data.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
        </h1>
       
      </div>
      <div className="flex w-full items-center text-xs justify-between py-2 mt-4">
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
        <Divider className="bg-gray-200 -mt-[0.1px] mb-1"/>
        <div className="billcard flex flex-col h-[30vh] relative overflow-y-auto ">
        {data.orders.map((ordr, idx) => (
          <BillDetails key={idx} details={ordr} count={idx + 1} />
        ))}
        </div>
        <div className="flex items-center justify-between px-2">
            <h1 className="text-[#FF8144] boldf">₹{totalPrice}
                <br />
                <span className="font-extralight text-gray-400">
                Total {totalQuantity} Items
                </span>
            </h1>
            <button onClick={() => handleCompleteOrder(data._id)} className="bg-[#FF8144] p-2 rounded-md text-white">
                Complete Order
            </button>
        </div>
    </div>
  );
};

export default BillCard;
