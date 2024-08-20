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
      <div className="flex flex-wrap mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white rounded-full px-4 py-4 m-2 cursor-pointer hover:bg-blue-800"
          >
            {skill}
          </div>
        ))}
      </div>
      {isAdding ? (
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border rounded-l px-4 py-4 w-64"
            placeholder="Enter a new skill"
          />
          <button
            onClick={handleAddSkill}
            className="bg-green-500 text-white px-4 py-4 rounded-r hover:bg-green-800"
          >
            Submit
          </button>
          <button
            onClick={() => setIsAdding(false)}
            className="ml-2 text-red-500 hover:text-white hover:bg-red-500 px-4 py-4 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={() => setIsAdding(true)}
            className="bg-green-500 text-white px-4 py-4 rounded w-1/6 text-lg"
          >
           + Add New Skill
          </button>
        </div>
      )}
    </div>
  );
};

export default MySkills;
