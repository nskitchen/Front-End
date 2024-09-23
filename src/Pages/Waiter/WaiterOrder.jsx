import React, { useState } from "react";
import WaiterOrderHeader from "../../Components/waiter/WaiterOrderHeader";
import WaiterFooter from "../../Components/waiter/WaiterFooter";
import BillCard from "../../Components/admin/BillCard";
import OrderBillCard from "../../Components/waiter/OrderBillCard";
import OrderListDetail from "../../Components/waiter/OrderListDetail";

const WaiterOrder = () => {
  const [detail, setdetail] = useState("");
  const handleDetailOpen = (dets)=>{
    setdetail(dets);
  }
  return (
    <>
      <div className="w-full px-4 h-screen mont">
        {detail.length > 0 && detail ? (
         <OrderListDetail setdetail={setdetail}/>
        ) : (
          <>
            <WaiterOrderHeader data={"Order List"} />
            <div className="w-full flex items-center justify-between font-semibold px-4">
              <h3>Current Order List</h3>
              <h3>03</h3>
            </div>
            <div className="flex h-full flex-col gap-3 py-2 overflow-y-auto pb-48">
              <OrderBillCard handleDetailOpen={handleDetailOpen}  />
              <OrderBillCard handleDetailOpen={handleDetailOpen} />
              <OrderBillCard handleDetailOpen={handleDetailOpen} />
            </div>
          </>
        )}
        <WaiterFooter page={"list"} />
      </div>
    </>
  );
};

export default WaiterOrder;
