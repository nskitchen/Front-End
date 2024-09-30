import React, { useEffect } from "react";
import AdminOrder from "../Components/admin/AdminOrder";
import AdminSidebar from "../Components/admin/AdminSidebar";
import BillCard from "../Components/admin/BillCard";
import { NavLink } from "react-router-dom";
import { getAllOrdersss } from "../store/actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import BillReceipt from "../Components/admin/BillReceipt";

const AdminOrderPage = ({data}) => {
  const dispatch = useDispatch()
  const {allOrders} = useSelector((state)=>state.orders)
  const currentOrders = allOrders?.filter((i)=>i.status==="pending")
  const comletedOrders = allOrders?.filter((i)=>i.status==="completed")
  
  useEffect(()=>{
    dispatch(getAllOrdersss())
  },[])

  return (
    <div className="h-screen w-full bg-[#EEEEEE] flex mont">
      <AdminSidebar data={"order"} />
      <div className="w-full flex flex-col p-7 mont">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[#6E39CB] text-1.7s boldf">Orders</h1>
        </div>
        <div className="flex w-full items-center justify-between flex-wrap">

          <div className="flex mt-3 gap-3  max-md:grid max-md:grid-cols-2 max-md:place-items-center max-md:place-content-center">
            <NavLink to={"/admin/currentorder"} className="flex text-lg p-2 px-3 gap-2 text-white rounded-md font-medium items-center bg-[#FF8144] justify-center">
              Current Orders
              <span className="h-full w-[1px] bg-white"></span>
              {currentOrders.length}
            </NavLink>
            <NavLink to={"/admin/completedorder"} className="flex text-lg p-2 px-3 gap-2 text-black bg-white rounded-md font-medium items-center justify-center">
              Completed Orders
              <span className="h-full w-[1px] bg-black"></span>
              {comletedOrders.length}
            </NavLink>
            {/* <button className="flex text-lg p-2 px-3 gap-2 text-black bg-white rounded-md font-medium items-center justify-center max-md:translate-x-1/2 max-md:my-2">
              Order History
            </button> */}
          </div>
          <div className="flex items-center justify-center gap-4 rounded-md max-md:w-full">
            <button className="p-2 border-2 bg-white px-3 text-gray-400">
              <i className="ri-filter-3-line"></i>
            </button>
            <div className="flex items-center justify-center border-2 gap-2 bg-white p-2 rounded-md px-4 w-fit">
              <input
                type="text"
                className="outline-none w-[15vw] text-sm max-md:w-[90%]"
                placeholder="Search by table no, order id, etc"
              />
              <i className="ri-search-line"></i>
            </div>
          </div>
        
        </div>
        <div className="flex w-full py-8 px-4 text-xl items-center justify-between boldf text-black max-md:py-2">
            <h1>Current Orders</h1>
            <h1>5</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 relative overflow-y-auto pr-4 max-md:grid-cols-1 max-md:w-full max-md:p-0">
            {currentOrders?.map((i)=>(
              <BillCard key={i._id} data={i}/>
            ))} 
          </div>
      </div>
    </div>
  );
};

export default AdminOrderPage;
