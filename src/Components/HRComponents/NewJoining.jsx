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

import React, { useState, useRef, useEffect }  from "react";
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

  //here add functionality of show scrollbar on touch/hover
  const [isTouched, setIsTouched] = useState(false);
  const scrollContainerRef = useRef(null);

  // Timer to hide the scrollbar after a period of inactivity (e.g., 2 seconds)
  const hideScrollbarTimeout = useRef(null);

  // Function to handle touch or scroll event
  const handleInteraction = () => {
    if (!isTouched) {
      setIsTouched(true);
    }

    // Clear the previous timeout and start a new one to hide the scrollbar
    if (hideScrollbarTimeout.current) {
      clearTimeout(hideScrollbarTimeout.current);
    }

    // Set timeout to hide the scrollbar after 2 seconds of inactivity
    hideScrollbarTimeout.current = setTimeout(() => {
      setIsTouched(false);
    }, 2000); // 2000 ms = 2 seconds
  };

  const handleTouchEnd = () => {
    setIsTouched(false); // Hide scrollbar when touch ends
    if (hideScrollbarTimeout.current) {
      clearTimeout(hideScrollbarTimeout.current);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup the timeout when the component unmounts
      if (hideScrollbarTimeout.current) {
        clearTimeout(hideScrollbarTimeout.current);
      }
    };
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 shadow-lg rounded-xl text-white max-h-96 min-h-96 ">
      <div className="flex justify-between mb-4 flex-col sm:flex-row sm:justify-between md:flex-col ">
        <h2 className="text-2xl font-extrabold mb-4 sm:mr-1">New Joinings</h2>
        <select
          className="p-2  bg-white text-gray-800 rounded-md shadow focus:outline-none"
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
      <ul 
      ref={scrollContainerRef}
      className={`space-y-4 overflow-y-hidden max-h-56 transition-all duration-300
        ${isTouched ? 'overflow-y-auto' : 'overflow-y-hidden'}
        hover:overflow-y-auto
        [&::-webkit-scrollbar]:w-2 
        [&::-webkit-scrollbar-track]:rounded-full 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-thumb]:bg-white 
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
      onTouchStart={handleInteraction}   // Trigger interaction on touch start
      onTouchEnd={handleTouchEnd}        // Trigger interaction end on touch
      >

        {filteredData.length > 0 ? (
          filteredData.map((employee, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-10 p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between lg:flex-col"
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
              <div className="text-sm font-medium sm:min-w-24">
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

