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
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UpdateProjectForm = () => {
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

  // Handle start date change
  const handleStartDateChange = (date) => {
    if (!date) {
      // Handle case when the date is cleared (clear button is pressed)
      setStartDate("");
      setDuration(null);  // Reset duration if the start date is cleared
    } else {
      setStartDate(date);
      setError("");
      if (date && endDate) {
        calculateDuration(date, endDate);
      }
    }
  };

  // Handle end date change
  const handleEndDateChange = (date) => {
    if (!date) {
      // Handle case when the date is cleared (clear button is pressed)
      setEndDate("");
      setDuration(null);  // Reset duration if the end date is cleared
    } else if (startDate && date <= startDate) {
      setError("End date must be greater than start date");
    } else {
      setError("");
      setEndDate(date);
      if (startDate && date) {
        calculateDuration(startDate, date);
      }
    }
  };


  // Function to calculate the duration
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

  // Function to format the duration as a readable string
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
    <div className=" mx-auto  bg-white py-4 rounded-md  ">
      <form className="flex flex-col ">

        {/* Project Information */}
        <div className="projectInformation">
          <h3 className="text-xl font-semibold">Project Information</h3>

          {/* Project Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-2">
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
                      className="px-4 py-2 cursor-pointer bg-blue-300 text-white font-semibold  hover:bg-blue-600 hover:text-white"
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
              rows={3}
            />
          </div>
        </div>

        {/* Client Information */}
        <div className="clientInformation mt-2">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Client Information</h3>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-2">

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
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">

            {/* Start Date */}
            <div className="flex flex-col mt-2">
              <label htmlFor="startDate" className="font-semibold">
                Start Date
              </label>
              {/* <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="border rounded px-2 py-2 mt-1 w-full"
        onClick={handleInputClick}
      /> */}
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat="dd-MMM-yyyy"
                showYearDropdown
                yearDropdownItemNumber={25}
                scrollableYearDropdown
                className="border rounded px-2 py-2 mt-1 w-full"
                placeholderText="Select Start Date"
                isClearable={startDate !== ""}
              />
            </div>

            {/* End Date */}
            <div className="flex flex-col mt-2">
              <label htmlFor="endDate" className="font-semibold">
                End Date
              </label>
              {/* <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
        className="border rounded px-2 py-2 mt-1 w-full"
      /> */}
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="dd-MMM-yyyy"
                showYearDropdown
                yearDropdownItemNumber={25}
                scrollableYearDropdown
                className="border rounded px-2 py-2 mt-1 w-full "
                placeholderText="Select End Date"
                isClearable={endDate !== ""}
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




        {/* Project Manager */}
        <div className="projectManager">
          <hr className="border-2 mt-2 mb-2 rounded border-dashed" />
          <h3 className="text-xl font-semibold">Add Project Manager</h3>

          <div className="flex flex-col sm:flex-row justify-start items-center gap-2 mt-2 py-2">
            {/* Label for the Project Manager */}
            <span className="w-full sm:w-2/4  text-left">Project Manager</span>

            {/* Dropdown for selecting Project Manager */}
            <div className="w-full sm:w-3/4  mt-2 ">  {/* Changed mt-2 to mt-4 */}
              <FinalEmployeeDropdown
                value={projectManager}
                placeholder="Select Project Manager"
                onChange={handleSelectProjectManager}
              />
            </div>
          </div>
        </div>

  

      



      </form>
    </div>
  );
};

export default UpdateProjectForm;
