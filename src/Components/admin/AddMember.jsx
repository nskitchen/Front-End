import { Input, Select } from "antd";
import React from "react";

const AddMember = () => {
  return (
    <div className="w-full h-full p-6 bg-white mont rounded-md">
      <h1 className="text-xl">
        Add new staff members
        <br />
        <span className="text-sm font-light text-gray-400">
          Get your Restaurant up and running faster by adding more members
        </span>
        <div className="flex">
          <img src="/cardDetail.png" alt="Card Detail" />
          <div className="flex flex-col gap-4 w-full p-10 h-full items-center justify-center">
            <Input placeholder="Enter Full Name" />
            <Input placeholder="Upload Profile Image" />
            <div className="flex w-full items-center justify-center gap-8">
              <Input placeholder="Enter Date of Birth" />
              <Select
                //   defaultValue="Waiter"
                style={{ width: "100%" }}
                placeholder="Select Gender"
                //   onChange={handleChange}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </div>
        <Input placeholder="Enter Contact Number" type="tel" />
        <Input placeholder="Enter Permanent Address" type="text" />
        <Input placeholder="Upload Aadhar Card" type="text" />
        <Select
      defaultValue="Waiter"
      style={{ width: "100%" }}
    //   onChange={handleChange}
      options={[
        { value: 'waiter', label: 'Waiter' },
        { value: 'Chef', label: 'Chef' }
      ]} />
      <button className="bg-black text-white boldf w-[90%] py-2 mt-10 text-base">
        Submit
      </button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default AddMember;
