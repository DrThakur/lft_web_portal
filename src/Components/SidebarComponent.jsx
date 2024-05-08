// Sidebar.js

import React, { useState } from "react";
import "./SidebarComponent.css";
import { leftSidebarData, rightSidebarData, rightSidebarSubItemsData } from "../data/dummy"; // Adjust the import path based on your project structure
import { IoAddCircle } from "react-icons/io5";


const SidebarComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  const handleLeftSidebarItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleRightSidebarItemHover = (itemName) => {
    setHoverItem(itemName);
  };

  return (
    <div className="flex h-screen bg-gray-100 absolute">
      {/* Left Sidebar */}
      <div className="w-24 bg-gray-800 text-white h-screen overflow-y-auto overflow-x-hidden myscrollbar">
        <ul>
          {leftSidebarData.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer flex flex-col justify-center items-center p-4 ${
                selectedItem === item.name ? "bg-gray-700" : ""
              }`}
              onClick={() => handleLeftSidebarItemClick(item.name)}
            >
              <span> {item.icon}</span>
              <span className="text-xs"> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Sidebar */}
      {selectedItem && (
        <div className="flex-1 p-6 bg-white w-44 relative overflow-y-auto overflow-x-hidden">
          <h2 className="text-xl font-semibold">
            {leftSidebarData.find((item) => item.name === selectedItem).title}
          </h2>
          <ul className="-ml-2">
            {rightSidebarData[selectedItem].map((subItem) => (
              <li
                key={subItem.name}
                className="mt-2 flex flex-row justify-start items-center gap-2 p-2 w-36 h-12 hover:bg-gray-300 rounded-md border border-solid border-red-500"
                onMouseEnter={() => handleRightSidebarItemHover(subItem.name)}
                onMouseLeave={() => handleRightSidebarItemHover(null)}
              >
                <span className="text-3xl">{subItem.icon}</span>
                <span className="text-sm"> {subItem.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {hoverItem && (
        <div
          className="bg-yellow-500 border border-solid border-red-500 w-36 absolute"
          style={{
            top: "4rem",
            left: "calc(17rem)", // Adjust the value based on your right sidebar width and padding
          }}
        >
          <ul>
          {rightSidebarSubItemsData[hoverItem]?.map((rightSubItem)=>(
            <li className="flex flex-row justify-start items-center gap-1 h-10" key={rightSubItem.name}>
              <span>
                {rightSubItem.icon}
              </span>
              <span> {rightSubItem.title}</span>
            </li>
            ))}
         
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarComponent;
