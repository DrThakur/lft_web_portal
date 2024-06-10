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
    <div className="border-pink-300 border-2 flex flex-col md:flex-row w-full h-[455px] bg-pink-200 rounded-lg shadow-lg overflow-hidden">
      {imagePosition === "left" && (
        <div className="w-1/2">
          <img src={image} alt="Award" className="w-full h-full object-fill" />
        </div>
      )}
      <div className="w-1/2 p-4 flex flex-col justify-center -mt-24">
        <h1 className="text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
          <strong>{awardDetails}</strong>
        </h1>
        <h2 className="mb-2 mt-2 animate-text bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 bg-clip-text text-transparent font-black">
          {message}
        </h2>
        <div className="flex flex-row justify-evenly items-center">
          <div>
            <p className="text-gray-700 text-lg mb-1">
              <strong> {userName}</strong>
            </p>
            <p className="text-gray-700 text-xs mb-1">
              {userRole}, {userDepartment}
            </p>
          </div>
          <div className="relative w-24 h-24">
          <img
            src={frameImage}
            alt="Frame"
            className="absolute inset-0  rounded-full object-cover" width={200} height={200}         />
          <img
            src={userImage}
            alt="user"
            className="absolute inset-0 w-20 h-20 rounded-full object-cover m-2"
          />
        </div>
        </div>
      </div>
      {imagePosition === "right" && (
        <div className="w-1/2">
          <img src={image} alt="Award" className="w-full h-full object-fill"  />
        </div>
      )}
    </div>
  );
};

export default AwardCard;
