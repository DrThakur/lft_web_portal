import React from "react";

const Announcement = ({ date, title, content, fullWidth }) => {
  const containerClasses = fullWidth ? "w-full" : "max-w-sm";
  return (
    <div className={`${containerClasses} mx-auto bg-white rounded-lg p-2 shadow-sm hover:bg-red-50 hover:shadow-md transition-all duration-300`}>
      <div className="flex flex-col space-y-1">
          {/* Date */}
        <span className="text-xs sm:text-sm text-gray-500">{date}</span>
             {/* Title */}
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{title}</h2>
         {/* Content */}
        <p
          className={`text-xs sm:text-sm md:text-base text-gray-700 ${fullWidth ? "w-full" : "w-auto"}`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Announcement;
