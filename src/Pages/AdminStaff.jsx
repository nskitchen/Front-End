import React, { useState } from "react";
import AdminSidebar from "../Components/admin/AdminSidebar";
import StaffList from "../Components/admin/StaffList";
import StaffDetail from "../Components/admin/StaffDetail";
import AddMember from "../Components/admin/AddMember";

const AdminStaff = () => {
  const [add, setadd] = useState(false);
  return (
    <div className="h-screen w-full bg-[#EEEEEE] flex relative overflow-y-auto">
      <AdminSidebar data={"staff"} />
      <div className="w-full flex flex-col p-7 mont max-md:p-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[#6E39CB] text-1.7s boldf">Staff Members</h1>
          <button
            onClick={() => setadd(!add)}
            className="bg-[#6E39CB] text-base text-white p-2"
          >
            {add ? "Back to Staff list" : "Add New Member"}
          </button>
        </div>
        {add ? (
          <div className="flex w-full h-full gap-4 p-2 pb-1">
            <AddMember add={add} setadd={setadd} />
          </div>
        ) : (
          <div className="flex w-full h-full gap-4 p-2 pb-1 mt-2 max-md:flex-col ">
            <StaffList />
            <StaffDetail />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminStaff;
