// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const HolidayCalendar = ({ holidays }) => {
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate("/holiday-calender");
//   };

//     // Handle Screen Size Change
//       const [screenSize, setScreenSize] = useState(window.innerWidth);
//     useEffect(() => {
//       const handleResize = () => setScreenSize(window.innerWidth);
  
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
  
//     const isWithinRange =(screenSize <=371) || (screenSize >= 766 && screenSize <= 854) || (screenSize >= 1536 && screenSize <= 1897);

//   return (
//     <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
//       <div className="mb-2">
//         <h1 className={`${
//          screenSize <= 371 ? "py-0  min-h-16" : isWithinRange ? "py-1 min-h-20" : "py-2 min-h-10"
//   } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-green-200 px-3 rounded-lg`}>
//           Upcoming Holidays
//         </h1>
//         {/* Scrollable list of holidays */}
//         <div
//           className={`${
//             isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
//           } overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
//         >
//           <ul className="list-none">
//             {holidays.map((holiday, index) => {
//               const holidayDate = new Date();
//               holidayDate.setDate(holiday.day);
//               holidayDate.setMonth(holiday.month - 1);
//               const dayOfWeek = [
//                 "Sunday",
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//               ][holidayDate.getDay()];
//               const formattedDate =
//                 holidayDate.getDate() +
//                 " " +
//                 [
//                   "Jan",
//                   "Feb",
//                   "Mar",
//                   "Apr",
//                   "May",
//                   "Jun",
//                   "Jul",
//                   "Aug",
//                   "Sep",
//                   "Oct",
//                   "Nov",
//                   "Dec",
//                 ][holidayDate.getMonth()];
//               return (
//                 <li
//                   key={index}
//                   className="text-xs sm:text-sm md:text-base lg:text-base"
//                 >
//                   <div className="flex justify-between items-center p-2">
//                     <div className="flex flex-col justify-start">
//                       <span className="font-semibold text-sm sm:text-base lg:text-base">
//                         {formattedDate}
//                       </span>
//                       <span className="text-xs sm:text-sm">{dayOfWeek}</span>
//                     </div>
//                     <span className="text-xs sm:text-sm md:text-base">
//                       {holiday.name}
//                     </span>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         {holidays.length > 5 && (
//           <div className={`${isWithinRange ? "mt-1" : "mt-4"} text-center`}>
//             <button
//               className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
//               onClick={handleViewAll}
//             >
//               View All
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HolidayCalendar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HolidayCalendar = ({ holidays }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/holiday-calender");
  };

  // Handle Screen Size Change
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isWithinRange =
    screenSize <= 371 ||
    (screenSize >= 766 && screenSize <= 854) ||
    (screenSize >= 1536 && screenSize <= 1897);

  // Get current date, month, and year for filtering
  const currentYear = new Date().getFullYear();
  const currentDate = new Date(); // Current date
  const currentMonth = currentDate.getMonth(); // 0-indexed month
  const currentDay = currentDate.getDate();

  // Filter holidays: show only current and upcoming holidays
  const upcomingHolidays = holidays.filter((holiday) => {
    const holidayDate = new Date(currentDate.getFullYear(), holiday.month - 1, holiday.day); // Always use the full current date's year
    return holidayDate >= currentDate;
  });
  

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      <div className="mb-2">
        <h1
          className={`${
            screenSize <= 371
              ? "py-0  min-h-16"
              : isWithinRange
              ? "py-1 min-h-20"
              : "py-2 min-h-10"
          } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-green-200 px-3 rounded-lg`}
        >
          Upcoming Holidays
        </h1>
        {/* Scrollable list of holidays */}
        <div
          className={`${
            isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
          } overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
        >
          <ul className="list-none">
            {upcomingHolidays.length > 0 ? (
              upcomingHolidays.map((holiday, index) => {
                const holidayDate = new Date(currentYear, holiday.month - 1, holiday.day);
                const dayOfWeek = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ][holidayDate.getDay()];
                const formattedDate =
                  holidayDate.getDate() +
                  " " +
                  [
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
                  ][holidayDate.getMonth()];
                return (
                  <li
                    key={index}
                    className="text-xs sm:text-sm md:text-base lg:text-base"
                  >
                    <div className="flex justify-between items-center p-2">
                      <div className="flex flex-col justify-start">
                        <span className="font-semibold text-sm sm:text-base lg:text-base">
                          {formattedDate}
                        </span>
                        <span className="text-xs sm:text-sm">{dayOfWeek}</span>
                      </div>
                      <span className="text-xs sm:text-sm md:text-base">
                        {holiday.name}
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No upcoming holidays</p>
            )}
          </ul>
        </div>
        {upcomingHolidays.length > 5 && (
          <div className={`${isWithinRange ? "mt-1" : "mt-4"} text-center`}>
            <button
              className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
              onClick={handleViewAll}
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HolidayCalendar;
