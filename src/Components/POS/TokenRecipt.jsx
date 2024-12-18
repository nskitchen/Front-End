/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const TokenRecipt = forwardRef(({order,mode,sgst,cgst,service}, ref) => {

    const totalPrice = order.orders.reduce((total, perOrder) => {
        return total + perOrder.items.reduce((sum, item) => sum + Number(item.count) * Number(item.id.price), 0);
      }, 0)
    
    const totalQuantity = order.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
    }, 0) 

    const {user} = useSelector(state => state.auth)
    return (
        <div ref={ref} className="content hidden w-[58mm] h-[210mm] font-mono bg-white shadow-md text-sm" style={{ '@page': { size: '58mm 210mm', margin: 0 } }}>
            <h1 className='text-center leading-4 mt-5 font-black text-2xl '>ORDER {order.billId}</h1>
            <p className='text-center text-base font-semibold'>Table {order.table}</p>
            <div className='mt-5 flex justify-between items-center'>
                <p className='text-xs'>DATE:{new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric',}).replace(',', '').replace(/\//g, '-')}</p>
                <p className='text-xs'>TIME:{new Date().toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '').replace(/\//g, '-')}</p>
            </div>
            <div className='h-[1px] w-full bg-black my-1 mb-2'></div>
            <div>
            {order.orders.map((details, idx) => (
                details.items.map((orderDetails,idx)=>( 
                    <div key={idx} className='mb-1 flex justify-between '>
                        <p className='capitalize max-w-[65%] leading-3 text-xs'><span className='font-semibold'></span> {orderDetails.id?.name} {orderDetails.parcel ? "(P)" : ""}</p>
                        <p className='text-xs'>{orderDetails.count} Qua.</p>
                    </div>
                ))
            ))}
            </div >
            <div className='h-[1px] w-full bg-black my-2'></div>
            
            {/* <div className="my-5">
                <div className="flex">
                    <p className="text-xs min-w-[100px] pr-2">Total Items:</p>
                    <p className="text-xs">{totalQuantity}</p>
                </div>
                <div className="flex">
                    <p className="text-xs min-w-[100px] pr-2">Cashier Name:</p>
                    <p className="text-xs">{user.name.firstName}</p>
                </div>
                <div className="flex">
                    <p className="text-xs min-w-[100px] pr-2">Payment:</p>
                    <p className="text-xs">{mode ? mode : "Cash"}</p>
                </div>
            </div> */}
            <style>{`
                @media print {
                    .content {
                        display: block !important;
                    }
                }
      `}</style>
        </div>
    );
});

export default TokenRecipt;
