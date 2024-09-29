import React, { useEffect } from 'react'
import WaiterHeader from '../../Components/waiter/WaiterHeader'
import WaiterFooter from '../../Components/waiter/WaiterFooter'
import SummaryWaiter from '../../Components/waiter/SummaryWaiter'
import { useDispatch, useSelector } from 'react-redux'
import { CreateNewOrders } from '../../store/actions/orderActions'
import { useNavigate } from 'react-router-dom'
import { setCartItems } from '../../store/slices/orderSlice'
import { setTableNumber } from '../../store/slices/tableSlice'


const WaiterSummary = () => {
  const { cart } = useSelector(state => state.orders)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    const success = await dispatch(CreateNewOrders())
    if (success) {
      navigate("/waiter/addtable"); // Replace with your desired route
      dispatch(setCartItems([]))
      dispatch(setTableNumber(""))
    } else {
      console.error("Order creation failed");
    }
  }

  return (
    <>
      <div className="w-full max-w-[600px] m-auto px-4 h-screen relative">
        <WaiterHeader data="Order Summary" />
        <SummaryWaiter />
        <div className="h-16 max-w-[600px] left-1/2 -translate-x-1/2 w-screen boldf mont bottom-20 flex items-center justify-between fixed px-8 py-4">
          <div className="flex flex-col">
            <h1 className='text-[#FF8144] text-lg'>₹{cart.reduce((acc, red) => (acc + red.price), 0)}</h1>
            <h3 className='font-medium'>Total {cart.reduce((acc, red) => (acc + red.count), 0)} Items</h3>
          </div>
          <button className='px-8 py-2 bg-[#FF8144] text-white rounded-md' onClick={handleSubmit}>
            Send to Kitchen
          </button>
        </div>
        <WaiterFooter page={"total"} />
      </div>
    </>
  )
}

export default WaiterSummary