import React, { useState } from "react";

const NewMilestoneForm = ({ projectId, existingMilestones }) => {
  // Determine milestone number
  const [milestoneNumber, setMilestoneNumber] = useState(
    existingMilestones ? existingMilestones.length + 1 : 1
  );

  // State for form inputs
  const [milestoneName, setMilestoneName] = useState(`MS-${milestoneNumber}`);
  const [plannedStartDate, setPlannedStartDate] = useState("");
  const [plannedEndDate, setPlannedEndDate] = useState("");
  const [invoiceValue, setInvoiceValue] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  // State for displaying milestone details
  const [milestoneDetails, setMilestoneDetails] = useState([]);

  // Function to handle form submission
  const handleSaveMilestone = () => {
    // Check if planned start date and planned end date are filled
    if (!plannedStartDate || !plannedEndDate) {
      setErrorMessage("Please fill in both planned start date and planned end date.");
      return; // Prevent further execution
    }

    // Clear error message if no validation error
    setErrorMessage("");


    // Create milestone object
    const newMilestone = {
      milestoneName,
      plannedStartDate,
      plannedEndDate,
      invoiceValue,
      description,
    };

    // Update milestone details state
    setMilestoneDetails([...milestoneDetails, newMilestone]);

    // Increment milestone number if it's a new project
    if (!projectId) {
      setMilestoneNumber(milestoneNumber + 1);
      setMilestoneName(`MS-${milestoneNumber + 1}`);
    }

    
    // Clear form inputs
    setMilestoneName(`MS-${milestoneNumber + 1}`);
    setPlannedStartDate("");
    setPlannedEndDate("");
    setInvoiceValue("");
    setDescription("");
    
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Milestone Form</h2>
      {!existingMilestones && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="milestoneName"
          >
            Milestone Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="milestoneName"
            type="text"
            value={milestoneName}
            readOnly
          />
        </div>
      )}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="plannedStartDate"
        >
          Planned Start Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="plannedStartDate"
          type="date"
          value={plannedStartDate}
          onChange={(e) => setPlannedStartDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="plannedEndDate"
        >
          Planned End Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="plannedEndDate"
          type="date"
          value={plannedEndDate}
          onChange={(e) => setPlannedEndDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="invoiceValue"
        >
          Invoice Value (INR)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="invoiceValue"
          type="number"
          value={invoiceValue}
          onChange={(e) => setInvoiceValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSaveMilestone}
      >     
        Save Milestone
      </button>
      {errorMessage && (
        <p className="text-red-500 font-bold mb-4">{errorMessage}</p>
      )}


    {milestoneDetails && milestoneDetails.length >0 && (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Milestone Details</h2>
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">
                Milestone Name
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Planned Start Date
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Planned End Date
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Invoice Value (INR)
              </th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {milestoneDetails.map((milestone, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {milestone.milestoneName}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {milestone.plannedStartDate}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {milestone.plannedEndDate}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {milestone.invoiceValue}
                </td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {milestone.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    </div>
  );
};

export default NewMilestoneForm;
