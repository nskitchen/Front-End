import { Checkbox } from "antd";
import React from "react";
import ChefCheckbox from "./ChefCheckbox";

const ChefCard = ({order}) => {
  return (
    <div className="-full flex flex-col gap-2">

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="w-20 border-r-2 border-black max-md:w-12">
            <span className="rounded-md bg-[#FF9933] flex items-center justify-center text-[1.2vw] text-white mont boldf h-[3vw] w-[3vw] max-md:h-[8vw] max-md:w-[8vw] max-md:text-base ">
              {order.table}
            </span>
          </div>
          <h1 className="text-2xl mont boldf pl-3 max-md:hidden">Order #{order._id}</h1>
          <div className="flex flex-col md:hidden pl-3">
            <h1 className="text-lg mont boldf ">Order  #{order._id}</h1>
            <h3 className="font-medium text-sm mont">08:054 PM</h3>
          </div>
        </div>
        <h3 className="font-medium mont max-md:hidden">08:054 PM</h3>
      </div>
     
      {/* {mobile view} */}
      <div className="flex flex-col mont text-[1.2vw] bg-white text-center items-center w-full p-4 md:hidden gap-4">
        <div className="flex items-center justify-between w-full">
          <h1
            className="text-[1.2vw] max-md:text-lg
        "
          >
            White Sauce Pasta
          </h1>
          <ChefCheckbox />
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="max-md:text-sm">No salt</h1>
          <h1 className="max-md:text-sm">x02</h1>
          <button className="boldf bg-transparent text-black max-md:text-sm rounded-md">
            Parcel
          </button>
        </div>
      </div>
      <div className="flex flex-col mont text-[1.2vw] bg-white text-center items-center w-full p-4 md:hidden gap-4">
        <div className="flex items-center justify-between w-full">
          <h1
            className="text-[1.2vw] max-md:text-lg
        "
          >
            White Sauce Pasta
          </h1>
          <ChefCheckbox />
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="max-md:text-sm">No salt</h1>
          <h1 className="max-md:text-sm">x02</h1>
          <button className="boldf bg-transparent text-black max-md:text-sm rounded-md">
            Parcel
          </button>
        </div>
      </div>
      <div className="flex flex-col mont text-[1.2vw] bg-white text-center items-center w-full p-4 md:hidden gap-4">
        <div className="flex items-center justify-between w-full">
          <h1
            className="text-[1.2vw] max-md:text-lg
        "
          >
            White Sauce Pasta
          </h1>
          <ChefCheckbox />
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="max-md:text-sm">No salt</h1>
          <h1 className="max-md:text-sm">x02</h1>
          <button className="boldf bg-transparent text-black max-md:text-sm rounded-md">
            Parcel
          </button>
        </div>
      </div>
      {/* {Laptop view} */}
      <div className="grid mont text-[1.2vw] bg-white grid-cols-5 text-center place-items-center place-content-center items-center justify-between w-full p-4 max-md:hidden">
        <h1 className="text-[1.2vw]">White Sauce Pasta</h1>
        <h1>02</h1>
        <h1>no salt , no mashroom</h1>
        <button className="p-2 boldf bg-[#9747FF] text-white rounded-md px-6">
          Parcel
        </button>
        <ChefCheckbox />
      </div>
      <div className="grid text-[1.2vw] mont bg-white grid-cols-5 text-center place-items-center place-content-center items-center justify-between w-full p-4 max-md:hidden">
        <h1 className="text-[1.2vw]">White Sauce Pasta</h1>
        <h1>02</h1>
        <h1>no salt</h1>
        <h1 className="boldf">Dine-in</h1>
        <ChefCheckbox />
      </div>
      <div className="grid text-[1.2vw] mont bg-white grid-cols-5 text-center place-items-center place-content-center items-center justify-between w-full p-4 max-md:hidden">
        <h1 className="text-[1.2vw]">White Sauce Pasta</h1>
        <h1>02</h1>
        <h1>no salt</h1>
        <h1 className="boldf">Dine-in</h1>
        <ChefCheckbox />
      </div>
    </div>
  );
};

export default ChefCard;
