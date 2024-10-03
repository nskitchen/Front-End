import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

export function LetsIconsOrderFill(props, { height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        fillRule="evenodd"
        d="M5.586 4.586C5 5.172 5 6.114 5 8v9c0 1.886 0 2.828.586 3.414S7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586S19 18.886 19 17V8c0-1.886 0-2.828-.586-3.414S16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586M9 8a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function IconParkSolidFileStaff(props, { height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipSFileStaff0">
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
          >
            <path
              fill="#fff"
              stroke="#fff"
              d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2"
            ></path>
            <path stroke="#fff" d="m30 4l10 10"></path>
            <circle cx={24} cy={24} r={4} fill="#000" stroke="#000"></circle>
            <path stroke="#000" d="M32 36a8 8 0 1 0-16 0"></path>
          </g>
        </mask>
      </defs>
      <path fill="black" d="M0 0h48v48H0z" mask="url(#ipSFileStaff0)"></path>
    </svg>
  );
}

export function IcBaselineDashboard(props, { height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"
      ></path>
    </svg>
  );
}
export function MaterialSymbolsLightTableBar(props, { height, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="m6.73 19.02l1.347-3.347q.129-.287.389-.47q.259-.184.576-.184H11.5v-4.813q-3.421-.067-5.74-.856T3.443 7.5q0-1.142 2.483-1.927Q8.408 4.789 12 4.789q3.598 0 6.078.784q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.779-5.73.846v4.813h2.458q.311 0 .574.184t.391.47l1.346 3.346h-1.038l-1.2-3H8.969l-1.2 3z"
      ></path>
    </svg>
  );
}
const AdminSidebar = ({ data }) => {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch()

  const handleLogout = async () => {
    const success = await dispatch(logoutUser());
    if (success) {
      navigate('/login'); // Navigate to login page after logout
    }
  };

  return (
    <>
      <i
        className="ri-menu-line absolute z-[99999] right-5 top-5 bg-black text-white p-4 px-5 text-base md:hidden rounded-full cursor-pointer"
        onClick={() => setopen(!open)}
      ></i>
      <div
        className={`h-full w-[20vw] relative bg-white flex flex-col items-start pl-5 justify-center gap-5 shrink-0 text-[1.2vw] max-md:absolute max-md:top-0 ${
          open ? "max-md:left-0" : "max-md:-left-[100%]"
        } duration-300 ease-linear z-50 max-md:w-[20rem]`}
      >
        <img
          src="/goldenLogo.png"
          alt="logo"
          className="absolute top-10 left-1/2 -translate-x-1/2"
        />
        <NavLink
          to={"/admin/dashboard"}
          className={`px-4
        flex items-center justify-start  gap-2 ${
          data === "dashboard" ? "bg-[#ff82445f]" : "bg-transparent"
        }  w-[80%] p-2 rounded-md relative transition-all duration-200 eas`}
        >
          {data === "dashboard" && (
            <div className="line absolute h-full w-2 right-[106%] rounded-r-md bg-[#FF8144]"></div>
          )}
          <IcBaselineDashboard height="1.3rem" width="1.3rem" />

          <h1 className="mont text-base font-medium">Dashboard</h1>
        </NavLink>
        <NavLink
          to={"/admin/currentorder"}
          className={`px-4
    flex items-center justify-start  gap-2 ${
      data === "order" ? "bg-[#ff82445f]" : "bg-transparent"
    }  w-[80%] p-2 rounded-md relative transition-all duration-200 ease-linear`}
        >
          {data === "order" && (
            <div className="line absolute h-full w-2 right-[106%] rounded-r-md bg-[#FF8144]"></div>
          )}
          <LetsIconsOrderFill height="1.3rem" width="1.3rem" />
          <h1 className="mont text-base font-medium">Orders</h1>
        </NavLink>
        <NavLink
          to={"/admin/staff"}
          className={`px-4
      flex items-center justify-start  gap-2 ${
        data === "staff" ? "bg-[#ff82445f]" : "bg-transparent"
      }  w-[80%] p-2 rounded-md relative transition-all duration-200 ease-linear`}
        >
          {data === "staff" && (
            <div className="line absolute h-full w-2 right-[106%] rounded-r-md bg-[#FF8144]"></div>
          )}
          <IconParkSolidFileStaff height="1.3rem" width="1.3rem" />
          <h1 className="mont text-base font-medium">Staff Management</h1>
        </NavLink>
        <NavLink
          to={"/admin/menu"}
          className={`px-4
    flex items-center justify-start  gap-2 ${
      data === "menu" ? "bg-[#ff82445f]" : "bg-transparent"
    }  w-[80%] p-2 rounded-md relative transition-all duration-200 ease-linear`}
        >
          {data === "menu" && (
            <div className="line absolute h-full w-2 right-[106%] rounded-r-md bg-[#FF8144]"></div>
          )}
          <img
            src="/menuIcon.png"
            className="h-[1.3rem] w-[1.3rem] object-cover"
            alt=""
          />
          <h1 className="mont text-base font-medium">Menu Management</h1>
        </NavLink>
        <NavLink
          to={"/admin/table"}
          className={`px-4
        flex items-center justify-start  gap-2 ${
          data === "table" ? "bg-[#ff82445f]" : "bg-transparent"
        }  w-[80%] p-2 rounded-md relative transition-all duration-200 ease-linear`}
        >
            {data === "table" && (
            <div className="line absolute h-full w-2 right-[106%] rounded-r-md bg-[#FF8144]"></div>
          )}
          <MaterialSymbolsLightTableBar height="1.3rem" width="1.3rem" />
          <h1 className="mont text-base font-medium">Table Management</h1>
        </NavLink>
        <button onClick={handleLogout} className=" absolute bottom-10 -translate-x-1/2 bg-[#FF8144] left-1/2 px-6 py-1 w-4/5 text-white rounded-md">Logout</button>
      </div>
    </>
  );
};

export default AdminSidebar;
