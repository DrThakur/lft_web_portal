import React, { useState, useRef, useEffect } from 'react'
import HiringStatus from '../Components/HRComponents/HiringStatus';
import HRTickets from '../Components/HRComponents/HRTickets';
import HREvents from '../Components/HRComponents/HREvents';
import EmployeesOnPIPNotice from '../Components/HRComponents/EmployeePIPNotice';
import GenderChart from '../Components/HRComponents/GenderChart';
import DepartmentAttritionChart from '../Components/HRComponents/DepartmentAttritionChart';
import { hiringStatusData, hrTicketsData, eventsData, employeesData, chartsData, employeeStrengthDistribution, newJoiningData, resignedEmployeeData } from '../data/dummy'; // your dummy data file
import EmployeeStrengthDistributionChart from '../Components/HRComponents/EmployeeStrengthDistributionChart';
import NewJoining from '../Components/HRComponents/NewJoining';
import EmployeesResigned from '../Components/HRComponents/EmployeeResigned';


const HRDashboard = () => {
  const [isTouched, setIsTouched] = useState(false);
  const scrollContainerRef = useRef(null);

  // Timer to hide the scrollbar after a period of inactivity (e.g., 2 seconds)
  const hideScrollbarTimeout = useRef(null);

  // Function to handle touch or scroll event
  const handleInteraction = () => {
    if (!isTouched) {
      setIsTouched(true); // Show scrollbar when touched or scrolled
    }

    // Clear the previous timeout and start a new one to hide the scrollbar
    if (hideScrollbarTimeout.current) {
      clearTimeout(hideScrollbarTimeout.current);
    }

    // Set timeout to hide the scrollbar after 2 seconds of inactivity
    hideScrollbarTimeout.current = setTimeout(() => {
      setIsTouched(false); // Hide scrollbar after 2 seconds
    }, 2000); // 2000 ms = 2 seconds
  };

  // Cleanup on touch end to hide the scrollbar when touch ends
  const handleTouchEnd = () => {
    if (hideScrollbarTimeout.current) {
      clearTimeout(hideScrollbarTimeout.current); // Clear the timeout
    }

    // Optionally, you can delay the hiding of the scrollbar based on user behavior
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    // Add event listeners for touch and scroll events
    container.addEventListener('touchstart', handleInteraction);
    container.addEventListener('touchmove', handleInteraction);
    container.addEventListener('scroll', handleInteraction);

    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener('touchstart', handleInteraction);
      container.removeEventListener('touchmove', handleInteraction);
      container.removeEventListener('scroll', handleInteraction);

      if (hideScrollbarTimeout.current) {
        clearTimeout(hideScrollbarTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    // Optional: Reset the timeout if the component unmounts
    return () => {
      if (hideScrollbarTimeout.current) {
        clearTimeout(hideScrollbarTimeout.current);
      }
    };
  }, []);


  return (
    <div className="p-6 bg-gray-100 mb-2 xs:mb-1">
      <h1 className="text-3xl font-bold mb-6">HR Dashboard</h1>
      <div
        ref={scrollContainerRef}
        className={`h-[calc(100vh-222px)] xs:h-[calc(100vh-210px)]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-6 overflow-x-hidden  overflow-y-hidden 
          ${isTouched ? 'overflow-y-auto px-0.5' : 'overflow-y-hidden'}
          hover:overflow-y-auto
          hover:px-0.5
          hover:-mr-2.5
          [&::-webkit-scrollbar]:w-2 
          [&::-webkit-scrollbar-track]:rounded-full 
          [&::-webkit-scrollbar-thumb]:rounded-full 
          [&::-webkit-scrollbar-thumb]:bg-gray-400 
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 `}
        onTouchStart={handleInteraction}   // Trigger interaction on touch start
        onTouchEnd={handleTouchEnd}        // Trigger interaction end on touch
      >
        <HiringStatus data={hiringStatusData} />
        <HRTickets data={hrTicketsData} />
        <HREvents data={eventsData} />
        <EmployeesOnPIPNotice data={employeesData} />
        <GenderChart data={chartsData.gender} />
        <EmployeeStrengthDistributionChart data={employeeStrengthDistribution} />
        <DepartmentAttritionChart data={chartsData.attrition} />
        <NewJoining data={newJoiningData} />
        <EmployeesResigned data={resignedEmployeeData} />
      </div>
    </div>
  );
}
export default HRDashboard;
