// import React from "react";

// const NewJoining = ({ data }) => {
//   return (
//     <div className="p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-xl text-white">
//       <h2 className="text-2xl font-extrabold mb-6 text-center">
//         New Joinings This Month
//       </h2>
//       <ul className="space-y-4">
//         {data.map((employee, index) => (
//           <li
//             key={index}
//             className="bg-white bg-opacity-10 p-4 rounded-lg shadow flex items-center justify-between"
//           >
//             <div className="flex items-center">
//               <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-lg font-bold">
//                 {employee.initials}
//               </div>
//               <div className="ml-4">
//                 <h3 className="text-lg font-semibold">{employee.name}</h3>
//                 <p className="text-sm text-gray-200">
//                   Joining Date: {employee.joiningDate}
//                 </p>
//               </div>
//             </div>
//             <div className="text-sm font-medium text-right">
//               <p className="bg-white bg-opacity-20 px-2 py-1 rounded-lg">
//                 {employee.department}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewJoining;

import React, { useState }  from "react";
import { format, parseISO, isAfter, addDays } from 'date-fns';

const NewJoining = ({ data }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Last 30 Days");

  // Function to filter data based on the selected time period
  const filterData = () => {
    const now = new Date();
    let filteredData;

    switch (selectedTimePeriod) {
      case "Today":
        filteredData = data.filter(
          (emp) =>
            new Date(emp.joiningDate).toDateString() === now.toDateString()
        );
        break;
      case "Last 7 Days":
        filteredData = data.filter(
          (emp) =>
            new Date(emp.joiningDate) >=
            new Date(now.setDate(now.getDate() - 7))
        );
        break;
      case "Last 30 Days":
        filteredData = data.filter(
          (emp) =>
            new Date(emp.joiningDate) >=
            new Date(now.setMonth(now.getMonth() - 1))
        );
        break;
      case "Last 6 Months":
        filteredData = data.filter(
          (emp) =>
            new Date(emp.joiningDate) >=
            new Date(now.setMonth(now.getMonth() - 6))
        );
        break;
      case "Last 1 Year":
        filteredData = data.filter(
          (emp) =>
            new Date(emp.joiningDate) >=
            new Date(now.setFullYear(now.getFullYear() - 1))
        );
        break;
      default:
        filteredData = data;
    }

    return filteredData;
  };

  const handleTimePeriodChange = (e) => {
    setSelectedTimePeriod(e.target.value);
  };

  const filteredData = filterData();

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 shadow-lg rounded-xl text-white max-h-96 overflow-y-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold">New Joinings</h2>
        <select
          className="p-2 bg-white text-gray-800 rounded-md shadow focus:outline-none"
          value={selectedTimePeriod}
          onChange={handleTimePeriodChange}
        >
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
          <option>Last 1 Year</option>
        </select>
      </div>
      <ul className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((employee, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-10 p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div className="flex items-center">
               {/* <div className="w-12 h-10=2 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-lg font-bold">
                  {employee.initials}
                </div>
                 */}
                <div className="">
                  <h3 className="text-lg font-semibold">{employee.name}</h3>
                  <p className="text-sm text-gray-200">
                    Joining On: {format(parseISO(employee.joiningDate), 'dd-MMM-yyyy')}
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium text-right">
                <p className="bg-white bg-opacity-20 px-2 py-1 rounded-lg">
                  {employee.department}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-lg">No joinings in this period.</li>
        )}
      </ul>
    </div>
  );
};

export default NewJoining;
