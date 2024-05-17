import React, { useState } from "react";
import EmployeeDropdown from "./EmployeeDropdown";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [plannedStartDate, setPlannedStartDate] = useState("");
  const [plannedEndDate, setPlannedEndDate] = useState("");
  //   const [actualStartDate, setActualStartDate] = useState("");
  //   const [actualEndDate, setActualEndDate] = useState("");
  const [effortDays, setEffortDays] = useState("");
  const [dependency, setDependency] = useState("");
  return (
    <div className="bg-white p-4 mt-4 rounded-lg">
      <h1 className="font-bold text-xl mb-4">Add Task</h1>
      <div className="form">
        <form>
          <div className="whole-form">
            <div className="section1 grid grid-cols-3 gap-2">
              <div className="taskName flex flex-col gap-2">
                <label htmlFor="taskName" className="font-semibold">
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
              <div className="taskDetails flex flex-col gap-2">
                <label htmlFor="taskDetails" className="font-semibold">
                  Task Details
                </label>
                <input
                  type="text"
                  id="taskDetails"
                  value={taskDetails}
                  onChange={(e) => setTaskDetails(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
              <div className="plannedStartDate flex flex-col gap-2">
                <label htmlFor="plannedStartDate" className="font-semibold">
                  Planned Start Date
                </label>
                <input
                  type="date"
                  id="plannedStartDate"
                  value={plannedStartDate}
                  onChange={(e) => setPlannedStartDate(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
            </div>
            <div className="section2 grid grid-cols-3 gap-2 mt-2">
              <div className="plannedEndDate flex flex-col gap-2">
                <label htmlFor="plannedEndDate" className="font-semibold">
                  Planned End Date
                </label>
                <input
                  type="date"
                  id="plannedEndDate"
                  value={plannedEndDate}
                  onChange={(e) => setPlannedEndDate(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
              {/*<div className="actualStartDate flex flex-col gap-2">
                <label htmlFor="actualStartDate" className="font-semibold">
                  Actual Start Date(Optional)
                </label>
                <input
                  type="date"
                  id="actualStartDate"
                  value={actualStartDate}
                  onChange={(e) => setActualStartDate(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
              <div className="actualEndDate flex flex-col gap-2">
                <label htmlFor="actualEndDate" className="font-semibold">
                  Actual End Date(Optional)
                </label>
                <input
                  type="date"
                  id="actualEndDate"
                  value={actualEndDate}
                  onChange={(e) => setActualEndDate(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
              */}
              <div className="effortDays flex flex-col gap-2">
                <label htmlFor="effortDays" className="font-semibold">
                  Effort(Days)
                </label>
                <input
                  type="date"
                  id="effortDays"
                  value={effortDays}
                  onChange={(e) => setEffortDays(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
              <div className="dependency flex flex-col gap-2">
                <label htmlFor="dependency" className="font-semibold">
                 Dependency
                </label>
                <input
                  type="text"
                  id="dependency"
                  value={dependency}
                  onChange={(e) => setDependency(e.target.value)}
                  className="border w-full rounded px-2 py-2 mt-1"
                />
              </div>
            </div>
            <div className="section3 mt-2 grid grid-cols-3 gap-2">
              <div className="owner flex flex-col gap-2">
              <span className="font-semibold">Owner</span>
                <EmployeeDropdown  placeholder="Select Owner" />
              </div>
            </div>
            <div className="section4 mt-4 text-center">
            <button className="bg-blue-500 hover:bg-blue-700 rounded-full shadow-md p-2 px-6 text-white w-1/6">Submit</button>
            </div>
            <div className="section5"></div>
            <div className="submitButtons"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
