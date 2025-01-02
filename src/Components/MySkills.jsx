import React, { useState } from "react";
import axios from "axios";

const MySkills = ({ initialSkills, userId }) => {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleAddSkill = async () => {
    if (newSkill.trim() !== "") {
      const updatedSkills = [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      setNewSkill("");

      try {
        // Update the techSkills array in the user document using axios
        const response = await axios.put(`${apiUrl}/users/${userId}`, {
          skill: newSkill.trim(),
        });
        console.log("Skill added:", response.data);
        // Optionally, handle the response, e.g., show a success message
      } catch (error) {
        console.error("Error updating techSkills:", error);
        // Optionally, handle the error, e.g., show an error message
      }
    }
  };

  return (
    <div className="max-w-full mx-auto p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">My Skills</h2>

      {/* Skills list */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center sm:justify-start">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white rounded-full px-4 py-2 m-2 cursor-pointer hover:bg-blue-800 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Add skill input */}
      {isAdding ? (
        <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-4">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full sm:w-64"
            placeholder="Enter a new skill"
          />
          <div className="flex gap-4">
            <button
              onClick={handleAddSkill}
              className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={() => setIsAdding(true)}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-lg"
          >
            + Add New Skill
          </button>
        </div>
      )}
    </div>
  );
};

export default MySkills;
