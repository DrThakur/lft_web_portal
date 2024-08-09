import React, { useEffect, useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import makeAnimated from "react-select/animated";
import employeesData from "../data/employeesData";
import axios from "axios";

const animatedComponents = makeAnimated();

const FinalEmployeeDropdown = ({
  isMultiSelect,
  value,
  placeholder,
  onChange,
}) => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const res = await axios.get(`${apiUrl}/users/all`);
        // const employeeData = res.data.users;
        const { users} = res.data;
        // console.log("response data", res.data);
        console.log("response data---final", users);
       
        setEmployees(users);
      
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchUserInformation();
  }, [apiUrl]);




  const options = employees?.map((employee) => ({
    value: employee.employeeId,
    label: employee.fullName,
    data: employee,
  }));

  const handleSelectChange = (selectedOption) => {
    onChange(selectedOption);
  };

  const formatOptionLabel = ({ label, data }) => (
    <div className="flex items-center h-10">
      <img src={`https://puneautoexpo.in/wp-content/uploads/2017/10/speaker3-min.jpg`} alt={data.fullName} className="w-8 h-8 rounded-full" />
      <div>
        <div>
          {data.fullName} ({data.employeeId})
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
