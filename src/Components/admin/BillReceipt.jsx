import { Select } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateBill } from '../../store/actions/billActions'
import { Oval } from 'react-loader-spinner'
import { useReactToPrint } from 'react-to-print';
import OrderReceipt from '../POS/OrderRecipt'


const BillReceipt = ({setShowBillReceipt,order}) => {
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState('cash')
  console.log(paymentMethod)
  const [loading, setLoading] = useState(false)
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  const itemPrice = order.orders.reduce((orderSum, orderItem) => {
    return orderSum + orderItem.items.reduce((itemSum, item) => {
      console.log(item)
      return itemSum + Number(item.half ? item.id.halfPrice : item.id.price * item.count); // Assuming `item.id.price` is the price you want
    }, 0);
  }, 0);

  const [totalPrice, setTotalPrice] = useState(itemPrice)
  const [cgst, setCgst] = useState(2.5)
  const [sgst, setSgst] = useState(2.5)
  const [serviceCharge,setServiceCharge] = useState(5)

  const handleGenerateBill = () => {
    setLoading(true)
    dispatch(generateBill({total:totalPrice,cgst:itemPrice*(cgst/100),sgst:itemPrice*(sgst/100),serviceCharge:itemPrice*(serviceCharge/100),paymentMethod,order}))
    setLoading(false)
    setShowBillReceipt(false)
  }

  useEffect(()=>{
    console.log(cgst,(totalPrice*(cgst/100)))
    setTotalPrice(Math.floor(itemPrice + (itemPrice*(cgst/100)) + (itemPrice*(sgst/100)) + (itemPrice*(serviceCharge/100))))
  },[cgst,sgst,serviceCharge])



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
                          <p className='text-gray-500 text-xs'>Bill no #{order.billId + new Date().toLocaleDateString("en-GB").split("/").join("")}</p>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center gap-1'>
                        <p className='text-gray-500 text-xs'>{new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</p>
                        <p className='text-gray-500 text-xs'>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                      </div>
                    </div>
                    <div ref={contentRef} className='bg-neutral-100 h-[87%] p-[5%]'>
                      <p className=''>Transaction Details</p>
                      <div className='mt-4 h-[60%] overflow-y-auto'>
                        {
                             order.orders.map((item)=>{
                              return item.items.map((stuff,idx)=>(
                              <div key={idx} className='flex justify-between gap-1 mb-3'>
                                <div>
                                  <p className='font-semibold text-sm opacity-60'>{stuff.id.name}{stuff.half ? " (H)" : ""}</p>
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
                          <p className='font-bold text-xs opacity-70 flex items-center '>Service Charge: <input className='ml-1 w-9 px-2 py-1' onChange={(e)=>setServiceCharge(e.target.value)} value={serviceCharge} type="text" />%</p>
                          <p className='font-bold text-xs'>₹{(itemPrice*(serviceCharge/100)).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>CGST: <input className='ml-1 w-9 px-2 py-1' onChange={(e)=>setCgst(e.target.value)} value={cgst} type="text" />%</p>
                          <p className='font-bold text-xs'>₹{(itemPrice*(cgst/100)).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>SGST: <input className='ml-1 w-9 px-2 py-1' onChange={(e)=>setSgst(e.target.value)} value={sgst} type="text" />%</p>
                          <p className='font-bold text-xs'>₹{(itemPrice*(sgst/100)).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-3'>
                          <p className='font-bold text-sm'>Total</p>
                          <p className='font-bold text-sm'>₹{totalPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className='w-[45%] flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                  <p className="text-base">Select Payment Method</p>
                  <Select value={paymentMethod} onChange={(e)=>setPaymentMethod(e)} className=" bg-gray-100">
                    <Select.Option value="cash"><i className="ri-money-rupee-circle-line"></i> Cash</Select.Option>
                    <Select.Option value="online"><i className="ri-qr-code-line"></i> Online</Select.Option>
                    <Select.Option value="card"><i className='ri-bank-card-line'></i> Card</Select.Option>
                    <Select.Option value="other"><i className="ri-coin-line"></i> Other</Select.Option>
                  </Select>
                </div>
                <div className='flex gap-5 justify-center'>
                  <button onClick={reactToPrintFn} className='bg-[#FF8144] flex items-center justify-center text-white px-4 py-2 rounded-md'>Print Bill</button>
                  <button onClick={handleGenerateBill} className='bg-[#FF8144] flex items-center justify-center text-white px-4 py-2 rounded-md'>{loading ? <Oval strokeWidth={4} strokeWidthSecondary={4} visible={true} secondaryColor="#dadada" height="20" width="20" color="#ffffff" ariaLabel="oval-loading" /> : "Confirm Payment"}</button>
                </div>
              </div>
            </div>
        </div>
        <OrderReceipt order={order} sgst={sgst} cgst={cgst} service={serviceCharge} mode={paymentMethod.toUpperCase()} ref={contentRef} />
    </div>
  )
}

export default BillReceipt