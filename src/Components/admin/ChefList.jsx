import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../utils/Axios";
import { Link, useNavigate } from "react-router-dom";

const ChefList = () => {
  const [chefs, setchefs] = useState([]);
  // console.log("hello chef",chefs);
  const navigate = useNavigate()

  const [selected, setselected] = useState(0);
  const callallChef = async () => {
    try {
      const { data } = await userAPI.get("/all");
    
      const chefsonly = data.data.users.filter(
        (i) => i.role === "chef" || i.role === "Chef"
      );
      setchefs(chefsonly);
      console.log("hello chef", chefsonly);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      if (id) {
        const { data } = await userAPI.get(`/update-role/${id}`);
    
        if(data){
          callallChef()
          navigate("/admin/staff")
        }
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callallChef();
  }, [selected]);

  return (
    <div className="flex flex-col gap-2 mt-4 w-full ">
      {chefs?.map((i, index) => (
        <div>
        <div
          key={i._id}
          onClick={() => setselected(index)}
          className={`w-full  flex px-4 py-2 transition-all duration-150 ease-linear cursor-pointer mont ${
            selected === index ? "border-2  border-[#9747FF]" : ""
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
            <button onClick={() => handleDelete(i._id)}>Delete</button>
            <Link className="text-[#6E39CB]" to={`/admin/edit-chef/${i._id}`}>
              Edit
            </Link>
          </div>
          <Divider className="absolute bottom-0" />
        </div>
        <div className="flex items-center justify-center gap-14 max-md:text-xs max-md:gap-4">
          <button>Delete</button>
          <button className="text-[#6E39CB]">Edit</button>
        </div>
        <Divider className="absolute bottom-0"/>
      </div>
      ))}
    </div>
  );
};

export default ChefList;
