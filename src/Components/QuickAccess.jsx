import React from "react";
import { Link } from "react-router-dom";

const QuickAccess = () => {
  return (
    <div className="rounded p-2 w-full h-full">
      <div>
        <h3 className="text-lg font-bold mb-2 bg-yellow-100 py-2 px-3 rounded-lg">
          Quick Access
        </h3>
        <ul className="flex flex-col justify-start items-start w-full" >
        <li className="hover:bg-blue-200 hover:text-red-700 rounded-lg py-1 px-3 w-full"><Link to="/test13">Reimbursment Form</Link></li>
        <li className="hover:bg-blue-200 hover:text-red-700 rounded-lg py-1 px-3 w-full"><Link to="/test13">HR Doc</Link></li>
        <li className="hover:bg-blue-200 hover:text-red-700 rounded-lg py-1 px-3 w-full"><Link to="/test13">IT Doc</Link></li>
        <li className="hover:bg-blue-200 hover:text-red-700 rounded-lg py-1 px-3 w-full"><Link to="/test13">IT Statement</Link></li>
        <li className="hover:bg-blue-200 hover:text-red-700 rounded-lg py-1 px-3 w-full"><Link to="/test13">Salary Slip</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default QuickAccess;
