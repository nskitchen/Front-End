import { Divider } from "antd";
import React from "react";
import DashBoardOrderList from "./DashBoardOrderList";
import { data } from "autoprefixer";
import DashBoardPaymentList from "./DashBoardPaymentList";
import DashboardDishes from "./DashboardDishes";
export function SolarBellBold(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3vw"
      height="1.3vw"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#FF8144"
        d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
      ></path>
    </svg>
  );
}
export function LetsIconsOrderFill(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3vw"
      height="1.3vw"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#FF8144"
        fillRule="evenodd"
        d="M5.586 4.586C5 5.172 5 6.114 5 8v9c0 1.886 0 2.828.586 3.414S7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586S19 18.886 19 17V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586M9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsTimer(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3vw"
      height="1.3vw"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#FF8144"
        d="M9 3V1h6v2zm2 11h2V8h-2zm1 8q-1.85 0-3.488-.712T5.65 19.35t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22"
      ></path>
    </svg>
  );
}
const d = [
  {
    status: "Completed",
  },
  {
    status: "Pending Orders",
  },
  {
    status: "Ready to serve",
  },
];
const Dashboard = () => {
  return (
    <div className="w-full h-full flex p-7 mont relative">
      <div className="flex flex-col w-[70%]">
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full h-[20vh] rounded-lg bg-[#FF8144] p-7 boldf text-white flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-between">
              <h1 className="text-lg">New Orders</h1>
              <div className="h-9 w-9 bg-white rounded-md flex items-center justify-center">
                <SolarBellBold />
              </div>
            </div>
            <h1 className="text-3xl">16</h1>
          </div>
          <div className="w-full h-[20vh] rounded-lg bg-white p-7 boldf text-black flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-between">
              <h1 className="text-lg">Total Orders</h1>
              <div className="h-9 w-9 bg-[#ff82445c] rounded-md flex items-center justify-center">
                <LetsIconsOrderFill />
              </div>
            </div>
            <h1 className="text-3xl leading-tight gap-0 flex flex-col mt-2">
              86
              <br />
              <span className="text-xs ">
                <span className="text-[#FF8144]">+2.5% </span>
                than usual
              </span>
            </h1>
          </div>{" "}
          <div className="w-full h-[20vh] rounded-lg bg-white p-7 boldf text-black flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-between">
              <h1 className="text-lg">Waiting List</h1>
              <div className="h-9 w-9 bg-[#ff82445c] rounded-md flex items-center justify-center">
                <MaterialSymbolsTimer />
              </div>
            </div>
            <h1 className="text-3xl leading-tight gap-0 flex flex-col mt-2">
              09
              <br />
              <span className="text-xs ">
                <span className="text-[#FF8144]">+3.2% </span>
                than usual
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 h-[72%] py-2.5">
          <div className="w-full bg-white p-3 rounded-lg h-full">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-xl boldf">Order List</h1>
              <div className="flex items-center justify-center border-2 w-40 py-1 p-2 rounded-full text-gray-500">
                <input
                  type="search"
                  placeholder="Search an Order"
                  className="w-full outline-none text-xs"
                />
                <i className="ri-search-line"></i>
              </div>
            </div>
            <Divider className="bg-gray-200 my-3" />
            {d?.map((i, index) => (
              <DashBoardOrderList data={i} key={index} />
            ))}
            {/* <DashBoardOrderList />
            <DashBoardOrderList /> */}
          </div>
          <div className="w-full bg-white rounded-lg h-full p-3">
            <div className="flex w-full items-center justify-between">
              <h1 className="text-xl boldf">Payment</h1>
              <div className="flex items-center justify-center border-2 w-40 py-1 p-2 rounded-full text-gray-500">
                <input
                  type="search"
                  placeholder="Search an Order"
                  className="w-full outline-none text-xs"
                />
                <i className="ri-search-line"></i>
              </div>
            </div>
            <Divider className="bg-gray-200 my-3" />
            <DashBoardPaymentList />
            <DashBoardPaymentList />
            <DashBoardPaymentList />
            <DashBoardPaymentList />
          </div>
        </div>
      </div>
      <div className="h-full w-[30%] flex flex-col gap-3 items-center">
        <button className="text-white uppercase bg-[#9747FF] w-[90%] boldf flex items-center justify-center gap-2 p-5 rounded-md">
          <i className="ri-add-line"></i>
          Create New Orders
        </button>
        <div className="h-[40vh] w-[90%] bg-white rounded-xl p-4 ">
          <div className="w-full flex items-end justify-between">
            <h1 className="text-xl font-bold ">Popular Dishes</h1>
            <h3 className="text-[#9747FF] text-sm">View all</h3>
          </div>
          <Divider className="my-2 bg-gray-200" />
          <DashboardDishes />
          <DashboardDishes />
          <DashboardDishes />
          <DashboardDishes />
        </div>
        <div className="h-[40vh] w-[90%] bg-white rounded-xl p-4 ">
          <div className="w-full flex items-end justify-between">
            <h1 className="text-xl font-bold ">Out of Stock</h1>
            <h3 className="text-[#9747FF] text-sm">View all</h3>
          </div>
          <Divider className="my-2 bg-gray-200" />
        <div>
        <div className="w-full">
            <h1 className="boldf text-lg">Item Name</h1>
            <h4 className="text-xs mt-1 font-extralight">
              Category of item
            </h4>
          </div>
          <Divider className="bg-gray-200 my-1"/>
        </div>
        <div>
        <div className="w-full">
            <h1 className="boldf text-lg">Item Name</h1>
            <h4 className="text-xs mt-1 font-extralight">
              Category of item
            </h4>
          </div>
          <Divider className="bg-gray-200 my-1"/>
        </div>
        <div>
        <div className="w-full">
            <h1 className="boldf text-lg">Item Name</h1>
            <h4 className="text-xs mt-1 font-extralight">
              Category of item
            </h4>
          </div>
          <Divider className="bg-gray-200 my-1"/>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
