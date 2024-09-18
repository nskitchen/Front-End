import { Image, Select, Typography } from 'antd'
import { Input } from 'antd'
import React, { useRef } from 'react'

const MenuEditPage = ({edit,setedit}) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
      const file = useRef(null);
      const openfile = () => {
        file.current.click();
      };
      const uploadImage = (e) => {
        const myform = new FormData();
        myform.set("avatar", e.target.files[0]);
        // dispatch(uploadAvatar(myform));
      };
  return (
    <div className="w-full mont px-10 relative overflow-hidden">
        <div className="flex w-full text-xl items-center justify-between p-2 ">
            <h1 className='font-semibold'>Edit Item Details</h1>
            <i className="ri-close-line cursor-pointer" onClick={()=>setedit("")}></i>
        </div>
        <div className="w-full flex mt-12 max-md:flex-col-reverse max-md:gap-4">
            <div className="w-[70%]  flex flex-col gap-10 h-full justify-center max-md:w-full max-md:gap-4">
            <div className='flex flex-col gap-3'>
      <Typography.Text  className='text-base'>Item Name</Typography.Text>
      <Input
        defaultValue={edit?.name}
      />
    </div>
    <div className='flex flex-col gap-3'>
      <Typography.Text className='text-base'>Item Description</Typography.Text>
      <Input
        defaultValue={edit?.dets}
      />
    </div>
    <div className='flex flex-col gap-3'>
      <Typography.Text className='text-base'>Select Item Category</Typography.Text>
      <Select
      defaultValue="Pasta"
      style={{
        width: 120,
      }}
      options={[
        {
          value: 'pasta',
          label: 'Pasta',
        },
        {
            value: 'burger',
            label: 'Burger',
          },
          {
            value: 'sandwich',
            label: 'Sandwich',
          },
          {
            value: 'pizza',
            label: 'Pizza',
          },
      ]}
    />
    </div>
    <div className='flex flex-col gap-3'>
      <Typography.Text className='text-base'>Enter Amount</Typography.Text>
      <Input
        defaultValue={"200"}
      />
    </div>
    <button className='px-8 p-2 bg-[#FF8144] w-fit text-white text-lg rounded-md'>
        Save
    </button>
            </div>
            <div className='w-[30%] flex flex-col items-center max-md:w-full'>
                <Image 
                src={`/${edit?.img}`}
                height={"10rem"}
                width={"10rem"}
                className='rounded-md object-cover'
                />
                  <div
          onClick={openfile}
          className="div flex items-center justify-center p-2 rounded-md px-4 mt-10 gap-2 text-base border-[1px] border-black font-semibold"
        >
          Upload Item Image
          <input
            type="file"
            name="img"
            accept=".png, .jpg, .jpeg .avif"
            ref={file}
            onChange={(e) => uploadImage(e)}
            className="hidden"
          />
        </div>
            </div>
        </div>
    </div>
  )
}

export default MenuEditPage