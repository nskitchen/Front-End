import { Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, loginUser } from "../store/actions/userActions";
import { useNavigate } from "react-router-dom";
import {Oval} from "react-loader-spinner"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loginError, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  // console.log(isAuthenticated);

  const loginHandler = async () => {
    setLoading(true);
    const res = await dispatch(loginUser(email, password))
    if(!res){
      setLoading(false)
    }
  };
  
  useEffect(() => {
    if (user?.role === "chef") {
      navigate("/chef/home");
    } else if (user?.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user?.role === "waiter") {
      navigate("/waiter/addtable");
    }
  }, [isAuthenticated]);
  return (
    <div className="w-full mont h-screen flex max-md:flex-col items-center justify-center max-md:p-5">
      <h1 className="md:hidden leading-tight text-3.2mid abril">
        North-South Kitchen
      </h1>
      <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 max-md:w-full max-md:p-6">
        <h1 className="text-4xl boldf text-left w-1/2 max-md:w-full">
          Login
          <br />
        </h1>

        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Email ID</Typography.Text>
          <Input
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="Enter your name or ID provided"
          />
        </div>
        <div className="flex flex-col gap-3 w-1/2 max-md:w-full">
          <Typography.Text className="text-base">Password</Typography.Text>
          <Input.Password
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            className="p-2 bg-gray-100"
            placeholder="input password"
          />
        </div>
        <small className="text-red-600">{loginError ? loginError : ""}</small>
        {/* <NavLink to={""} className="text-[#FF8144] w-1/2 max-md:w-full text-right">
          Forgot password
        </NavLink> */}
        <button
          onClick={loginHandler}
          className="flex items-center justify-center px-8 p-2 bg-[#FF8144]  text-white text-lg rounded-md w-1/2 max-md:w-full"
        >
          {loading ? <Oval strokeWidth={4} strokeWidthSecondary={4} visible={true} secondaryColor="#dadada" height="20" width="20" color="#ffffff" ariaLabel="oval-loading" /> : "Login"}

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

export default Login;
