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

const EmployeeDropdown = ({ isMultiSelect = false, value, placeholder, onChange }) => {
  const animatedComponents = makeAnimated();

  // Map employees data into options for React Select
  // const options = employeesData.map((employee) => ({
  //   value: employee.id,
  //   label: (
  //     <div className="flex items-center h-10">
  //       <img
  //         src={employee.photo}
  //         alt={employee.name}
  //         className="w-8 h-8 rounded-full"
  //       />
  //       <div>
  //         <div>
  //           {employee.name} ({employee.employeeId})
  //         </div>
  //         <div className="text-gray-500 text-sm">{employee.designation}</div>
  //       </div>
  //     </div>
  //   ),
  // }));

  
  const options = employeesData.map((employee) => ({
    value: employee.id,
    label: employee.name,
    data: employee
  }));

  // Handle change in selected employee
  const handleSelectChange = (selectedOption) => {
    console.log("my employeeOptions", selectedOption);
  };


  const formatOptionLabel = ({ label, data }) => (
    <div className="flex items-center h-10">
      <img
        src={data.photo}
        alt={data.name}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <div>
          {data.name} ({data.employeeId})
        </div>
        <div className="text-gray-500 text-sm">{data.designation}</div>
      </div>
    </div>
  );

  return (
    <div className="">
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isSearchable
        isClearable
        isMulti={isMultiSelect}
        components={animatedComponents}
        formatOptionLabel={formatOptionLabel}
        styles={{
          padding: "10px",
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          valueContainer: (base) => ({
            ...base,
            minHeight: "44px",
          }),
        }}
        menuPortalTarget={document.body}
      />
    </div>
  );
};

export default EmployeeDropdown;
