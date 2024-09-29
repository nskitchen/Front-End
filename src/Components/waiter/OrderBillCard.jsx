import React, { useEffect } from 'react'
import BillDetails from '../admin/BillDetails'
import { Divider } from 'antd'
import {useDispatch,useSelector} from "react-redux"
import { checkoutOrder, getAllOrdersss } from "../../store/actions/orderActions";

const OrderBillCard = ({ order, handleDetailOpen }) => {
  console.log(order)
  const dispatch = useDispatch()

  const totalPrice = order.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count) * Number(item.id.price), 0);
  }, 0).toLocaleString('en-IN')

  const totalQuantity = order.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
  }, 0)

  useEffect(()=>{
    dispatch(getAllOrdersss())
  },[dispatch])

  const checkoutHandler = async(event)=>{
    event.stopPropagation()
    await dispatch(checkoutOrder(order._id))
    dispatch(getAllOrdersss())
  }

  const status = order.orders.every(item=>item.status === "served")

  return (
    <div onClick={() => handleDetailOpen(order)} className="w-full bg-white rounded-xl mont p-3 border-2">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="bg-black text-white boldf rounded-md p-5 px-5 text-xl">
            T {order.table}
          </button>
        </div>
        <h1 className="text-sm flex flex-col items-end font-extralight">{new Date(order.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
          <br />
          <span>{new Date(order.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
        </h1>

      </div>
      <div className="flex font-bold w-full items-center text-xs justify-between py-1 mt-4">
        <div className="flex gap-2 items-center justify-center">
          <h3>Order No.</h3>
          <span className="h-3 w-[1px] bg-black"></span>
          <h3>Serve No.</h3>
        </div>
        <div className="flex  items-center justify-center gap-4 ">
          <h3 className=''>Qua.</h3>
          <h3>DT</h3>
          <h3>Price</h3>
          <h3>Stat.</h3>
        </div>
      </div>
      <Divider className="bg-gray-200 my-1" />
      <div className="billcard flex flex-col h-[30vh] relative overflow-y-auto ">
        {order.orders.map((ordr, idx) => (
          <BillDetails key={idx} details={ordr} count={idx + 1} />
        ))}
      </div>
      <div className="flex items-center justify-between px-2">
        <h1 className="text-[#FF8144] boldf mont text-2xl">₹{totalPrice}
          <br />
          <span className="font-extralight text-sm text-gray-400">
            Total {totalQuantity} Items
          </span>
        </h1>
        <button onClick={(e) => checkoutHandler(e)} className={`${status ? "text-white bg-black" : "pointer-events-none text-gray-300 border-gray-300"} border-2  p-2 rounded-md`}>
          Checkout
        </button>
      </div>

    </div>
  )
}

export default OrderBillCard