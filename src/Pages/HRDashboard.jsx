import React from 'react';
import HiringStatus from '../Components/HRComponents/HiringStatus';
import HRTickets from '../Components/HRComponents/HRTickets';
import HREvents from '../Components/HRComponents/HREvents';
import EmployeesOnPIPNotice from '../Components/HRComponents/EmployeePIPNotice';
import GenderChart from '../Components/HRComponents/GenderChart';
import DepartmentAttritionChart from '../Components/HRComponents/DepartmentAttritionChart';
import {hiringStatusData,hrTicketsData,eventsData,employeesData, chartsData,employeeStrengthDistribution, newJoiningData, resignedEmployeeData} from '../data/dummy'; // your dummy data file
import EmployeeStrengthDistributionChart from '../Components/HRComponents/EmployeeStrengthDistributionChart';
import NewJoining from '../Components/HRComponents/NewJoining';
import EmployeesResigned from '../Components/HRComponents/EmployeeResigned';


const HRDashboard = () => (
  <div className="p-6 bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>
    <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-6">
      <HiringStatus data={hiringStatusData} />
      <HRTickets data={hrTicketsData} />
      <HREvents data={eventsData} />
      <EmployeesOnPIPNotice data={employeesData} />
      <GenderChart data={chartsData.gender} />
      <EmployeeStrengthDistributionChart data={employeeStrengthDistribution}/>
      <DepartmentAttritionChart data={chartsData.attrition} />
      <NewJoining data={newJoiningData}/>
      <EmployeesResigned data={resignedEmployeeData}/>
    </div>
  </div>
);

export default HRDashboard;
