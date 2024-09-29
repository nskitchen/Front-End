
import { Image, Select, Typography } from "antd";
import { Input } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addMenuItems } from "../../utils/Axios";
import { getCategory, updateCategory } from "../../store/actions/menuActions";

// import { getUpdateMenuById } from "../../store/actions/menuActions";

const AddCategoryPage = ({ edit, setedit }) => {
   
    const dispatch = useDispatch()
    const [category, setCategory] = useState("")

    const handleSubmit = async() =>{
      await dispatch(updateCategory(category))
      setedit(false)
      dispatch(getCategory())
    }

    return (
        <div className="w-full h-screen absolute mont px-10 left-0 top-0 flex justify-center items-center overflow-hidden bg-[#0000008a]">
            <div className="w-1/3 min-h-2/3 rounded mont p-8 relative overflow-hidden bg-white">
                <div className="flex w-full text-xl items-center justify-between p ">
                    <h1 className="font-semibold">Add new category</h1>
                    <i className="ri-close-line cursor-pointer" onClick={() => setedit(false)}></i>
                </div>
                <div className="w-full flex mt-6">
                    <div className="w-[70%] flex flex-col gap-5 h-full justify-center">
                        <div className="flex flex-col gap-1">
                            <Typography.Text className="text-base">Category Name</Typography.Text>
                            <Input onInput={(e)=>setCategory(e.target.value)} value={category} name="name" />
                            <small className="text-red-600"></small>
                        </div>
                        <button onClick={handleSubmit} className="px-8 p-2 bg-[#FF8144] w-fit text-white text-lg rounded-md">Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddCategoryPage.propTypes = {
    edit: PropTypes.object.isRequired, // Expecting a boolean
    setedit: PropTypes.func.isRequired, // Expecting a function
};

export default AddCategoryPage;
