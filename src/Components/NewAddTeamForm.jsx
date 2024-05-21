import React, { useState } from "react";
import FinalEmployeeDropdown from "./FinalEmployeeDropdown";
import employeesData from "../data/employeesData";

const NewAddTeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [teamData, setTeamData] = useState([]);
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    const updatedMembers = selectedMembers.map((member) => ({
      ...member,
      role: selectedRole,
    }));
    console.log("my selected role", selectedRole);
    // setTeamData([...teamData, ...updatedMembers]);
    console.log("mu updated members", updatedMembers);
    setMembers([...members, ...updatedMembers]);
    setSelectedMembers([]);
    setSelectedRole("");
  };

  const handleSaveTeam = () => {
    if (selectedMembers.length === 0 && selectedRole === "") {
      const team = {
        teamName,
        members: members.map((member) => ({
          ...member,
        })),
      };
      setTeamData([...teamData, team]);
      setTeamName("");
      setSelectedMembers([]);
      setSelectedRole("");
      setMembers([]);
    } else {
      return alert("Please first add Team member before saving");
    }
  };

  console.log("my mebers", members);
  console.log("my team", teamData);

  const handleDropdownChange = (selectedOption) => {
    setSelectedMembers(selectedOption);
  };

  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="teamName"
        >
          Team Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="teamName"
          type="text"
          placeholder="Enter Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="members"
        >
          Add Team Members
        </label>
        <FinalEmployeeDropdown
          options={employeesData}
          isMultiSelect={true}
          value={selectedMembers}
          onChange={handleDropdownChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Role
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="role"
          type="text"
          placeholder="Enter Role"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        />
      </div>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          onClick={handleAddMember}
        >
          Add Member(s)
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSaveTeam}
        >
          Save Team
        </button>
      </div>

      <div className="flex flex-col justify-start items-start gap-2">
        {members &&
          members.length > 0 &&
          members.map((member) => (
            <div className="flex flex-row justify-start items-center gap-2">
              <div key={member.value} className="px-4 py-2">
                {member.label}
              </div>
              <div key={member.value} className="px-4 py-2">
                {member.role}
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Team Data</h2>
        <table className="border-collapse border border-gray-400 bg-white">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Team Name</th>
              <th className="border border-gray-400 px-4 py-2">
                Member Details
              </th>
              <th className="border border-gray-400 px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {teamData &&
              teamData.length > 0 &&
              teamData.map((team, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    {team.teamName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {team.members &&
                      team.members.length > 0 &&
                      team.members.map((member) => (
                        <div key={member.value} className="flex items-center">
                          <span className="ml-2 py-2">{member.label}</span>
                        </div>
                      ))}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {team.members &&
                      team.members.length > 0 &&
                      team.members.map((member) => (
                        <div
                          key={member.value}
                          className="flex flex-col justify-start items-center gap-8"
                        >
                          <span className="ml-2 py-4">{member.role}</span>
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewAddTeamForm;

// <img src="" alt={member.name} className="w-8 h-8 rounded-full" />
