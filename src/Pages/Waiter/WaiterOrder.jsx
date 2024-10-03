import React, { useEffect, useState } from "react";
import WaiterOrderHeader from "../../Components/waiter/WaiterOrderHeader";
import WaiterFooter from "../../Components/waiter/WaiterFooter";
import BillCard from "../../Components/admin/BillCard";
import OrderBillCard from "../../Components/waiter/OrderBillCard";
import OrderListDetail from "../../Components/waiter/OrderListDetail";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../store/actions/orderActions";
import WaiterHeader from "../../Components/waiter/WaiterHeader";

const WaiterOrder = () => {
  const dispatch = useDispatch()
  const [detail, setdetail] = useState("");
  const {allOrders} = useSelector(state => state.orders)

  const handleDetailOpen = (dets)=>{
    setdetail(dets);
  }
  useEffect(()=>{
    dispatch(getUserOrders())
  },[])

  return (
    <>
      <div className="w-full max-w-[600px] m-auto px-4 h-screen mont">

        {detail ? (
         <OrderListDetail details={detail} setdetail={setdetail}/>
        ) : (
          <>
            <WaiterHeader data="Order List" />
            {/* <WaiterOrderHeader data={"Order List"} /> */}
            <div className="w-full flex items-center justify-between font-semibold px-4">
              <h3>Current Order List</h3>
              <h3>{allOrders.filter(order => order.status !== "completed" && order.status !== "paid").length}</h3>
            </div>
            <div className="flex h-full flex-col gap-3 py-2 overflow-y-auto pb-48">
              {allOrders.map((data,idx)=>{
                if(data.status !== "completed" && data.status !== "paid"){
                  return(
                    <OrderBillCard key={idx} order={data} handleDetailOpen={handleDetailOpen}  />
                  )
                }
              })}
            </div>
          </>
        )}
        <WaiterFooter page={"list"} />
      </div>
    </>
  );
};

export default WaiterOrder;
