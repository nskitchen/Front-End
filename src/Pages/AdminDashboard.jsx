import React from "react";
import Dashboard from "../Components/admin/Dashboard";
import AdminSidebar from "../Components/admin/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen bg-[#EEEEEE] flex"
    >
      <AdminSidebar data={"dashboard"}/>
      <div className="w-full h-full overflow-y-auto  relative">
        <div className="flex w-full items-center justify-between font-bold text-[#6E39CB] p-7 max-md:text-sm">
          <h1>Nice! We have a lot of orders</h1>
          <h1>Wednesday, 12 Jul 2024 </h1>
        </div>
      <Dashboard />

      </div>
    </div>
  );
};

export default AdminDashboard;
