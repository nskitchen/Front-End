import { Divider, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../utils/Axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

const ChefList = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const [chefs, setchefs] = useState([]);
  const navigate = useNavigate();

  const [selected, setselected] = useState(0);

  const callallChef = async () => {
    try {
      const { data } = await userAPI.get("/all");
      const chefsonly = data.data.users.filter(
        (i) => i.role === "chef" || i.role === "Chef"
      );
      setchefs(chefsonly);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const res = await dispatch(deleteUser(id))
    if(res){
      navigate("/admin/staff")
    }
  };

  useEffect(() => {
    callallChef();
    console.log("userFetched")
  }, [location]);

  return (
    <div className="flex flex-col gap-2 mt-4 w-full ">
      {chefs?.map((i, index) => (
        <div key={i._id}>
        <div
          onClick={() => setselected(index)}
          className={`w-full  flex px-4 py-2 transition-all duration-150 ease-linear cursor-pointer mont ${
            selected === index ? "border-2  border-[#9747FF]" : "border-2 border-[#9747ff00]"
          }  rounded-md items-center justify-between relative`}
        >
          <div className="flex items-center justify-center gap-4">
            <i
              className={`ri-circle-fill text-xs ${
                i?.act ? "text-green-500" : "text-gray-400"
              } `}
            ></i>
            <div className="img h-[3vw] w-[3vw] rounded-full overflow-hidden relative">
              <img
                src={i?.avatar}
                className="h-full w-full object-cover"
                alt="profile image"
              />
            </div>
            <h1 className="text-base font-bold">
              {i?.name.firstName} <br />
              <span className="text-sm font-medium">+91 {i?.phone}</span>
            </h1>
          </div>
          <div className="flex items-center justify-center gap-14">
            <Popconfirm
              title="Delete User"
              description="Are you sure to delete this user?"
              onConfirm={() => handleDelete(i._id)}
              okText="Yes"
              cancelText="No"
            >
              <button>Delete</button>
            </Popconfirm>
            <Link className="text-[#6E39CB]" to={`/admin/edit-chef/${i._id}`}>
              Edit
            </Link>
          </div>
          <Divider className="absolute bottom-0" />
        </div>
        
        <Divider className="absolute bottom-0"/>
      </div>
      ))}
      {chefs.length === 0 && <div className="flex items-center justify-center w-full h-full">
        <h1 className="text-lg text-neutral-400 mt-5 font-bold">No Chefs Found</h1>
      </div>}
    </div>
  );
};

export default ChefList;
