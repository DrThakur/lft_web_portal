// import React, { useState, useRef, useEffect } from 'react';
// import { format, parseISO, isAfter, addDays } from 'date-fns';

// const EmployeesResigned = ({ data }) => {
//   const [selectedDate, setSelectedDate] = useState('');

//   // Function to filter data based on the selected date
//   const filterData = () => {
//     const now = new Date();
//     let filteredData;

//     if (selectedDate) {
//       const selected = parseISO(selectedDate);
//       filteredData = data.filter(emp => parseISO(emp.lwd).toDateString() === selected.toDateString());
//     } else {
//       filteredData = data.filter(emp => {
//         const lwd = parseISO(emp.lwd);
//         return isAfter(lwd, now) && isAfter(addDays(now, 7), lwd);
//       });
//     }

//     return filteredData;
//   };

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   const filteredData = filterData();

//   return (
//     <div className="p-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 shadow-lg rounded-xl text-white max-h-96 min-h-96 overflow-y-hidden">

//       <div className=" flex justify-between mb-4 flex-col sm:flex-row sm:justify-between md:flex-col">
//         <h2 className="text-2xl font-extrabold mb-4 sm:mr-1">Employees Resigned</h2>
//         <input
//           type="date"
//           className="p-2 bg-white text-gray-800 rounded-md shadow focus:outline-none "
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//       </div>
      
//       <ul 
//         className={`space-y-4  max-h-56 transition-all duration-300 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white`}
       
//       >
//         {filteredData.length > 0 ? (
//           filteredData.map((employee, index) => (
//             <li
//               key={index}
//               className="bg-white bg-opacity-10 p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between lg:flex-col"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold">{employee.name}</h3>
//                 <p className="text-sm text-gray-200">LWD: {format(parseISO(employee.lwd), 'dd-MMM-yyyy')}</p>
//               </div>
//               <div className="text-sm font-medium sm:min-w-24">
//                 <p className="bg-white bg-opacity-20 px-2 py-1 rounded-lg">{employee.department}</p>
//               </div>
//             </li>
//           ))
//         ) : (
//           <li className="text-center text-lg">No employees with LWD in the selected period.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default EmployeesResigned;



import React, { useState } from 'react';
import { format, parseISO, isAfter, addDays, startOfDay } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EmployeesResigned = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  // Function to filter data based on the selected date
  const filterData = () => {
    const now = new Date();
    let filteredData;

    if (selectedDate) {
      const selected = startOfDay(new Date(selectedDate)); // Start of the selected day
      filteredData = data.filter(emp => {
        const lwd = startOfDay(parseISO(emp.lwd)); // Ensure LWD is also at the start of the day
        return lwd.toDateString() === selected.toDateString();
      });
    } else {
      filteredData = data.filter(emp => {
        const lwd = parseISO(emp.lwd);
        return isAfter(lwd, now) && isAfter(addDays(now, 7), lwd);
      });
    }

    return filteredData;
  };

  const handleDateChange = (date) => {
    // The `date` argument passed is a Date object
    setSelectedDate(date ? date.toLocaleDateString() : null); // Save as 'MM/DD/YYYY' or any other format you prefer
  };

  const filteredData = filterData();

  return (
    <div className="p-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 shadow-lg rounded-xl text-white max-h-96 min-h-96 overflow-y-hidden">
      <div className="flex justify-between mb-4 flex-col sm:flex-row sm:justify-between md:flex-col">
        <h2 className="text-2xl font-extrabold mb-4 sm:mr-1">Employees Resigned</h2>

        {/* Custom Date Picker */}
        <DatePicker
           selected={selectedDate}
           onChange={handleDateChange}
           dateFormat="dd-MMM-yyyy"
           showYearDropdown
           yearDropdownItemNumber={25}
           scrollableYearDropdown
           className="p-2 bg-white text-gray-800 rounded-md shadow focus:outline-none w-full "
           placeholderText="Select a date"
           isClearable
        />
      </div>

      <ul
        className={`space-y-4 max-h-56 transition-all duration-300 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((employee, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-10 p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between lg:flex-col"
            >
              <div>
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-200">LWD: {format(parseISO(employee.lwd), 'dd-MMM-yyyy')}</p>
              </div>
              <div className="text-sm font-medium sm:min-w-24">
                <p className="bg-white bg-opacity-20 px-2 py-1 rounded-lg">{employee.department}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="text-center text-lg">No employees with LWD in the selected period.</li>
        )}
      </ul>
    </div>
  );
};

export default EmployeesResigned;


