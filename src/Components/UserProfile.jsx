import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { currentColor,  user, dispatch } = useStateContext();
  const navigate = useNavigate();

  const handleProfileSettings = () => {
    navigate("/user-Profile");
  };

  const handleLogOut = () => {
    console.log("Logout clicked");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-80 mt-[1.6px]">
      <div className="flex justify-between items-center -mt-8 -mb-2">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(0, 0, 0)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 justify-start items-center mt-6 border-color border-b-1 pb-6 -ml-4">
        <img
          className="rounded-full h-20 w-20"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200 ml-4">
            {user.fullName || "Ankit Kuamr Thakur"}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400 ml-4 ">
            {user.designation||"Administrator"}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400 ml-4">
            {user.email||"ankit.kumar@logic-fruit.com"}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            onClick={handleProfileSettings}
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 -mb-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
          onClick={handleLogOut}
        />
      </div>
    </div>
  );
};

export default UserProfile;
