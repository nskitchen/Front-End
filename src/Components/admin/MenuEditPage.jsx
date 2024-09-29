import { Image, Select, Typography } from "antd";
import { Input } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addMenuItems } from "../../utils/Axios";

// import { getUpdateMenuById } from "../../store/actions/menuActions";

const MenuEditPage = ({ edit, setedit }) => {
    const { menuCategory } = useSelector((state) => state.menu);
    console.log(menuCategory)
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [image, setImage] = useState(edit?.image);
  
    const [menuForm, setMenuForm] = useState({
        name: edit.name || "",
        description: edit.description || "",
        price: edit.price || "",
        category: edit.category || "",
        isVeg: true,
        isSpecial: false,
    });

    const inputHandler = (event, type = null) => {
        if (event.target) {
            const {name,value} = event.target
            setMenuForm({ ...menuForm, [name]: value });
        } else {
            setMenuForm({ ...menuForm, [type]: event });
        }
    };

    const validateFields = (values)=>{
      let errors = {}
      if(!values.name){
        errors.name = "Name is required"
      }
      if(!values.description){
        errors.description = "Description is required"
      }
      if(values.description && values.description < 50){
        errors.description = "Description should be greater than 50 words"
      }
      if(!values.category){
        errors.category = "Select a category"
      }
      if(!values.price){
        errors.price = "Price is required"
      }
      return errors
    }

    const submitHandler = ()=>{
      let errors = validateFields(menuForm);
      if (!image) {
        errors = { ...errors, image: "Image is needed" };
      }
      setFormErrors(errors);
      if (Object.keys(errors).length === 0) {
        uploadData();
      }
    }

    const uploadData = async()=>{
      try{
        if(isSubmitting) return
        setIsSubmitting(true)

        const form = new FormData()
        form.append("name", menuForm.name);
        form.append("description", menuForm.description);
        form.append("price", menuForm.price);
        form.append("category", menuForm.category);
        form.append("isVeg", menuForm.isVeg);
        form.append("isSpecial", menuForm.isSpecial);
        form.append("image", image);

        console.log(Boolean(edit))
        if(edit){
          await addMenuItems.put(`/update/${edit._id}`,form)
        }else{
          await addMenuItems.post("/create",form)
        }
        
        setedit(false)
        setIsSubmitting(false)
      }catch(err){
        console.error("Error adding Items:",err)
        setIsSubmitting(false)
      }
    }

    return (
        <div className="w-full h-screen absolute mont px-10 left-0 top-0 flex justify-center items-center overflow-hidden bg-[#0000008a]">
            <div className="w-2/3 min-h-2/3 rounded mont p-10 relative overflow-hidden bg-white">
                <div className="flex w-full text-xl items-center justify-between p-2 ">
                    <h1 className="font-semibold">Edit Item Details</h1>
                    <i className="ri-close-line cursor-pointer" onClick={() => setedit(false)}></i>
                </div>
                <div className="w-full flex mt-12">
                    <div className="w-[70%] flex flex-col gap-5 h-full justify-center">
                        <div className="flex flex-col gap-1">
                            <Typography.Text className="text-base">Item Name</Typography.Text>
                            <Input name="name"  onChange={(e) => inputHandler(e)} value={menuForm.name} />
                            <small className="text-red-600">{formErrors.name}</small>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Typography.Text className="text-base">Item Description</Typography.Text>
                            <Input name="description"  onChange={(e) => inputHandler(e)} value={menuForm.description} />
                            <small className="text-red-600">{formErrors.description}</small>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Typography.Text className="text-base">Select Item Category</Typography.Text>
                            <Select

                                onChange={(e) => inputHandler(e,"category")}
                                style={{
                                    width: 120,
                                }}
                                value={menuForm.category}
                                options={menuCategory?.map((index) => ({
                                    value: index.name,
                                    label: index.name,
                                }))}
                            />
                            <small className="text-red-600">{formErrors.category}</small>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Typography.Text className="text-base">Enter Amount</Typography.Text>
                            <Input name="price" onChange={(e) => inputHandler(e)} value={menuForm.price} type="number" />
                            <small className="text-red-600">{formErrors.price}</small>
                        </div>
                        <button className="px-8 p-2 bg-[#FF8144] w-fit text-white text-lg rounded-md" onClick={submitHandler}>{edit ? "Update" : "Create"}</button>
                    </div>
                    <div className="w-[30%] flex flex-col items-center">
                        {edit?.img ? <Image src={`${edit ? edit.img : ""}`} height={"10vw"} width={"10vw"} className="rounded-md object-cover" /> : <div className="h-[10vw] w-[10vw] flex justify-center items-center border-2 border-slate rounded">Upload</div>}
                        <label htmlFor="img" className="div flex items-center justify-center p-2 rounded-md px-4 mt-10 gap-2 text-base border-[1px] border-black font-semibold">
                            Upload Item Image
                            <input onChange={(e)=>setImage(e.target.files[0])} id="img" type="file" name="img" accept=".png, .jpg, .jpeg .avif" className="hidden" />
                        </label>
                        <small className="text-red-600">{formErrors.image}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

MenuEditPage.propTypes = {
    edit: PropTypes.object.isRequired, // Expecting a boolean
    setedit: PropTypes.func.isRequired, // Expecting a function
};

export default MenuEditPage;
