import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import makeAnimated from "react-select/animated";
import employeesData from "../data/employeesData";

const animatedComponents = makeAnimated();

const FinalEmployeeDropdown = ({ isMultiSelect, value, placeholder, onChange }) => {
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

  const handleSelectChange = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <div className="h-screen">
      <Select
        value={value}
        onChange={handleSelectChange}
        options={options}
        placeholder={placeholder}
        isSearchable
        isClearable
        isMulti={isMultiSelect}
        components={animatedComponents}
        styles={{
          padding: "10px",
          valueContainer: (base) => ({
            ...base,
            minHeight: "44px",
          }),
        }}
      />
    </div>
  );
};

FinalEmployeeDropdown.propTypes = {
  isMultiSelect: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

FinalEmployeeDropdown.defaultProps = {
  isMultiSelect: false,
  value: null,
  placeholder: "Select Employee",
};

export default FinalEmployeeDropdown;
