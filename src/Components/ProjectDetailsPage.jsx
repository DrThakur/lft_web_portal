import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import TeamDialogBox from "./TeamDialogBox";
import axios from "axios";

const ProjectDetailsPage = () => {
  // const {
  //   id,
  //   name,
  //   status,
  //   manager,
  //   plannedStartDate,
  //   plannedEndDate,
  //   actualStartDate,
  //   actualEndDate,
  //   smLeadId,
  //   location,
  //   clientName,
  //   clientAddress,
  //   pointOfContact,
  //   clientPhone,
  //   clientEmail,
  //   duration,
  //   milestones,
  //   teams,
  //   totalBudget,
  //   repository,
  //   description,
  // } = project;

  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [teamDetails, setTeamDetails] = useState({});
  const [visible, setVisible] = useState(false);

  console.log("my project id", projectId);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const port = process.env.REACT_APP_BACKEND_PORT;
  // const apiUrl2 = `https://lft-web-portal-backend-1.onrender.com/projects/${projectId}`;
  // const apiUrl1 = `http://${baseURL}:${port}/projects/${projectId}`;

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/projects/${projectId}`
        );
        setProject(response.data.project);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [projectId, apiUrl]);

  if (!project) {
    return <div>Loading...</div>;
  }

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



  const onHide = () => {
    setVisible(!visible);
  };

  const showEditDeleteButtons = project.status === "Active";
  console.log("My team Details", teamDetails);

  return (
    <div className=" mx-auto bg-white  w-full p-2 rounded-b-xl overflow-y-auto -ml-1 h-[calc(100vh-114px)] xxs:h-[calc(100vh-106px)] mb-2">
      {/* <div className="flex flex-wrap justify-between items-center mb-4 px-2 p-2 ml-0">
        <div className="flex flex-wrap xl:flex-nowrap justify-start items-center gap-8 w-full sm:w-auto">
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-xl sm:text-3xl font-bold text-blue-500">Project: </h1>
            <h1 className="text-lg sm:text-2xl font-bold">
              {project.projectId} / {project.projectName}
            </h1>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-xl sm:text-3xl font-bold text-center text-blue-500">
              Status:
            </h1>
            <h1 className="text-lg sm:text-2xl font-semibold text-center text-green-500">
              {project.status || "Active"}
            </h1>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <h1 className="text-xl sm:text-3xl font-bold text-center text-blue-500">
              Progress:
            </h1>
            <h1 className="text-lg sm:text-2xl font-semibold text-center text-orange-900">
              20%
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-start items-center gap-4 mt-4 sm:mt-0">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 pl-3 rounded w-full sm:w-auto mb-2 sm:mb-0">
            {project.status === "Unpublish" ? "Publish" : "Unpublish"}
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 pl-3 rounded w-full sm:w-auto mb-2 sm:mb-0">
            Export
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 pl-3 rounded w-full sm:w-auto mb-2 sm:mb-0">
            Delete
          </button>
          {showEditDeleteButtons && (
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 pl-3 rounded w-full sm:w-auto mb-2 sm:mb-0">
              Edit
            </button>
          )}
        </div>
      </div> */}
{/* <div className="flex flex-col 2xl:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
  
  <div className="flex flex-col xl:flex-row justify-start items-center gap-8 lg:gap-4 w-full 2xl:w-8/12">
    <div className="flex flex-col xs:flex-row justify-start items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-500">Project: </h1>
      <h1 className="text-2xl font-bold">
        {project.projectId} / {project.projectName}
      </h1>
    </div>
    <div className="flex flex-col xs:flex-row justify-between items-center gap-4 lg:gap-8 mb-4">
  
  <div className="flex flex-row justify-start items-center gap-4">
    <h1 className="text-3xl font-bold text-center text-blue-500">Status:</h1>
    <h1 className="text-2xl font-semibold text-center text-green-500">
      {project.status || "Active"}
    </h1>
  </div>

 
  <div className="flex flex-row justify-start items-center gap-4">
    <h1 className="text-3xl font-bold text-center text-blue-500">Progress:</h1>
    <h1 className="text-2xl font-semibold text-center text-orange-900">20%</h1>
  </div>
</div>

  </div>

  
  <div className="flex flex-wrap justify-start items-center gap-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
      {project.status === "Unpublish" ? "Publish" : "Unpublish"}
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
      Export
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
      Delete
    </button>
    {showEditDeleteButtons && (
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
        Edit
      </button>
    )}
  </div>
</div> */}
{/* <div className="flex flex-col 2xl:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
  
  <div className="flex flex-col xl:flex-row justify-start items-center gap-8 lg:gap-4 w-full 2xl:w-8/12">
    <div className="flex flex-col xs:flex-row justify-start items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-500">Project: </h1>
      <h1 className="text-2xl font-bold">
        {project.projectId} / {project.projectName}
      </h1>
    </div>
    <div className="flex flex-col xs:flex-row justify-between items-center gap-4 lg:gap-8 mb-4">
  
  <div className="flex flex-row justify-start items-center gap-4">
    <h1 className="text-3xl font-bold text-center text-blue-500">Status:</h1>
    <h1 className="text-2xl font-semibold text-center text-green-500">
      {project.status || "Active"}
    </h1>
  </div>

 
  <div className="flex flex-row justify-start items-center gap-4">
    <h1 className="text-3xl font-bold text-center text-blue-500">Progress:</h1>
    <h1 className="text-2xl font-semibold text-center text-orange-900">20%</h1>
  </div>




  
  <div className="flex flex-wrap justify-start items-center gap-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
      {project.status === "Unpublish" ? "Publish" : "Unpublish"}
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
      Export
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
      Delete
    </button>
    {showEditDeleteButtons && (
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 pl-3 rounded w-full xs:w-auto">
        Edit
      </button>
    )}
  </div>
  </div>
  </div>
</div> */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 2xl:grid-cols-3 ">
  
  {/* Project Section */}
  {/* <div className="grid grid-cols-1  justify-center items-center gap-4 xl:w-fit">
    <div className="flex flex-col xs:flex-row justify-start items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-500">Project: </h1>
      <h1 className="text-2xl  font-bold truncate">
        {project.projectId} / {project.projectName}
      </h1>
    </div>
  </div> */}

{/* <div className="grid grid-cols-1 justify-center items-center gap-4 xl:w-fit">
  <div className="flex flex-col xs:flex-row justify-start items-center gap-4 max-w-full pl-3">
    <h1 className="text-2xl sm:text-3xl font-bold text-blue-500">Project: </h1>
    <h1 className="text-lg sm:text-2xl font-bold truncate px-2">
      {project.projectId} / {project.projectName}
    </h1>
  </div>
</div> */}

<div className="grid grid-cols-1  justify-center items-center gap-4 xl:w-fit">
  <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center  gap-4 max-w-full p-2">
    <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 -mb-3 sm:mb-0 mx-auto sm:mx-0 ">Project: </h1>
    <h1 className="text-lg sm:text-2xl font-bold break-all px-2 w-full sm:truncate text-center sm:text-start">
      {project.projectId} / {project.projectName}
    </h1>
  </div>
</div>



  {/* Status and Progress Section */}
  <div className="grid grid-cols-1 xxs:grid-cols-2 justify-start xxs:justify-between items-center gap-4 lg:gap-8 mb-4 p-2">
    {/* Status Section */}
    <div className="flex flex-row justify-start items-center gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-500">Status:</h1>
      <h1 className="text-lg sm:text-2xl  font-semibold text-center text-green-500">
        {project.status || "Active"}
      </h1>
    </div>

    {/* Progress Section */}
    <div className="flex flex-row justify-start  items-center gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-500">Progress:</h1>
      <h1 className="text-lg sm:text-2xl  font-semibold text-center text-orange-900">20%</h1>
    </div>
  </div>

  {/* Buttons Section */}
  <div className="grid grid-cols-1 xxss:grid-cols-2 xs:grid-cols-4 md:grid-cols-4 gap-4  2xl:w-auto lg:-mr-[100%] 2xl:mr-0 ">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded w-full sm:w-auto">
      {project.status === "Unpublish" ? "Publish" : "Unpublish"}
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded w-full sm:w-auto">
      Export
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded w-full sm:w-auto">
      Delete
    </button>
    {showEditDeleteButtons && (
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-3 rounded w-full sm:w-auto">
        Edit
      </button>
    )}
  </div>

</div>


{/* <div className="flex flex-wrap justify-between items-center mb-6 pl-3 py-4">
  <div className="flex flex-wrap  justify-between items-center gap-8 w-full">
    
    <div className="flex flex-col xxss:flex-row justify-center items-center gap-4 w-full lg:w-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">Project: </h1>
      <h1 className="text-lg sm:text-2xl font-bold">
        {project.projectId} / {project.projectName}
      </h1>
    </div>

   
    <div className="flex flex-col xxss:flex-row justify-center items-center gap-4 w-full lg:w-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-blue-500">
        Status:
      </h1>
      <h1 className="text-lg sm:text-2xl font-semibold text-center text-green-500">
        {project.status || "Active"}
      </h1>
    </div>

    
    <div className="flex flex-col xxss:flex-row justify-center items-center gap-4 w-full lg:w-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-blue-500">
        Progress:
      </h1>
      <h1 className="text-lg sm:text-2xl font-semibold text-center text-orange-900">
        20%
      </h1>
    </div>
  </div>

  
  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4 lg:mt-0 w-full">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-6 rounded w-full sm:w-auto mb-2 sm:mb-0">
      {project.status === "Unpublish" ? "Publish" : "Unpublish"}
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 px-6 rounded w-full sm:w-auto mb-2 sm:mb-0">
      Export
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 px-6 rounded w-full sm:w-auto mb-2 sm:mb-0">
      Delete
    </button>
    {showEditDeleteButtons && (
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-2 px-6 rounded w-full sm:w-auto mb-2 sm:mb-0">
        Edit
      </button>
    )}
  </div>
</div> */}



      <div className="mb-8 w-full flex flex-col justify-start gap-4  ">
        
        {/* <div className="bg-yellow-100 px-2 py-4 rounded-xl shadow-lg">
  
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h2>
  
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 l">
    
    
    <div className=" p-4 ">
    <table className="w-full">
  <tbody>
  <tr>
  <td className="font-semibold p-2 border border-gray-900 w-[50%]">Project Manager</td>
  <td className="text-blue-500 p-2 border border-gray-900 w-[50%]">
    {project.projectManager?.fullName || 'N/A'}
  </td>
</tr>

    <tr>
      <td className="font-semibold   p-2 ">Planned Start Date</td>
      <td className="  p-2 ">:</td>
      <td className="  p-2 ">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold   p-2 ">Planned End Date</td>
      <td className="  p-2 ">:</td>
      <td className="  p-2 ">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold   p-2 ">Actual Start Date</td>
      <td className="  p-2 ">:</td>
      <td className="  p-2 ">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold   p-2 ">Actual End Date</td>
      <td className="  p-2 ">:</td>
      <td className="  p-2 ">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold   p-2 ">S&M Lead Id</td>
      <td className="  p-2 ">:</td>
      <td className="  p-2 ">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">
        {project.smLeadId?.employeeId || 'N/A'}
      </td>
    </tr>
  </tbody>
</table>

    </div>
    
   
    <div className="p-4">
      <table className="w-[100%] border border-gray-600">
        <tbody>
          <tr>
            <td className="font-semibold p-2 border border-gray-300 w-[50%]">Location</td>
            
            <td className="text-blue-500  p-2 border border-gray-300 w-[50%]">{"Gurgaon"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Client Name</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{project.clientName}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Client Address</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Point of Contact</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Phone</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Email</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    
    <div className=" p-4 ">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-semibold p-2 border border-gray-900 w-[50%] break-words">Project Duration</td>
            
            <td className="text-blue-500 p-2 border border-gray-900 w-[50%] max-w-full break-words ">{"Dhruv Kumar Saxena"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Total Milestones</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Teams</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Total Budget</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Status</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-green-500">{project.status || "Active"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Project Repository</td>
            <td className="  p-2 ">:</td>
            <td className="  p-2 ">&nbsp;&nbsp;</td>
            <td className="text-green-500 hover:text-green-900">
              <Link to={"/dashboard"} target="_blank" rel="noopener noreferrer">
                {"N/A"}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</div> */}


<div className="bg-yellow-100 px-2 py-4 rounded-xl shadow-lg">
  
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Details</h2>
  
  
  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 l">
    
    
    <div className=" p-4 ">
    <table className="w-full table-fixed border border-gray-300">
  <tbody>
  <tr>
  <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Project Manager</td>
  <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words">
    {project.projectManager?.fullName || 'N/A'}
  </td>
</tr>

    <tr>
      <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words ">Planned Start Date</td>
     
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words ">Planned End Date</td>
      
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Actual Start Date</td>
     
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words ">Actual End Date</td>
      
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">S&M Lead Id</td>
     
      <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">
        {project.smLeadId?.employeeId || 'N/A'}
      </td>
    </tr>
  </tbody>
</table>

    </div>
    
   
    <div className="p-4">
      <table className="w-full table-fixed border border-gray-300">
        <tbody>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Location</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words">{"Gurgaon"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Client Name</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{project.clientName}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Client Address</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Point of Contact</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Phone</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Email</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    
    <div className=" p-4 ">
      <table className="w-full table-fixed border border-gray-300">
        <tbody>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Project Duration</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"Dhruv Kumar Saxena"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Total Milestones</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Teams</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Total Budget</td>
            
            <td className="text-blue-500 p-2 border border-gray-400 w-[50%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Status</td>
           
            <td className="text-green-500 p-2 border border-gray-400 w-[50%] max-w-full break-words">{project.status || "Active"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2 border border-gray-400 w-[50%] break-words">Project Repository</td>
            
            <td className="text-green-500 hover:text-green-900 p-2 border border-gray-400 w-[50%] max-w-full break-words">
              <Link to={"/dashboard"} target="_blank" rel="noopener noreferrer">
                {"N/A"}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    
    
    <div className=" p-1 ">
    <table className="w-full table-fixed ">
  <tbody>
  <tr>
      <td className="font-semibold p-2 w-[48%] break-words">Project Manager</td>
      <td className="p-2">:</td>
      <td className="p-2">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 pl-3 w-[48%] max-w-full break-words">
      {project.projectManager.fullName}
      </td>
    </tr>

<tr>
  <td className="font-semibold p-2 w-[48%] break-words">Planned Start Date</td>
  <td className="p-2">:</td>
  <td className="p-2">&nbsp;&nbsp;</td>
  <td className="text-blue-500 p-2 pl-3 w-[48%] max-w-full break-words">{"N/A"}</td>
</tr>

    <tr>
      <td className="font-semibold p-2 w-[48%] break-words ">Planned End Date</td>
      <td className="p-2">:</td>
      <td className="p-2">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 pl-3 w-[48%] max-w-full break-words">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2  w-[48%] break-words">Actual Start Date</td>
      <td className="p-2">:</td>
      <td className="p-2">&nbsp;&nbsp;</td>
      <td className="text-blue-500 p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2  w-[48%] break-words ">Actual End Date</td>
      <td className="p-2">:</td>
      <td className="p-2">&nbsp;&nbsp;</td>
      <td className=" text-blue-500 p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
    </tr>
    <tr>
      <td className="font-semibold p-2  w-[48%] break-words">S&M Lead Id</td>
      <td className="p-2">:</td>
      <td className="p-2">&nbsp;&nbsp;</td>
      <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">
        {project.smLeadId?.employeeId || 'N/A'}
      </td>
    </tr>
  </tbody>
</table>

    </div>
    
   
    <div className="p-1">
      <table className="w-full table-fixed ">
        <tbody>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Location</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words">{"Gurgaon"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Client Name</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{project.clientName}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Client Address</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Point of Contact</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Phone</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Email</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    
    <div className=" p-1 ">
      <table className="w-full table-fixed ">
        <tbody>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Project Duration</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Total Milestones</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Teams</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Total Budget</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-blue-500  p-2 pl-3 w-[48%] max-w-full break-words ">{"N/A"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Status</td>
            <td className="p-2">:</td>
      <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-green-500 p-2 pl-3 w-[48%] max-w-full break-words">{project.status || "Active"}</td>
          </tr>
          <tr>
            <td className="font-semibold p-2  w-[48%] break-words">Project Repository</td>
            <td className="p-2">:</td>
            <td className="p-2">&nbsp;&nbsp;</td>
            <td className="text-green-500 hover:text-green-900 p-2 pl-3 w-[48%] max-w-full break-words">
              <Link to={"/dashboard"} target="_blank" rel="noopener noreferrer">
                {"N/A"}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
  
</div>


        {/* Description */}
        <div className="p-4 mt-2 bg-green-100 rounded-xl">
          <h2 className="text-lg font-bold">Description</h2>
          <p>{project.projectDescription}</p>
        </div>

        {/* Teams and Milestones */}
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          {/* Teams Section */}
          <div className="bg-teal-100 p-4 rounded-xl w-full sm:w-full md:w-1/3 sm:h-auto">
            <h2 className="text-lg font-bold">Teams</h2>
            <table className="w-full">
              <tbody>
                {staticTeamData.map((team, index) => (
                  <tr key={index} className="flex flex-col lg:flex-row  items-start lg:items-center gap-2 md:gap-4">
                    {/* Team Name (always at the top) */}
                    <td className="text-sm font-bold md:w-1/3 ">{team.name}</td>

                    {/* Team Members */}
                    <td className="text-blue-500 flex flex-wrap lg:flex-nowrap items-center gap-4">
                      <AvatarGroup className="gap-2 lg:gap-1 flex flex-wrap md:flex-nowrap">
                        {team.members.slice(0, 5).map((member, i) => (
                          <Avatar
                            key={i}
                            image={member.avatar}
                            shape="circle"
                            className="rounded-full"
                          />
                        ))}
                      </AvatarGroup>

                      {/* "See All" button (always on the right for larger screens) */}
                      {team.members.length > 5 && (
                        <button
                          className="text-blue-500 hover:text-blue-700 font-semibold md:-ml-4"
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


          {/* Milestones Tracking */}
          <div className="bg-white  rounded-xl w-full sm:w-full md:w-2/3 ">
            <div className="text-center text-xl font-semibold bg-gray-200 p-2">
              Project Milestones Tracking
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto -collapse  w-full">
                <tbody>
                  <tr>
                    <td className=" p-2 bg-blue-200 font-semibold">Milestones</td>
                    <td className=" p-2 bg-green-200">1.1</td>
                    <td className=" p-2 bg-yellow-200">1.2</td>
                    <td className=" p-2 bg-yellow-300">1.3</td>
                    <td className=" p-2 bg-red-200">1.4</td>
                    <td className=" p-2">1.5</td>
                    <td className=" p-2">1.6</td>
                  </tr>
                  <tr>
                    <td className=" p-2 bg-blue-200 font-semibold">Planned</td>
                    <td className=" p-2 bg-green-200">31 Jan 24</td>
                    <td className=" p-2 bg-yellow-200">29 Feb 24</td>
                    <td className=" p-2 bg-yellow-300">31 Mar 24</td>
                    <td className=" p-2 bg-red-200">30 Apr 24</td>
                    <td className=" p-2">31 May 24</td>
                    <td className=" p-2">30 Jun 24</td>
                  </tr>
                  <tr>
                    <td className=" p-2 bg-blue-200 font-semibold">Actual / Estimated</td>
                    <td className=" p-2 bg-green-200">6 Mar 24</td>
                    <td className=" p-2 bg-yellow-200">31 Mar 24*</td>
                    <td className=" p-2 bg-yellow-300">23 May 24*</td>
                    <td className=" p-2 bg-red-200">30 Apr 24*</td>
                    <td className=" p-2"></td>
                    <td className=" p-2"></td>
                  </tr>
                  <tr>
                    <td className=" p-2 bg-blue-200 font-semibold">C-Sat Level</td>
                    <td className=" p-2 bg-green-200">+ve</td>
                    <td className=" p-2 bg-yellow-200">Neutral</td>
                    <td className=" p-2 bg-yellow-300"></td>
                    <td className=" p-2 bg-red-200"></td>
                    <td className=" p-2"></td>
                    <td className=" p-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <TeamDialogBox
        teamDetails={teamDetails}
        visible={visible}
        onHide={onHide}
      />
    </div>
  );
};

export default ProjectDetailsPage;
