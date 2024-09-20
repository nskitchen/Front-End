import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
export function IconParkSolidTransactionOrder(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8rem"
      height="1.8rem"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipSTransactionOrder0">
          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
            <rect
              width={30}
              height={36}
              x={9}
              y={8}
              fill="#fff"
              stroke="#fff"
              rx={2}
            ></rect>
            <path stroke="#fff" strokeLinecap="round" d="M18 4v6m12-6v6"></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              d="M16 19h16m-16 8h12m-12 8h8"
            ></path>
          </g>
        </mask>
      </defs>
      <path
        fill="black"
        d="M0 0h48v48H0z"
        mask="url(#ipSTransactionOrder0)"
      ></path>
    </svg>
  );
}
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

const WaiterFooter = ({ page }) => {
  const {tableNumber} = useSelector((state) => state.tables);
  // console.log(tableNumber);
  return (
    <div className="flex bg-white w-full left-0 fixed bottom-0 py-4 p-2 mont font-semibold items-center justify-between px-10 z-10">
      <NavLink
        to={"/waiter/addtable"}
        className="flex flex-col items-center justify-center"
      >
        <MaterialSymbolsLightTableBar
          height="1.8rem"
          width="1.8rem"
          className={`${page === "table" && "waiter"}`}
        />
        <h3 className={`${page === "table" && "text-[#FF9933]"}`}>Tables</h3>
      </NavLink>
      <NavLink
        to={`/waiter/menu/${tableNumber}`}
        className="flex flex-col items-center justify-center"
      >
        {page === "menu" ? (
          <img
            src="/menuiconOrange.png"
            className="h-[1.8rem] w-[1.8rem] object-cover"
            alt=""
          />
        ) : (
          <img
            src="/menuIcon.png"
            className="h-[1.8rem] w-[1.8rem] object-cover"
            alt=""
          />
        )}

        <h3 className={`${page === "menu" && "text-[#FF9933]"}`}>Menu</h3>
      </NavLink>
      <NavLink to={"/waiter/summary"} className="flex flex-col items-center justify-center">
        <IconParkSolidTransactionOrder className={`${page === "total" && "waiter"}`} />
        <h3 className={`${page === "total" && "text-[#FF9933]"}`}>Total</h3>
      </NavLink>
      <NavLink to={"/waiter/orderlist"} className="flex flex-col items-center justify-center">
        <LetsIconsOrderFill height="1.8rem" width="1.8rem" className={`${page === "list" && "waiter"}`} />
        <h3 className={`${page === "list" && "text-[#FF9933]"}`}>Order List</h3>
      </NavLink>
    </div>
  );
};

export default WaiterFooter;
