import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Test from "./Dashboard";
import { useStateContext } from "../Contexts/ContextProvider";
import Box from "./Box";

const Lay = () => {
  const { activeRightSidebar } = useStateContext();
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="bg-yellow-300 w-full h-14 fixed -mt-2">
        <Navbar />
      </div>
      <div className="container grid grid-cols-8 grid-rows-8 overflow-x-hidden">
        <div className="sidebar bg-red-300 h-screen col-span-2 row-span-8 fixed -mt-2">
          <Sidebar />
        </div>
        <div
          className={`main col-span-8 row-span-8 w-full h-full overflow-y-hidden overflow-x-hidden p-1 z-999999 ${
            activeRightSidebar ? `ml-56` : `ml-20`
          }`}
        >
          <Test />
        </div>
      </div>
     
    </div>
  );
};

export default Lay;
