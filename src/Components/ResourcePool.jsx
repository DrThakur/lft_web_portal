import React, { useEffect, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ResourceTable from "./ResourceTable";
import axios from "axios";

const ResourcePool = () => {
  const [employees, setEmployees] = useState("");
  const [employeesByDepartment, setEmployeesByDepartment] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const tabs = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));

  const departments = ["Software", "Hardware", "FPGA", "QA", "Verification"];

  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;

  const filterEmployeesByDepartment = (employees, department) => {
    return employees.filter((employee) => employee.department === department);
  };

  // const apiUrl2 = "https://lft-web-portal-backend-1.onrender.com/users"
  // const apiUrl1 = `http://${baseURL}:${port}/users`
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchUserInformation = async (page, limit) => {
      try {
        // const res = await axios.get(`http://${baseURL}:${port}/users?page=${page}&limit=${limit}`);
        const res = await axios.get(`${apiUrl}/users/all`);
        // const res = await axios.get(`https://lft-web-portal-backend-1.onrender.com/users?page=${page}&limit=${limit}`);
        // const res = await axios.get(`https://lft-web-portal-backend-1.onrender.com/users/all`);
        // const employeeData = res.data.users;
        const { users, totalPages } = res.data;
        // console.log("response data", res.data);
        console.log("response data---final", users);
        // console.log("response data-2", res.data.users);
        // console.log("response data-3", res.data.users);
        // console.log("Type of data:", typeof res.data);
        // console.log("Type of data-222:", typeof res.data.users);

        // const filteredEmployees = filterEmployeesByDepartment(employeeData, department);

        //  // Organize employees by department
        const departmentMap = departments.reduce((acc, department) => {
          acc[department] = filterEmployeesByDepartment(
            users,
            department
          );
          return acc;
        }, {});
        setEmployees(users);
        setEmployeesByDepartment(departmentMap);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchUserInformation(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setLoading(true);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
    setLoading(true);
  };

  return (
    <div className="card">
      <TabView scrollable>
        {departments.map((department, index) => {
          const departmentEmployees = employeesByDepartment[department] || [];
          return (
            <TabPanel
              key={index}
              header={`${department} Department`}
              className="cursor-pointer"
            >
              <ResourceTable
                title={department}
                employees={departmentEmployees}
                loading={loading}
                currentPage={currentPage}
                totalPages={totalPages}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </TabPanel>
          );
        })}
      </TabView>
    </div>
  );
};

export default ResourcePool;
