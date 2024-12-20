// import React from 'react';

// const HolidayCalendarPage = ({ holidays }) => {
//   // Group holidays by month
//   const holidaysByMonth = {};
//   holidays.forEach(holiday => {
//     const monthKey = holiday.month + '-' + holiday.year;
//     if (!holidaysByMonth[monthKey]) {
//       holidaysByMonth[monthKey] = [];
//     }
//     holidaysByMonth[monthKey].push(holiday);
//   });

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-4">Holiday Calendar</h1>
//       <div className="grid grid-cols-4 gap-2">
//         {Object.keys(holidaysByMonth).map((monthKey, index) => {
//           const [month, year] = monthKey.split('-').map(Number);
//           const monthName = new Date(year, month - 1).toLocaleString('en-us', { month: 'long' });
//           return (
//             <div key={monthKey} className={`bg-white border rounded-lg m-4 p-4 w-100 h-52`}>
//               <h2 className="text-lg font-semibold mb-4">{monthName} {year}</h2>
//               {holidaysByMonth[monthKey].length > 0 ? (
//                 <ul className="list-none">
//                   {holidaysByMonth[monthKey].map((holiday, index) => {
//                     const holidayDate = new Date(year, month - 1, holiday.day);
//                     const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][holidayDate.getDay()];
//                     const formattedDate = holidayDate.getDate() + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][holidayDate.getMonth()];
//                     return (
//                       <li key={index} className="text-sm flex justify-between items-center">
//                         <span className="font-semibold text-base">{formattedDate}</span>
//                         <span>{dayOfWeek}</span>
//                         <span>{holiday.name}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               ) : (
//                 <p className="text-center">No holiday this month</p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HolidayCalendarPage;


import React from 'react';

const HolidayCalendarPage = ({ holidays }) => {
  // Group holidays by month
  const holidaysByMonth = {};
  holidays.forEach(holiday => {
    const monthKey = holiday.month + '-' + holiday.year;
    if (!holidaysByMonth[monthKey]) {
      holidaysByMonth[monthKey] = [];
    }
    holidaysByMonth[monthKey].push(holiday);
  });

  return (
    <div>
      <h1 className=" text-2xl font-semibold mb-4">Holiday Calendar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.keys(holidaysByMonth).map((monthKey, index) => {
          const [month, year] = monthKey.split('-').map(Number);
          const monthName = new Date(year, month - 1).toLocaleString('en-us', { month: 'long' });
          return (
            <div key={monthKey} className="bg-white border rounded-lg p-4 h-full min-h-[200px] max-h-[400px]">
              <h2 className="text-lg font-semibold mb-4">{monthName} {year}</h2>
              {holidaysByMonth[monthKey].length > 0 ? (
                <ul className="list-none">
                  {holidaysByMonth[monthKey].map((holiday, index) => {
                    const holidayDate = new Date(year, month - 1, holiday.day);
                    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][holidayDate.getDay()];
                    const formattedDate = holidayDate.getDate() + ' ' + ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][holidayDate.getMonth()];
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
                <p className="text-center">No holiday this month</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HolidayCalendarPage;
