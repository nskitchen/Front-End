import React from "react";
import { NavLink } from "react-router-dom";
export function TdesignNotificationFilled(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.2rem"
      height="2.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z"
      ></path>
    </svg>
  );
}
const WaiterOrderHeader = ({ data }) => {
  return (
    <div className="w-full mont flex items-center justify-between py-4">
      <h1 className="text-2xl boldf">{data}</h1>
      <div className="flex items-center gap-4">
        <NavLink to={"/waiter/notification"} className="p-2 relative rounded-md bg-black">
            <div className="h-3 w-3 bg-red-500 absolute rounded-full right-3"></div>
          <TdesignNotificationFilled />
        </NavLink>
      </div>
    </div>
  );
};

export default WaiterOrderHeader;
