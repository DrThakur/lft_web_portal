import React, { useState, useRef, useEffect }  from "react";
import { format, parseISO, isAfter, addDays } from 'date-fns';
import { FaChevronDown } from 'react-icons/fa'; // Import FaChevronDown

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


  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Declare dropdownRef if needed
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
    setSelectedTimePeriod(option);
    setIsOpen(false); // Close the dropdown after selecting
  };
  
  

  return (
    <div className="p-6 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 shadow-lg rounded-xl text-white max-h-96 min-h-96 ">
      <div className="flex justify-between mb-4 flex-col sm:flex-row sm:justify-between md:flex-col ">
        <h2 className="text-2xl font-extrabold mb-4 sm:mr-1">New Joinings</h2>
        {/* <select
          className="p-2  bg-white text-gray-800 rounded-md shadow focus:outline-none"
          value={selectedTimePeriod}
          onChange={handleTimePeriodChange}
        >
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
          <option>Last 1 Year</option>
        </select> */}
          <div className="relative" ref={dropdownRef}>
    {/* Dropdown Button */}
    <button
      onClick={toggleDropdown}
      className="flex justify-between items-center  rounded border px-4 py-2 w-full"
    >
      <span>{selectedTimePeriod || "Select Time Period"}</span>
      <FaChevronDown className="ml-2 text-gray-500" /> {/* Dropdown Icon */}
    </button>

    {/* Dropdown Menu */}
    {isOpen && (
      <ul className="absolute mt-1 w-full max-w-[80vw]  border  z-10 p-2  bg-white text-gray-800 rounded-md shadow focus:outline-none">
        <li
          onClick={() => handleOptionClick("Today")}
          className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Today
        </li>
        <li
          onClick={() => handleOptionClick("Last 7 Days")}
          className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Last 7 Days
        </li>
        <li
          onClick={() => handleOptionClick("Last 30 Days")}
          className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Last 30 Days
        </li>
        <li
          onClick={() => handleOptionClick("Last 6 Months")}
          className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Last 6 Months
        </li>
        <li
          onClick={() => handleOptionClick("Last 1 Year")}
          className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Last 1 Year
        </li>
      </ul>
    )}
  </div>
      </div>
      <ul 
      
      className={`space-y-4  max-h-56 transition-all duration-300 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white`}
  
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

