import React from "react";

const WaiterTable = () => {
  const t = [
    {
      table: "1",
      available: true,
      myOrder: true,
    },
    {
      table: "2",
      available: true,
      myOrder: false,
    },
    {
      table: "3",
      available: true,
      myOrder: true,
    },
    {
      table: "3",
      available: true,
      myOrder: true,
    },
    
    {
      table: "4",
      available: true,
      myOrder: false,
    },
    {
      table: "5",
      available: true,
      myOrder: false,
    },
    {
      table: "6",
      available: true,
      myOrder: false,
    },
    {
      table: "7",
      available: false,
      myOrder: true,

    },
    {
      table: "8",
      available: true,
      myOrder: false,
    },
    {
      table: "9",
      available: true,
      myOrder: true,
    },
    {
      table: "10",
      available: true,
      myOrder: true,
    },
    {
      table: "11",
      available: false,
    },
    {
      table: "12",
      available: false,
    },
  ];
  return (
    <div className="w-full mont h-full">
      <div className="mt-[0.5vh] flex items-center justify-between">
        <h1 className="text-lg font-semibold">Select Table</h1>
        <h4 className="font-light">6 Available</h4>
      </div>
      <div className="w-[85%] py-10  grid grid-cols-3 gap-5 gap-x-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[54%] overflow-y-auto ">
        {t?.map((i, index) => (
          <div
            className={`h-[20vw] w-[20vw] flex rounded-lg items-center justify-center border-[1px] border-black ${
              i?.available
                ? `${i?.myOrder ? "bg-[#9747FF]" : "bg-transparent"}`
                : "bg-[#DBDBDB] cursor-not-allowed pointer-events-none text-white border-none"
            }`}
          >
            <h1 className="text-2xl boldf">T{i?.table}</h1>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default WaiterTable;
