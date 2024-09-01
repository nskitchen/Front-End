import React from 'react'
import ChefCard from './ChefCard'

const ChefPage = () => {
  return (
   <div className="w-full text-black min-h-screen bg-[#EEEEEE] px-12 max-md:px-6">
<nav className='flex items-center justify-between  py-4'>
    <h1 className='mont text-2.3s max-md:text-xl' style={{fontWeight:"900"}}>Pending Order</h1>
    <h3 className='text-xl mont max-md:text-base'>Total Orders <span className='text-[#FF8144]' style={{fontWeight:"900"}}>15</span></h3>
</nav>
<div className="grid grid-cols-5 text-center place-items-center place-content-center items-center justify-between w-full text-gray-500 max-md:hidden">
  <h3>Item Name</h3>
  <h3>Quantity</h3>
  <h3>Remark</h3>
  <h3>Order Type</h3>
  <h3>Status</h3>
</div>
<div className="flex flex-col py-10 gap-10">
  <ChefCard/>
  <ChefCard/>
  <ChefCard/>
</div>
   </div>
  )
}

export default ChefPage