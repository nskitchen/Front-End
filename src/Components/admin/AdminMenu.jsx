import React, { useEffect, useState } from "react";
import AdminMenuBar from "./AdminMenuBar";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../store/actions/menuActions";
import { setFood } from "../../store/slices/menuSlice";
import { getDeleteMenuById } from "../../store/actions/menuActions";

export function IcBaselineDelete(props) {
  const { i } = props;
  // console.log(i);
  const dispatch = useDispatch();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      className="cursor-pointer"
      viewBox="0 0 24 24"
      {...props}
      onClick={() => {
        dispatch(getDeleteMenuById(i._id, i.category));
      }}
    >
      <path
        fill="black"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
      ></path>
    </svg>
  );
}
const AdminMenu = ({ setedit }) => {
<<<<<<< HEAD
  const dispatch = useDispatch();
  const { food, menu } = useSelector((state) => state.menu);
  // console.log(food);
=======
>>>>>>> 1523915678d5c5b156baa10272100ca343877094
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

  // console.log(menu);

  useEffect(() => {
    dispatch(getMenu(food));
    dispatch(setFood(food));
  }, [food]);

  return (
    <div className="w-full">
      <div className="flex ">
        <AdminMenuBar />
      </div>
      <div className="flex items-center mont justify-between p-4 mt-5">
        <h1 className="text-base boldf">{food} </h1>
        <div className="flex items-start gap-2">
          <button className="font-extralight flex items-center gap-1 text-xs p-2 bg-[#22222224]">
            <i className="ri-add-line"></i>
            Add New
          </button>
          {/* <h1 className="font-semibold text-sm">06</h1> */}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 p-4 relative overflow-y-auto">
        {menu &&
          menu.map((i, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 bg-white rounded-md p-2"
            >
              <div className="flex items-center gap-4 justify-center">
                <div className="w-24 h-20 rounded-md bg-red-500 relative overflow-hidden">
                  <img
                    src={`${i?.imges}`}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <h1 className="text-base font-semibold">
                  {i?.name}
                  <br />
                  <p className="text-xs font-light">{i?.dets}</p>
                </h1>
              </div>
              <h1 className="font-semibold">₹{i?.price}</h1>
              <div className="flex items-center justify-center gap-2">
                <button className="border-[1px] border-black rounded-md px-2 py-1 text-sm">
                  Out of Stock
                </button>
                <i
                  className="ri-pencil-fill cursor-pointer"
                  onClick={() => setedit(i)}
                ></i>
                <IcBaselineDelete i={i} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminMenu;
