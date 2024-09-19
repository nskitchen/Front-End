import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { userAPI } from "../../utils/Axios";
import { Link } from "react-router-dom";

const WaiterList = () => {
  // yaha karn ahia call api

  const [waiters, setwaiters] = useState([]);

  const callallWaiter = async () => {
    try {
      const { data } = await userAPI.get("/all");
      const waiters = data.data.users.filter((i) => i.role === "waiter");
<<<<<<< HEAD
      //    // console.log(waiters);
=======
      // console.log(waiters);
>>>>>>> 1523915678d5c5b156baa10272100ca343877094
      setwaiters(waiters);
    } catch (error) {
      console.log(error);
    }
  };
  // yaha karn ahia call api

  const [selected, setselected] = useState(0);
  useEffect(() => {
    callallWaiter();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (id) {
        const { data } = await userAPI.get(`/update-role/${id}`);

        if (data) {
          navigate("/admin/staff");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="flex flex-col gap-2 mt-4 w-full ">
      {waiters &&
        waiters?.map((i, index) => (
          <div
            onClick={() => setselected(index)}
            className={`w-full  flex px-4 py-2 transition-all duration-150 ease-linear cursor-pointer mont ${
              selected === index ? "border-2  border-[#9747FF]" : ""
<<<<<<< HEAD
            }  rounded-md items-center justify-between relative`}
=======
            }  rounded-md items-center justify-between relative max-md:px-2`}
>>>>>>> 1523915678d5c5b156baa10272100ca343877094
          >
            <div className="flex items-center justify-center gap-4">
              <i
                className={`ri-circle-fill text-xs ${
                  i?.act ? "text-green-500" : "text-gray-400"
                } `}
              ></i>
<<<<<<< HEAD
              <div className="img h-[3vw] w-[3vw] rounded-full overflow-hidden relative">
=======
              <div className="img h-[3rem] w-[3rem] rounded-full overflow-hidden relative">
>>>>>>> 1523915678d5c5b156baa10272100ca343877094
                <img
                  src={i?.avatar}
                  className="h-full w-full object-cover"
                  alt="profile image"
                />
              </div>
<<<<<<< HEAD
              <h1 className="text-base font-bold">
=======
              <h1 className="text-base font-bold max-md:text-sm">
>>>>>>> 1523915678d5c5b156baa10272100ca343877094
                {i?.name.firstName} {i?.name.lastName} <br />
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
        ))}
    </div>
  );
};

export default WaiterList;
