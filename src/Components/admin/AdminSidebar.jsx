import React from "react";

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
const AdminSidebar = () => {
  return (
    <div className="h-full w-[20vw] relative bg-white flex flex-col items-center justify-center gap-5 shrink-0 text-[1.2vw]">
      <img
        src="/goldenLogo.png"
        alt="logo"
        className="absolute top-10 left-1/2 -translate-x-1/2"
      />
      <div
        className="w-full px-4
        flex items-center justify-start  gap-2"
      >
        <IcBaselineDashboard height="1.5vw" width="1.5vw" />

        <h1 className="mont font-medium">Dashboard</h1>
      </div>
      <div
        className="w-full px-4
        flex items-center justify-start  gap-2"
      >
        <LetsIconsOrderFill height="1.5vw" width="1.5vw" />
        <h1 className="mont font-medium">Orders</h1>
      </div>
      <div
        className="w-full px-4
        flex items-center justify-start  gap-2"
      >
        <IconParkSolidFileStaff height="1.5vw" width="1.5vw" />
        <h1 className="mont font-medium">Staff Management</h1>
      </div>
      <div
        className="w-full px-4
        flex items-center justify-start  gap-2"
      >
        <img
          src="/menuIcon.png"
          className="h-[1.5vw] w-[1.5vw] object-cover"
          alt=""
        />
        <h1 className="mont font-medium">Menu Management</h1>
      </div>
      <div
        className="w-full px-4
        flex items-center justify-start  gap-2"
      >
        <MaterialSymbolsLightTableBar height="1.5vw" width="1.5vw" />
        <h1 className="mont font-medium">Table Management</h1>
      </div>
    </div>
  );
};

export default AdminSidebar;
