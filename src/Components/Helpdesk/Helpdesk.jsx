// import React, { useState } from 'react';

// const Helpdesk = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleDepartmentChange = (e) => {
//     const department = e.target.value;
//     setSelectedDepartment(department);

//     if (department === 'IT' || department === 'Admin') {
//       setShowConfirmation(true);
//     }
//   };

//   const handleConfirmation = (confirm) => {
//     if (confirm) {
//       const url =
//         selectedDepartment === 'IT'
//           ? 'https://zoho.com/it-helpdesk'
//           : 'https://zoho.com/admin-helpdesk';
//       window.open(url, '_blank');
//     }
//     setShowConfirmation(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-white">
//       <h1 className="text-2xl font-bold mb-4">Helpdesk</h1>
//       <div className="mb-4">
//         <label htmlFor="department" className="block text-sm font-medium text-gray-700">
//           Select Department
//         </label>
//         <select
//           id="department"
//           name="department"
//           value={selectedDepartment}
//           onChange={handleDepartmentChange}
//           className="mt-1 bg-gray-200 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
//         >
//           <option value="">Select a department</option>
//           <option value="IT">IT</option>
//           <option value="Admin">Admin</option>
//           <option value="HR">HR</option>
//           <option value="Procurement">Procurement</option>
//           <option value="Finance">Finance</option>
//         </select>
//       </div>

//       {showConfirmation && (
//         <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
//           <p>You will be redirected to an external website.</p>
//           <div className="mt-2">
//             <button
//               onClick={() => handleConfirmation(true)}
//               className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//             >
//               Ok
//             </button>
//             <button
//               onClick={() => handleConfirmation(false)}
//               className="bg-gray-500 text-white px-4 py-2 rounded-md"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {selectedDepartment === 'HR' && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">HR Ticket</h2>
//           {/* HR Ticket Form */}
//           <form className="space-y-4">
//             {/* Auto-filled fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Emp. Name</label>
//                 <input type="text" disabled className="mt-1 block w-full border-gray-300 rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Emp. ID</label>
//                 <input type="text" disabled className="mt-1 block w-full border-gray-300 rounded-md" />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input type="email" disabled className="mt-1 block w-full border-gray-300 rounded-md" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Location</label>
//                 <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Priority</label>
//               <select className="mt-1 block w-full border-gray-300 rounded-md">
//                 <option>Low</option>
//                 <option>Medium</option>
//                 <option>High</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Item Type</label>
//               <select className="mt-1 block w-full border-gray-300 rounded-md">
//                 <option>Hardware</option>
//                 <option>Software</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">JD (Job Description)</label>
//               <input type="file" className="mt-1 block w-full border-gray-300 rounded-md" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Required For</label>
//               <select className="mt-1 block w-full border-gray-300 rounded-md">
//                 <option>Project</option>
//                 <option>Department</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Project Name</label>
//               <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Details</label>
//               <textarea className="mt-1 block w-full border-gray-300 rounded-md"></textarea>
//             </div>
//             <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
//               Submit Ticket
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Similarly, you can add forms for Procurement and Finance departments */}

//       {selectedDepartment === 'Procurement' && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Procurement Ticket</h2>
//           {/* Procurement Ticket Form */}
//           <form className="space-y-4">
//             {/* Similar to HR form, add procurement fields here */}
//           </form>
//         </div>
//       )}

//       {selectedDepartment === 'Finance' && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Finance Ticket</h2>
//           {/* Finance Ticket Form */}
//           <form className="space-y-4">
//             {/* Similar to HR form, add finance fields here */}
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Helpdesk;

// import React, { useState } from "react";

// const Helpdesk = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const handleDepartmentChange = (e) => {
//     const department = e.target.value;
//     setSelectedDepartment(department);

//     if (department === "IT" || department === "Admin") {
//       setShowConfirmation(true);
//     }
//   };

//   const handleConfirmation = (confirm) => {
//     if (confirm) {
//       const url =
//         selectedDepartment === "IT"
//           ? "https://itsupport.logic-fruit.com/"
//           : " https://itsupport.logic-fruit.com";
//       window.open(url, "_blank");
//     }
//     setShowConfirmation(false);
//   };

//   return (

//     <div className="max-h-2xl mx-auto p-4 bg-white h-full">
//   <h1 className="text-2xl font-bold mb-4">Helpdesk</h1>
//   <div className="mb-4">
//     <label htmlFor="department" className="font-semibold">
//       Select Department
//     </label>
//     <select
//       id="department"
//       name="department"
//       value={selectedDepartment}
//       onChange={handleDepartmentChange}
//       className="border mt-1 mx-auto bg-gray-200 block w-full sm:w-full pl-3 pr-10 py-3 text-base border-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//     >
//       <option value="">Select a department</option>
//       <option value="IT">IT</option>
//       <option value="Admin">Admin</option>
//       <option value="HR">HR</option>
//       <option value="Procurement">Procurement</option>
//       <option value="Finance">Finance</option>
//     </select>
//   </div>

//   {showConfirmation && (
//     <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 w-full sm:w-1/2 mx-auto">
//       <p>You will be redirected to an external website.</p>
//       <div className="mt-2">
//         <button
//           onClick={() => handleConfirmation(true)}
//           className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Ok
//         </button>
//         <button
//           onClick={() => handleConfirmation(false)}
//           className="bg-gray-500 text-white px-4 py-2 rounded-md"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   )}

