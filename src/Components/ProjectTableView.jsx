import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import { Avatar } from "primereact/avatar";


//   {
//     id: 1,
//     name: "LFT Intranet Web Portal",
//     deadline: "01 Jan 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Dhruv Kumar Saxena",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 50,
//     milestones: "10",
//     completed: "5",
//     active: "1",
//     pending: "4",
//   },
//   {
//     id: 2,
//     name: "Corvett",
//     deadline: "10 Feb 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Jonn Doe",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 60,
//     milestones: "6",
//     completed: "4",
//     active: "1",
//     pending: "1",
//   },
//   {
//     id: 3,
//     name: "Lattice",
//     deadline: "02 Apr 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Vishal Singh",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 70,
//     milestones: "8",
//     completed: "5",
//     active: "1",
//     pending: "2",
//   },
//   {
//     id: 4,
//     name: "Keysight",
//     deadline: "15 May 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Ankit Kumar Thakur",
//     teams: ["Software", "Hardware"],
//     progress: 80,
//     milestones: "3",
//     completed: "2",
//     active: "1",
//     pending: "0",
//   },
//   {
//     id: 5,
//     name: "Analyser",
//     deadline: "30 June 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Pardeep Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 90,
//     milestones: "9",
//     completed: "4",
//     active: "2",
//     pending: "3",
//   },
//   {
//     id: 6,
//     name: "Debugger",
//     deadline: "11 July 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Fuzail Qamar",
//     teams: ["Software", "Hardware"],
//     progress: 95,
//     milestones: "13",
//     completed: "7",
//     active: "3",
//     pending: "3",
//   },
//   {
//     id: 7,
//     name: "Chatbot",
//     deadline: "15 Aug 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Vineet Goyal",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 10,
//     milestones: "11",
//     completed: "5",
//     active: "2",
//     pending: "4",
//   },
//   {
//     id: 8,
//     name: "AI Car",
//     deadline: "23 Sep 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Sanjeev Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 20,
//     milestones: "15",
//     completed: "5",
//     active: "5",
//     pending: "5",
//   },
//   {
//     id: 9,
//     name: "AI Car",
//     deadline: "23 Sep 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Sanjeev Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 20,
//     milestones: "15",
//     completed: "5",
//     active: "5",
//     pending: "5",
//   },
//   {
//     id: 10,
//     name: "AI Car",
//     deadline: "23 Sep 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Sanjeev Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 20,
//     milestones: "15",
//     completed: "5",
//     active: "5",
//     pending: "5",
//   },
//   {
//     id: 11,
//     name: "AI Car",
//     deadline: "23 Sep 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Sanjeev Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 20,
//     milestones: "15",
//     completed: "5",
//     active: "5",
//     pending: "5",
//   },
//   {
//     id: 12,
//     name: "AI Car",
//     deadline: "23 Sep 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Sanjeev Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 20,
//     milestones: "15",
//     completed: "5",
//     active: "5",
//     pending: "5",
//   },
//   {
//     id: 13,
//     name: "AI Car",
//     deadline: "23 Sep 2024",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
//     manager: "Sanjeev Kumar",
//     teams: ["Software", "Hardware", "FPGA"],
//     progress: 20,
//     milestones: "15",
//     completed: "5",
//     active: "5",
//     pending: "5",
//   },
//   // Add more project data as needed
// ];


const ProjectTableView = ({ selectedView }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAvatars, setModalAvatars] = useState([]);
  const [modalAvatarNames, setModalAvatarNames] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/projects`);
        setProjects(response.data.projects);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching projects: {error.message}</p>;

  const getAvailableWidth = () => {
    const sidebarWidth = 106;
    const availableWidth = screenWidth - sidebarWidth;
    return availableWidth > 0 ? availableWidth : screenWidth;
  };

  const getColumnCount = () => {
    if (screenWidth < 640) {
      return 1;
    } else if (screenWidth < 1024) {
      return 2;
    } else if (screenWidth < 1536) {
      return 3;
    }
    else if (screenWidth < 2400) {
      return 4;
    }else if (screenWidth < 3100) {
      return 5;
    } else {
      return 6;
    }
  };

  const getColumnWidth = () => {
    const padding = 20;
    const margin = 10;
    const availableWidth = getAvailableWidth();
    const columnCount = getColumnCount();
    return (availableWidth - padding - (columnCount - 1) * margin) / columnCount;
  };

  const getRowHeight = () => {
    if (screenWidth < 640) {
      return 400;
    } else if (screenWidth < 1024) {
      return 405;
    } else if (screenWidth < 1280) {
      return 470;
    } else {
      return 520;
    }
  };

  const getRowCount = () => Math.ceil(projects.length / getColumnCount());

  const renderRow = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * getColumnCount() + columnIndex;
    if (index >= projects.length) return null;

    const project = projects[index];

    return project ? (
      <div
        style={{
          ...style,
          padding: "0px 10px",
          margin: "10px",
          boxSizing: "border-box",
        }}
        key={project._id}
      >
        <ProjectCard project={project} toggleModal={toggleModal} />
      </div>
    ) : null;
  };

  const dynamicHeight = viewportHeight - 178;

  const toggleModal = (avatars, avatarNames) => {
    setModalAvatars(avatars);
    setModalAvatarNames(avatarNames);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto w-full bg-white mt-1 p-1 xs:p-3 2xl:p-4">
      {selectedView !== "table" && (
        <h2 className="font-bold text-2xl mt-2 ml-2 mb-2">PMS Dashboard</h2>
      )}

      <div>
        <Grid
          columnCount={getColumnCount()}
          columnWidth={getColumnWidth()}
          height={dynamicHeight}
          rowCount={getRowCount()}
          rowHeight={getRowHeight()}
          width={getAvailableWidth()}
          style={{ padding: '10px', overflowX: 'hidden' }}
        >
          {renderRow}
        </Grid>
      </div>

      {/* Render modal conditionally here */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3 max-h-[80vh] relative ml-[106px] mr-7">
            <button
              className="absolute top-4 right-4 xs:right-6 text-xl font-bold text-gray-600 rounded-full border-4 border-violet-200 hover:bg-gray-400 hover:border-violet-200 hover:text-gray-800 h-10 w-10 flex items-center justify-center"
              onClick={toggleModal}
            >
              <span className="-mt-1">&times;</span>
            </button>
            <h3 className="font-bold mb-4 text-start ">All Members:</h3>
            <div className="overflow-y-auto max-h-60 md:max-h-80 lg:max-h-96 pb-4 ">
              {modalAvatars.map((avatar, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <Avatar image={avatar} shape="circle" />
                  <span>{modalAvatarNames[index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTableView;
