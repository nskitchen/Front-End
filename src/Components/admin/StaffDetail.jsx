import { Divider, Image, Input,Select } from "antd";
import React from "react";

const StaffDetail = () => {
  return (
    <div className="h-full mont w-1/2 bg-white rounded-md flex items-center flex-col p-4 gap-3">
      <div className="flex relative items-center justify-start w-full gap-5">
        <div className="circle relative h-[4vw] w-[4vw] rounded-full">
          <Image
            className="h-full w-full object-cover rounded-full"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <i className="ri-circle-fill absolute bottom-0 right-1.5 text-green-500"></i>
        </div>
        <h1 className="text-2xl boldf">
          Garvit Jain <br />
          <span className="text-base font-bold text-gray-500">
            +91 8839893207
          </span>
        </h1>
        <h1 className="absolute right-0 bottom-2 text-sm font-medium gap-2 items-center justify-center flex">
          <i className="ri-circle-fill text-green-500"></i>
          Active Today
        </h1>
      <Divider className="absolute -bottom-10 bg-gray-200 w-full"/>
      </div>
      <div className="flex flex-col w-full mt-4">
        <span className="text-gray-400 font-medium text-sm px-3">Name</span>
        <Input placeholder="Name" value={"Garvit Jain"} />
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Phone Number</span>
        <Input placeholder="Phone Number" value={"+91 8839893207"} type="tel" />
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Permanent Address</span>
        <Input placeholder="Phone Number" value={"Hno. 224, Shakti Nagar Colony, Makronia, Pipariya, Madhya pradesh"} type="text" />
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Pin Code</span>
        <Input placeholder="Phone Number" value={"462023"} type="number" />
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Aadhar Card Details</span>
        <Input placeholder="Phone Number" value={"8757 9875 9865"} type="text" />
        <div className="flex items-start justify-between">
            <img src="/aadhar.png" alt="aadhar image" />
            <button className="text-gray-400 font-medium text-base">Delete</button>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Job Role</span>
        <Select
      defaultValue="Waiter"
      style={{ width: "100%" }}
    //   onChange={handleChange}
      options={[
        { value: 'waiter', label: 'Waiter' },
        { value: 'Chef', label: 'Chef' }
      ]}
    />
      </div>
      <div className="flex w-full items-end justify-between">
        <button className="text-red-500">Delete Member</button>
        <button className="bg-black text-white p-2 px-7">Save Changes</button>
      </div>
    </div>
  );
};

export default StaffDetail;
