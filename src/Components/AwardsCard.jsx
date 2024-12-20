

import React from "react";

const AwardCard = ({
  userImage,
  image,
  imagePosition = "left",
  message,
  userName,
  userRole,
  userDepartment,
  awardDetails,
  frameImage
}) => {
  return (
    <div className="border-pink-300 border-2 flex flex-col md:flex-row w-full h-auto md:h-[455px] bg-pink-200 rounded-lg shadow-lg overflow-hidden">
      
      {/* Left Section (Image on small screens, User Info on larger screens) */}
      {imagePosition === "left" && (
        <div className="w-full md:w-1/2 flex justify-center items-center md:h-full">
          <img
            src={image}
            alt="Award"
            className="w-full h-full object-cover"  
          />
        </div>
      )}

      {/* Right Section (Text & User Info) */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-between items-center md:items-start md:h-full">
        <h2 className="text-sm sm:text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          <strong>{awardDetails}</strong>
        </h2>
        <h3 className="text-xs sm:text-lg mb-2 mt-2 animate-text bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 bg-clip-text text-transparent font-black">
          {message}
        </h3>
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start mt-4">
          <div className="text-center md:text-left mr-4">
            <p className="text-gray-700 text-lg mb-1">
              <strong>{userName}</strong>
            </p>
            <p className="text-gray-700 text-xs mb-1">
              {userRole}, {userDepartment}
            </p>
          </div>

          {/* User Image */}
          <div className="relative w-24 h-24 mt-4 md:mt-0">
            <img
              src={frameImage}
              alt="Frame"
              className="absolute inset-0 rounded-full object-cover"
              width={200}
              height={200}
            />
            <img
              src={userImage}
              alt="User"
              className="absolute inset-0 w-20 h-20 rounded-full object-cover m-2"
            />
          </div>
        </div>
      </div>

      {/* Right Section (Image on smaller screens) */}
      {imagePosition === "right" && (
        <div className="w-full md:w-1/2 flex justify-center items-center md:h-full">
          <img
            src={image}
            alt="Award"
            className="w-full h-full object-cover" 
          />
        </div>
      )}
    </div>
  );
};

export default AwardCard;
