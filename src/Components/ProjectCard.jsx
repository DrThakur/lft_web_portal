import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Tooltip } from "react-tooltip";
import { ProgressBar } from "primereact/progressbar";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Function to toggle description
  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate description to 24 words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <div className="cardContainer border-2 rounded-lg shadow-lg w-1/5 mt-4 bg-gray-50 p-4 h-full">
      <div className="cardHeading p-2">
        <span className="flex flex-row justify-start items-center text-red-400 bg-red-50 rounded-lg w-[200px] font-semibold text-sm">
          <BsDot className="text-xl" /> Deadline : 10 Feb 2024
        </span>
        <h3 className="font-bold text-2xl -ml-2 overflow-wrap break-words">
          {project.projectName}
        </h3>
      </div>
      <div className="cardBody flex flex-col gap-2">
        <div className="flex rounded-lg ">
          <div className="flex-1 bg-blue-100 rounded-s p-1 flex flex-col justify-center items-center gap-1">
            <span className="font-bold text-2xl">
              {project.milestones || "M/A"}
            </span>
            <span>Milestones</span>
          </div>
          <div className="flex-1   bg-green-100 p-1 flex flex-col justify-center items-center gap-1">
            <span className="font-bold text-2xl">
              {project.completed || "N/A"}
            </span>
            <span>Completed</span>
          </div>
          <div className="flex-1 bg-yellow-100 p-1 flex flex-col justify-center items-center gap-1">
            <span className="font-bold text-2xl">
              {project.active || "N/A"}
            </span>
            <span>Active</span>
          </div>
          <div className="flex-1 bg-red-100 rounded-e p-1 flex flex-col justify-center items-center gap-1">
            <span className="font-bold text-2xl">
              {project.pending || "N/A"}
            </span>
            <span>Pending</span>
          </div>
        </div>
        <div className="description flex flex-wrap">
          {isExpanded
            ? project.projectDescription
            : truncateDescription(project.projectDescription, 14)}
          <button
            onClick={handleToggleDescription}
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>
        <div className="flex flex-row justify-start items-center gap-2 mb-1 mt-1">
          <h3 className="font-bold">Project Manager: </h3>
          <span className="flex flex-row items-center justify-start">
            <img
              alt="reportsTo"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              width="40"
              height="40"
            />
            <a
              href="/"
              className="text-blue-500 hover:text-blue-900 font-semibold"
            >
              {project.projectManager.fullName}
            </a>
          </span>
        </div>
        <div className="teams flex flex-row justify-start items-center gap-2 mt-1 mb-1">
          <h3 className="font-bold">Teams:</h3>
          <div className="flex flex-wrap justify-start items-center gap-1 ml-8">
            {project.teams.map((team, index) => (
              <button
                key={index}
                className="bg-blue-400 rounded-full p-1 px-2 text-white font-bold"
              >
                {team}
              </button>
            ))}
          </div>
        </div>
        <div className="teamMembersFromAllTeam mt-1 mb-1 flex flex-row justify-start items-center gap-2">
          <h3 className="font-bold">Members:</h3>
          <div className="ml-6">
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar1"
              content="Sonia Sharma"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar2"
              content="Ankit Kumar Thakur"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar3"
              content="Dhruv Kumar Saxena"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar4"
              content="Vineet Goyal"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar5"
              content="Pradeep Kumar"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar6"
              content="Fuzail Qamar"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar7"
              content="Abdul"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar8"
              content="Sanjeev Kumar"
              style={{ borderRadius: "10px 10px" }}
            />
            <Tooltip
              // Don't forget the `.`!
              anchorSelect=".avatar9"
              content="More!"
              style={{ borderRadius: "10px 10px" }}
            />

            <AvatarGroup className="hover:gap-2">
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar1"
              />

              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar2"
              />
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar3"
              />
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar4"
              />
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar5"
              />
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar6"
              />
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar7"
              />
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                shape="circle"
                style={{ borderRadius: "100px" }}
                className="avatar8"
              />
              <Avatar
                label="+2"
                shape="circle"
                style={{
                  backgroundColor: "#9c27b0",
                  color: "#ffffff",
                  borderRadius: "100px",
                }}
                className="avatar9"
              />
            </AvatarGroup>
          </div>
        </div>
        <div className="progressbar mt-2 flex flex-col gap-2">
          <h3 className="font-bold">Progress:</h3>
          <ProgressBar value={project.progress}></ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
