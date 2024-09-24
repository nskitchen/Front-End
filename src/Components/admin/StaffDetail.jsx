import { Divider, Image, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userAPI } from "../../utils/Axios";

const StaffDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [chef, setchef] = useState({});
  const [role, setrole] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address, setaddress] = useState("");
  const [street, setstreet] = useState("");
  const [zip, setzip] = useState("");
  const [aadharno, setaadharno] = useState("");

  const callChefById = async () => {
    try {
      const { data } = await userAPI.get(`/id/${id}`);
      setchef(data.data.user);
      setfirstName(data.data.user.name?.firstName);
      setlastName(data.data.user.name?.lastName);
      setstreet(data.data.user.address?.street);
      setzip(data.data.user.address?.zip);
      setaadharno(data.data.user.aadharno);
      setrole(data.data.user.role);
    } catch (error) {
      console.log(error);
    }
  };

  const submitChanges = async () => {
    try {
      const userDetails = {
        name: {
          firstName,
          lastName,
        },
        address: {
          street: address,
          zip,
        },
        role,
        aadharno,
      };
      if (id) {
        const { data } = await userAPI.patch(`/update/${id}`, userDetails);
        if (data) {
          navigate("/admin/staff");
          setfirstName("");
          setlastName("");
          setstreet("");
          setzip("");
          setaadharno("");
          setrole("");
          setchef({});
        }
      }

      navigate("/admin/staff");
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      const { data } = await userAPI.get(`/update-role/${id}`);
      if (data) {
        navigate("/admin/staff");
        setfirstName("");
        setlastName("");
        setstreet("");
        setzip("");
        setaadharno("");
        setrole("");
        setchef({});
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (id) {
      callChefById();
    }

    if (!id) {
      setchef({});
    }
  }, [id]);

  return (
    <div className="h-full mont w-1/2 bg-white rounded-md flex items-center flex-col p-4 gap-3 max-md:w-full">
      <div className="flex relative items-center justify-start w-full gap-5">
        <div className="circle relative h-[4rem] w-[4rem] rounded-full ">
          <Image
            className="h-full w-full object-cover rounded-full"
            src={
              chef.avatar
                ? chef.avatar
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCuoop0MD3fNefnFp8SWPdfnsXdOzFBeAQg&s"
            }
          />
          <i className="ri-circle-fill absolute bottom-0 right-1.5 text-green-500"></i>
        </div>
        <h1 className="text-2xl boldf">
          {chef.name?.firstName ? chef.name?.firstName : "User"}
          {chef.name?.lastName ? chef.name?.lastName : "Name"} <br />
          {/* <span className="text-base font-bold text-gray-500">
            +91 8839893207
          </span> */}
        </h1>
        {/* <h1 className="absolute right-0 bottom-2 text-sm font-medium gap-2 items-center justify-center flex">
          <i className="ri-circle-fill text-green-500"></i>
          Active Today
        </h1> */}
        <Divider className="absolute -bottom-10 bg-gray-200 w-full" />
      </div>
      <div className="flex flex-col w-full mt-4">
        <span className="text-gray-400 font-medium text-sm px-3">
          First Name
        </span>
        <Input
          placeholder="Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full ">
        <span className="text-gray-400 font-medium text-sm px-3">
          Last Name
        </span>
        <Input
          placeholder="Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </div>
      {/* <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Phone Number</span>
        <Input placeholder="Phone Number" value={"+91 8839893207"} type="tel" />
      </div> */}
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">
          Permanent Address
        </span>
        <Input
          placeholder="Permanent Address "
          value={street}
          type="text"
          onChange={(e) => setstreet(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Pin Code</span>
        <Input
          placeholder="Zip Code"
          value={zip}
          type="number"
          onChange={(e) => setzip(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">
          Aadhar Card Details
        </span>
        <Input
          placeholder="Phone Number"
          value={aadharno}
          type="text"
          onChange={(e) => setaadharno(e.target.value)}
        />
        <div className="flex items-start justify-between">
          <img src="/aadhar.png" alt="aadhar image" />
          <button className="text-gray-400 font-medium text-base">
            Delete
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <span className="text-gray-400 font-medium text-sm px-3">Job Role</span>
        <Select
          value={role}
          style={{ width: "100%" }}
          onChange={(e) => setrole(e)}
          options={[
            { value: "waiter", label: "Waiter" },
            { value: "chef", label: "Chef" },
          ]}
        />
      </div>
      <div className="flex w-full items-end justify-between">
        <button onClick={() => handleDelete(id)} className="text-red-500">
          Delete Member
        </button>
        <button
          onClick={() => submitChanges()}
          className="bg-black text-white p-2 px-7"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default StaffDetail;
