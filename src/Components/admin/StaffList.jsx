import { Divider } from "antd";
import React, { useState } from "react";
import WaiterList from "./WaiterList";
import ChefList from "./ChefList";
import { Link, useParams } from "react-router-dom";

const StaffList = () => {
  const [type, settype] = useState("waiter");
  
  return (
    <div className="w-1/2 bg-white rounded-md h-full p-4 mont">
      <div className="flex items-start justify-between">
        <h1 className="text-xl boldf">
          Staff Management
          <br />
          <span className="text-xs font-light">
            Manage your staff memebers and their account permissions here.
          </span>
        </h1>
        <div className="flex items-center justify-center border-2 w-32 py-1 p-2 rounded-full text-gray-500">
          <input
            type="search"
            placeholder="Search"
            className="w-full outline-none text-xs"
          />
          <i className="ri-search-line"></i>
        </div>
      </div>
      <Divider />
      <div className="flex gap-8 boldf">
        <Link
          to={"/admin/staff"}
          className={`${
            type === "waiter"
              ? "text-[#FF8144]  border-b-2 border-[#FF8144]"
              : "text-black"
          } transition-all pb-1 duration-200 ease-in-out`}
          onClick={() => settype("waiter")}
        >
          Waiter
        </Link>
        <Link
          to={"/admin/staff"}
          className={`${
            type === "chef"
              ? "text-[#FF8144]  border-b-2 border-[#FF8144] "
              : "text-black"
          } transition-all duration-200 pb-1 ease-in-out`}
          onClick={() => settype("chef")}
        >
          Chef
        </Link>
      </div>
      {type === "waiter" ? <WaiterList /> : <ChefList />}
    </div>
  );
};

export default StaffList;
