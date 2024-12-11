import React from "react";
import { Link } from "react-router-dom";

const QuickAccess = () => {
  return (
    <div className="p-4 w-full h-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-4 bg-yellow-100 py-2 px-3 rounded-lg">
          Quick Access
        </h3>
        {/* Quick Access List */}
        <ul className="flex flex-col justify-start items-start w-full space-y-2 max-h-64  overflow-y-hidden hover:overflow-y-auto transition-all duration-300 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <li className="w-full">
            <Link
              to="/test13"
              className="block py-2 px-4 w-full text-left rounded-lg hover:bg-blue-200 hover:text-red-700 transition-colors"
            >
              Reimbursment Form
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/test13"
              className="block py-2 px-4 w-full text-left rounded-lg hover:bg-blue-200 hover:text-red-700 transition-colors"
            >
              HR Doc
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/test13"
              className="block py-2 px-4 w-full text-left rounded-lg hover:bg-blue-200 hover:text-red-700 transition-colors"
            >
              IT Doc
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/test13"
              className="block py-2 px-4 w-full text-left rounded-lg hover:bg-blue-200 hover:text-red-700 transition-colors"
            >
              IT Statement
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/test13"
              className="block py-2 px-4 w-full text-left rounded-lg hover:bg-blue-200 hover:text-red-700 transition-colors"
            >
              Salary Slip
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickAccess;
