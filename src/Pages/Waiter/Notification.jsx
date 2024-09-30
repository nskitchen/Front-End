import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NotificationCard from '../../Components/waiter/NotificationCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../../store/actions/orderActions'

const Notification = () => {
    const nav = useNavigate()
    const {allOrders} = useSelector(state => state.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])
    return (    
        <div className='w-screen max-w-[600px] m-auto mont h-screen p-5 py-6'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Notification</h1>
                <i onClick={() => nav(-1)} className='ri-close-line text-2xl'></i>
            </div>
            <p className='text-lg mt-8'>Order Ready</p>
            <div className='h-[88%] mt-5 overflow-y-auto'>
                {allOrders.map((order) => {
                        return order.orders.map((item) => {
                            return item.items.map((i) => {
                                if(i.status == "completed"){
                                    return <NotificationCard key={order.id} order={order} item={item} stuff={i} />
                                }
                            })
                        })
                    }
                )}

            </div>
        </div>
    )
}

export default Notification