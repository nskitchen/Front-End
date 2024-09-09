import React from "react";
export function TdesignNotificationFilled(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M8.645 20.5a3.502 3.502 0 0 0 6.71 0zM3 19.5h18v-3l-2-3v-5a7 7 0 1 0-14 0v5l-2 3z"
      ></path>
    </svg>
  );
}
const WaiterHeader = ({data}) => {
  return (
    <div className="w-full mont flex items-center justify-between py-4">
      <h1 className="text-2xl boldf">{data}</h1>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md border-[1px] border-black">
          <i className="ri-search-line text-xl"></i>
        </button>
        <button className="p-2 rounded-md border-[1px] border-black">
            <TdesignNotificationFilled/>
        </button>
      </div>
    </div>
  );
};

export default WaiterHeader;
