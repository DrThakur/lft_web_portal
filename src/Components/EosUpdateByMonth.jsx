import React, { useEffect, useState } from "react";
import MonthYearPicker from "./MonthYearPicker";
import { useParams } from "react-router-dom";

const EosUpdateByMonth = () => {
    const { year, month } = useParams();
  const selectedMonth = `${month} ${year}`;

  // State to keep track of the number of project rows
  //   const [numProjects, setNumProjects] = useState(14);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [salesRemark, setSalesRemark] = useState("");

  // State to manage the form data

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
      salesRemark: "Good progress on sales leads",
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
      salesRemark: "Promising leads for next quarter",
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
      salesRemark: "Sales strategy meeting held",
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
      salesRemark: "New market analysis",
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
      salesRemark: "Sales targets met for the month",
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
      salesRemark: "End of year sales report",
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
      salesRemark: "Sales campaign launched",
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
      salesRemark: "Initial client meetings",
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
      salesRemark: "Q3 sales summary",
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
      salesRemark: "High potential for new leads",
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
      setSalesRemark(dataForSelectedMonth.salesRemark);
    }
  }, [selectedMonth]);

  

  console.log("my selected montj", selectedMonth);

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">EoS Update</h1>
        <MonthYearPicker />
      </div>

      <div className="space-y-6">
        {/* Employee Details Section */}

        {defaultEmployeeDetails && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Employee ID */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Employee ID *
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {defaultEmployeeDetails.employeeId}
                </p>
              </div>

              {/* Employee Name */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Employee Name *
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {defaultEmployeeDetails.employeeName}
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-medium text-gray-700">Email *</p>
                <p className="mt-2 text-blue-500 font-bold">
                  {defaultEmployeeDetails.email}
                </p>
              </div>

              {/* Reporting Manager */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Reporting Manager *
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {defaultEmployeeDetails.reportingManager}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Project Information Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Work Information</h2>
          <div>
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

          <div>
            <h2 className="text-xl font-semibold mb-4">
              (Only for Sales Lead Investigation & Sales & Marketing Activities)
            </h2>
            <div className="flex flex-row justify-start items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sales Remarks</span>
              <span className="text-blue-500 font-semibold">{salesRemark}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EosUpdateByMonth;
