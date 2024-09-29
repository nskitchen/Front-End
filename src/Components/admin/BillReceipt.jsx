import { Select } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { generateBill } from '../../store/actions/billActions'

const BillReceipt = ({setShowBillReceipt,order}) => {
  const dispatch = useDispatch()
  const [paymentMethod, setPaymentMethod] = useState('cash')

  const itemPrice = order.orders.reduce((orderSum, orderItem) => {
    return orderSum + orderItem.items.reduce((itemSum, item) => {
      return itemSum + Number(item.id.price); // Assuming `item.id.price` is the price you want
    }, 0);
  }, 0);

  const [totalPrice, setTotalPrice] = useState(itemPrice)
  const [cgst, setCgst] = useState(9)
  const [sgst, setSgst] = useState(9)
  const [serviceCharge,setServiceCharge] = useState(8)

  const handleGenerateBill = () => {
    dispatch(generateBill(totalPrice,cgst,sgst,serviceCharge,paymentMethod,order))
    setShowBillReceipt(false)
  }

  useEffect(()=>{
    setTotalPrice(Math.floor(itemPrice + totalPrice*cgst/100 + totalPrice*sgst/100 + totalPrice*serviceCharge/100))
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
                        <p className='h-12 w-12 text-white bg-black rounded flex items-center justify-center'>T10</p>
                        <div className='flex flex-col gap-1'>
                          <p className='font-semibold text-sm'>Anurag Sarkar</p>
                          <p className='text-gray-500 text-xs'>Bill no #{order.billId + new Date().toLocaleDateString("en-GB").split("/").join("")}</p>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center gap-1'>
                        <p className='text-gray-500 text-xs'>Wed. July 12, 2024</p>
                        <p className='text-gray-500 text-xs'>12:30 PM</p>
                      </div>
                    </div>
                    <div className='bg-neutral-100 h-[87%] p-[5%]'>
                      <p className=''>Transaction Details</p>
                      <div className='mt-4 h-[60%] overflow-y-auto'>
                        {
                             order.orders.map((item)=>{
                              return item.items.map((stuff,idx)=>(
                              <div key={idx} className='flex justify-between gap-1 mb-3'>
                                <div>
                                  <p className='font-semibold text-sm opacity-60'>{stuff.id.name}</p>
                                  <p className='font-semibold text-xs'>₹{stuff.id.price}</p>
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
                          <p className='font-bold text-xs'>₹{(totalPrice*serviceCharge/100).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>CGST: <input className='ml-1 w-9 px-2 py-1' onChange={(e)=>setCgst(e.target.value)} value={cgst} type="text" />%</p>
                          <p className='font-bold text-xs'>₹{(totalPrice*cgst/100).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between gap-1 mb-2'>
                          <p className='font-bold text-xs opacity-70 flex items-center '>SGST: <input className='ml-1 w-9 px-2 py-1' onChange={(e)=>setSgst(e.target.value)} value={sgst} type="text" />%</p>
                          <p className='font-bold text-xs'>₹{(totalPrice*sgst/100).toFixed(2)}</p>
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
                  <Select value={paymentMethod} onChange={setPaymentMethod} className=" bg-gray-100">
                    <Select.Option value="cash"><i className="ri-money-rupee-circle-line"></i> Cash</Select.Option>
                    <Select.Option value="online"><i className="ri-qr-code-line"></i> Online</Select.Option>
                    <Select.Option value="card"><i className='ri-bank-card-line'></i> Card</Select.Option>
                    <Select.Option value="other"><i className="ri-coin-line"></i> Other</Select.Option>
                  </Select>
                </div>
                <button onClick={handleGenerateBill} className='bg-[#FF8144] text-white px-4 py-2 rounded-md'>Confirm Payment</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default BillReceipt