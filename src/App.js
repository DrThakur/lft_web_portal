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
import ProjectDetailsPage from "./Components/ProjectDetailsPage";
import ColumnToggleDemo from "./Components/MultiSelectColumns";
import HolidayCalendarPage from "./Components/HolidayCalenderPage";
import AnnouncementsPage from "./Components/AnnoucementPage";
import EosUpdate from "./Components/EosUpdate";
import MonthYearPicker from "./Components/MonthYearPicker";
import EosUpdateByMonth from "./Components/EosUpdateByMonth";
import EosApproval from "./Components/EosApproval";
import EosApprovalFinal from "./Components/EosApprovalFinal";
import EosApprovalHod from "./Components/EosApprovalHod";
import DocumentCenter from "./Components/DocumentCenter";
import OragnizationChart from "./Components/OragnizationChart";
import OrganizationChartPage from "./Pages/OrganizationChartPage";
import ResourcePool from "./Components/ResourcePool";
import ResourceTable from "./Components/ResourceTable";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import EmployeeManagement from "./Components/EmployeeManagement";
import FinalEosTable from "./Components/FinalEosTable";
import EosTable from "./Components/EosTable";
import EosApprovalByMonth from "./Components/EosApprovalByMonth";
import HRDashboard from "./Pages/HRDashboard";
import Recruitment from "./Components/HRComponents/Recruitment";
import Helpdesk from "./Components/Helpdesk/Helpdesk";
import PrivateRoute from "./Components/PrivateRoute";

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
      plannedStartDate: "10 Feb 2024",
      plannedEndDate: "10 Dec 2024",
      actualStartDate: "13 Mar 2024",
      actualEndDate: "20 Jan 2025",
      smLeadId: "LFT/202326",
      location: "Gurgaon",
      clientName: "Joshua Technologies Pvt Ltd",
      clientAddress: "Bangalore",
      pointOfContact: "Ankit Singh",
      clientPhone: "7011711442",
      clientEmail: "drankitkumarthakur@gmail.com",
      duration: "12 Months",
      totalBudget: "$500000",
      repository: "https://www.logic-fruit.com/",
      status: "Unpublish",
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
  ];

  const teamsData = [
    {
      teamName: "Software",
      members: [
        { name: "John Doe", role: "Manager" },
        { name: "Jane Doe", role: "Developer" },
        { name: "Alice Smith", role: "Designer" },
        { name: "Bob Johnson", role: "QA" },
      ],
    },
    {
      teamName: "Hardware",
      members: [
        { name: "John Doe", role: "Manager" },
        { name: "Jane Doe", role: "Developer" },
        { name: "Alice Smith", role: "Designer" },
        { name: "Bob Johnson", role: "QA" },
      ],
    },
    // Add more teams here if needed
  ];

  const holidays = [
    { day: 1, month: 1, year: 2024, name: "New Year's Day" }, // January 1st, 2024
    { day: 26, month: 1, year: 2024, name: "Australia Day" }, // January 26th, 2024
    { day: 14, month: 2, year: 2024, name: "Valentine's Day" }, // February 14th, 2024
    { day: 17, month: 3, year: 2024, name: "St. Patrick's Day" }, // March 17th, 2024
    { day: 10, month: 4, year: 2024, name: "Good Friday" }, // April 10th, 2024
    { day: 12, month: 4, year: 2024, name: "Easter Sunday" }, // April 12th, 2024
    { day: 25, month: 4, year: 2024, name: "Anzac Day" }, // April 25th, 2024
    { day: 28, month: 5, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 6, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 7, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 8, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 9, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 10, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 11, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    { day: 28, month: 12, year: 2024, name: "Anzac Day" }, // May 28th, 2024
    // Add more holidays here
  ];

  const announcements = [
    {
      date: "June 1, 2024",
      title: "Important Update",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "June 2, 2024",
      title: "New Feature Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more announcements here as needed
    {
      date: "May 5, 2024",
      title: "Prodcuct1 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct2 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct3 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct4 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct5 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct6 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct7 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct5 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct8 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more announcements here as needed
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/all-projects" element={<AllProjects />} />
                    <Route
                      path="/create-project"
                      element={<CreateProjectForm />}
                    />
                    <Route path="/purchase-order" element={<PurchaseOrder />} />
                    <Route
                      path="/project-dashboard/:projectId"
                      element={<ProjectDetails />}
                    />
                    <Route path="/user-profile" element={<UserProfilePage />} />
                    <Route path="/test1" element={<ProjectCarousel />} />
                    <Route
                      path="/test2"
                      element={<ProjectCard project={projects[1]} />}
                    />
                    <Route
                      path="/pms-dashboard"
                      element={<ProjectTableView />}
                    />
                    <Route
                      path="/project-milestones"
                      element={<ProjectMilestones />}
                    />
                    <Route path="/add-task" element={<TaskForm />} />
                    <Route path="/test6" element={<TestSelect />} />
                    <Route
                      path="/test7"
                      element={<TeamDeatils teams={teamsData} />}
                    />
                    <Route path="/test8" element={<FinalEmployeeDropdown />} />
                    <Route path="/test9" element={<NewAddTeamForm />} />
                    <Route path="/test10" element={<NewMilestoneForm />} />
                    <Route path="/test11" element={<TestCreateProjectForm />} />
                    <Route path="/test12" element={<TestMilestoneForm />} />
                    <Route
                      path="/project-details/:projectId"
                      element={<ProjectDetailsPage />}
                    />
                    <Route path="/test13" element={<ColumnToggleDemo />} />
                    <Route
                      path="/holiday-calender"
                      element={<HolidayCalendarPage holidays={holidays} />}
                    />
                    <Route
                      path="/announcements"
                      element={
                        <AnnouncementsPage announcements={announcements} />
                      }
                    />
                    <Route path="/eos-update" element={<EosUpdate />} />
                    <Route path="/month" element={<MonthYearPicker />} />
                    <Route
                      path="/eos-update/:year/:month"
                      element={<EosUpdateByMonth />}
                    />
                    <Route
                      path="/eos-approval/:year/:month"
                      element={<EosApprovalByMonth />}
                    />
                    <Route path="/eos-approval" element={<EosApproval />} />
                    <Route
                      path="/eos-approval-final"
                      element={<EosApprovalFinal />}
                    />
                    <Route
                      path="/eos-approval-hod"
                      element={<EosApprovalHod />}
                    />
                    <Route
                      path="/eos-approval-hod/:year/:month"
                      element={<EosApprovalByMonth />}
                    />
                    {/* <Route path="/document-center" element={<DocumentCenter />} /> */}
                    <Route path="/all-documents" element={<DocumentCenter />} />
                    <Route path="/org-chart" element={<OragnizationChart />} />
                    <Route
                      path="/org-chart-page"
                      element={<OrganizationChartPage />}
                    />
                    <Route path="/resource-pool" element={<ResourcePool />} />
                    <Route path="/resource-table" element={<ResourceTable />} />
                    <Route
                      path="/employee-management"
                      element={<EmployeeManagement />}
                    />
                    <Route path="/final-eos" element={<FinalEosTable />} />
                    <Route path="/eos-table" element={<EosTable />} />
                    <Route path="/hr-dashboard" element={<HRDashboard />} />
                    <Route path="/recruitment" element={<Recruitment />} />
                    <Route path="/helpdesk" element={<Helpdesk />} />
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
