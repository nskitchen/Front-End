import React from 'react'
import WaiterHeader from '../../Components/waiter/WaiterHeader'
import WaiterTable from '../../Components/waiter/WaiterTable'
import WaiterFooter from '../../Components/waiter/WaiterFooter'

const WaiterPageTable = () => {
  return (
   <div className="w-full px-4 h-screen relative">
    <WaiterHeader data="Create Order"/>
    <WaiterTable/>
    <div className="w-full py-3 bg-[#2222220D] flex items-center justify-center gap-6 absolute bottom-24 left-0 mont text-base">
        <div className="flex items-center justify-center gap-1">
            <div className="h-6 w-6 rounded-md bg-[#9747FF]"></div>
            <h3>My Orders</h3>
        </div>
        <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 rounded-md bg-[#DBDBDB]"></div>
            <h3>Booked</h3>
        </div>
        <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 rounded-md bg-white border-[1px] border-black"></div>
            <h3>Available</h3>
        </div>
      </div>
      <WaiterFooter page={"table"}/>
   </div>
  )
}

export default WaiterPageTable