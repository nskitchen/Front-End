import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getCurrentUser } from "./store/actions/userActions";
import Routing from "./utils/Routing";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  
  return (
    <>
      
      <div className="w-full relative overflow-hidden">
        <Routing />
      </div>
    </>
  );
}

export default App;
