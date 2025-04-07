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

  // Get current date, month, and year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-based, so January is 0, February is 1, etc.
  const currentDay = currentDate.getDate();

  // Filter events for current and upcoming events
  const upcomingEvents = events.filter(event => {
    const [day, month] = event.date.split(" ");
    const eventMonth = new Date(`${month} 1, ${currentYear}`).getMonth(); // Get month index
    const eventDate = new Date(`${month} ${day}, ${currentYear}`);

    // If the event month is in the future or the event is today
    return eventDate >= currentDate;
  });

  return (
    <div className="p-6 w-full bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 rounded-lg shadow-2xl max-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 shadow-lg rounded-lg bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4 sm:mb-0">
          Current & Upcoming Events
        </h1>
        <div className="text-center mt-4 sm:mt-0">
          <button
            onClick={() => navigate(-1)}
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm sm:text-base font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Event List */}
      <div className="space-y-6 mt-6">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-4 bg-white rounded-lg border-l-4 border-teal-600 shadow-md hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              {/* Event Date */}
              <div className="flex flex-col items-center sm:items-start text-sm sm:text-base font-semibold text-gray-700">
                <span className="text-xl sm:text-2xl font-bold">{event.date.split(" ")[0]}</span>
                <span className="text-sm sm:text-base text-gray-500">{event.date.split(" ")[1]}</span>
              </div>

              {/* Event Details */}
              <div className="flex flex-col text-left">
                <div className="text-xs sm:text-sm text-gray-600">{event.time}</div>
                <div className="text-lg font-semibold text-gray-800 mt-1">
                  {event.name}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">No upcoming events.</p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
