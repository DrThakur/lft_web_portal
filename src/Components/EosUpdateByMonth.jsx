import React, { useEffect, useState } from "react";
import MonthYearPicker from "./MonthYearPicker";
import { useLocation, useParams } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import axios from "axios";

const EosUpdateByMonth = () => {

    const {month, year}= useParams();
  const selectedMonth = `${month} ${year}`;
  const location = useLocation();

  console.log("my location path",location.pathname); // Current path, e.g., "/user/123"
  console.log(location.search);   // Query string, e.g., "?sort=name"
  console.log(location.hash);     // Hash, e.g., "#section1"

   // Split the pathname by "/" and take the first two parts
   const pathSegments = location.pathname.split('/').filter(Boolean);
   const basePath = `/${pathSegments[0]}`;
 
   console.log("My basepath",basePath); // "/eos-update-month"

  // State to keep track of the number of project rows
  //   const [numProjects, setNumProjects] = useState(14);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [salesLeadError, setSalesLeadError] = useState("");
  const [userDetails, setUserDetails] = useState({});



 // State to manage the form data
  const [formData, setFormData] = useState({
    // ...defaultEmployeeDetails,
    // projects: [...Array(numProjects)].map(() => ({
    //   project: "",
    //   workPercentage: "",
    //   remarks:"",
    // })),
    employeeId: "",
    employeeName: "",
    email: "",
    reportingManager: "",
    projects: [],
    activities: [],
  });

  const { user } = useStateContext();


  const apiUrl = process.env.REACT_APP_API_URL;
  console.log("mydakskj", user);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${user._id}`);
        console.log("my userdeatils--111", response.data);
        setUserDetails(response.data);

        console.log("activities Array",Array.isArray(response.data.activities));
        setActivities(response.data.activities)
        console.log("Projects Array",Array.isArray(response.data.projects));
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    if (user && user._id) {
      fetchUserDetails();
    }
  }, [user, apiUrl]);


  const defaultEmployeeDetails = {
    employeeId: "23026",
    employeeName: "Ankit Kumar Thakur",
    email: "ankit.thakur@logic-fruit.com",
    reportingManager: "Dhruv Kumar Saxena",
  };

  const eosDummyData = [
    {
      month: "May 2024",
      projects: [
        {
          project: "Project A",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          project: "Project B",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        { project: "Project C", workPercentage: 20, remark: "Initial setup" },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
    },
    {
      month: "Apr 2024",
      projects: [
        {
          project: "Project D",
          workPercentage: 40,
          remark: "Initial research phase",
        },
        { project: "Project E", workPercentage: 60, remark: "Beta testing" },
      ],
      activities: [
        {
          activity: "Activity 4",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 5",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 6",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
    },
    {
      month: "Mar 2024",
      projects: [
        {
          project: "Project F",
          workPercentage: 50,
          remark: "Development ongoing",
        },
        {
          project: "Project G",
          workPercentage: 30,
          remark: "Client feedback integration",
        },
        { project: "Project H", workPercentage: 20, remark: "Documentation" },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
    },
    {
      month: "Feb 2024",
      projects: [
        {
          project: "Project I",
          workPercentage: 40,
          remark: "Planning phase",
        },
        {
          project: "Project J",
          workPercentage: 60,
          remark: "Feature implementation",
        },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
    },
    {
      month: "Jan 2024",
      projects: [
        {
          project: "Project K",
          workPercentage: 70,
          remark: "Core functionality completed",
        },
        {
          project: "Project L",
          workPercentage: 30,
          remark: "Initial user testing",
        },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
    },
    {
      month: "Dec 2023",
      projects: [
        {
          project: "Project M",
          workPercentage: 50,
          remark: "Mid-project review",
        },
        {
          project: "Project N",
          workPercentage: 50,
          remark: "Client presentation",
        },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
    
    },
    {
      month: "Nov 2023",
      projects: [
        {
          project: "Project O",
          workPercentage: 30,
          remark: "Kick-off meeting",
        },
        {
          project: "Project P",
          workPercentage: 70,
          remark: "Backend development",
        },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
      
    },
    {
      month: "Oct 2023",
      projects: [
        {
          project: "Project Q",
          workPercentage: 60,
          remark: "Prototype development",
        },
        { project: "Project R", workPercentage: 40, remark: "Design phase" },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
      
    },
    {
      month: "Sept 2023",
      projects: [
        {
          project: "Project S",
          workPercentage: 50,
          remark: "Market research",
        },
        {
          project: "Project T",
          workPercentage: 50,
          remark: "Requirement gathering",
        },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
      
    },
    {
      month: "Aug 2023",
      projects: [
        {
          project: "Project U",
          workPercentage: 20,
          remark: "Initial concept",
        },
        { project: "Project V", workPercentage: 80, remark: "Final touches" },
      ],
      activities: [
        {
          activity: "Activity 1",
          workPercentage: 30,
          remark: "Completed milestone 1",
        },
        {
          activity: "Activity 2",
          workPercentage: 50,
          remark: "Ongoing development",
        },
        {
          activity: "Activity 3",
          workPercentage: 20,
          remark: "Initial setup",
        },
      ],
     
    },
  ];

  useEffect(() => {
    setUserData(defaultEmployeeDetails);

    const dataForSelectedMonth = eosDummyData.find(
      (data) => data.month === selectedMonth
    );

    if (dataForSelectedMonth) {
      setProjects(dataForSelectedMonth.projects);
      setActivities(dataForSelectedMonth.activities);
    }
  }, [selectedMonth]);

  

  console.log("my selected montj", selectedMonth);

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center md:items-center mb-2 bg-gray-200 py-2 px-4 rounded-lg">
        <h1 className="text-2xl mb-2 font-bold text-left md:text-left w-full md:w-auto">EoS Update</h1>
        <MonthYearPicker />
      </div>

      <div className="space-y-6">
        {/* Employee Details Section */}

        {userDetails && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Employee ID */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Employee ID *
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {userDetails.employeeId}
                </p>
              </div>

              {/* Employee Name */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Employee Name *
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                {userDetails.fullName}
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-medium text-gray-700">Email *</p>
                <p className="mt-2 text-blue-500 font-bold">
                {userDetails.email}
                </p>
              </div>

              {/* Reporting Manager */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Reporting Manager *
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                {userDetails.reportingManager}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Project Information Section */}
        {/* */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Work Information</h2>

          <h1 className="text-3xl font-semibold mb-4 text-center text-white bg-gray-500 rounded-lg border shadow-lg">No Work Information Available for  Month: {selectedMonth}</h1>
           {/*<div>
            {projects.map((project, index) => (
              <div
                key={index}
                className="col-span-1 grid grid-cols-3 gap-4 mb-2 "
              >
                <div className="col-start-1 col-end-2 text-left">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`project${index + 1}`}
                  >
                    Work {index + 1}
                    {index < 1 && " *"}
                  </label>
                  <p
                    id={`project${index + 1}`}
                    className="mt-2 text-blue-500 font-semibold"
                  >
                    {project.project}
                  </p>
                </div>
                <div className="col-start-2 col-end-3 flex flex-col justify-start gap-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`workPercentage${index + 1}`}
                  >
                    Work Percentage in project {index + 1} (In %)
                    {index < 1 && " *"}
                  </label>
                  <p className="text-blue-500 font-semibold">
                    {project.workPercentage}
                  </p>
                </div>
                <div className="col-start-3 col-end-4 flex flex-col justify-start">
                  <label
                    className="text-sm font-medium text-gray-700"
                
                  >
                    Remarks
                  </label>
                  <p className="mt-2 text-blue-500 font-semibold">
                    {project.remark}
                  </p>
                </div>
              </div>
            ))}

            {activities.map((activity, index) => (
              <div
                key={index}
                className="col-span-1 grid grid-cols-3 gap-4 mb-2"
              >
                <div className="col-start-1 col-end-2 text-left">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`activity${index + 1}`}
                  >
                    Work {projects.length + index + 1}
                  </label>
                  <p
                    id={`activity${index + 1}`}
                    className="mt-2 text-blue-500 font-semibold"
                  >
                    {activity.activity}
                  </p>
                </div>
                <div className="col-start-2 col-end-3 flex flex-col justify-start gap-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`workPercentage${projects.length + index + 1}`}
                  >
                    Work Percentage in activity {index + 1} (In %)
                  </label>
                  <p className="text-blue-500 font-semibold">
                    {activity.workPercentage}
                  </p>
                </div>
                <div className="col-start-3 col-end-4 flex flex-col justify-start gap-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`remark${projects.length + index + 1}`}
                  >
                    Remark
                  </label>
                  <p className="text-blue-500 font-semibold">
                    {activity.remark}
                  </p>
                </div>
              </div>
            ))}
          </div>
*/}
          {/*
          <div>
            <h2 className="text-xl font-semibold mb-4">
              (Only for Sales Lead Investigation & Sales & Marketing Activities)
            </h2>
            <div className="flex flex-row justify-start items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sales Remarks</span>
              <span className="text-blue-500 font-semibold">{salesRemark}</span>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default EosUpdateByMonth;
