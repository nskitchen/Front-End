import React from "react";
import { Divider } from "antd";
import CompletedDetail from "./CompletedDetail";

const HistoryBillCard = ({ data, user, payment, setShowBill }) => {

  const totalPrice = data.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + (Number(item.count) * Number(item.id?.price)), 0);
  }, 0).toLocaleString('en-IN')

  const totalQuantity = data.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
  }, 0)

  return (
    <div className="w-full bg-white mont p-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-3 bg-black text-white boldf rounded-md px-3">
            T {data.table}
          </button>
          <h1 className="boldf text-sm">
            {user.name.firstName} {user.name.lastName}
          </h1>
        </div>
        <button className="px-2 py-1 text-white bg-[#6ada68] rounded-md">
          Paid: {payment.paymentMode}
        </button>
      </div>
      <div className="flex my-3 items-center justify-between w-full text-gray-400 ">
        <div>
          <p className="text-xs font-extralight">{new Date(payment.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
          <p className="text-xs font-extralight">Bill No: #{payment.receiptId}</p>
        </div>
        <div>
          <p className="text-xs font-extralight">{new Date(payment.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          <p className="text-xs font-extralight">{new Date(data.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
        </div>
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
      <div className="flex items-center text-sm justify-between px-2">
        <h1 className="text-[#FF8144] boldf">Item price: ₹{totalPrice}
          <br />
          <span className="font-extralight text-sm text-gray-400">
            Tax ₹{payment.sgst + payment.cgst + payment.serviceCharge}
          </span>
        </h1>

        <h1 className="text-[#FF8144] boldf">
          <span className="text-gray-400 text-xs">Total Amount</span> ₹{payment.total}
          <br />
        </h1>

      </div>
      <div className="flex items-center justify-between gap-3 py-2">
        <button onClick={() => setShowBill(payment)} className="border-2 p-2 rounded-md text-black w-[50%]">
          See Details
        </button>
        <button className="bg-[#FF8144] p-2 rounded-md w-[50%] text-white">
          Re-print Bill
        </button>
      </div>
    </div>
  );
};

export default HistoryBillCard;
