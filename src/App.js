import React from "react";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProjectForm from "./Components/CreateProjectForm";
import PurchaseOrder from "./Components/PurchaseOrder";
import ProjectDetails from "./Components/ProjectDetails";
import AllProjects from "./Components/AllProjects";
import UserProfilePage from "./Pages/UserProfilePage";
import ProjectCard from "./Components/ProjectCard";
import ProjectCarousel from "./Components/ProjectCarousel";
import ProjectTableView from "./Components/ProjectTableView";
import ProjectMilestones from "./Components/ProjectMilestones";
import TaskForm from "./Components/TaskForm";
import TestSelect from "./Components/TestSelect";
import TeamDeatils from "./Components/TeamDeatils";
import FinalEmployeeDropdown from "./Components/FinalEmployeeDropdown";
import NewAddTeamForm from "./Components/NewAddTeamForm";
import NewMilestoneForm from "./Components/NewMilestoneForm";
import TestCreateProjectForm from "./Components/TestCreateProjectForm";
import TestMilestoneForm from "./Components/TestMilestoneForm";

const App = () => {
  const projects = [
    {
      id: 1,
      name: "LFT Intranet Web Portal",
      deadline: "01 Jan 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Dhruv Kumar Saxena",
      teams: ["Software", "Hardware", "FPGA"],
      progress: 50,
      milestones: "10",
      completed: "5",
      active: "1",
      pending: "4",
    },
    {
      id: 2,
      name: "Corvett",
      deadline: "10 Feb 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Jonn Doe",
      teams: ["Software", "Hardware", "FPGA"],
      progress: 60,
      milestones: "6",
      completed: "4",
      active: "1",
      pending: "1",
    },
    {
      id: 3,
      name: "Lattice",
      deadline: "02 Apr 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Vishal Singh",
      teams: ["Software", "Hardware", "FPGA"],
      progress: 70,
      milestones: "8",
      completed: "5",
      active: "1",
      pending: "2",
    },
    {
      id: 4,
      name: "Keysight",
      deadline: "15 May 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Ankit Kumar Thakur",
      teams: ["Software", "Hardware"],
      progress: 80,
      milestones: "3",
      completed: "2",
      active: "1",
      pending: "0",
    },
    {
      id: 5,
      name: "Analyser",
      deadline: "30 June 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Pardeep Kumar",
      teams: ["Software", "Hardware", "FPGA"],
      progress: 90,
      milestones: "9",
      completed: "4",
      active: "2",
      pending: "3",
    },
    {
      id: 6,
      name: "Debugger",
      deadline: "11 July 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Fuzail Qamar",
      teams: ["Software", "Hardware"],
      progress: 95,
      milestones: "13",
      completed: "7",
      active: "3",
      pending: "3",
    },
    {
      id: 7,
      name: "Chatbot",
      deadline: "15 Aug 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Vineet Goyal",
      teams: ["Software", "Hardware", "FPGA"],
      progress: 10,
      milestones: "11",
      completed: "5",
      active: "2",
      pending: "4",
    },
    {
      id: 8,
      name: "AI Car",
      deadline: "23 Sep 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....",
      manager: "Sanjeev Kumar",
      teams: ["Software", "Hardware", "FPGA"],
      progress: 20,
      milestones: "15",
      completed: "5",
      active: "5",
      pending: "5",
    },
    // Add more project data as needed
  ]

  const teamsData = [
    {
      teamName: "Software",
      members: [
        { name: "John Doe", role: "Manager" },
        { name: "Jane Doe", role: "Developer" },
        { name: "Alice Smith", role: "Designer" },
        { name: "Bob Johnson", role: "QA" }
      ]
    },
    {
      teamName: "Hardware",
      members: [
        { name: "John Doe", role: "Manager" },
        { name: "Jane Doe", role: "Developer" },
        { name: "Alice Smith", role: "Designer" },
        { name: "Bob Johnson", role: "QA" }
      ]
    },
    // Add more teams here if needed
  ];


  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/create-project" element={<CreateProjectForm />} />
            <Route path="/purchase-order" element={<PurchaseOrder />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/test1" element={<ProjectCarousel />} />
            <Route path="/test2" element={<ProjectCard project={projects[1]}/>} />
            <Route path="/pms-dashboard" element={<ProjectTableView/>} />
            <Route path="/project-milestones" element={<ProjectMilestones/>} />
            <Route path="/add-task" element={<TaskForm/>} />
            <Route path="/test6" element={<TestSelect/>} />
            <Route path="/test7" element={<TeamDeatils teams={teamsData}/>} />
            <Route path="/test8" element={<FinalEmployeeDropdown/>} />
            <Route path="/test9" element={<NewAddTeamForm/>} />
            <Route path="/test10" element={<NewMilestoneForm/>} />
            <Route path="/test11" element={<TestCreateProjectForm/>} />
            <Route path="/test12" element={<TestMilestoneForm/>} />
            
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
