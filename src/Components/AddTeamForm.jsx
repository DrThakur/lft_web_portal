// AddTeamForm.js
import React, { useState } from "react";
import EmployeeDropdown from "./EmployeeDropdown";
import { FaPlus } from "react-icons/fa6";

const AddTeamForm = ({ onAddTeam, onSave }) => {
  const [teamName, setTeamName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [role, setRole] = useState("");
  const [showSelectedMembers, setShowSelectedMembers] = useState(false);

  const handleAddMember = (selectedOption) => {
    console.log("my selected option", selectedOption);
    // console.log("My Mbers", selectedMembers);
    console.log("my mebers", selectedMembers);
    // setSelectedMembers([...selectedMembers, selectedOption]);
    setSelectedMembers([...selectedOption]);
    // const newSelectedMembers = selectedOption.filter(option => !selectedMembers.includes(option));
    // setSelectedMembers((prevSelectedMembers) => [...prevSelectedMembers, ...newSelectedMembers]);
    console.log("my final members", selectedMembers)
  };

  const handleFinalAddMember = ()=> {
    console.log("handleFinalAddMember",selectedMembers)
    setShowSelectedMembers(true);
  }
  
  console.log("my final members -inside", selectedMembers);
  const handleSaveTeam = () => {
    const newTeam = {
      name: teamName,
      members: selectedMembers,
    };
    onAddTeam(newTeam);
    onSave(newTeam);
    setTeamName("");
    setSelectedMembers([]);
  };

  return (
    <div className="mb-4 flex flex-col">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col mb-2 col-start-1 col-end-2">
          <label>Team Name</label>
          <input
            type="text"
            placeholder="Enter team name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="border rounded px-2 py-2 mt-2 h-[48px]"
          />
        </div>
        <div className="flex flex-col col-start-2 col-end-3">
          <label className="mb-2">Add Team Members</label>
          <EmployeeDropdown
            value={selectedMembers}
            isMultiSelect
            placeholder="Select Team Member"
            onChange={handleAddMember}
          />
        </div>
        <div className="flex flex-col col-start-3 col-end-4">
          <label htmlFor="role">Role</label>
          <select
            className="p-2 border rounded mt-2 h-[46px]"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">--Select the role--</option>
            <option value="SWLead">SW Lead</option>
            <option value="HW Lead">HW Lead</option>
            <option value="FPGA Lead">FPGA Lead</option>
            <option value="QA Lead">QA Lead</option>
            <option value="Module Lead">Module Lead</option>
            <option value="Architect">Architect</option>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
          </select>
        </div>
        <div className="w-full col-start-4 col-end-5 mt-8 text-center ml-8">
          <button
            onClick={handleFinalAddMember}
            className="bg-purple-500 text-white rounded-full px-6 py-2 hover:bg-purple-700 flex flex-row justify-start items-center gap-2"
          >
            <FaPlus />
            <span> Add Member(s)</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center mt-4 mx-auto">
        <div className="mx-auto">
          <button
            onClick={handleSaveTeam}
            className="bg-blue-500 text-white rounded px-8 py-2 hover:bg-blue-700 border w-full"
          >
            Save Team
          </button>
        </div>
        <div className="flex items-center">
          {showSelectedMembers && selectedMembers.length > 0 && (
            <div className="ml-2">
              <span>Selected Members:</span>
              <ul>
                {selectedMembers.map((member) => (
                  <li key={member.value}>{member.label}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTeamForm;
