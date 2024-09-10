import React from 'react'
import WaiterHeader from '../../Components/waiter/WaiterHeader'
import WaiterFooter from '../../Components/waiter/WaiterFooter'
import SummaryWaiter from '../../Components/waiter/SummaryWaiter'

const WaiterSummary = () => {
  return (
   <>
  <div className="w-full px-4 h-screen relative">
  <WaiterHeader data="Order Summary"/>
  <SummaryWaiter/>
  <div className="h-16 w-screen boldf mont bottom-20 left-0 flex items-center justify-between fixed px-8 py-4">
        <div className="flex flex-col">
            <h1 className='text-[#FF8144] text-lg'>₹550</h1>
            <h3 className='font-medium'>Total 4 Items</h3>
        </div>
        <button className='px-8 py-2 bg-[#FF8144] text-white rounded-md'>
            Send to Kitchen
        </button>
        </div>
  <WaiterFooter page={"total"}/>
  </div>
   </>
  )
}

export default WaiterSummary