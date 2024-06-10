import React from "react";
import { Link } from "react-router-dom";

const WelcomeCard = () => {
  return (
    <div className="rounded p-4 w-full h-full bg-teal-100 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
      <div className="flex flex-col justify-start items-center gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold mb-2 rounded-lg">
          Welcome back, <span className="text-blue-500">Dhruv</span> 
        </h3>
        <p className="font-semibold ">You have <span className="underline text-blue-500">5 Meetings</span> scheduled today.</p>
        </div>
        <div className="flex flex-row justify-between items-center gap-2 text-base">
        <button className="bg-blue-500 text-white hover:bg-blue-700 rounded-lg shadow-md p-2">View Meetings</button>
        <button className="bg-white text-blue-500 border-blue-500 hover:bg-blue-700 hover:text-white rounded-lg shadow-md p-2">Create Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
