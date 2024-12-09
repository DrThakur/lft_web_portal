import React from "react";
import { useNavigate } from "react-router-dom";

const HolidayCalendar = ({ holidays }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/holiday-calender");
  };

  return (
    <div className="p-4 w-full h-full bg-white rounded-lg shadow-lg">
      <div className="mb-2">
        <h3 className="text-lg md:text-xl font-bold mb-2 bg-green-200  py-2 px-3 rounded-lg">
          Upcoming Holidays
        </h3>
        {/* Scrollable list of holidays */}
        <div
          className="overflow-y-auto max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-56 xl:max-h-64"
        >
        
          <ul className="list-none">
            {holidays.map((holiday, index) => {
              const holidayDate = new Date();
              holidayDate.setDate(holiday.day);
              holidayDate.setMonth(holiday.month - 1);
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
                <li key={index} className="text-xs sm:text-sm md:text-base lg:text-base">
                  <div className="flex justify-between items-center p-1">
                    <div className="flex flex-col justify-start">
                      <span className="font-semibold text-sm sm:text-base lg:text-base">
                        {formattedDate}
                      </span>
                      <span className="text-xs sm:text-sm">{dayOfWeek}</span>
                    </div>
                    <span>{holiday.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {holidays.length > 5 && (
          <div className="text-center mt-2 sm:mt-4">
            <button
              className="text-blue-500 hover:underline text-xs sm:text-sm lg:text-base"
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
