import { Input, Select } from "antd";
import { useEffect, useState } from "react";
import { createUserAPI } from "../../utils/Axios";
import { useNavigate } from "react-router-dom";
const AddMember = ({ add, setadd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    contact: "",
    address: "",
    aadhar: "",
    role: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [profilePic, setProfilePic] = useState("");
  const [uploading, setUploading] = useState(false);

  const inputHandler = (e, type = null) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [type]: e });
    }
  };

  const validate = (values) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    } else if (!values.name.split(" ")[1]) {
      errors.name = "Surname is required";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    if (!values.dob) {
      errors.dob = "DOB is required";
    }
    if (!values.contact) {
      errors.contact = "Contact is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.aadhar) {
      errors.aadhar = "Aadhar is required";
    } else if (values.aadhar.length != 12) {
      errors.aadhar = "Aadhar number is invalid";
    }
    if (!values.role) {
      errors.role = "Role is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password is too short";
    }
    return errors;
  };

  const uploadData = async () => {
    console.log("uploading");
    const form = new FormData();
    form.append("firstName", formData.name.split(" ")[0]);
    form.append("lastName", formData.name.split(" ")[1]);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("gender", formData.gender.toLowerCase());
    form.append("dob", formData.dob);
    form.append("phone", formData.contact);
    form.append("address", formData.address);
    form.append("aadharno", formData.aadhar);
    form.append("role", formData.role.toLowerCase());
    form.append("profilePic", profilePic);

    try {
      const response = await createUserAPI.post("/create", form);
      // console.log("Image uploaded successfully:", response.data);
      setadd(!add);
    } catch (error) {
      if (error.response.data.message == "Email already Exists") {
        setFormErrors({ email: "Email already exists" });
      }
      console.error("Error uploading image:", error);
    }
  };
  const submitHandler = async () => {
    let errors = validate(formData);
    if (!profilePic) {
      errors = { ...errors, profilePic: "Profile pic is needed" };
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      uploadData();
      console.log("SUccess");
    }
  };
  return (
    <div className="w-full h-full p-6 bg-white mont rounded-md">
      <h1 className="text-xl">
        Add new staff members
        <br />
        <span className="text-sm font-light text-gray-400">
          Get your Restaurant up and running faster by adding more members
        </span>
        <div className="flex w-full items-center">
          <div className="w-1/2 self-start">
            <img src="/cardDetail.png" alt="Card Detail" />
          </div>
          <div className="flex flex-col gap-2 w-1/2 p-10 h-full items-center justify-center">
            <div className="w-full flex flex-col gap-0.5">
              <Input
                className="mb-0"
                name="name"
                onInput={(e) => inputHandler(e)}
                placeholder="Enter Full Name"
              />
              <small className="text-xs text-red-600">{formErrors.name}</small>
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <label
                className="ant-input css-dev-only-do-not-override-11lehqq ant-input-outlined"
                htmlFor="profileDP"
              >
                <p className="opacity-40 font-light">
                  {profilePic.name
                    ? profilePic.name.slice(0, 30) + "..."
                    : "Upload profile pic"}
                </p>
                <Input
                  onInput={(e) => setProfilePic(e.target.files[0])}
                  type="file"
                  name="profilePic"
                  className="hidden"
                  id="profileDP"
                />
              </label>
              <small className="text-xs text-red-600">
                {formErrors.profilePic}
              </small>
            </div>
            <div className="flex w-full items-center justify-center gap-8">
              <div className="w-full flex flex-col gap-0.5">
                <Input
                  name="dob"
                  onInput={(e) => inputHandler(e)}
                  placeholder="Enter Date of Birth"
                />
                <small className="text-xs text-red-600">{formErrors.dob}</small>
              </div>
              <div className="w-full flex flex-col gap-0.5">
                <Select
                  name="gender"
                  onChange={(e) => inputHandler(e, "gender")}
                  style={{ width: "100%" }}
                  placeholder="Select Gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
                <small className="text-xs text-red-600">
                  {formErrors.gender}
                </small>
              </div>
            </div>

            <div className="w-full flex flex-col gap-0.5">
              <Input
                onInput={(e) => inputHandler(e)}
                name="contact"
                placeholder="Enter Contact Number"
                type="tel"
              />
              <small className="text-xs text-red-600">
                {formErrors.contact}
              </small>
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <Input
                onInput={(e) => inputHandler(e)}
                name="address"
                placeholder="Enter Permanent Address"
                type="text"
              />
              <small className="text-xs text-red-600">
                {formErrors.address}
              </small>
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <Input
                onInput={(e) => inputHandler(e)}
                name="aadhar"
                placeholder="Enter Aadhar Number"
                type="text"
              />
              <small className="text-xs text-red-600">
                {formErrors.aadhar}
              </small>
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <Select
                name="role"
                onChange={(e) => inputHandler(e, "role")}
                placeholder="Select Role"
                style={{ width: "100%" }}
                options={[
                  { value: "admin", label: "Admin" },
                  { value: "waiter", label: "Waiter" },
                  { value: "chef", label: "Chef" },
                ]}
              />
              <small className="text-xs text-red-600">{formErrors.role}</small>
            </div>

            <div className="w-full flex flex-col gap-0.5">
              <Input
                name="email"
                onInput={(e) => inputHandler(e)}
                placeholder="Enter Email Address"
                type="text"
              />
              <small className="text-xs text-red-600">{formErrors.email}</small>
            </div>
            <div className="w-full flex flex-col gap-0.5">
              <Input
                name="password"
                onInput={(e) => inputHandler(e)}
                placeholder="Enter Password"
                type="text"
              />
              <small className="text-xs text-red-600">
                {formErrors.password}
              </small>
            </div>
            <button
              onClick={submitHandler}
              className="bg-black text-white boldf w-[90%] py-2 mt-10 text-base"
            >
              {uploading ? "Uploading..." : "Create User"}
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default AddMember;
