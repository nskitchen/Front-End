import { useEffect } from "react";
import AdminMenuBar from "./AdminMenuBar";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getMenu, getUpdateOutOfStock } from "../../store/actions/menuActions";
import { setFood } from "../../store/slices/menuSlice";
import { getDeleteMenuById } from "../../store/actions/menuActions";

export function IcBaselineDelete(props) {
  const { i } = props;
  const { food } = useSelector((state) => state.menu);
  const dispatch = useDispatch();


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4rem"
      height="1.4rem"
      className="cursor-pointer"
      viewBox="0 0 24 24"
      {...props}
      onClick={() => {
        dispatch(getDeleteMenuById(i._id, i.category));
        dispatch(getMenu());
        dispatch(setFood(food));
      }}
    >

      <path
        fill="black"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
      ></path>
    </svg>
  );
}

const AdminMenu = ({outOfStock ,setAddItem,setcategory, setedit }) => {
  
  const dispatch = useDispatch();
  const { food, menu } = useSelector((state) => state.menu);
  

  const handleOutOfStock = (id,status) => {
    dispatch(getUpdateOutOfStock(id, { isAvailable:  !status}));
    dispatch(getMenu(null,null,outOfStock));
  };
  
  console.log(outOfStock)
  useEffect(() => {
    dispatch(getMenu(null,null,outOfStock));
    dispatch(setFood(food));
    dispatch(getCategory())
  }, [dispatch]);

  return (
  <>
    <div className="w-full">
      <div className="flex ">
        <AdminMenuBar outOfStock={outOfStock} setcategory={setcategory}/>
      </div>
      <div className="flex items-center justify-between px-7 py-5 mt-5">
        <h1 className="font-semibold capitalize">{food}</h1>
        <div className="flex items-start gap-2">
          <button onClick={()=>setAddItem(true)} className="font-extralight flex items-center gap-1 text-xs p-2 bg-[#22222224]">
            <i className="ri-add-line"></i>
            Add New
          </button>             
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 p-4 relative overflow-y-auto">
        {menu &&
          menu.map((i, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 bg-white rounded-md p-2"
            >
              <div className="flex w-1/3 items-center gap-4 justify-left">
                <div className="w-24 h-20 rounded-md bg-red-500 relative overflow-hidden">
                  <img
                    src={`${i?.image}`}
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                <h1 className="text-base font-semibold">
                  {i?.name}
                  <br />
                  <p className="text-xs font-light">{i?.description}</p>
                </h1>
              </div>
              <h1 className="w-1/3 text-center text-xl font-semibold">₹{i?.price}</h1>
              <div className="flex w-1/3 items-center justify-end gap-3">
                <button onClick={() => handleOutOfStock(i._id,i?.isAvailable)} className={`border-[0.1rem] h-[42px] font-medium rounded-md px-5 py-1 text-base ${i?.isAvailable ? 'text-[#828282] border-[#aaaaaa] ' : 'text-red-500 border-red-400'}`}>
                  Out of Stock
                </button>
                <i
                  className="bg-neutral-200 w-[52px] h-[42px] flex justify-center rounded items-center text-2xl ri-pencil-fill cursor-pointer"
                  onClick={() => setedit(i)}
                ></i>
                <div className="bg-neutral-200 w-[52px] h-[42px] flex justify-center rounded items-center text-2xl">
                <IcBaselineDelete  i={i} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
};

export default AdminMenu;
