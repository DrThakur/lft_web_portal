import React, { useState, useRef, useEffect } from 'react';
import { format, parseISO, isAfter, addDays } from 'date-fns';

const EmployeesResigned = ({ data }) => {
  const [selectedDate, setSelectedDate] = useState('');

  // Function to filter data based on the selected date
  const filterData = () => {
    const now = new Date();
    let filteredData;

    if (selectedDate) {
      const selected = parseISO(selectedDate);
      filteredData = data.filter(emp => parseISO(emp.lwd).toDateString() === selected.toDateString());
    } else {
      filteredData = data.filter(emp => {
        const lwd = parseISO(emp.lwd);
        return isAfter(lwd, now) && isAfter(addDays(now, 7), lwd);
      });
    }

    return filteredData;
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filteredData = filterData();

  //here add functionality of show scrollbar touching/hover
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
    <div className="p-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 shadow-lg rounded-xl text-white max-h-96 min-h-96 overflow-y-hidden">

      <div className=" flex justify-between mb-4 flex-col sm:flex-row sm:justify-between md:flex-col">
        <h2 className="text-2xl font-extrabold mb-4 sm:mr-1">Employees Resigned</h2>
        <input
          type="date"
          className="p-2 bg-white text-gray-800 rounded-md shadow focus:outline-none "
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      
      <ul ref={scrollContainerRef}
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
        onTouchEnd={handleTouchEnd}        // Trigger interaction end on touch>
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
