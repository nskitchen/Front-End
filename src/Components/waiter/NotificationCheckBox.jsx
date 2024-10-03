import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  getUserOrders, serveOrder } from '../../store/actions/orderActions';

const NotificationCheckBox = ({orderId,itemId,id}) => {

    const [check, setcheck] = useState(false);
    const [timer, setTimer] = useState(null);
    const dispatch = useDispatch();
    const {allOrders} = useSelector((state) => state.orders)
    console.log(allOrders)
    const handleCheck = () => {
        setcheck(!check);
        if (!check) {
            console.log("Timer started");
            const newTimer = setTimeout(() => {
                dispatch(serveOrder(orderId, itemId, id))
            }, 1000);
            setTimer(newTimer);
        } else {
            console.log("Timer cancelled");
            if (timer) {
                clearTimeout(timer);
                setTimer(null);
            }
        }
        setcheck(!check);
    };

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return (
        <div onClick={handleCheck} className="checkbox flex items-center justify-center cursor-pointer max-md:h-[10vw] max-md:w-[10vw] max-md:text-2xl">
            <i className={`ri-check-double-line text-center flex items-center justify-center bg-black h-full w-full text-white transition-all ease-in-out duration-400 ${check ? "opacity-100" : "opacity-0"}`}></i>
        </div>
    )
}

export default NotificationCheckBox