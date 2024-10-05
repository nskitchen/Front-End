import React, { useRef } from "react";
import { Divider } from "antd";
import CompletedDetail from "./CompletedDetail";
import { useReactToPrint } from "react-to-print";
import OrderReceipt from "../POS/OrderRecipt";
const CompletedBillCard = ({data, setShowBill}) => {

  const totalPrice = data.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count) * Number(item.id.price), 0);
  }, 0)

  const totalQuantity = data.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
  }, 0)

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });
  console.log(data)
  
 
  return (
    <div className="w-full bg-white mont p-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-3 bg-black text-white boldf rounded-md px-3">
            T {data.table}
          </button>
          <h1 className="boldf text-sm">
          {data.user.name.firstName} {data.user.name.lastName}
          </h1>
        </div>
        <button className="px-2 py-1 text-white bg-[#68AADA] rounded-md">
          Ready to Pay
        </button>
      </div>
      <div className="flex my-3 items-center justify-between w-full text-gray-400 ">
        <h1 className="text-xs font-extralight">{new Date(data.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</h1>
        <span className="text-xs font-extralight">{new Date(data.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
      </div>
      <Divider className="bg-gray-200 my-1" />
      <div className="flex w-full items-center text-xs justify-between py-2">
        <div className="flex gap-2 w-[50%] items-center justify-start">
          <h3>Order No.</h3>
          <span className="h-3 w-[1px] bg-black"></span>
          <h3>Serve No.</h3>
        </div>
        <div className="flex w-[35%] items-center justify-center gap-3 ">
          <h3 className="w-[20%] text-center">Qua.</h3>
          <h3 className="w-[20%] text-center">DT</h3>
          <h3 className="w-[30%] text-center">Price</h3>
        </div>
      </div>
      <Divider className="bg-gray-200 my-1 mb-3" />
      <div className="billcard flex flex-col h-[30vh] relative overflow-y-auto ">
        {data.orders.map((ordr, idx) => (
          <CompletedDetail key={idx} details={ordr} count={idx + 1} />
        ))}
      </div>
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xs">{totalQuantity} Total Items
            <br />
            {data.orders.length} Servings
        </h3>
        <h1 className="text-[#FF8144] boldf">
          <span className="text-gray-400 text-xs">Total Amount</span> ₹{Math.floor(Number(totalPrice) + Number(totalPrice)*(0.025) + Number(totalPrice) *(0.025) + Number(totalPrice) * (0.05)).toLocaleString()}
          <br />
        </h1>
    
      </div>
      <div className="flex items-center justify-between gap-3 py-2">
      <button onClick={()=>setShowBill(data)} className="border-2 p-2 rounded-md text-black w-[50%]">
          See Details
        </button>
            <button onClick={reactToPrintFn} className="bg-[#FF8144] p-2 rounded-md w-[50%] text-white">
              Print Bill
            </button>
      
      </div>

      <OrderReceipt order={data} ref={contentRef} />

    </div>
  );
};

export default CompletedBillCard;