//   {selectedDepartment === "HR" && (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">HR Ticket</h2>
//       <form className="space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Emp. Name</label>
//             <input
//               type="text"
//               disabled
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Emp. ID</label>
//             <input
//               type="text"
//               disabled
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               disabled
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Project Manager</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Priority</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2">
//               <option>Low</option>
//               <option>Medium</option>
//               <option>High</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Item Type</label>
//           <select className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2">
//             <option>Hardware</option>
//             <option>Software</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">JD (Job Description)</label>
//           <input
//             type="file"
//             className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Required For</label>
//           <select className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2">
//             <option>Project</option>
//             <option>Department</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Project Name</label>
//           <input
//             type="text"
//             className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Details</label>
//           <textarea className="mt-1 block w-full border-gray-300 rounded-md p-2 bg-gray-200"></textarea>
//         </div>
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md p-2"
//         >
//           Submit Ticket
//         </button>
//       </form>
//     </div>
//   )}

//   {selectedDepartment === "Procurement" && (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Procurement Ticket</h2>
//       <form className="space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Emp. Name</label>
//             <input
//               type="text"
//               disabled
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Emp. ID</label>
//             <input
//               type="text"
//               disabled
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               disabled
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Location</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Priority</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2">
//               <option>Low</option>
//               <option>Medium</option>
//               <option>High</option>
//             </select>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Item Type</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2">
//               <option>Hardware</option>
//               <option>Software</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Quantity</label>
//             <input
//               type="number"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Required For</label>
//           <select className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2">
//             <option>Project</option>
//             <option>Self</option>
//           </select>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Project Name</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Project Manager</label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
//             />
//           </div>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Details</label>
//           <textarea className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"></textarea>
//         </div>
//         <button
//           type="submit"
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Submit Ticket
//         </button>
//       </form>
//     </div>
//   )}
// </div>

//   );
// };

// export default Helpdesk;

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const Dropdown = ({ options, selectedValue, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <button
        type="button"
        className="mt-1  w-full border-gray-300 rounded-md bg-gray-200 p-2 flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className="px-4 ">{selectedValue || "select a department"}</span>
        <FaChevronDown className="text-black" />
      </button>
      {isOpen && (
        <div className="absolute z-10  w-full bg-white border border-gray-300 shadow-lg rounded-md">
          {/* <input
            type="text"
            className="w-full p-2 border-b"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
          <ul className="">
            {filteredOptions.map((option) => (
              <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-1 font-sans cursor-pointer 
                ${selectedValue === option ? 'bg-blue-600 text-white' : 'bg-gray-200'}
                hover:bg-blue-600 hover:text-white`}
            >
              {option}
            </li>
            
            
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Helpdesk = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedItemType, setSelectedItemType] = useState("");
  const [selectedRequiredFor, setSelectedRequiredFor] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    if (value === "IT" || value === "Admin") {
      setShowConfirmation(true);
    }
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      const url =
        selectedDepartment === "IT"
          ? "https://itsupport.logic-fruit.com/"
          : "https://itsupport.logic-fruit.com";
      window.open(url, "_blank");
    }
    setShowConfirmation(false);
  };

  return (
    <div className="max-h-2xl mx-auto p-4 bg-white overflow-y-auto -ml-1 h-[calc(100vh-114px)] xxs:h-[calc(100vh-106px)] mb-2">
      <h1 className="text-2xl font-bold mb-4">Helpdesk</h1>
      <div className="mb-4">
  <label className="block text-md font-medium text-gray-700">
    Select a department
  </label>
  <div className=" w-full sm:w-[60%] sm:mx-auto">
    <Dropdown
      options={["Select a department", "IT", "Admin", "HR", "Procurement", "Finance"]}
      selectedValue={selectedDepartment}
      onChange={handleDepartmentChange}
      className="w-full sm:w-[60%] p-4"
    />
  </div>
</div>


      {showConfirmation && (
        <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 w-full sm:w-1/2 mx-auto">
          <p>You will be redirected to an external website.</p>
          <div className="mt-2">
            <button
              onClick={() => handleConfirmation(true)}
              className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Ok
            </button>
            <button
              onClick={() => handleConfirmation(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {selectedDepartment === "HR" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">HR Ticket</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Emp. Name</label>
                <input
                  type="text"
                  disabled
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Emp. ID</label>
                <input
                  type="text"
                  disabled
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  disabled
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Manager</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <Dropdown
                  options={["Low", "Medium", "High"]}
                  selectedValue={selectedPriority}
                  onChange={setSelectedPriority}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Item Type</label>
              <Dropdown
                options={["Hardware", "Software"]}
                selectedValue={selectedItemType}
                onChange={setSelectedItemType}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">JD (Job Description)</label>
              <input
                type="file"
                className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Required For</label>
              <Dropdown
                options={["Project", "Department"]}
                selectedValue={selectedRequiredFor}
                onChange={setSelectedRequiredFor}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Details</label>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md p-2 bg-gray-200"></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md p-2"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      )}

      {selectedDepartment === "Procurement" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Procurement Ticket</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Emp. Name</label>
                <input
                  type="text"
                  disabled
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Emp. ID</label>
                <input
                  type="text"
                  disabled
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  disabled
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <Dropdown
                  options={["Low", "Medium", "High"]}
                  selectedValue={selectedPriority}
                  onChange={setSelectedPriority}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Item Type</label>
                <Dropdown
                  options={["Hardware", "Software"]}
                  selectedValue={selectedItemType}
                  onChange={setSelectedItemType}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Required For</label>
              <Dropdown
                options={["Project", "Self"]}
                selectedValue={selectedRequiredFor}
                onChange={setSelectedRequiredFor}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Manager</label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Details</label>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md bg-gray-200 p-2"></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Helpdesk;
