// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Events = () => {
//   const navigate = useNavigate();
//   const [screenSize, setScreenSize] = useState(window.innerWidth);

//   // Events Data
//   const events = [
//     {
//       date: "29 Feb",
//       time: "4:00-4:30 PM",
//       name: "Month End Birthday Party Celebration ..!!",
//     },
//     {
//       date: "31 Mar",
//       time: "12:00-2:00 PM",
//       name: "Women's Day Celebration ..!!",
//     },
//     {
//       date: "30 Apr",
//       time: "11:00-12:30 PM",
//       name: "Project Management Training",
//     },
//     {
//       date: "31 May",
//       time: "3:00-4:00 PM",
//       name: "FPGA Training ..!!",
//     },
//     {
//       date: "30 Aug",
//       time: "3:00-4:00 PM",
//       name: "FPGA Training ..!!",
//     },
//   ];

//   // Handle Screen Size Change
//   useEffect(() => {
//     const handleResize = () => setScreenSize(window.innerWidth);

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isWithinRange = (screenSize <= 371) || (screenSize >= 766 && screenSize <= 854) || (screenSize >= 1536 && screenSize <= 1897);



//   // Navigate to Announcements
//   const handleViewAll = () => navigate("/all-events");

//   return (
//     <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
//       {/* Header */}
//       <h1
//         className={`${screenSize <= 371 ? "py-0  min-h-16" : isWithinRange ? "py-1 min-h-20" : "py-2 min-h-10"
//           } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-blue-100 px-3 rounded-lg`}
//       >
//         Upcoming Events
//       </h1>

//       {/* Event List */}
//       <div
//         className={`${isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
//           } space-y-4 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
//       >
//         {events.map((event, index) => (
//           <div
//             key={index}
//             className="flex  sm:flex-row items-center gap-4 p-2 bg-purple-50 rounded-lg border-purple-100 shadow-sm hover:bg-purple-100 transition duration-300 ease-in-out"
//           >
//             {/* Event Date */}
//             <div className="flex flex-col items-center sm:items-start text-sm sm:text-base font-semibold text-purple-800">
//               <span className="text-lg sm:text-xl">{event.date.split(" ")[0]}</span>
//               <span className="text-sm sm:text-base">{event.date.split(" ")[1]}</span>
//             </div>

//             {/* Event Details */}
//             <div className="flex flex-col text-left">
//               <div className="text-xs sm:text-sm text-gray-500">{event.time}</div>
//               <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
//                 {event.name}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className={`${isWithinRange ? "mt-1" : "mt-4"} text-center`}>
//         <button
//           onClick={handleViewAll}
//           className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
//         >
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Events;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

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

  // Handle Screen Size Change
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isWithinRange =
    screenSize <= 371 ||
    (screenSize >= 766 && screenSize <= 854) ||
    (screenSize >= 1536 && screenSize <= 1897);

  // Get current date and year for filtering events
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  const currentDay = currentDate.getDate();

  // Function to compare event date with current date
  const isUpcomingEvent = (eventDate) => {
    const [day, month] = eventDate.split(" ");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const eventMonth = monthNames.indexOf(month) + 1;
    const eventDay = parseInt(day);

    // Create event date for comparison using current year
    const eventDateObj = new Date(currentYear, eventMonth - 1, eventDay);

    // Compare with current date
    return eventDateObj >= currentDate;
  };

  // Filter events for current and upcoming events
  const upcomingEvents = events.filter((event) => isUpcomingEvent(event.date));

  // Navigate to view all events
  const handleViewAll = () => navigate("/all-events");

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      {/* Header */}
      <h1
        className={`${
          screenSize <= 371
            ? "py-0  min-h-16"
            : isWithinRange
            ? "py-1 min-h-20"
            : "py-2 min-h-10"
        } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-blue-100 px-3 rounded-lg`}
      >
        Upcoming Events
      </h1>

      {/* Event List */}
      <div
        className={`${
          isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
        } space-y-4 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
      >
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex sm:flex-row items-center gap-4 p-2 bg-purple-50 rounded-lg border-purple-100 shadow-sm hover:bg-purple-100 transition duration-300 ease-in-out"
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
          ))
        ) : (
          <p className="text-center text-gray-500">No upcoming events</p>
        )}
      </div>

      {/* View All Button */}
      <div className={`${isWithinRange ? "mt-1" : "mt-4"} text-center`}>
        <button
          onClick={handleViewAll}
          className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Events;
