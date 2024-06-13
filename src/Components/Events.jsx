import React from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/announcements");
  };

  const events = [
    {
      date: "29 Feb",
      time: "4:00-4:30 PM",
      name: "Month End Birthday Party Celebration ..!!"
    },
    {
      date: "31 Mar",
      time: "12:00-2:00 PM",
      name: "Women's Day Celebration ..!!"
    },
    {
      date: "30 Apr",
      time: "11:00-12:30 PM",
      name: "Project Management Training "
    },
    {
      date: "31 May",
      time: "3:00-4:00 PM",
      name: "FPGA Training ..!!"
    },
    // Add more events here as needed
  ];


  return (
    <div className="rounded p-2 w-full h-full">
      <div>
        <h3 className="text-lg font-bold mb-2 bg-blue-100 py-2 px-3 rounded-lg">
          Upcoming Events
        </h3>
      </div>
      <div className="space-y-1 h-32 overflow-y-auto">
      {events.map((event, index) => (
        <div
          key={index}
          className="flex justify-start items-center gap-4 bg-fuchsia-50 rounded-lg border-fuchsia-50 border-2 shadow"
        >
          <div className="flex flex-col text-sm font-semibold text-fuchsia-800 ml-3">
            <span>{event.date.split(" ")[0]} </span>   <span>{event.date.split(" ")[1]}</span> 
          </div>
          <div className="flex flex-col justify-start text-left">
            <div className="text-sm font-semibold text-gray-500">{event.time}</div>
            <div className="text-base font-bold">{event.name}</div>
          </div>
        </div>
      ))}
    </div>


      <div className="text-center mt-2">
        <button
          className="text-blue-500 hover:underline"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Events;
