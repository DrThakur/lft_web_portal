import React from "react";
import { useNavigate } from "react-router-dom";

const AllEvents = () => {
  const navigate = useNavigate();

  // Events Data
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
      name: "Project Management Training",
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
  ];

  // Filter events for current and upcoming
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => {
    const [day, month] = event.date.split(" ");
    const eventDate = new Date(`${month} ${day}, 2025`);
    return eventDate >= currentDate;
  });

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-screen">
      <h1 className="text-2xl font-bold mb-4 bg-blue-100 px-3 py-2 rounded-lg">
        Current & Upcoming Events
      </h1>
      
      {/* Event List */}
      <div className="space-y-4 overflow-y-auto">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 bg-purple-50 rounded-lg border-purple-100 shadow-sm hover:bg-purple-100 transition duration-300 ease-in-out"
          >
            {/* Event Date */}
            <div className="flex flex-col items-center sm:items-start text-sm sm:text-base font-semibold text-purple-800">
              <span className="text-lg sm:text-xl">{event.date.split(" ")[0]}</span>
              <span className="text-sm sm:text-base">{event.date.split(" ")[1]}</span>
            </div>

            {/* Event Details */}
            <div className="flex flex-col text-left">
              <div className="text-xs sm:text-sm text-gray-500">{event.time}</div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                {event.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllEvents;
