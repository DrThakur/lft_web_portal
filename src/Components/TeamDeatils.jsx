import React from "react";

const TeamDeatils = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
        <thead  className="rounded-lg">
          <tr>
            <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Team</th>
            <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Team Name</th>
            <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Members</th>
            <th className="sticky top-0 bg-rose-200 px-6 py-3 border-b border-gray-300">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Team 1 column */}
            <td className="px-6 py-4 border-b border-gray-300 bg-yellow-300 text-center font-bold text-xl">Team 1</td>
            {/* Team Name column */}
            <td className="px-6 py-4 border-b border-gray-300 bg-green-300 text-center font-bold text-xl">Software</td>
            {/* Members column */}
            <td className="px-6 py-4 border-b border-gray-300 bg-purple-300 text-center font-semibold">
              <div className="mb-2 ">John Doe</div>
              <div className="mb-2">Jane Doe</div>
              <div className="mb-2">Alice Smith</div>
              <div className="mb-2">Bob Johnson</div>
            </td>
            {/* Role column */}
            <td className="px-6 py-4 border-b border-gray-300 bg-blue-300 text-center font-semibold">
              <div className="mb-2 ">Manager</div>
              <div className="mb-2">Developer</div>
              <div className="mb-2">Designer</div>
              <div className="mb-2">QA</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
};

export default TeamDeatils;
