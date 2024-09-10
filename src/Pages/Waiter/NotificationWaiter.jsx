import React from 'react'
import WaiterHeader from '../../Components/waiter/WaiterHeader'
import NotificationCard from '../../Components/waiter/NotificationCard'
import { NavLink, useNavigate } from 'react-router-dom'

const NotificationWaiter = () => {
  const navigate = useNavigate();
  return (
    <>
   <div className="w-full h-screen p-4 mont">
   <div className="w-full  boldf mont text-2xl flex items-center justify-between">
     <h1 className=''>Notification</h1>
    <i className="ri-close-fill text-3xl"  onClick={()=>navigate(-1)}></i>
  
    </div>
    <h1 className='mt-4 font-semibold'>Order Ready</h1>
    <div className="flex flex-col gap-2 py-4 ">
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>

    </div>
   </div>
    </>
  )
}

export default NotificationWaiter