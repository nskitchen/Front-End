import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export function TdesignNotificationFilled({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 24 24"
      
    >
      <path
        fill={color || "black"}
        d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z"
      ></path>
    </svg>
  );
}
const WaiterHeader = ({data}) => {
  const navigate = useNavigate()
  const {user} = useSelector((state)=>state.auth)
  const {allOrders} = useSelector(state => state.orders)
  const isCompletedExist = allOrders.some((order) => order.orders.some((item) => item.items.some((i) => i.status === "completed") ) );
  console.log(isCompletedExist)

  return (
    <div className="w-full mont flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        {user?.role == "admin" &&
        <button onClick={()=>navigate("/admin/dashboard")} className="w-10 h-10 rounded-full border-[1px] border-black flex items-center justify-center">
          <i className="ri-arrow-left-s-line text-xl"></i>
        </button>}
        <h1 className="text-2xl boldf">{data}</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* <button className="p-2 rounded-md border-[1px] border-black">
          <i className="ri-search-line text-xl"></i>
        </button> */}
        <NavLink to={"/waiter/notification"} className={`p-2 rounded-md relative border-[1px] border-black ${isCompletedExist ? "bg-black" : ""}`} >
            {isCompletedExist && <div className="h-3 w-3 bg-red-500 absolute rounded-full right-3"></div>}
            <TdesignNotificationFilled color={isCompletedExist ? "white" : "black"} />
        </NavLink>
      </div>
    </div>
  );
};

export default WaiterHeader;
