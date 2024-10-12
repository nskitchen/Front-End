import React from "react";
import Dashboard from "../Components/admin/Dashboard";
import AdminSidebar from "../Components/admin/AdminSidebar";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const {user} = useSelector((state)=>state.auth)
  console.log(user)
  return (
    <div className="w-full h-screen bg-[#EEEEEE] flex"
    >
      <AdminSidebar data={"dashboard"}/>
      <div className="w-full h-full overflow-y-auto  relative">
        <div className="flex w-full items-center justify-between font-bold text-[#6E39CB] p-7 max-md:text-sm">
          <h1>Hello {user.name.firstName}</h1>
          <h1>{new Date().toLocaleTimeString('en-GB', {weekday:"long", day: 'numeric', month: 'short',hour:"2-digit",minute:"2-digit", hour12:true })}</h1>
        </div>
      <Dashboard />

      </div>
    </div>
  );
};

export default AdminDashboard;
