import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// Sample data of employees
const employeesData = [
  {
    id: 1,
    name: "John Doe",
    employeeId: "EMP001",
    designation: "Software Engineer",
    photo:
      "https://puneautoexpo.in/wp-content/uploads/2017/10/speaker3-min.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    employeeId: "EMP002",
    designation: "UI/UX Designer",
    photo: "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg",
  },
  {
    id: 3,
    name: "Johnny Smith",
    employeeId: "EMP003",
    designation: "R&D Engineer",
    photo: "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg",
  },
  // Add more employee data as needed
];

const EmployeeDropdown = ({ isMultiSelect = false, placeholder }) => {
  const [selectedEmployees, setSelectedEmployees] = useState(
    isMultiSelect ? [] : null
  );
  const animatedComponents = makeAnimated();

  // Map employees data into options for React Select
  const options = employeesData.map((employee) => ({
    value: employee.id,
    label: (
      <div className="flex items-center h-10">
        <img
          src={employee.photo}
          alt={employee.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div>
            {employee.name} ({employee.employeeId})
          </div>
          <div className="text-gray-500 text-sm">{employee.designation}</div>
        </div>
      </div>
    ),
  }));


  // Handle change in selected employee
  const handleSelectChange = (selectedOption) => {
    if (isMultiSelect) {
      const selectedEmployeesData = selectedOption.map((option) =>
        employeesData.find((employee) => employee.id === option.value)
      );
      console.log("My EmployeesDate", selectedEmployeesData)
      setSelectedEmployees(selectedEmployeesData);
    } else {
      setSelectedEmployees(selectedOption);
    }
  };

  return (
    <div className="">
      <Select
      value={
        isMultiSelect
          ? selectedEmployees.map((employee) => ({
            value: employee.id,
            label: (
              <div className="flex items-center h-10">
                <img
                  src={employee.photo}
                  alt={employee.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div>
                    {employee.name} ({employee.employeeId})
                  </div>
                  <div className="text-gray-500 text-sm">{employee.designation}</div>
                </div>
              </div>),
            }))
          : selectedEmployees
      }
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder}
        isSearchable
        isClearable
        isMulti={isMultiSelect}
        components={animatedComponents}
        styles={{padding:"10px"}}
      />
    </div>
  );
};

export default EmployeeDropdown;
