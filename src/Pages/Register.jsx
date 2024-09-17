import { Input, Typography, Select, DatePicker } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/userActions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState(null); // Date of Birth
  const [aadhar, setAadhar] = useState(""); // Aadhar number
  const [role, setRole] = useState("waiter"); // Default role is 'waiter'

  const dispatch = useDispatch();
  const { loginError, isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  const loginHandler = async () => {
    // Modify the action to also include phone, gender, dob, and aadhar if needed
    const user = {
      email,
      password,
      name: {
        firstName,
        lastName,
      },
      phone,
      gender,
      dob,
      aadhar,
      role,
    };
    dispatch(registerUser(user));
    // dispatch(getUserInfo())
  };

  return (
    <div className="w-full mont h-auto flex max-md:flex-col items-center justify-center max-md:p-5">
      <h1 className="md:hidden leading-tight text-3.2mid abril">
        North-South Kitchen
      </h1>
      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 max-md:w-full max-md:p-6">
        <h1 className="text-4xl boldf text-left w-1/2 max-md:w-full">
          Login
          <br />
          <span className="text-sm font-light">
            How do I get started? Lorem ipsum dolor sit amet.
          </span>
        </h1>

        {/* Email */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Email</Typography.Text>
          <Input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your email"
          />
        </div>

        {/* firstName */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">firstName</Typography.Text>
          <Input
            value={firstName}
            onInput={(e) => setfirstName(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your firstName"
          />
        </div>

        {/* lastName */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">lastName</Typography.Text>
          <Input
            value={lastName}
            onInput={(e) => setlastName(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your lastName"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Phone Number</Typography.Text>
          <Input
            value={phone}
            onInput={(e) => setPhone(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Gender</Typography.Text>
          <Select
            value={gender}
            onChange={(value) => setGender(value)}
            className=" bg-gray-100"
          >
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Date of Birth</Typography.Text>
          <DatePicker
            value={dob}
            onChange={(date) => setDob(date)}
            className="p-2 bg-gray-100 w-full"
            placeholder="Select your date of birth"
          />
        </div>

        {/* Aadhar Number */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Aadhar Number</Typography.Text>
          <Input
            value={aadhar}
            onInput={(e) => setAadhar(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your Aadhar number"
          />
        </div>

        {/* Role dropdown */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Role</Typography.Text>
          <Select
            value={role}
            onChange={(value) => setRole(value)}
            className=" bg-gray-100"
          >
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="manager">Manager</Select.Option>
            <Select.Option value="waiter">Waiter</Select.Option>
            <Select.Option value="deleted">Deleted</Select.Option>
          </Select>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Password</Typography.Text>
          <Input
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your password"
          />
        </div>
        <small className="text-red-600">{loginError ? loginError : ""}</small>

        <button
          onClick={loginHandler}
          className="px-8 p-2 bg-[#FF8144] text-white text-lg rounded-md w-1/2 max-md:w-full"
        >
          Login
        </button>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center p-4 max-md:hidden">
        <img
          src="/loginImage.png"
          className="h-full w-full object-contain rounded-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
