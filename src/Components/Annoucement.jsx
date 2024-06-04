import React from "react";

const Announcement = ({ date, title, content, fullWidth }) => {
  const containerClasses = fullWidth ? "w-full" : "max-w-72";
  return (
    <div className={`${containerClasses} mx-auto bg-white rounded ml-1 p-2`}>
      <div className="flex flex-col shadow rounded -ml-1 p-1">
        <span className="text-xs text-gray-500">{date}</span>
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <p
          className={`${fullWidth ? "w-full" : "w-64"} text-gray-700 text-base`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Announcement;
