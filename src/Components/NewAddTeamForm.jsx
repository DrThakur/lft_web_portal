import React, { useState } from "react";
import FinalEmployeeDropdown from "./FinalEmployeeDropdown";
import employeesData from "../data/employeesData";
import { FaPlus } from "react-icons/fa6";

const NewAddTeamForm = ({ toggleForm, onSave }) => {
  const [teamName, setTeamName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [teamData, setTeamData] = useState([]);
  const [members, setMembers] = useState([]);

  const handleCancel = () => {
    if (toggleForm) {
      toggleForm();
    }
    // Additional logic for independent use can be added here
  };

  const handleAddMember = () => {
    const updatedMembers = selectedMembers.map((member) => ({
      ...member,
      role: selectedRole,
    }));
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
      onSave(team);
      setTeamName("");
      setSelectedMembers([]);
      setSelectedRole("");
      setMembers([]);
    } else {
      return alert(
        "Please add team members and provide a team name before saving."
      );
    }
  };

  console.log("my mebers", members);
  console.log("my team", teamData);

  const handleDropdownChange = (selectedOption) => {
    setSelectedMembers(selectedOption);
  };

  const handleSaveAllTeams = () => {
    if (teamData.length > 0) {
      onSave(teamData);
      toggleForm();; // Close form if needed
    }
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 gap-4 z-50">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="teamName"
          >
            Team Name
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          >
            <option value="">Select Team Name</option>
            <option value="Software">Software</option>
            <option value="Hardware">Hardware</option>
            <option value="FPGA">FPGA</option>
            <option value="QA">QA</option>
            <option value="FPGA Verification">FPGA Verification</option>
          </select>
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
            className="w-1/2"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Software Lead">Software Lead</option>
            <option value="Hardware Lead">Hardware Lead</option>
            <option value="FPGA Lead">FPGA Lead</option>
            <option value="QA Lead">QA Lead</option>
            <option value="Module Lead">Module Lead</option>
            <option value="Architect">Architect</option>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
          </select>
        </div>
        <div className="mt-6 ml-4 text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outlinem ml-16 mr-8 flex flex-row justify-center items-center gap-4"
            onClick={handleAddMember}
          >
            <FaPlus /> Add Member(s)
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mr-4 w-1/12"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-1/12"
          onClick={handleSaveTeam}
        >
          Save Team
        </button>
        {teamData.length > 0 && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/8"
            onClick={handleSaveAllTeams}
          >
            Save All Milestones
          </button>
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-2">
        {members &&
          members.length > 0 &&
          members.map((member) => (
            <div className="flex flex-row justify-start items-center gap-2">
              <div key={member.value} className="px-4 py-2">
                <div className="flex justify-center items-center h-10">
                  <img
                    src={`https://puneautoexpo.in/wp-content/uploads/2017/10/speaker3-min.jpg`} // memebe.data.photo
                    alt={member.data.fullName}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div>
                      {member.data.fullName} ({member.data.employeeId})
                    </div>
                    <div className="text-gray-500 text-sm">
                      {member.data.designation}
                    </div>
                  </div>
                </div>
              </div>
              <div key={member.value} className="px-4 py-2">
                {member.role}
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-lg font-bold mb-4">Team Data</h2>
        <div className="ml-[500px]">
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
                          <div
                            key={member.value}
                            className="flex items-center py-2"
                          >
                            <div className="flex justify-center items-center h-10 ">
                              <img
                                src={`https://puneautoexpo.in/wp-content/uploads/2017/10/speaker3-min.jpg`} // memeber.data.photo
                                alt={member.data.name}
                                className="w-8 h-8 rounded-full"
                              />
                              <div>
                                <div>
                                  {member.data.fullName} ({member.data.employeeId})
                                </div>
                                <div className="text-gray-500 text-sm">
                                  {member.data.designation}
                                </div>
                              </div>
                            </div>
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
    </div>
  );
};

export default NewAddTeamForm;

// <img src="" alt={member.name} className="w-8 h-8 rounded-full" />
