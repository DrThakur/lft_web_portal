// MilestoneForm.js

import React, { useState } from "react";

const MilestoneForm = ({ milestoneNumber,onAddMilestone, onSave }) => {
  
  const [milestone, setMilestone] = useState({
    name: `MS-${milestoneNumber}`,
    description: "",
    startDate: "",
    endDate: "",
    invoiceValue: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilestone({ ...milestone, [name]: value });
  };

  const handleSave = () => {
    onAddMilestone(milestone)
    onSave(milestone);
    setMilestone({
      name: `MS-${milestoneNumber}`,
      description: "",
      startDate: "",
      endDate: "",
      invoiceValue: "",
    });
  };

  return (
    <div className="milestone-form">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div>
      <label htmlFor="milestoneName" className="font-semibold">
        Milestone Name
      </label>
      <input
        type="text"
        name="name"
        value={milestone.name}
        onChange={handleChange}
        className="border w-full rounded px-2 py-2 mt-1"
        readOnly
      />
    </div>

    <div>
      <label htmlFor="startDate" className="font-semibold">
        Planned Start Date:
      </label>
      <input
        type="date"
        name="startDate"
        value={milestone.startDate}
        onChange={handleChange}
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>

    <div>
      <label>Planned End Date:</label>
      <input
        type="date"
        name="endDate"
        value={milestone.endDate}
        onChange={handleChange}
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>

    <div>
      <label>Invoice Value (INR):</label>
      <input
        type="text"
        name="invoiceValue"
        value={milestone.invoiceValue}
        onChange={handleChange}
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>
  </div>

  <div className="flex flex-col gap-4 mt-4">
    <div>
      <label>Description:</label>
      <textarea
        name="description"
        value={milestone.description}
        onChange={handleChange}
        rows={5}
        className="border w-full rounded px-2 py-2 mt-1"
      />
    </div>

    <div className="text-center font-semibold">
      <button
        onClick={handleSave}
        className="border rounded-md p-2 bg-blue-500 text-white hover:bg-blue-700 w-1/2 sm:w-1/4 lg:w-1/6"
      >
        Save
      </button>
    </div>
  </div>
</div>

  );
};

export default MilestoneForm;
