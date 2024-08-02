import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ResourceTable from "./ResourceTable";
import axios from "axios";

const ResourcePool = () => {
  const [employees, setEmployees] = useState("");
  const [employeesByDepartment, setEmployeesByDepartment] = useState({});
  const [loading, setLoading] = useState(true);

  const tabs = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));

  const departments = [
    "Software",
    "Hardware",
    "FPGA",
    "QA",
    "Verification",
  ];

  // const baseURL = process.env.REACT_APP_BASE_URL;
  // const port = process.env.REACT_APP_BACKEND_PORT;
  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;

  console.log("baseUrl", baseURL);
  console.log("port", port);

  const filterEmployeesByDepartment = (employees, department) => {
    return employees.filter(employee => employee.department === department);
  };
  

  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        // const res = await axios.get(`http://${baseURL}:${port}/users`);
        const res = await axios.get(`https://lft-web-portal-backend.onrender.com/users`);
        const employeeData = res.data.users;
        console.log("response data", res.data);
        console.log("response data-2", res.data.users);
        console.log("response data-3", res.data.users);
        console.log("Type of data:", typeof res.data);
        console.log("Type of data-222:", typeof res.data.users);
        
        // const filteredEmployees = filterEmployeesByDepartment(employeeData, department);

        
        //  // Organize employees by department
         const departmentMap = departments.reduce((acc, department) => {
            acc[department] = filterEmployeesByDepartment(employeeData, department);
            return acc;
        }, {});
        setEmployees(employeeData);
        setEmployeesByDepartment(departmentMap);
      } catch (error) {
        console.error("Error", error);
      }finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchUserInformation();
  });

  return (
    <div className="card">
      <TabView scrollable>
        {departments.map((department, index) => {
            const departmentEmployees = employeesByDepartment[department] || [];
          return (
            <TabPanel key={index} header={`${department} Department`} className="cursor-pointer">
              <ResourceTable title={department} employees={departmentEmployees|| []} loading={loading}/>
            </TabPanel>
          );
        })}
      </TabView>
    </div>
  );
};

export default ResourcePool;
