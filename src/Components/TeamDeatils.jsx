import React from "react";

const TeamDeatils = ({ teams }) => {
    if (teams.length === 0) {
        return null; // If no teams, don't render the table
      }

  return (
    <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
      <thead className="rounded-lg">
        <tr>
          <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Team</th>
          <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Team Name</th>
          <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Members</th>
          <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Role</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={index}>
            <td className="px-6 py-4 border-b border-gray-300 bg-yellow-100 text-center font-bold text-xl">Team {index + 1}</td>
            <td className="px-6 py-4 border-b border-gray-300 bg-green-100 text-center font-bold text-xl">{team.teamName}</td>
            <td className="px-6 py-4 border-b border-gray-300 bg-purple-50 text-center font-semibold">
              {team.members.map((member, idx) => (
                <div key={idx} className="mb-2">{member.name}</div>
              ))}
            </td>
            <td className="px-6 py-4 border-b border-gray-300 bg-blue-100 text-center font-semibold">
              {team.members.map((member, idx) => (
                <div key={idx} className="mb-2">{member.role}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  );
};

export default TeamDeatils;
