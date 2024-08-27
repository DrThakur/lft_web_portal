import React from 'react';
import { useNavigate } from 'react-router-dom';

const HolidayCalendar = ({ holidays }) => {

    const navigate = useNavigate();


const handleViewAll = () => {
 navigate("/holiday-calender");
}

  return (
    <div className="rounded p-2 w-full h-full">
      <div className="mb-2">
        <h3 className="text-lg font-bold mb-2 bg-green-200  py-2 px-3 rounded-lg">Upcoming Holidays</h3>
        <div className="overflow-y-scroll max-h-96" style={{ maxHeight: "137px", overflowY: "auto" }}> {/* Set max height and overflow scroll here */}
          <ul className="list-none">
            {holidays.map((holiday, index) => {
              const holidayDate = new Date();
              holidayDate.setDate(holiday.day);
              holidayDate.setMonth(holiday.month - 1);
              const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][holidayDate.getDay()];
              const formattedDate = holidayDate.getDate() + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][holidayDate.getMonth()];
              return (
                <li key={index} className="text-sm">
                  <div className='flex justify-between items-center p-1'>
                    <div className='flex flex-col justify-start'>
                      <span className="font-semibold text-base">{formattedDate}</span>
                      <span className='text-xs'>{dayOfWeek}</span>
                    </div>
                    <span>{holiday.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {holidays.length > 5 && (
          <div className="text-center -mt-1">
            <button className="text-blue-500 hover:underline" onClick={handleViewAll}>View All</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HolidayCalendar;
