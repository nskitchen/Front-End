/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const OrderReceipt = forwardRef(({order,mode,sgst,cgst,service}, ref) => {

    const totalPrice = order.orders.reduce((total, perOrder) => {
        return total + perOrder.items.reduce((sum, item) => sum + Number(item.count) * Number(item.half ? item.id.halfPrice : item.id.price), 0);
      }, 0)
    
    const totalQuantity = order.orders.reduce((total, perOrder) => {
    return total + perOrder.items.reduce((sum, item) => sum + Number(item.count), 0);
    }, 0) 

    const {user} = useSelector(state => state.auth)
    console.log(user)
    return (
        <div ref={ref} className="content hidden w-[58mm] h-[210mm] font-mono bg-white shadow-md text-sm" style={{ '@page': { size: '58mm 210mm', margin: 0 } }}>
            <h1 className='text-center font-black text-3xl '>NSKitchen</h1>
            <div className='flex flex-col items-center my-3 '>
                <p className='text-xs'>www.nskitchen.in</p>
                <p className='text-xs'>Near St Joseph School</p>
                <p className='text-xs'>Pipariya M.P, India</p>
            </div>
            <div className='mb-1'>
                <div className='flex items-center justify-between'>
                    <p className='text-base font-semibold'>Table {order.table}</p>
                    <p className='text-xs'>{new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '').replace(/\//g, '-')}</p>
                </div>
                <div>
                    <p className='text-xs'>Bill No #{order.billId + new Intl.DateTimeFormat('en-GB', {timeZone: 'Asia/Kolkata',day: 'numeric',month: 'numeric',year: '2-digit'}).format(new Date()).replace(/\//g, '')}</p>
                </div>
            </div>
            <div className='my-2'>
                <p className='h-[1px] w-full bg-black'></p>
                <p className='my-1 font-bold text-xl text-center'>Order {order.billId}</p>
                <p className='h-[1px] w-full bg-black'></p>
            </div>
            <div>
            {order.orders.map((details, idx) => (
                details.items.map((orderDetails,idx)=>( 
                    <div key={idx} className='mb-1 flex justify-between '>
                        <p className='max-w-[65%] leading-3 text-xs'><span className='font-semibold'>{orderDetails.count}</span> {orderDetails.id?.name} {orderDetails.id.halfPrice && "(H)"}</p>
                        <p className='text-xs'>₹{orderDetails.half ? orderDetails.id.halfPrice * orderDetails.count : orderDetails.id?.price * orderDetails.count}.00</p>
                    </div>
                ))
            ))}
            </div >
            <div className='h-[1px] w-full bg-black my-2'></div>
            <div className='px-2'>
                <div className='flex justify-between '>
                    <p className='text-xs'>Items Total</p>
                    <p className='text-xs'>₹{totalPrice}.00</p>
                </div >
                <div className='flex justify-between '>
                    <p className='text-xs'>CGST {cgst ? cgst : "2.5"}%</p>
                    <p className='text-xs'>₹{(totalPrice * (cgst ? (cgst/100) : 0.025)).toFixed(2)}</p>
                </div>
                <div className='flex justify-between '>
                    <p className='text-xs'>SGST {sgst ? sgst : "2.5"}%</p>
                    <p className='text-xs'>₹{(totalPrice * (sgst ? sgst/100 : 0.025)).toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center '>
                    <p className='text-xs'>Service Tax {service ? service : "5"}%</p>
                    <p className='text-xs'>₹{(totalPrice * (service ? service/100 : 0.05)).toFixed(2)}</p>
                </div>
            </div>
            <div className='my-2'>
                <p className='h-[1px] w-full bg-black'></p> 
                <div className='my-1 flex justify-between'>
                    <p className='font-bold'>Grand Total</p>
                    <p className='font-bold'>₹{(totalPrice + (totalPrice * (cgst ? cgst/100 : 0.025)) + (totalPrice * (sgst ? sgst/100 : 0.025)) + (totalPrice * (service ? service/100 : 0.05))).toFixed(2)}</p>
                </div>
                <p className='h-[1px] w-full bg-black'></p>
            </div>
            <div className="my-5">
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
            </div>
            <div className='text-center text-xs mt-10'>--- THANK YOU VISIT AGAIN ---</div>
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

export default OrderReceipt;
