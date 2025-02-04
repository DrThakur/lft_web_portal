import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import EmployeeDropdown from "./EmployeeDropdown";
import AddTeamForm from "./AddTeamForm";
import MilestoneForm from "./MilestoneForm";
import { FaPlus } from "react-icons/fa6";
import NewMilestoneForm from "./NewMilestoneForm";
import NewAddTeamForm from "./NewAddTeamForm";
import FinalEmployeeDropdown from "./FinalEmployeeDropdown";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";

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
  const [qaBQ, setQaBQ] = useState("");
  const [totalBQ, setTotalBQ] = useState("");
  const [link, setLink] = useState("");
  const [teams, setTeams] = useState([]);

  const [milestones, setMilestones] = useState([]);
  const [milestoneNumber, setMilestoneNumber] = useState(1);
  const [showMilestoneForm, setShowMilestoneForm] = useState(false);
  const [error, setError] = useState("");
  const [showAddTeamForm, setShowAddTeamForm] = useState(false);
  const [projectManager, setProjectManager] = useState("");


  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleAddTeamForm = () => {
    setShowAddTeamForm((prevState) => !prevState);
  };

  const toggleMilestoneForm = () => {
    setShowMilestoneForm((prevState) => !prevState);
  };

  const handleSelectProjectManager = (selectedOption) => {
    console.log("my project manager from select", selectedOption);
    setProjectManager(selectedOption);
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    // Gather form data
    const formData = {
      projectName,
      projectId,
      description,
      keywords,
      clientName,
      clientAddress,
      pointOfContact,
      contactDetails,
      smLeadId,
      location,
      startDate,
      endDate,
      duration,
      softwareBQ,
      hardwareBQ,
      fpgaBQ,
      qaBQ,
      totalBQ,
      link,
      teams,
      milestones,
      projectManager,
      // Add more fields as needed
    };

     // POST request to backend API
     try {
      const response = await axios.post("http://localhost:8002/projects", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Project created successfully:", response.data);
      // Handle success (e.g., show a success message, reset form, etc.)

      // Handle success (e.g., show a success message)
    
    // Reset form fields
    setProjectName("");
    setProjectId("");
    setDescription("");
    setKeywords("");
    setClientName("");
    setClientAddress("");
    setPointOfContact("");
    setContactDetails("");
    setSmLeadId("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setDuration("");
    setSoftwareBQ("");
    setHardwareBQ("");
    setFpgaBQ("");
    setQaBQ("");
    setTotalBQ("");
    setLink("");
    setTeams([]);
    setMilestones([]);
    setMilestoneNumber(1);
    setProjectManager("");

    console.log("Project Name after reset:", projectName);

    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Error creating project:", error.response.data);
        // Handle server-side error (e.g., show an error message)
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        // Handle network error (e.g., show a network error message)
      } else {
        // Something went wrong setting up the request
        console.error("Error setting up request:", error.message);
        // Handle other types of errors
      }
    }

    // Here you can send formData to your mock backend
    console.log("Form data:", formData);
  };

  const handleDeleteMilestone = (index) => {
    // Create a copy of the milestones array
    const updatedMilestones = [...milestones];
    // Remove the milestone at the specified index
    updatedMilestones.splice(index, 1);
    // Update the milestones state with the updated array
    setMilestones(updatedMilestones);
    setMilestoneNumber(milestones.length - 1);
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

  const handleSoftwareBQ = (event) => {
    setSoftwareBQ(event.target.value);
    calculateTotalBQ(event.target.value, hardwareBQ, fpgaBQ, qaBQ);
  };
  const handleHardwareBQ = (event) => {
    setHardwareBQ(event.target.value);
    calculateTotalBQ(softwareBQ, event.target.value, fpgaBQ, qaBQ);
  };
  const handleFpgaBQ = (event) => {
    setFpgaBQ(event.target.value);
    calculateTotalBQ(softwareBQ, hardwareBQ, event.target.value, qaBQ);
  };
  const handleQaBQ = (event) => {
    setQaBQ(event.target.value);
    calculateTotalBQ(softwareBQ, hardwareBQ, fpgaBQ, event.target.value);
  };

  const calculateTotalBQ = (softBQ, hardBQ, fpga, qa) => {
    if (softBQ && hardBQ && fpga && qa) {
      const finalBQ =
        parseInt(softBQ) + parseInt(hardBQ) + parseInt(fpga) + parseInt(qa);
      setTotalBQ(finalBQ);
      console.log("Total Bugdegst");
    } else {
      setTotalBQ("");
    }
  };

  const handleInputClick = (e) => {
    e.target.blur(); // Remove focus to hide virtual keyboard on mobile devices
    e.target.focus(); // Focus to open the date picker
  };

  return (
    <div className=" mx-auto  bg-white p-4 rounded-md mb-2 ">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
      <form  className="flex flex-col mt-8 overflow-y-auto h-[calc(100vh-210px)] xs:h-[calc(100vh-200px)]">

       {/* Project Information */}
<div className="projectInformation">
  <h3 className="text-xl font-semibold">Project Information</h3>

  {/* Project Name */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-2">
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
        className="border w-full rounded px-2 py-2 mt-1"
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
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>

    {/* S&M Lead */}
    <div className="flex flex-col">
      <label htmlFor="smLeadId" className="font-semibold">
        S&M Lead ID
      </label>
      <input
        type="text"
        id="smLeadId"
        value={smLeadId}
        onChange={(e) => setSmLeadId(e.target.value)}
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>

    {/* Location */}
    <div className="flex flex-col">
      <label htmlFor="location" className="font-semibold">
        Location
      </label>
      <div className="relative" ref={dropdownRef} >
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center rounded border px-4 py-2 w-full "
      >
        <span>{selectedOption || "--Select--"}</span>
        <FaChevronDown className="ml-2 text-gray-500" /> {/* Dropdown Icon */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute mt-1 w-full max-w-[80vw] bg-white border rounded shadow-lg z-10 ">
          <li
            onClick={() => handleOptionClick("")}
            className="px-4 py-2 cursor-pointer  hover:bg-blue-600 hover:text-white"
          >
            --Select--
          </li>
          <li
            onClick={() => handleOptionClick("Gurgaon")}
            className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Gurgaon
          </li>
          <li
            onClick={() => handleOptionClick("Bangalore")}
            className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Bangalore
          </li>
          <li
            onClick={() => handleOptionClick("Onsite")}
            className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Onsite
          </li>
        </ul>
      )}
    </div>
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
      className="border w-full rounded px-2 py-2 mt-1"
      rows={6}
    />
  </div>
</div>

        {/* Client Information */}
        <div className="clientInformation mt-2">
  <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
  <h3 className="text-xl font-semibold">Client Information</h3>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
    
    {/* Client Name */}
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

    {/* Client Address */}
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

    {/* Point of Contact */}
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

    {/* Contact Details */}
    <div className="flex flex-col mt-2">
      <label htmlFor="contactDetails" className="font-semibold">
        Contact Details
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

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    
    {/* Start Date */}
    <div className="flex flex-col mt-2">
      <label htmlFor="startDate" className="font-semibold">
        Start Date
      </label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="border rounded px-2 py-2 mt-1 w-full"
        onClick={handleInputClick}
      />
    </div>

    {/* End Date */}
    <div className="flex flex-col mt-2">
      <label htmlFor="endDate" className="font-semibold">
        End Date
      </label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
        className="border rounded px-2 py-2 mt-1 w-full"
      />
      {error && (
        <p className="text-red-500 text-center font-semibold mt-1">
          {error}
        </p>
      )}
    </div>

    {/* Duration */}
    <div className="flex flex-col mt-2">
      <label htmlFor="duration" className="font-semibold">
        Duration
      </label>
      <input
        type="text"
        id="duration"
        value={formatDuration()}
        className="border rounded px-2 py-2 mt-1 w-full"
        readOnly
      />
    </div>

  </div>
</div>

        {/* Budget */}
        <div className="budget mt-2"> 
  <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
  <h3 className="text-xl font-semibold">Budget</h3>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
    
    {/* Software BQ */}
    <div className="flex flex-col mt-2">
      <label htmlFor="softwareBQ" className="font-semibold">
        Software BQ(INR)
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
          <MdOutlineCurrencyRupee className="text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="number"
          id="softwareBQ"
          aria-describedby="helper-text-explanation"
          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="12345 or 12345-6789"
          pattern="^\d{5}(-\d{4})?$"
          value={softwareBQ}
          onChange={handleSoftwareBQ}
          required
        />
      </div>
    </div>

    {/* Hardware BQ */}
    <div className="flex flex-col mt-2">
      <label htmlFor="hardwareBQ" className="font-semibold">
        Hardware BQ(INR)
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
          <MdOutlineCurrencyRupee className="text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="number"
          id="hardwareBQ"
          aria-describedby="helper-text-explanation"
          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="12345 or 12345-6789"
          pattern="^\d{5}(-\d{4})?$"
          value={hardwareBQ}
          onChange={handleHardwareBQ}
          required
        />
      </div>
    </div>

    {/* FPGA BQ */}
    <div className="flex flex-col mt-2">
      <label htmlFor="fpgaBQ" className="font-semibold">
        FPGA BQ(INR)
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
          <MdOutlineCurrencyRupee className="text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="number"
          id="fpgaBQ"
          aria-describedby="helper-text-explanation"
          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="12345 or 12345-6789"
          pattern="^\d{5}(-\d{4})?$"
          value={fpgaBQ}
          onChange={handleFpgaBQ}
          required
        />
      </div>
    </div>

    {/* QA BQ */}
    <div className="flex flex-col mt-2">
      <label htmlFor="qaBQ" className="font-semibold">
        QA BQ(INR)
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
          <MdOutlineCurrencyRupee className="text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="number"
          id="qaBQ"
          aria-describedby="helper-text-explanation"
          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="12345 or 12345-6789"
          pattern="^\d{5}(-\d{4})?$"
          value={qaBQ}
          onChange={handleQaBQ}
          required
        />
      </div>
    </div>

    {/* Total BQ */}
    <div className="flex flex-col mt-2">
      <label htmlFor="totalBQ" className="font-semibold">
        Total BQ(INR)
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex flex-row items-center ps-3.5 pointer-events-none">
          <MdOutlineCurrencyRupee className="text-center w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="number"
          id="totalBQ"
          aria-describedby="helper-text-explanation"
          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="12345 or 12345-6789"
          pattern="^\d{5}(-\d{4})?$"
          value={totalBQ}
          readOnly
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
  
  {/* Button for Adding New Milestone */}
  {!showMilestoneForm && (
    <button
      className="border rounded-full bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 flex flex-row justify-start items-center gap-2  mt-2 w-auto"  // Ensure it's full-width on mobile
      onClick={handleMilestoneClick}
    >
      <FaPlus />
      Add New Milestone
    </button>
  )}

  {/* Show New Milestone Form if the form is toggled */}
  {showMilestoneForm && (
    <NewMilestoneForm
      toggleMilestoneForm={toggleMilestoneForm}
      onSave={handleAddMilestone}
      existingMilestones={milestones}
    />
  )}

  {/* Milestone Table */}
  {!showMilestoneForm && milestones && milestones.length > 0 && (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Milestone Details</h2>
      
      {/* Scrollable Table on Small Screens */}
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-400 w-full bg-white p-2">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Milestone Name</th>
              <th className="border border-gray-400 px-4 py-2">Planned Start Date</th>
              <th className="border border-gray-400 px-4 py-2">Planned End Date</th>
              <th className="border border-gray-400 px-4 py-2">Invoice Value (INR)</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
              <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {milestones.map((milestone, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2 text-center">{milestone.milestoneName}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">{milestone.plannedStartDate}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">{milestone.plannedEndDate}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">{milestone.invoiceValue}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">{milestone.description}</td>
                <td className="border border-gray-400 px-4 py-2 text-center">
                  <button
                    className="border rounded-md bg-red-400 text-white hover:bg-red-700 p-2"
                    onClick={() => handleDeleteMilestone(index)}
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
  )}
</div>

        {/* Project Manager */}
        <div className="projectManager">  
  <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
  <h3 className="text-xl font-semibold">Add Project Manager</h3>
  
  <div className="flex flex-col sm:flex-row justify-start items-center gap-2 mt-2 py-2">
    {/* Label for the Project Manager */}
    <span className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6 text-left">Project Manager</span>

    {/* Dropdown for selecting Project Manager */}
    <div className="w-full sm:w-3/4 md:w-4/5 lg:w-2/3 xl:w-1/2 mt-2 xl:-ml-10 2xl:-ml-24">  {/* Changed mt-2 to mt-4 */}
      <FinalEmployeeDropdown
        value={projectManager}
        placeholder="Select Project Manager"
        onChange={handleSelectProjectManager}
      />
    </div>
  </div>
</div>

        {/* Add Teams */}
        <div className="addTeam"> 
  <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
  <h3 className="text-xl font-semibold">Add Teams</h3>
  
  {!showAddTeamForm && (
    <button
      className="border rounded-full bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 flex flex-row justify-start items-center gap-2 w-auto  mt-2"
      onClick={handleAddTeamClick}
    >
      <FaPlus /> Add Team
    </button>
  )}
  
  {showAddTeamForm && (
    <NewAddTeamForm
      toggleForm={toggleAddTeamForm}
      onSave={handleAddTeam}
    />
  )}

  {!showAddTeamForm && teams && teams.length > 0 && (
    <div className="mt-8 text-center">
      <h2 className="text-lg font-bold mb-4">Team Data</h2>
      
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-400 bg-white w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Team Name</th>
              <th className="border border-gray-400 px-4 py-2">Member Details</th>
              <th className="border border-gray-400 px-4 py-2">Role</th>
              <th className="border border-gray-400 px-4 py-2">Delete Member</th>
              <th className="border border-gray-400 px-4 py-2">Delete Team</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{team.teamName}</td>
                
                {/* Member Details */}
                <td className="border border-gray-400 px-4 py-2">
                  {team.members && team.members.length > 0 && team.members.map((member) => (
                    <div key={member.value} className="flex justify-center items-center py-2">
                      <div className="flex justify-center items-center h-10">
                        <img
                          src={`https://puneautoexpo.in/wp-content/uploads/2017/10/speaker3-min.jpg`} //memeber.data.photo
                          alt={member.data.fullName}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="ml-2">
                          <div>{member.data.fullName} ({member.data.employeeId})</div>
                          <div className="text-gray-500 text-sm">{member.data.designation}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </td>

                {/* Role */}
                <td className="border border-gray-400 px-4 py-2">
                  {team.members && team.members.length > 0 && team.members.map((member) => (
                    <div key={member.value} className="flex flex-col justify-start items-center gap-8">
                      <span className="ml-2 py-4">{member.role}</span>
                    </div>
                  ))}
                </td>

                {/* Delete Member */}
                <td className="border border-gray-400 px-4 py-2 text-center">
                  {team.members && team.members.length > 0 && team.members.map((member) => (
                    <div key={member.value} className="py-2">
                      <button className="border rounded-md bg-red-400 text-white hover:bg-red-700 p-2">
                        Delete
                      </button>
                    </div>
                  ))}
                </td>

                {/* Delete Team */}
                <td className="border border-gray-400 px-4 py-2 text-center">
                  <button className="border rounded-md bg-red-400 text-white hover:bg-red-700 p-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}
</div>

        {/* Project Repository */}
        <div className="addProjectRepository">
  <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
  <h3 className="text-xl font-semibold">Add Project Repository</h3>
  <div className="flex flex-col sm:flex-row gap-4 mt-2">
    
    {/* Link section */}
    <div className="projectRepositoryLink flex flex-row justify-start items-center gap-4 sm:w-[60%] md:w-[75%] ">
      <label>Link</label>
      <input
        type="url"
        id="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>
    <div className="flex flex-col sm:flex-row sm:w-auto mt-1 sm:ml-auto w-full">
  <button className="border rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-700 w-[150px] py-2 mx-auto sm:mx-0 -mt-3 sm:mt-0">
    Add New Link
  </button>
</div>
  </div>
</div>

        {/* Save Button */}
        <div className="saveButtons flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8">
  <button
    type=""
    className="border-2 border-blue-500 rounded px-4 py-2 hover:bg-blue-600 hover:text-white w-full sm:w-1/4"
  >
    Save as Draft
  </button>
  <button
    type="submit"
    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 border-2 w-full sm:w-1/4"
    onClick={handleSubmit}
  >
    Save
  </button>
</div>

      </form>
    </div>
  );
};

export default CreateProjectForm;
