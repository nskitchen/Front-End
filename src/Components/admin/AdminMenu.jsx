import React from "react";
import AdminMenuBar from "./AdminMenuBar";
export function IcBaselineDelete(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      className="cursor-pointer"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
      ></path>
    </svg>
  );
}
const AdminMenu = ({ setedit }) => {
  const data = [
    {
      name: "White Sauce Pasta (Alfraedo sauce)",
      dets: "Penne pasta, sweet corn, heavy. cream, red pepper, red onion",
      img: "foodAdminDemo.png",
    },
    {
      name: "White Sauce Pasta (Alfraedo sauce)",
      dets: "Penne pasta, sweet corn, heavy. cream, red pepper, red onion",
      img: "foodAdminDemo.png",
    },
    {
      name: "White Sauce Pasta (Alfraedo sauce)",
      dets: "Penne pasta, sweet corn, heavy. cream, red pepper, red onion",
      img: "foodAdminDemo.png",
    },
    {
      name: "White Sauce Pasta (Alfraedo sauce)",
      dets: "Penne pasta, sweet corn, heavy. cream, red pepper, red onion",
      img: "foodAdminDemo.png",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-6 mon relativet flex-wrap">
        <AdminMenuBar />
      </div>
      <div className="flex items-center mont justify-between p-4 mt-5">
        <h1 className="text-base boldf">Pasta</h1>
        <div className="flex items-start gap-2">
          <button className="font-extralight flex items-center gap-1 text-xs p-2 bg-[#22222224]">
            <i className="ri-add-line"></i>
            Add New
          </button>
          <h1 className="font-semibold text-sm">06</h1>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 p-4 relative overflow-y-auto max-md:p-2 max-md:overflow-x-auto">
        {data?.map((i, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 bg-white rounded-md p-2 max-md:p-1"
          >
            <div className="flex items-center gap-4 justify-center max-md:w-[70%]">
              <div className="w-24 h-20 rounded-md bg-red-500 relative overflow-hidden">
                <img
                  src={`/${i?.img}`}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <h1 className="text-base font-semibold max-md:text-sm">
                {i?.name}
                <br />
                <p className="text-xs font-light max-md:text-xs">{i?.dets}</p>
              </h1>
            </div>
            <h1 className="font-semibold">₹120</h1>
            <div className="flex items-center justify-center gap-2  max-md:flex-nowrap">
              <button className="border-[1px] max-md:text-nowrap border-black rounded-md px-2 py-1 text-sm max-md:text-xs max-md:px-1 max-md:hidden">
                Out of Stock
              </button>
              <i
                className="ri-pencil-fill cursor-pointer"
                onClick={() => setedit(i)}
              ></i>
              <IcBaselineDelete />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMenu;
