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
      name: "Month End Birthday Party Celebration ..!!",
    },
    {
      date: "31 Mar",
      time: "12:00-2:00 PM",
      name: "Women's Day Celebration ..!!",
    },
    {
      date: "30 Apr",
      time: "11:00-12:30 PM",
      name: "Project Management Training ",
    },
    {
      date: "31 May",
      time: "3:00-4:00 PM",
      name: "FPGA Training ..!!",
    },
    {
      date: "30 Aug",
      time: "3:00-4:00 PM",
      name: "FPGA Training ..!!",
    },
    // Add more events here as needed
  ];

  return (
    <div className="p-4 w-full h-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-4 bg-blue-100 py-2 px-3 rounded-lg">
          Upcoming Events
        </h3>
      </div>
      <div className="space-y-2 max-h-64  overflow-auto  lg:overflow-y-hidden sm:hover:overflow-y-auto transition-all duration-300 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 bg-fuchsia-50 rounded-lg border-fuchsia-100 shadow-sm"
          >
            <div className="flex flex-col text-sm font-semibold text-fuchsia-800 ml-2">
              <span className="text-lg lg:text-xl">
                {event.date.split(" ")[0]}{" "}
              </span>{" "}
              <span className="text-sm lg:text-base">
                {event.date.split(" ")[1]}
              </span>
            </div>

            {/* Event Details */}
            <div className="flex flex-col text-left">
              <div className="text-xs md:text-sm lg:text-base font-semibold text-gray-500">
                {event.time}
              </div>
              <div className="text-sm md:text-base lg:text-lg  font-bold">
                {event.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-2">
        <button
          className="text-blue-500 hover:underline text-sm md:text-base"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Events;
