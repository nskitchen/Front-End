import React from 'react'
import BillDetails from '../admin/BillDetails'
import { Divider } from 'antd'

const OrderBillCard = ({handleDetailOpen}) => {
  return (
    <div onClick={()=>handleDetailOpen("hello")} className="w-full bg-white rounded-xl mont p-3 border-2">
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button className="bg-black text-white boldf rounded-md p-5 px-6 text-xl">
          T1
        </button>
      </div>
      <h1 className="text-sm font-extralight">Wed. July 12, 2024
          <br />
          <span>08:28 PM</span>
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
      <Divider className="bg-gray-200 my-1"/>
      <div className="billcard flex flex-col h-[30vh] relative overflow-y-auto ">
      <BillDetails/>
      <BillDetails/>
      <BillDetails/>
      </div>
      <div className="flex items-center justify-between px-2">
          <h1 className="text-[#FF8144] boldf mont text-2xl">₹1143
              <br />
              <span className="font-extralight text-sm text-gray-400">
              Total 5 Items
              </span>
          </h1>
          <button className="border-2 text-gray-300 p-2 rounded-md">
              Checkout
          </button>
      </div>

  </div>
  )
}

export default OrderBillCard