import { Divider } from "antd";
import React, { useState } from "react";

const WaiterList = () => {
  const data = [
    {
      name: "Oliva Rhye",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: "98768 63463",
      online: true,
    },
    {
      name: "Oliva Rhye",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: "98768 63463",
      online: false,
    },
    {
      name: "Oliva Rhye",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: "98768 63463",
      online: true,
    },
    {
      name: "Oliva Rhye",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: "98768 63463",
      online: true,
    },
    {
      name: "Oliva Rhye",
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: "98768 63463",
      online: false,
    },
  ];
  const [selected, setselected] = useState(0);
  return (
    <div className="flex flex-col gap-2 mt-4 w-full ">
      {data?.map((i, index) => (
        <div
          onClick={() => setselected(index)}
          className={`w-full  flex px-4 py-2 transition-all duration-150 ease-linear cursor-pointer mont ${
            selected === index ? "border-2  border-[#9747FF]" : ""
          }  rounded-md items-center justify-between relative`}
        >
          <div className="flex items-center justify-center gap-4">
            <i
              className={`ri-circle-fill text-xs ${
                i?.online ? "text-green-500" : "text-gray-400"
              } `}
            ></i>
            <div className="img h-[3vw] w-[3vw] rounded-full overflow-hidden relative">
              <img
                src={i?.image}
                className="h-full w-full object-cover"
                alt="profile image"
              />
            </div>
            <h1 className="text-base font-bold">
              {i?.name} <br />
              <span className="text-sm font-medium">+91 {i?.number}</span>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-14">
            <button>Delete</button>
            <button className="text-[#6E39CB]">Edit</button>
          </div>
          <Divider className="absolute bottom-0"/>
        </div>
      ))}
    </div>
  );
};

export default WaiterList;
