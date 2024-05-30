import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import TeamDialogBox from "./TeamDialogBox";


const ProjectDetailsPage = ({ project }) => {
  const {
    id,
    name,
    status,
    manager,
    plannedStartDate,
    plannedEndDate,
    actualStartDate,
    actualEndDate,
    smLeadId,
    location,
    clientName,
    clientAddress,
    pointOfContact,
    clientPhone,
    clientEmail,
    duration,
    milestones,
    teams,
    totalBudget,
    repository,
    description,
  } = project;

  const showEditDeleteButtons = status === "Unpublish";

  const [teamDetails, setTeamDetails] = useState({});
  const [visible, setVisible] = useState(false);
  const staticTeamData = [
    {
      name: "Software",
      members: [
        {
          name: "Avatar1",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar2",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar3",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar4",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar5",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar6",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar7",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar8",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar9",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar10",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar11",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar12",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar13",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar14",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        // Add more members if needed
      ],
    },
    {
      name: "Hardware",
      members: [
        {
          name: "Avatar1",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar2",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        // Add more members if needed
      ],
    },
    {
      name: "FPGA",
      members: [
        {
          name: "Avatar1",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar2",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar3",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
          name: "Avatar3",
          avatar:
            "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        // Add more members if needed
      ],
    },
  ];

  const handleSeeAllClick = (teamName) => {
     // Find the team from staticTeamData based on teamName
  const team = staticTeamData.find((team) => team.name === teamName);
  
  // Set the teamDetails state
  setTeamDetails(team);
  
  // Show the dialog
  setVisible(true);
    
  };

  const onHide = ()=> {
     setVisible(!visible);
  }

  console.log("My team Details", teamDetails)


  return (
    <div className="container mx-auto bg-white h-screen w-full p-8 rounded-b-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-row justify-start items-center gap-8">
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-3xl font-bold text-blue-500">Project: </h1>
            <h1 className="text-3xl font-bold">
              LFT {id} / {name}
            </h1>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-3xl font-bold text-center text-blue-500">
              Status:
            </h1>
            <h1 className="text-3xl font-semibold text-center text-green-500">
              {status || "Active"}{" "}
            </h1>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-3xl font-bold text-center text-blue-500">
              Progress:
            </h1>
            <h1 className="text-3xl font-semibold text-center text-orange-900">
              20%
            </h1>
          </div>
        </div>

        <div className="space-x-4 flex flex-row justify-start items-center ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {status==="Unpublish"? "Publish": "Unpublish"}
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Export
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
          {showEditDeleteButtons && (
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="mb-8 flex flex-col justify-start gap-4">
        <div className="bg-yellow-100 p-4 rounded-xl">
          {/*<h2 className="text-lg font-bold">Project Details</h2>*/}
          <div className="grid grid-cols-3 gap-2">
            <table className="">
              <tbody>
                <tr>
                  <td className="font-semibold">Project Manager</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{manager}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Planned Start Date</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{plannedStartDate}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Planned End Date</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{plannedEndDate}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Actual Start Date</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{actualStartDate}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Actual End Date</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{actualEndDate}</td>
                </tr>
                <tr>
                  <td className="font-semibold">S&M Lead Id</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{smLeadId}</td>
                </tr>
              </tbody>
            </table>
            <table className="">
              <tbody>
                <tr>
                  <td className="font-semibold">Location</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{location}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Client Name</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{clientName}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Client Address</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{clientAddress}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Point of Contact</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{pointOfContact}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Phone</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{clientPhone}</td>
                </tr>
                <tr>
                  <td className="font-semibold ">Email</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{clientEmail}</td>
                </tr>
              </tbody>
            </table>
            <table className="">
              <tbody>
                <tr>
                  <td className="font-semibold p-1">Project Duration</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{duration}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-1">Total Milestones</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{milestones}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-1">Teams</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{teams.join(", ")}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-1">Total Budget</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-blue-500">{totalBudget}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-1">Status</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-green-500">{status || "Active"}</td>
                </tr>
                <tr>
                  <td className="font-semibold p-1">Project Repository</td>
                  <td>:</td>
                  <td>&nbsp; &nbsp; </td>
                  <td className="text-green-500 hover:text-green-900">
                    <Link
                      to={repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repository}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 mt-2 bg-green-100 rounded-xl">
          <h2 className="text-lg font-bold">Description</h2>
          <p>{description}</p>
        </div>

        {/* Add other sections for teams, budget details, and milestones similarly */}
        <div className="flex flex-row justify-start items-center gap-4">
          <div className="box1 bg-teal-100 p-4 rounded-xl w-1/4 h-48">
            <h2 className="text-lg font-bold">Teams</h2>
            <table className="">
              <tbody>
                {staticTeamData.map((team, index) => (
                  <tr key={index}>
                    <td className="text-sm font-bold">{team.name}</td>

                    <td>&nbsp; &nbsp; </td>
                    <td className="text-blue-500 flex flex-row justify-start items-center">
                      {team.members.slice(0, 5).map((member, i) => (
                        <Tooltip
                          // Don't forget the `.`!
                          key={i}
                          anchorSelect={`.${member.name}`}
                          content={member.name}
                          style={{ borderRadius: "10px 10px" }}
                        />
                      ))}
                      <AvatarGroup className="gap-1 hover:gap-2">
                        {team.members.slice(0, 5).map((member, i) => (
                          <Avatar
                            key={i}
                            image={member.avatar}
                            shape="circle"
                            style={{ borderRadius: "100px" }}
                            className={member.name}
                          />
                        ))}
                      </AvatarGroup>
                      {team.members.length > 5 && (
                        <button
                          className="text-blue-500 hover:text-blue-700 font-semibold"
                          onClick={() => handleSeeAllClick(team.name)}
                        >
                          See all
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="box-2 h-48">
          <div className="projectStatusTable bg-white col-span-2 rounded-xl">
          <table className="table-auto border-collapse border w-full rounded-xl">
            <tbody>
              <tr>
                <td
                  colSpan={7}
                  className="text-center text-xl font-semibold bg-gray-200"
                >
                  Project Mielstones Tracking
                </td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold ">
                  Milestones{" "}
                </td>
                <td className="border p-2 bg-green-200">1.1</td>
                <td className="border p-2 bg-yellow-200">1.2</td>
                <td className="border p-2 bg-yellow-300">1.3</td>
                <td className="border p-2 bg-red-200">1.4</td>
                <td className="border p-2">1.5</td>
                <td className="border p-2">1.6</td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold">
                  Planned
                </td>
                <td className="border p-2 bg-green-200">31 Jan 24</td>
                <td className="border p-2 bg-yellow-200">29 Feb 24</td>
                <td className="border p-2 bg-yellow-300">31 Mar 24</td>
                <td className="border p-2 bg-red-200">30 Apr 24</td>
                <td className="border p-2">31 May 24</td>
                <td className="border p-2">30 Jun 24</td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold">
                  Actual / Estimated
                </td>
                <td className="border p-2 bg-green-200">6 Mar 24</td>
                <td className="border p-2 bg-yellow-200">31 Mar 24*</td>
                <td className="border p-2 bg-yellow-300">23 May 24*</td>
                <td className="border p-2 bg-red-200">30 Apr 24*</td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold">
                  C-Sat Level
                </td>
                <td className="border p-2 bg-green-200">+ve</td>
                <td className="border p-2 bg-yellow-200">Neutral</td>
                <td className="border p-2 bg-yellow-300"></td>
                <td className="border p-2 bg-red-200"></td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
          </div>

          {/*    {staticTeamData.map((team, index) => (
            <div
              key={index}
              className="mb-2 flex flex-row justify-start items-center gap-4"
            >
              <h3 className="text-md font-bold">{team.name}</h3>
              <div className="flex flex-wrap items-center ">
                {team.members.slice(0, 5).map((member, i) => (
                  <Tooltip
                    // Don't forget the `.`!
                    key={i}
                    anchorSelect={`.${member.name}`}
                    content={member.name}
                    style={{ borderRadius: "10px 10px" }}
                  />
                ))}
                <AvatarGroup className="gap-1 hover:gap-2">
                  {team.members.slice(0, 5).map((member, i) => (
                    <Avatar
                      key={i}
                      image={member.avatar}
                      shape="circle"
                      style={{ borderRadius: "100px" }}
                      className={member.name}
                    />
                  ))}
                </AvatarGroup>
                {team.members.length > 5 && (
                  <button
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                    onClick={() => handleSeeAllClick(team.name)}
                  >
                    See all
                  </button>
                )}
              </div>
            </div>
          ))}
*/}
        </div>
      </div>
      <TeamDialogBox teamDetails={teamDetails} visible={visible} onHide={onHide}/>
    </div>
  );
};

export default ProjectDetailsPage;
