import { Image, Select, Typography } from "antd";
import { Input } from "antd";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUpdateMenuById } from "../../store/actions/menuActions";

const MenuEditPage = ({ edit, setedit }) => {
  // console.log(edit);
  const { category } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const [name, setName] = useState(edit?.name);
  const [description, setDescription] = useState(edit?.description);
  const [price, setPrice] = useState(edit?.price);
  const [categorys, setCategory] = useState(edit?.category);
  const [image, setImage] = useState(edit?.image);

  const file = useRef(null);
  const openfile = () => {
    file.current.click();
  };
  const uploadImage = (e) => {
    const myform = new FormData();
    myform.set("avatar", e.target.files[0]);
    // dispatch(uploadAvatar(myform));
  };

  const handleSubmit = (id) => {
    const data = { name, description, price, categorys, image };
    // console.log(data.name);
    dispatch(getUpdateMenuById(id, data));
  };
  return (
    <div className="w-full mont px-10 relative overflow-hidden">
      <div className="flex w-full text-xl items-center justify-between p-2 ">
        <h1 className="font-semibold">Edit Item Details</h1>
        <i
          className="ri-close-line cursor-pointer"
          onClick={() => setedit("")}
        ></i>
      </div>
      <div className="w-full flex mt-12">
        <div className="w-[70%]  flex flex-col gap-10 h-full justify-center">
          <div className="flex flex-col gap-3">
            <Typography.Text className="text-base">Item Name</Typography.Text>
            <Input
              defaultValue={edit?.name}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Typography.Text className="text-base">
              Item Description
            </Typography.Text>
            <Input
              defaultValue={edit?.dets}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Typography.Text className="text-base">
              Select Item Category
            </Typography.Text>
            <Select
              defaultValue="Pasta"
              onChange={(e) => setCategory(e)}
              value={categorys}
              style={{
                width: 120,
              }}
              options={category.map((index) => ({
                value: index,
                label: index,
              }))}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Typography.Text className="text-base">
              Enter Amount
            </Typography.Text>
            <Input
              defaultValue={"200"}
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
            />
          </div>
          <button
            onClick={() => handleSubmit(edit._id)}
            className="px-8 p-2 bg-[#FF8144] w-fit text-white text-lg rounded-md"
          >
            Save
          </button>
        </div>
        <div className="w-[30%] flex flex-col items-center">
          <Image
            src={`/${edit?.img}`}
            height={"10vw"}
            width={"10vw"}
            className="rounded-md object-cover"
          />
          <div
            onClick={openfile}
            className="div flex items-center justify-center p-2 rounded-md px-4 mt-10 gap-2 text-base border-[1px] border-black font-semibold"
          >
            Upload Item Image
            <input
              type="file"
              name="img"
              accept=".png, .jpg, .jpeg .avif"
              ref={file}
              onChange={(e) => uploadImage(e)}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuEditPage;
