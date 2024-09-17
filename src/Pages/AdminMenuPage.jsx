import React, { useState } from "react";
import Dashboard from "../Components/admin/Dashboard";
import AdminSidebar from "../Components/admin/AdminSidebar";
import AdminMenu from "../Components/admin/AdminMenu";
import MenuEditPage from "../Components/admin/MenuEditPage";

const AdminMenuPage = () => {
  const [edit, setedit] = useState("");
  return (
    <div className="w-full h-screen bg-[#EEEEEE] flex">
      <AdminSidebar data={"menu"} />
      <div className="w-full h-full overflow-y-auto  relative">
        <div className="flex w-full items-center justify-between font-bold text-[#6E39CB] p-7">
          <h1>Menu</h1>
          <h1>Wednesday, 12 Jul 2024 </h1>
        </div>
        {edit ? <MenuEditPage edit={edit} setedit={setedit} /> : <AdminMenu setedit={setedit} />}
      </div>
    </div>
  );
};

export default AdminMenuPage;
