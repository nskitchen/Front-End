import React from "react";
import BillDetails from "../admin/BillDetails";
import { Divider } from "antd";
import { setTableNumber } from "../../store/slices/tableSlice";
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { checkoutOrder } from "../../store/actions/orderActions";

const OrderListDetail = ({ details, setdetail }) => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = details.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count) * Number(item.id.price), 0);
  }, 0).toLocaleString('en-IN')

  const totalQuantity = details.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
  }, 0).toLocaleString('en-IN')

  const addMoreHandler = () => {
    dispatch(setTableNumber(details.table));
    navigate("/waiter/menu")
  }

  const checkoutHandler = async()=>{
    await dispatch(checkoutOrder(details._id))
    setdetail("")
  }

  const status = details.orders.every(item=>item.status === "served")
  console.log(status)

  return (
    <div className="w-full h-full mont">
      <div className="w-full flex items-center justify-between py-4">
        <h1 className="boldf text-2xl">Order Details</h1>
        <i className="ri-close-large-fill boldf text-xl" onClick={() => setdetail("")}></i>
      </div>
      <div className="w-full bg-white rounded-xl mont p-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="bg-black text-white boldf rounded-md p-5 px-6 text-xl">
              T {details.table}
            </button>
          </div>
          <h1 className="text-sm flex flex-col items-end font-extralight">{new Date(details.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
            <br />
            <span>{new Date(details.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
          </h1>
        </div>
        <div className="flex w-full items-center text-xs justify-between p-2 mt-4">
          <div className="flex gap-2 items-center justify-center">
            <h3>Order No.</h3>
            <span className="h-3 w-[1px] bg-black"></span>
            <h3>Serve No.</h3>
          </div>
          <div className="flex items-center justify-center gap-3 ">
            <h3>Qua.</h3>
            <h3>DT</h3>
            <h3>Price</h3>
            <h3>Stat.</h3>
          </div>
        </div>
        <Divider className="bg-gray-200 my-1" />
        <div className="billcard flex flex-col h-fit relative">
          {details.orders.map((ordr, idx) => (
            <BillDetails key={idx} details={ordr} count={idx + 1} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center mt-4 justify-between w-full">
            <span className="font-extralight text-sm text-gray-400">
              Total {totalQuantity} Items
            </span>
            <h1 className="text-[#FF8144] boldf mont text-2xl">₹{totalPrice}</h1>
          </div>

          <div className="flex mt-5 items-center justify-between w-full">
            <button onClick={addMoreHandler} className="px-6 py-2 border-2 border-black bg-black text-white flex items-center justify-center gap-3 rounded-md">
              <i className="ri-add-large-line"></i>
              <h1 >Add more item</h1>
            </button>
            <button onClick={checkoutHandler} className={`${status ? "text-white bg-black" : " pointer-events-none text-gray-300 border-gray-300"} border-2  p-2 rounded-md`}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListDetail;
