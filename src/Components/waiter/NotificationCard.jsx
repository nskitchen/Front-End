import { Divider } from "antd";
import React from "react";
import NotificationCheckBox from "./NotificationCheckBox";

const NotificationCard = ({order,item,stuff}) => {
  return (
    <div className='mb-3 border p-2 border-black pb-3 rounded-md'>
      <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded bg-[#9747FF] text-white flex items-center justify-center'>T{order.table}</div>
              <div className='h-9 w-[1px] bg-black'></div>
              <div className='flex flex-col'>
                  <p className='font-bold'>Order #{item.orderId}</p>
                  <p className='opacity-60 text-sm'>08:35 PM</p>
              </div>
          </div>
          <div className='flex items-start gap-2'>
            <NotificationCheckBox id={order._id} orderId={item.orderId} itemId={stuff._id}/>
          </div>
      </div>
      <div className='mt-3 mb-4'>
          <p className='text-lg font-light w-[70%] leading-5'>{stuff.id.name}</p>
      </div>
      <div className='flex items-center justify-between'>
          <div className='text-sm bg-neutral-100 px-2 py-1 rounded-md'>{stuff.remark}</div>
          <div className='flex items-center gap-3'>
              {stuff.parcel ? 
              <>
              <div className='text-base font-bold  rounded-md'>x{stuff.count}</div>
              <div className='h-4 w-[1px] bg-black'></div>
              <div className='text-[#9747FF] rounded-md'>Parcel</div>
              </>
              : 
              <div className='text-base font-bold text-sm rounded-md'>Quantity : <span className="text-base">{stuff.count}</span></div>
              }
          </div>
      </div>
  </div>
  );
};

export default NotificationCard;
