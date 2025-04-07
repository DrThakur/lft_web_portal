import React from 'react';
import { useNavigate } from 'react-router-dom';

const HolidayCalendarPage = ({ holidays }) => {
  const navigate = useNavigate();

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-indexed month (January = 0)

  const upcomingHolidays = holidays.filter((holiday) => {
    const holidayDate = new Date(currentYear, holiday.month - 1, holiday.day);
    holidayDate.setHours(0, 0, 0, 0);
    return holidayDate >= currentDate;
  });

  if (upcomingHolidays.length === 0) {
    return (
      <div className="text-center p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Holiday Calendar</h1>
        <p className="text-lg text-gray-600">No data available for current or upcoming holidays.</p>
      </div>
    );
  }

  const holidaysByMonth = {};
  upcomingHolidays.forEach((holiday) => {
    const monthKey = holiday.month + '-' + holiday.year;
    if (!holidaysByMonth[monthKey]) {
      holidaysByMonth[monthKey] = [];
    }
    holidaysByMonth[monthKey].push(holiday);
  });

  return (
    <div className="p-6 w-full bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 rounded-lg shadow-xl max-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-4 bg-teal-200 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">
          Holiday Calendar
        </h1>
        <div className="text-center sm:mt-0">
          <button
            onClick={() => navigate(-1)}
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm sm:text-base font-semibold transition duration-300 transform hover:scale-105"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Display holidays in grouped format by month and year */}
      <div className="overflow-y-auto h-[calc(100vh-220px)] lg:h-[calc(100vh-180px)] scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 lg:gap-6 lg:p-4">
          {Object.keys(holidaysByMonth).map((monthKey) => {
            const [month, year] = monthKey.split('-').map(Number);
            const monthName = new Date(year, month - 1).toLocaleString('en-us', { month: 'long' });

            return (
              <div key={monthKey} className="bg-white border-2 border-teal-300 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out h-full min-h-[200px] max-h-[400px]">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {monthName} {year}
                </h2>

                {holidaysByMonth[monthKey].length > 0 ? (
                  <ul className="list-none space-y-2">
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
                        <li key={index} className="flex justify-between items-center text-sm text-gray-700">
                          <span className="font-semibold text-base">{formattedDate}</span>
                          <span className="text-gray-500">{dayOfWeek}</span>
                          <span className="italic text-gray-600">{holiday.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-center text-gray-500">No holidays this month</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HolidayCalendarPage;
