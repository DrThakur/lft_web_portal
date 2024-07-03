import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import makeAnimated from "react-select/animated";
import employeesData from "../data/employeesData";

const animatedComponents = makeAnimated();

const FinalEmployeeDropdown = ({
  isMultiSelect,
  value,
  placeholder,
  onChange,
}) => {
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
    data: employee,
  }));

  const handleSelectChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const formatOptionLabel = ({ label, data }) => (
    <div className="flex items-center h-10">
      <img src={data.photo} alt={data.name} className="w-8 h-8 rounded-full" />
      <div>
        <div>
          {data.name} ({data.employeeId})
        </div>
        <div className="text-gray-500 text-sm">{data.designation}</div>
      </div>
    </div>
  );

  return (
    <div className="z-50 h-full w-full">
      <Select
        value={value}
        onChange={handleSelectChange}
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
