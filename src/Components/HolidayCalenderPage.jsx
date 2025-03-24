import React from 'react';
import { useNavigate } from "react-router-dom";

const HolidayCalendarPage = ({ holidays }) => {
  const navigate = useNavigate();

  // Get the current date
  const currentDate = new Date();

  // Get current month and year
  // const currentYear = currentDate.getFullYear();
  const currentYear = 2024;
  const currentMonth = currentDate.getMonth() + 1; // 0-based index, so we add 1

  // Filter holidays to include only current and upcoming holidays from the current year and onward
  const upcomingHolidays = holidays.filter((holiday) => {
    const holidayDate = new Date(holiday.year, holiday.month - 1, holiday.day); // Convert to Date object
    return (
      holiday.year > currentYear || 
      (holiday.year === currentYear && holiday.month >= currentMonth) || 
      (holiday.year === currentYear && holiday.month === currentMonth && holiday.day >= currentDate.getDate())
    ); // Only include holidays that are today or in the future
  });

  // If no upcoming holidays, show a "No data available" message
  if (upcomingHolidays.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Holiday Calendar</h1>
        <p>No data available for current or upcoming holidays.</p>
      </div>
    );
  }

  // Group holidays by month and year
  const holidaysByMonth = {};
  upcomingHolidays.forEach((holiday) => {
    const monthKey = holiday.month + '-' + holiday.year;
    if (!holidaysByMonth[monthKey]) {
      holidaysByMonth[monthKey] = [];
    }
    holidaysByMonth[monthKey].push(holiday);
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Holiday Calendar</h1>

      {/* Display holidays in grouped format by month and year */}
      <div className="-ml-1 h-[calc(100vh-156px)] xs:h-[calc(100vh-146px)] overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 p-1">
          {Object.keys(holidaysByMonth).map((monthKey) => {
            const [month, year] = monthKey.split('-').map(Number);
            const monthName = new Date(year, month - 1).toLocaleString('en-us', { month: 'long' });

            return (
              <div key={monthKey} className="bg-white border rounded-lg p-4 h-full min-h-[200px] max-h-[400px]">
                <h2 className="text-lg font-semibold mb-4">
                  {monthName} {year}
                </h2>

                {holidaysByMonth[monthKey].length > 0 ? (
                  <ul className="list-none">
                    {holidaysByMonth[monthKey].map((holiday, index) => {
                      const holidayDate = new Date(year, month - 1, holiday.day);
                      const dayOfWeek = [
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                      ][holidayDate.getDay()];
                      const formattedDate =
                        holidayDate.getDate() +
                        ' ' +
                        [
                          'Jan',
                          'Feb',
                          'Mar',
                          'Apr',
                          'May',
                          'Jun',
                          'Jul',
                          'Aug',
                          'Sep',
                          'Oct',
                          'Nov',
                          'Dec',
                        ][holidayDate.getMonth()];

                      return (
                        <li key={index} className="text-sm flex justify-between items-center">
                          <span className="font-semibold text-base">{formattedDate}</span>
                          <span>{dayOfWeek}</span>
                          <span>{holiday.name}</span>
                        </li>
                      );
                    })}
                    
                  </ul>
                ) : (
                  <p className="text-center">No holidays this month</p>
                )}
                
              </div>
            );
          })}
          
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
    </div>
  );
};

export default HolidayCalendarPage;
