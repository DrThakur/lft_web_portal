import React, { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import EmployeeDropdown from "./EmployeeDropdown";
import AddTeamForm from "./AddTeamForm";
import MilestoneForm from "./MilestoneForm";
import { FaPlus } from "react-icons/fa6";

const CreateProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [pointOfContact, setPointOfContact] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [smLeadId, setSmLeadId] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState("");
  const [softwareBQ, setSoftwareBQ] = useState("");
  const [hardwareBQ, setHardwareBQ] = useState("");
  const [fpgaBQ, setFpgaBQ] = useState("");
  const [totalBQ, setTotalBQ] = useState("");
  const [teams, setTeams] = useState([]);

  const [milestones, setMilestones] = useState([]);
  const [milestoneNumber, setMilestoneNumber] = useState(1);
  const [showMilestoneForm, setShowMilestoneForm] = useState(false);
  const [error, setError] = useState("");
  const [showAddTeamForm, setShowAddTeamForm] = useState(false);
  const [selectedProjectManager, setSelectedProjectManager] = useState('');


  const handleSelectProjectManager =(selectedOption)=> {
    console.log("my project manager from select", selectedOption);
    setSelectedProjectManager(selectedOption);
  }
  const handleSelectLocation = (event) => {
    // Update the selectedOption state variable with the value of the selected option
    setLocation(event.target.value);
  };

  const handleAddTeamClick = () => {
    setShowAddTeamForm(true);
  };

  const handleMilestoneClick = () => {
    setShowMilestoneForm(true);
  };

  const handleAddMilestone = (newMilestone) => {
    setMilestones([...milestones, newMilestone]);
    const nextMilestoneNumber = milestones.length + 1;
    setMilestoneNumber(nextMilestoneNumber);
  };

  const handleAddTeam = (newTeam) => {
    setTeams([...teams, newTeam]);
  };

  const hideAddTeamForm = () => {
    setShowAddTeamForm(false);
  };

  const hideMilestoneForm = () => {
    setShowMilestoneForm(false);
  };

  // State variables for milestones, project manager, team, repository, etc.

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleDeleteMilestone = (index) => {
    // Create a copy of the milestones array
  const updatedMilestones = [...milestones];
  // Remove the milestone at the specified index
  updatedMilestones.splice(index, 1);
  // Update the milestones state with the updated array
  setMilestones(updatedMilestones);
  setMilestoneNumber(milestones.length-1);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    setError("");
    calculateDuration(event.target.value, endDate);
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    if (startDate && selectedEndDate <= startDate) {
      setError("End date must be greater than start date");
    } else {
      setError("");
      setEndDate(selectedEndDate);
      calculateDuration(startDate, selectedEndDate);
    }
  };

  const calculateDuration = (start, end) => {
    if (start && end) {
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);

      let years = endDateObj.getFullYear() - startDateObj.getFullYear();
      let months = endDateObj.getMonth() - startDateObj.getMonth();
      let days = endDateObj.getDate() - startDateObj.getDate();

      if (months < 0) {
        years--;
        months += 12;
      }

      if (days < 0) {
        months--;
        const tempDate = new Date(
          endDateObj.getFullYear(),
          endDateObj.getMonth(),
          0
        );
        days += tempDate.getDate();
      }

      setDuration({ years, months, days });
    } else {
      setDuration(null); // Reset duration if start or end date is not set
    }
  };

  const formatDuration = () => {
    if (!duration) {
      return ""; // Return empty string if duration is not yet calculated
    } else {
      let formattedDuration = "";
      if (duration.years > 0) {
        formattedDuration += `${duration.years} years, `;
      }
      if (duration.months > 0) {
        formattedDuration += `${duration.months} months, `;
      }
      if (duration.days > 0) {
        formattedDuration += `${duration.days} days`;
      }
      return formattedDuration;
    }
  };

  const handleInputClick = (e) => {
    e.target.blur(); // Remove focus to hide virtual keyboard on mobile devices
    e.target.focus(); // Focus to open the date picker
  };

  return (
    <div className="container mx-auto bg-white p-4 rounded-md mt-2">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8">
        {/* Project Information */}
        <div className="projectInformation">
          <h3 className="text-xl font-semibold">Project Information</h3>
          {/* Project Name */}
          <div className="grid grid-cols-3 gap-4 mt-2">
            <div className="flex flex-col">
              <label htmlFor="projectName" className="font-semibold">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>
            {/* Project ID */}
            <div className="flex flex-col">
              <label htmlFor="projectId" className="font-semibold">
                Project ID
              </label>
              <input
                type="text"
                id="projectId"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="border  rounded px-2 py-2 mt-1"
              />
            </div>

            {/* Keywords */}
            <div className="flex flex-col">
              <label htmlFor="keywords" className="font-semibold">
                Keywords
              </label>
              <input
                type="text"
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="border rounded px-2 py-2 mt-1"
              />
            </div>
            {/* S&M Lead */}
            <div className="flex flex-col">
              <label htmlFor="projectId" className="font-semibold">
                S&M Lead ID
              </label>
              <input
                type="text"
                id="smLeadId"
                value={smLeadId}
                onChange={(e) => setSmLeadId(e.target.value)}
                className="border  rounded px-2 py-2 mt-1"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>
              <select
                className="rounded border px-2 py-2 mt-1"
                value={location}
                onChange={handleSelectLocation}
              >
                <option value="">--Select--</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Banaglore">Banagalore</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>
          </div>
          {/* Description */}
          <div className="flex flex-col mt-3">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded px-2 py-2 mt-1"
              rows={6}
            />
          </div>
        </div>

        {/* Client Information */}

        <div className="clientInformation mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Client Information</h3>
          <div className="grid grid-cols-3 gap-4">
            {/*Client Name */}
            <div className="flex flex-col mt-2">
              <label htmlFor="clientName" className="font-semibold">
                Client Name
              </label>
              <input
                type="text"
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>

            {/*Client Address */}
            <div className="flex flex-col mt-2">
              <label htmlFor="clientAddress" className="font-semibold">
                Client Address
              </label>
              <input
                type="text"
                id="clientAddress"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>

            {/*Point of Contact */}
            <div className="flex flex-col mt-2">
              <label htmlFor="pointOfContact" className="font-semibold">
                Point of Contact
              </label>
              <input
                type="text"
                id="pointOfContact"
                value={pointOfContact}
                onChange={(e) => setPointOfContact(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>

            {/*Contact Details */}
            <div className="flex flex-col">
              <label htmlFor="contactDetails" className="font-semibold">
                Contact Deatils
              </label>
              <input
                type="text"
                id="contactDetails"
                value={contactDetails}
                onChange={(e) => setContactDetails(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>
          </div>
        </div>

        {/* Project Duration */}
        <div className="projectDuration mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Project Duration</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col mt-2">
              <label htmlFor="startDate" className="font-semibold">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="border  rounded px-2 py-2 mt-1"
                onClick={handleInputClick}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="endDate" className="font-semibold">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="border  rounded px-2 py-2 mt-1"
              />
              {error && (
                <p className="text-red-500 text-center font-semibold">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="duration" className="font-semibold">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                value={formatDuration()}
                className="border  rounded px-2 py-2 mt-1"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="budget mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Budget</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col mt-2">
              <label htmlFor="softwareBQ" className="font-semibold">
                Software BQ(INR)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="softwareBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={softwareBQ}
                  onChange={(e) => setSoftwareBQ(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="hardwareBQ" className="font-semibold">
                Hardware BQ(INR)
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="hardwareBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={hardwareBQ}
                  onChange={(e) => setHardwareBQ(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="fpgaBQ" className="font-semibold">
                FPGA BQ(INR)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="fpgaBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={fpgaBQ}
                  onChange={(e) => setFpgaBQ(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="totalBQ" className="font-semibold">
                Total BQ(INR)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
                  <MdOutlineCurrencyRupee className=" text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="totalBQ"
                  aria-describedby="helper-text-explanation"
                  className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="12345 or 12345-6789"
                  pattern="^\d{5}(-\d{4})?$"
                  value={totalBQ}
                  onChange={(e) => setTotalBQ(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Add Milestones */}
        <div className="addMilestones">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Add Milestones</h3>
          {!showMilestoneForm && (
            <button
              className="border rounded-full bg-purple-500 text-white hover:bg-purple-700  px-4 py-2 flex flex-row justify-start items-center gap-2 -ml-2 mt-2"
              onClick={handleMilestoneClick}
            >
              <FaPlus />
              Add New Milestone
            </button>
          )}
          {showMilestoneForm && (
            <MilestoneForm
            milestoneNumber={milestoneNumber}
              onAddMilestone={handleAddMilestone}
              onSave={hideMilestoneForm}
            />
          )}

          <div>
            <table>
              {milestones.length >0 && (
                <thead>
                  <tr>
                    <th>Milestone</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Invoice Value (INR)</th>
                    <th>Action</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {milestones.map((milestone, index) => (
                  <tr key={index}>
                    <td>{milestone.name}</td>
                    <td>{milestone.description}</td>
                    <td>{milestone.startDate}</td>
                    <td>{milestone.endDate}</td>
                    <td>{milestone.invoiceValue}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteMilestone(index)}
                        className="border rounded-md bg-red-400 text-white hover:bg-red-700 p-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Project Manager */}
        <div className="projectManager">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Add Project Manager</h3>
          <div className="flex flex-row justify-start items-center gap-4 mt-2 py-2">
            <span>Project Manager</span>
            <EmployeeDropdown
              value={selectedProjectManager}
              className="w-1/2"
              placeholder="Select Project Manager"
              onChange={handleSelectProjectManager}
            />
          </div>
        </div>
        {/* Add Teams */}
        <div className="addTeam">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Add Teams</h3>
          {!showAddTeamForm && (
            <button
              className="border rounded-full bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 flex flex-row justify-start items-center gap-2 -ml-2 mt-2"
              onClick={handleAddTeamClick}
            >
              <FaPlus /> Add Team
            </button>
          )}
          {showAddTeamForm && (
            <AddTeamForm onAddTeam={handleAddTeam} onSave={hideAddTeamForm} />
          )}
        </div>
        {/* Show added teams */}
        {console.log("my Teams", teams)}
        {teams.map((team, index) => (
          <div key={index} className="flex flex-wrap justify-start items-center gap-2">
            <h3 className="text-xl font-semibold">Team {index + 1}</h3>
            <div>
              <span>Name: {team.name}</span>
            </div>
            <div>
              <span>Members:</span>
              <ul>
                {team.members.map((member) => (
                  <li key={member.value}>{member.label}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        {/* Project Repository */}
        <div className="addProjectRepository">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Add Project Repository</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="projectRepositoryLink flex flex-col">
              <label>Link</label>
              <input
                type="url"
                id="link"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="border w-full rounded px-2 py-2 mt-1"
              />
            </div>
            <div className="flex flex-col mt-7 w-1/3">
              <button className="border rounded bg-purple-500 p-2 text-white font-semibold hover:bg-purpel-700">
                Add New Link
              </button>
            </div>
          </div>
        </div>
        {/* Save Button */}
        <div className="saveButtons flex flex-row justify-center items-center gap-8 mt-4">
          <button
            type=""
            className="border-2 border-blue-500 rounded px-4 py-2 hover:bg-blue-600 hover:text-white w-1/5"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 border-2 w-1/5"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;
