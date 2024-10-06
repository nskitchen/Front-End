import { Checkbox } from "antd";
import React, { useRef } from "react";
import ChefCheckbox from "./ChefCheckbox";
import TokenRecipt from "../POS/TokenRecipt";
import { useReactToPrint } from "react-to-print";

const ChefCard = ({ order }) => {

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <>
      {order.orders.map((individualOrder) => {
        if(individualOrder.status == "pending"){
          return(
            <div key={individualOrder._id} className="-full flex flex-col gap-2">
              <div className="flex items-center  justify-between">
                <div className="flex 0 items-center justify-center">
                  <div className="w-20 border-r-2 border-black max-md:w-12">
                    <span className="rounded-md bg-[#FF9933] flex items-center justify-center text-[1.2vw] text-white mont boldf h-[3vw] w-[3vw] max-md:h-[8vw] max-md:w-[8vw] max-md:text-base ">
                      T{order.table}
                    </span>
                  </div>
                    <div className="flex flex-col md: pl-3">
                      <h1 className="text-lg mont boldf ">Order  #{individualOrder.orderId}</h1>
                      <h3 className="font-medium text-sm mont">{new Date(order.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</h3>
                    </div>
                </div>
              <button onClick={reactToPrintFn} className="bg-green-500 text-white px-5 py-1 rounded">Print</button>
              </div>
              {/* {mobile view} */}
              {individualOrder.items.map((item) => (
                <div key={item._id} className="flex flex-col mont text-[1.2vw] bg-white text-center items-center w-full p-4 md:hidden gap-4">
                  <div className="flex items-center justify-between w-full">
                    <h1 className="text-[1.2vw] max-md:text-lg">{item.id.name}</h1>
                    <ChefCheckbox />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <h1 className="max-md:text-sm">{item.remark ? item.remark : "-"}</h1>
                    <h1 className="max-md:text-sm">{item.count}</h1>
                    <button className={`boldf bg-transparent max-md:text-sm rounded-md ${item.parcel ? "text-[#9747FF]" : ""}`}>
                      {item.parcel ? "Parcel" : "Dine-in"}
                    </button>
                  </div>
                </div>
              ))}
              {/* {Laptop view} */}
              {individualOrder.items.map((item) => {
                if (item.status !== "completed") {
                  return (
                    <div key={item._id} className="grid mont text-[1.2vw] bg-white grid-cols-5 text-center place-items-center place-content-center items-center justify-between w-full p-4 max-md:hidden">
                      <h1 className="text-[1.2vw]">{item.id.name}</h1>
                      <h1>{item.count}</h1>
                      <h1>{item.remark ? item.remark : "-"}</h1>
                      <button className={`p-2 boldf rounded-md px-6 ${item.parcel ? "bg-[#9747FF] text-white " : ""}`}>
                        {item.parcel ? "Parcel" : "Dine-in"}
                      </button>
                      <ChefCheckbox id={order._id} orderId={individualOrder.orderId} itemId={item._id}/>
                    </div>
                  );
                }
              })}
            <TokenRecipt order={order} ref={contentRef} />
            </div>
        )}})}
    </>
  );
};

export default ChefCard;
