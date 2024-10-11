import { Select } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateBill } from '../../store/actions/billActions'
import { useReactToPrint } from 'react-to-print'
import OrderReceipt from '../POS/OrderRecipt'

const BillReceiptHistory = ({setShowBillReceipt,order}) => {
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState('cash')

  const itemPrice = order.order.orders.reduce((orderSum, orderItem) => {
    return orderSum + orderItem.items.reduce((itemSum, item) => {
      return itemSum + Number(item.half ? item.id.halfPrice * item.count : item.id.price * item.count); // Assuming `item.id.price` is the price you want
    }, 0);
  }, 0);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className='fixed inset-0 z-50 top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
        <div className='w-[50%] px-8 py-8 h-[90%] bg-white rounded-md'>
            <div className='flex mb-5 h-[5%] justify-between items-center'>
              <h1 className='text-xl font-extrabold'>Payment</h1>
              <i onClick={()=>setShowBillReceipt(false)} className='bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center  ri-close-line text-xl cursor-pointer'></i>
            </div>
            <div className='flex mt-5 gap-16 h-[90%]'>
              <div className='w-[55%] h-full '>
                <div className='h-full'>
                  <p className='h-[5%]'>Order Info</p>
                  <div className='h-[95%]'>
                    <div className=' h-[10%] flex mb-[5%] justify-between'>
                      <div className='flex items-center gap-2'>
                        <p className='h-12 w-12 text-white bg-black rounded flex items-center justify-center'>T{order.table}</p>
                        <div className='flex flex-col gap-1'>
                          <p className='font-semibold text-sm'>{order.user.name.firstName} {order.user.name.lastName}</p>
                          <p className='text-gray-500 text-xs'>Bill no #{order.receiptId}</p>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center gap-1'>
                        <p className='text-gray-500 text-xs'>{new Date(order.createdAt).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
                        <p className='text-gray-500 text-xs'>{new Date(order.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    </div>
                    <div className='bg-neutral-100 h-[87%] p-[5%]'>
                      <p className=''>Transaction Details</p>
                      <div className='mt-4 h-[60%] overflow-y-auto'>
                        {
                             order.order.orders.map((item)=>{
                              return item.items.map((stuff,idx)=>(
                              <div key={idx} className='flex justify-between gap-1 mb-3'>
                                <div>
                                  <p className='font-semibold text-sm opacity-60'>{stuff.id.name}</p>
                                  <p className='font-semibold text-xs'>₹{stuff.half ? stuff.id.halfPrice : stuff.id.price}</p>
                                </div>
                                <p className='font-semibold text-sm'>x{stuff.count}</p>
                              </div>
                              ))
                            })
                        }
                      </div>
                      <div className='mt-4'>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-semibold text-xs'>Items</p>
                          <p className='font-semibold text-xs'>₹{itemPrice}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>Service Charge</p>
                          <p className='font-bold text-xs'>₹{order.serviceCharge.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>CGST</p>
                          <p className='font-bold text-xs'>₹{order.cgst.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>SGST</p>
                          <p className='font-bold text-xs'>₹{order.sgst.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-3'>
                          <p className='font-bold text-sm'>Total</p>
                          <p className='font-bold text-sm'>₹{order.total}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className='w-[45%] flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                  <p className="text-base">Payment Method</p>
                  <p className='text-sm capitalize border-[0.09rem] border-gray-300 rounded-md p-2'>{order.paymentMode}</p>
                  {/* <Select value={paymentMethod} onChange={(e)=>setPaymentMethod(e)} className=" bg-gray-100">
                    <Select.Option value="cash"><i className="ri-money-rupee-circle-line"></i> Cash</Select.Option>
                    <Select.Option value="online"><i className="ri-qr-code-line"></i> Online</Select.Option>
                    <Select.Option value="card"><i className='ri-bank-card-line'></i> Card</Select.Option>
                    <Select.Option value="other"><i className="ri-coin-line"></i> Other</Select.Option>
                  </Select> */}
                </div>
                {/* <button className='bg-[#FF8144] text-white px-4 py-2 rounded-md'>Confirm Payment</button> */}
              </div>
              {/* <OrderReceipt order={order} ref={contentRef} /> */}
            </div>
        </div>
    </div>
  )
}

export default BillReceiptHistory