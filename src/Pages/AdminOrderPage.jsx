import React from "react";
import AdminOrder from "../Components/admin/AdminOrder";
import AdminSidebar from "../Components/admin/AdminSidebar";
import BillCard from "../Components/admin/BillCard";
import { NavLink } from "react-router-dom";

const AdminOrderPage = ({data}) => {
  return (
    <div className="h-screen w-full bg-[#EEEEEE] flex mont">
      <AdminSidebar data={"order"} />
      <div className="w-full flex flex-col p-7 mont">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[#6E39CB] text-1.7s boldf">Orders</h1>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex mt-3 gap-3">
            <NavLink to={"/admin/currentorder"} className="flex text-lg p-2 px-3 gap-2 text-white rounded-md font-medium items-center bg-[#FF8144] justify-center">
              Current Orders
              <span className="h-full w-[1px] bg-white"></span>
              05
            </NavLink>
            <NavLink to={"/admin/completedorder"} className="flex text-lg p-2 px-3 gap-2 text-black bg-white rounded-md font-medium items-center justify-center">
              Completed Orders
              <span className="h-full w-[1px] bg-black"></span>
              08
            </NavLink>
            <button className="flex text-lg p-2 px-3 gap-2 text-black bg-white rounded-md font-medium items-center justify-center">
              Order History
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 rounded-md">
            <button className="p-2 border-2 bg-white px-3 text-gray-400">
              <i className="ri-filter-3-line"></i>
            </button>
            <div className="flex items-center justify-center border-2 gap-2 bg-white p-2 rounded-md px-4 w-fit">
              <input
                type="text"
                className="outline-none w-[15vw] text-sm "
                placeholder="Search by table no, order id, etc"
              />
              <i className="ri-search-line"></i>
            </div>
          </div>
        
        </div>
        <div className="flex w-full py-8 px-4 text-xl items-center justify-between boldf text-black">
            <h1>Current Orders</h1>
            <h1>5</h1>
          </div>
          <div className="grid grid-cols-3 gap-4 relative overflow-y-auto pr-4">
             <BillCard/>    
             <BillCard/>    
             <BillCard/>    
             <BillCard/>    
             <BillCard/>    
   
          </div>
      </div>
    </div>
  );
};

export default AdminOrderPage;
