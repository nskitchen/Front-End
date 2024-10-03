import { Divider } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import DashBoardOrderList from "./DashBoardOrderList";
import { data } from "autoprefixer";
import DashBoardPaymentList from "./DashBoardPaymentList";
import DashboardDishes from "./DashboardDishes";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersss } from "../../store/actions/orderActions";
import { getMenu, getPopularDishes } from "../../store/actions/menuActions";
import { useNavigate } from "react-router-dom";
export function SolarBellBold(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3rem"
      height="1.3rem"
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
      width="1.3rem"
      height="1.3rem"
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
      width="1.3rem"
      height="1.3rem"
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
  const dispatch = useDispatch()  
  const { allOrders } = useSelector((state) => state.orders)
  const [popular, setPopular] = useState([])
  const pendingOrders = allOrders && allOrders.filter((order) => order.status === "pending")
  const completedOrders = allOrders && allOrders.filter((order) => order.status === "completed")
  const {menu} = useSelector((state)=>state.menu)
  const nav = useNavigate()

  const viewAllOutOfStock = () => {
    dispatch(getMenu(null,null,true))
    nav("/admin/menu")
  }

  useLayoutEffect(() => {
    dispatch(getAllOrdersss())
    dispatch(getMenu(null,null,false))

    async function getPopular(){
      setPopular(await getPopularDishes())
    }
    getPopular()

  }, [dispatch])

  return (
    <div className="w-full h-full flex p-7 mont relative max-md:flex-col">
      <div className="flex flex-col w-[70%] max-md:w-full">
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <div className="w-full h-[20vh] max-md:h-fit max-md:p-5 rounded-lg bg-[#FF8144] p-7 boldf text-white flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-between max-md:flex-col max-md:justify-center">
              <h1 className="text-lg">Orders <br /> Preparing</h1>
              <div className="h-9 w-9 bg-white rounded-md flex items-center justify-center">
                <SolarBellBold />
              </div>
            </div>
            <h1 className="text-3xl">{pendingOrders.length}</h1>
          </div>
          <div className="w-full h-[20vh] max-md:h-fit max-md:p-5 rounded-lg bg-white p-7 boldf text-black flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-between max-md:flex-col max-md:justify-center">
              <h1 className="text-lg">Total <br /> Orders</h1>
              <div className="h-9 w-9 bg-[#ff82445c] rounded-md flex items-center justify-center">
                <LetsIconsOrderFill />
              </div>
            </div>
            <h1 className="text-3xl leading-tight gap-0 flex flex-col mt-2">
              {allOrders && allOrders.length}
              <br />
            </h1>
          </div>
          <div className="w-full h-[20vh] max-md:h-fit max-md:p-5 rounded-lg bg-white p-7 boldf text-black flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-between max-md:flex-col max-md:justify-center">
              <h1 className="text-lg">Payment <br /> Pending</h1>
              <div className="h-9 w-9 bg-[#ff82445c] rounded-md flex items-center justify-center">
                <MaterialSymbolsTimer />
              </div>
            </div>
            <h1 className="text-3xl leading-tight gap-0 flex flex-col mt-2">
              {completedOrders.length}
              <br />
            </h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 h-[70%] py-2.5 max-md:grid-cols-1">
          <div className="w-full bg-white p-3 rounded-lg h-full">
            <div className="flex w-full h-[10%] items-center justify-between max-md:overflow-y-auto">
              <h1 className="text-xl boldf">Order List</h1>
              {/* <div className="flex items-center justify-center border-2 w-40 py-1 p-2 rounded-full text-gray-500">
                <input
                  type="search"
                  placeholder="Search an Order"
                  className="w-full outline-none text-xs"
                />
                <i className="ri-search-line"></i>
              </div> */}
            </div>
            <div className="h-[90%] overflow-scroll">
              <Divider className="bg-gray-200 mt-3 mb-1" />
              {pendingOrders.length > 0 && pendingOrders.reverse().map((i, index) => (
                <DashBoardOrderList data={i} key={index} />
              ))}
              {pendingOrders.length == 0 && <h1 className="text-center opacity-30 text-lg mt-5">No Orders to show</h1>}
            </div>
            {/* <DashBoardOrderList />
            <DashBoardOrderList /> */}
          </div>
          <div className="w-full bg-white rounded-lg h-full p-3">
            <div className="flex h-[10%] w-full items-center justify-between max-md:overflow-y-auto">
              <h1 className="text-xl boldf">Payment</h1>
              {/* <div className="flex items-center justify-center border-2 w-40 py-1 p-2 rounded-full text-gray-500">
                <input
                  type="search"
                  placeholder="Search an Order"
                  className="w-full outline-none text-xs"
                />
                <i className="ri-search-line"></i>
              </div> */}
            </div>
            <div className={`h-[90%] overflow-scroll`}>
              <Divider className="bg-gray-200 mt-3 mb-1" />
              {completedOrders.length > 0 && completedOrders.map((i, index) => (
                <DashBoardPaymentList order={i} key={index} />
              ))}
              {completedOrders.length == 0 && <h1 className="text-center opacity-30 text-lg mt-5">No Orders to show</h1>}
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[30%] flex flex-col gap-3 items-center max-md:w-full">
        <button onClick={()=>nav("/waiter/addtable")} className="text-white uppercase bg-[#9747FF] w-[90%] max-md:w-full boldf flex items-center justify-center gap-2 px-5 py-2 rounded-md">
          Create New Orders
        </button>
        <button onClick={()=>nav("/waiter/addtable")} className="text-white uppercase bg-[#9747FF] w-[90%] max-md:w-full boldf flex items-center justify-center gap-2 px-5 py-2 rounded-md">
          Go to Chef
        </button>
        <div className="h-[35%] w-[90%] max-md:w-full bg-white rounded-xl p-4 overflow-hidden">
          <div className="w-full flex items-end justify-between">
            <h1 className="text-xl font-bold ">Popular Dishes</h1>
          </div>
          <div className="h-[90%] overflow-scroll">
            <Divider className="my-2 bg-gray-200" />
            {popular.map((dish,idx)=>{
              if(dish.menuDetails){
                return <DashboardDishes key={idx} number={idx+1} dish={dish}/>
              }
            })}

          </div>
          {/* <DashboardDishes /> */}
        </div>
        <div className="h-[38vh] w-[90%] max-md:w-full bg-white rounded-xl p-4 relative max-md:overflow-y-auto">
          <div className="w-full flex items-end justify-between">
            <h1 className="text-xl font-bold ">Out of Stock</h1>
            <h3 onClick={viewAllOutOfStock} className="text-[#9747FF] text-sm">View all</h3>
          </div>
          <Divider className="my-2 bg-gray-200" />
          {menu && menu.filter((item)=>item.isAvailable == false).map((item,idx)=>(
          <div key={idx}>
            <div className="w-full">
              <h1 className="boldf text-lg">{item.name}</h1>
              <h4 className="text-xs mt-1 font-extralight">{item.category}</h4>
            </div>
            <Divider className="bg-gray-200 my-1" />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
