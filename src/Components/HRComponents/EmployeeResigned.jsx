import React, { useState } from 'react';
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

  return (
    <div className="p-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 shadow-lg rounded-xl text-white max-h-96 overflow-y-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-extrabold">Employees Resigned</h2>
        <input
          type="date"
          className="p-2 bg-white text-gray-800 rounded-md shadow focus:outline-none"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <ul className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((employee, index) => (
            <li
              key={index}
              className="bg-white bg-opacity-10 p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-200">LWD: {format(parseISO(employee.lwd), 'dd-MMM-yyyy')}</p>
              </div>
              <div className="text-sm font-medium text-right">
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
