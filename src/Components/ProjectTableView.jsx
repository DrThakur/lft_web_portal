import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";

// const projects = [
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

  // const baseURL = process.env.REACT_APP_BASE_URL;
  // const port = process.env.REACT_APP_BACKEND_PORT;
  // const apiUrl2 = `https://lft-web-portal-backend-1.onrender.com/projects`;
  // const apiUrl1 = `http://${baseURL}:${port}/projects`;

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/projects`);
        const projectsData = response.data.projects;
        console.log("my projects", response.data.projects);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching project details:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching projects: {error.message}</p>;

  // Render function for Grid items
  const renderRow = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 4 + columnIndex; // Calculate the correct index for the grid
    const project = projects[index];

    return project ? (
      <div
        style={{
          ...style,
          padding: "0px 10px",
          boxSizing: "border-box", // Ensure padding is included in width calculation
        }}
        key={project.projectId}
      >
        <ProjectCard project={project} />
      </div>
    ) : null;
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden bg-white h-full mt-1 p-4">
      {selectedView && selectedView === "table" ? (
        ""
      ) : (
        <h2 className="font-bold text-2xl mt-2 ml-2 mb-2">PMS Dashboard</h2>
      )}
      <div className="">
        <Grid
          columnCount={4}
          columnWidth={450}
          height={750}
          rowCount={Math.ceil(projects.length / 4)}
          rowHeight={520}
          width={1920}
          style={{ padding: '10px' }}
        >
          {renderRow}
        </Grid>
      </div>
    </div>
  );
};

export default ProjectTableView;
