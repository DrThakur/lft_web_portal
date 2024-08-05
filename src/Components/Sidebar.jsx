import React, { useState } from "react";
import "./Sidebar.css"; // Import your CSS file for styling
import { LuLayoutDashboard } from "react-icons/lu";
import { BsPeople, BsLaptop } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import {
  MdAttachMoney,
  MdOutlineCancel,
  MdAddTask,
  MdDashboardCustomize,
  MdOutlineApproval,
  MdManageAccounts,
  MdAddLocation,
  MdIncompleteCircle,
} from "react-icons/md";
import { RiStore2Line, RiAdminLine } from "react-icons/ri";
import {
  FaSellsy,
  FaProjectDiagram,
  FaUserGraduate,
  FaHeadSideVirus,
  FaFileInvoiceDollar,
  FaRupeeSign,
} from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import {
  IoSettingsOutline,
  IoCreateOutline,
  IoDocumentText,
} from "react-icons/io5";
import {
  IoIosPeople,
  IoIosArrowDropright,
  IoIosTime,
  IoMdLaptop,
} from "react-icons/io";
import { useStateContext } from "../Contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { GoProjectRoadmap, GoMilestone, GoGoal } from "react-icons/go";
import { BiPurchaseTag } from "react-icons/bi";
import { TbListDetails, TbReportSearch } from "react-icons/tb";

import { ImProfile } from "react-icons/im";
import { GrMonitor, GrResources, GrDocumentPerformance } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import {
  FaMoneyCheckDollar,
  FaLaptopMedical,
  FaPersonCirclePlus,
} from "react-icons/fa6";

import { FaMedal } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";

const Sidebar = () => {
  const [selectedMainItem, setSelectedMainItem] = useState("Dashboard"); // State to track selected main item
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const { activeRightSidebar, setActiveRightSidebar } = useStateContext();
  const navigate = useNavigate();

  // Function to handle click on main items
  const handleMainItemClick = (mainItem) => {
    setSelectedMainItem(mainItem);
    setActiveRightSidebar(true);
    if (mainItem === "Dashboard") {
      navigate(`/dashboard`);
    } else if (mainItem === "Document Center") {
      navigate(`/document-center`);
    }
    // Perform any other actions upon main item click
  };

  // Function to handle click on menu items
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);

    if (menuItem === "PMS Dashboard") {
      navigate(`/pms-dashboard`);
    } else if (menuItem === "All Projects") {
      navigate(`/all-projects`);
    } else if (menuItem === "Create Project") {
      navigate("/create-project");
    } else if (menuItem === "PO Entry") {
      navigate("/purchase-order");
    } else if (menuItem === "Project Details") {
      navigate("/project-details");
    } else if (menuItem === "Project Milestones") {
      navigate("/project-milestones");
    } else if (menuItem === "Add Task") {
      navigate("/add-task");
    } else if (menuItem === "My Profile") {
      navigate("/user-profile");
    } else if (menuItem === "EoS Update") {
      navigate("/eos-update");
    } else if (menuItem === "EoS Approval") {
      navigate("/eos-approval");
    } else if (menuItem === "EoS Approval Hod") {
      navigate("/eos-approval-hod");
    } else if (menuItem === "Organization Chart") {
      navigate("/org-chart-page");
    } else if (menuItem === "Resource Pool") {
      navigate("/resource-pool");
    } else if (menuItem === "Employee Management") {
      navigate("/employee-management");
    }

    // Perform any other actions upon main item click
  };

  // Function to handle submenu visibility
  const handleSubmenu = (status) => {
    setShowSubmenu(status);
  };

  const closeRightSidebar = (mainItem) => {
    setSelectedMainItem(mainItem);
    setActiveRightSidebar(!activeRightSidebar);
  };

  if (
    selectedMainItem === "Dashboard" ||
    selectedMainItem === "Admin" ||
    selectedMainItem === "Learning & Developement"
    // selectedMainItem === "Document Center"
  ) {
    // If selectedMainItem is "Dashboard", set activeRightSidebar to false
    setActiveRightSidebar(false);
  }

  // const sidebarMainItem = ({icon: IconComponent, title, selectedMainItem, handleMainItemClick}) => (
  //   <React.Fragment>
  //     <Tooltip title={title} placement="right" arrow>
  //       <div
  //         className={`sidebar-item ${
  //           selectedMainItem === title ? "active" : ""
  //         }`}
  //         onClick={() => handleMainItemClick(title)}
  //       >
  //         <div className="sidebar-item-content">
  //           <span className="sidebar-icon">
  //           {IconComponent && <IconComponent />}
  //           </span>
  //           <span className="sidebar-text">{title}</span>
  //         </div>
  //       </div>
  //     </Tooltip>
  //   </React.Fragment>
  // );

  // <sidebarMainItem icon={LuLayoutDashboard}  title="Dashboard" selectedMainItem="Dashboard" handleMainItemClick ={handleMainItemClick} />

  return (
    <div className="app">
      {/* Left Column */}
      <div className="sidebar left-sidebar myscrollbar">
        {/*nav*/}
        <div className="sidebar-column-left">
          {/*ul*/}
          {/* Main items */}

          <Tooltip title="Dashboard" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Dashboard")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <LuLayoutDashboard />
                </span>
                <span className="sidebar-text">Dashboard</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Employee Corner" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Employee Corner" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Employee Corner")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <FaUserGraduate />
                </span>
                <span className="sidebar-text text-center">E-Corner</span>
              </div>
            </div>
          </Tooltip>
          <Tooltip title="Project Management System" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "PMS" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("PMS")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <FaProjectDiagram />
                </span>
                <span className="sidebar-text">PMS</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Sales and Marketing" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Sales and Marketing" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Sales and Marketing")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <FaSellsy />
                </span>
                <span className="sidebar-text">S&M</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="HR Operations" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "HR Operations" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("HR Operations")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <BsPeople />
                </span>
                <span className="sidebar-text">HR</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="R&D Operations" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "R&D" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("R&D")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <GiArchiveResearch />
                </span>
                <span className="sidebar-text">R&D</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Finance Operations" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Finance Operations" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Finance Operations")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <MdAttachMoney />
                </span>
                <span className="sidebar-text">Finance</span>
              </div>
            </div>
          </Tooltip>
          <Tooltip title="Procurement" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Procurement" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Procurement")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <RiStore2Line />
                </span>
                <span className="sidebar-text">Procurement</span>
              </div>
            </div>
          </Tooltip>

          {/*   <Tooltip title="IT" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "IT" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("IT")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <BsLaptop />
                </span>
                <span className="sidebar-text">IT</span>
              </div>
            </div>
          </Tooltip>
          */}

          <Tooltip title="Document Center" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Document Center" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Document Center")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <IoDocumentText />
                </span>
                <span className="sidebar-text">Documents</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Admin" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Admin" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Admin")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <RiAdminLine />
                </span>
                <span className="sidebar-text">Admin</span>
              </div>
            </div>
          </Tooltip>
          <Tooltip title="Learning & Developement" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Learning & Developement" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Learning & Developement")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <FaHeadSideVirus />
                </span>
                <span className="sidebar-text">L&D</span>
              </div>
            </div>
          </Tooltip>

          <Tooltip title="Settings" placement="right" arrow>
            <div
              className={`sidebar-item ${
                selectedMainItem === "Settings" ? "active" : ""
              }`}
              onClick={() => handleMainItemClick("Settings")}
            >
              <div className="sidebar-item-content">
                <span className="sidebar-icon">
                  <IoSettingsOutline />
                </span>
                <span className="sidebar-text">Settings</span>
              </div>
            </div>
          </Tooltip>
          {/* Add more main items */}
        </div>
      </div>

      {/* Right Column */}
      {activeRightSidebar && selectedMainItem !== "Dashboard" && (
        <div className={`sidebar right-sidebar`}>
          <button
            className="close-button"
            onClick={() => closeRightSidebar(selectedMainItem)}
          >
            <MdOutlineCancel />
          </button>
          <div className="sidebar-column-right">
            {/* Sub-items based on selected main item */}

            {selectedMainItem === "Dashboard" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Dashboard */}
                {/* ... */}
              </div>
            )}
            {selectedMainItem === "Employee Corner" && (
              <div className="right-sidebar-item">
                {/* Sub-items for HR Ops */}
                {/* ... */}

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Employee Dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Employee Dashboard")}
                >
                  <span className="right-sidebar-icon">
                    <MdDashboardCustomize />
                  </span>
                  <span className="right-sidebar-text">Employee Dashboard</span>
                </div>
                <Tooltip
                  title="Employee Occupancy Sheet"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "EoS Update" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("EoS Update")}
                  >
                    <span className="right-sidebar-icon">
                      <MdIncompleteCircle />
                    </span>
                    <span className="right-sidebar-text">EoS Update</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "My Profile" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("My Profile")}
                >
                  <span className="right-sidebar-icon">
                    <ImProfile />
                  </span>
                  <span className="right-sidebar-text">My Profile</span>
                </div>
                <Tooltip title="Measure Of Success" placement="right" arrow>
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "My MoS" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("My MoS")}
                  >
                    <span className="right-sidebar-icon">
                      <FaMedal />
                    </span>
                    <span className="right-sidebar-text">My MoS</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "My Assets" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("My Assets")}
                >
                  <span className="right-sidebar-icon">
                    <IoMdLaptop />
                  </span>
                  <span className="right-sidebar-text"> My Assets</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Organization Chart" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Organization Chart")}
                >
                  <span className="right-sidebar-icon">
                    <RiOrganizationChart />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    Organization Chart
                  </span>
                </div>
              </div>
            )}
            {selectedMainItem === "HR Operations" && (
              <div className="right-sidebar-item">
                {/* Sub-items for HR Ops */}
                {/* ... */}

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "HR Dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("HR Dashboard")}
                >
                  <span className="right-sidebar-icon">
                    <MdDashboardCustomize />
                  </span>
                  <span className="right-sidebar-text">HR Dashboard</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Employee Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Employee Management")}
                >
                  <span className="right-sidebar-icon">
                    <MdManageAccounts />
                  </span>
                  <span className="right-sidebar-text">
                    Employee Management
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Appraisal Record" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Appraisal Record")}
                >
                  <span className="right-sidebar-icon">
                    <FaRupeeSign />
                  </span>
                  <span className="right-sidebar-text"> Appraisal Record</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Recruitment" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Recruitment")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Recruitment</span>
                </div>
                <Tooltip
                  title="Performance Improvement Plan"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "PIP" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("PIP")}
                  >
                    <span className="right-sidebar-icon">
                      <GrDocumentPerformance />
                    </span>
                    <span className="right-sidebar-text"> PIP</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Reports" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Reports")}
                >
                  <span className="right-sidebar-icon">
                    <TbReportSearch />
                  </span>
                  <span className="right-sidebar-text"> Reports </span>
                </div>
              </div>
            )}

            {selectedMainItem === "Finance Operations" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Finance Dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Finance Dashboard")}
                >
                  <span className="right-sidebar-icon">
                    <MdDashboardCustomize />
                  </span>
                  <span className="right-sidebar-text"> Finance Dashboard</span>
                </div>
                <Tooltip
                  title="Project Financila Record"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "Project Financial Record"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleMenuItemClick("Project Financial Record")
                    }
                  >
                    <span className="right-sidebar-icon">
                      <LiaFileInvoiceDollarSolid />
                    </span>
                    <span className="right-sidebar-text"> PFR</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Budgeting" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Budgeting")}
                >
                  <span className="right-sidebar-icon">
                    <FaMoneyCheckDollar />
                  </span>
                  <span className="right-sidebar-text"> Project Budgeting</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Reports" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Reports")}
                >
                  <span className="right-sidebar-icon">
                    <TbReportSearch />
                  </span>
                  <span className="right-sidebar-text"> Reports</span>
                </div>
              </div>
            )}

            {selectedMainItem === "Procurement" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <Tooltip
                  title="Asset Allocation & Release"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "Asset Allocation" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("Asset Allocation")}
                  >
                    <span className="right-sidebar-icon">
                      <MdAssignmentReturn className="rotate-180" />
                    </span>
                    <span className="right-sidebar-text">
                      {" "}
                      Asset Allocation
                    </span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Asset Records" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Asset Records")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> Asset Records</span>
                </div>
              </div>
            )}
            {selectedMainItem === "Document Center" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <Tooltip title="All Documents" placement="right" arrow>
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "All Documents" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("All Documents")}
                  >
                    <span className="right-sidebar-icon">
                      <MdAssignmentReturn className="rotate-180" />
                    </span>
                    <span className="right-sidebar-text">All Documents</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> Project Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "HR Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("HR Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> HR Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "R&D Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("R&D Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> R&D Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "IT Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("IT Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> IT Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Finance Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Finance Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> Finance Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "S&M Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("S&M Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text">S&M Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Admin Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Admin Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> Admin Documents</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Procurement Documents" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Procurement Documents")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    Procurement Documents
                  </span>
                </div>
              </div>
            )}

            {selectedMainItem === "PMS" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "PMS Dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("PMS Dashboard")}
                >
                  <span className="right-sidebar-icon">
                    <MdDashboardCustomize />
                  </span>
                  <span className="right-sidebar-text">PMS Dashboard</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "All Projects" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("All Projects")}
                >
                  <span className="right-sidebar-icon">
                    <GoProjectRoadmap />
                  </span>
                  <span className="right-sidebar-text"> All Projects</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Create Project" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Create Project")}
                >
                  <span className="right-sidebar-icon">
                    <IoCreateOutline />
                  </span>
                  <span className="right-sidebar-text"> Create Project</span>
                </div>

                {/*<div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Purchase Order" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Purchase Order")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text">Purchase Order</span>
                </div>
                */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Milestones" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Milestones")}
                >
                  <span className="right-sidebar-icon">
                    <GoMilestone />
                  </span>
                  <span className="right-sidebar-text">Project Milestones</span>
                </div>
                <Tooltip
                  title="Employee Occupancy Sheet"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "EoS Approval" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("EoS Approval")}
                  >
                    <span className="right-sidebar-icon">
                      <MdOutlineApproval />
                    </span>
                    <span className="right-sidebar-text">EoS Approval</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Invoicing" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Invoicing")}
                >
                  <span className="right-sidebar-icon">
                    <FaFileInvoiceDollar />
                  </span>
                  <span className="right-sidebar-text">Invoicing</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Assets" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Assets")}
                >
                  <span className="right-sidebar-icon">
                    <GrMonitor />
                  </span>
                  <span className="right-sidebar-text">Project Assets</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Assessment & Goals" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Assessment & Goals")}
                >
                  <span className="right-sidebar-icon">
                    <GoGoal />
                  </span>
                  <span className="right-sidebar-text">Assessment & Goals</span>
                </div>

                {/*
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Details" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Details")}
                >
                  <span className="right-sidebar-icon">
                    <TbListDetails />
                  </span>
                  <span className="right-sidebar-text">Project Details</span>
                </div>
                */}
                {/*
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Add Task" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Add Task")}
                >
                  <span className="right-sidebar-icon">
                    <MdAddTask />
                  </span>
                  <span className="right-sidebar-text">Add Task</span>
                </div>
                */}
              </div>
            )}

            {/*{selectedMainItem === "IT" && (
              <div className="right-sidebar-item">
              
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Ticketing" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Ticketing")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Ticketing</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Asset Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Asset Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Assets</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Accessories" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Accessories")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Accessories</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Consumables" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Consumables")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Consumables</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Components" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Components")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Components</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Licences" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Licences")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Licences</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Self Support" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Self Support")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Self Support</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Users" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Users")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Users</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Reports" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Reports")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Reports</span>
                </div>
              </div>
            )}
          */}

            {selectedMainItem === "Sales and Marketing" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "PO Entry" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("PO Entry")}
                >
                  <span className="right-sidebar-icon">
                    <BiPurchaseTag />
                  </span>
                  <span className="right-sidebar-text"> PO Entry</span>
                </div>
                <Tooltip
                  title="Employee Occupancy Sheet"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "EoS Approval" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("EoS Approval")}
                  >
                    <span className="right-sidebar-icon">
                      <MdOutlineApproval />
                    </span>
                    <span className="right-sidebar-text">EoS Approval</span>
                  </div>
                </Tooltip>
              </div>
            )}

            {selectedMainItem === "R&D" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "R&D Dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("R&D Dashboard")}
                >
                  <span className="right-sidebar-icon">
                    <MdDashboardCustomize />
                  </span>
                  <span className="right-sidebar-text"> R&D Dashboard</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Resource Pool" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Resource Pool")}
                >
                  <span className="right-sidebar-icon">
                    <GrResources />
                  </span>
                  <span className="right-sidebar-text"> Resource Pool</span>
                </div>
                <Tooltip
                  title="Employee Occupancy Sheet"
                  placement="right"
                  arrow
                >
                  <div
                    className={`right-sidebar-item-content ${
                      selectedMenuItem === "EoS Approval Hod" ? "active" : ""
                    }`}
                    onClick={() => handleMenuItemClick("EoS Approval Hod")}
                  >
                    <span className="right-sidebar-icon">
                      <MdOutlineApproval />
                    </span>
                    <span className="right-sidebar-text"> EoS Approval</span>
                  </div>
                </Tooltip>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Employee Goals" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Employee Goals")}
                >
                  <span className="right-sidebar-icon">
                    <GoGoal />
                  </span>
                  <span className="right-sidebar-text"> Employee Goals</span>
                </div>
              </div>
            )}

            {/* 
               {selectedMainItem === "Admin" && (
              <div className="right-sidebar-item">
                <div
                  className={`right-sidebar-item-content dropdown  ${
                    selectedMenuItem === "Compliance & Poicies" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Compliance & Poicies")}
                  onMouseEnter={() => handleSubmenu(true)}
                  onMouseLeave={() => handleSubmenu(false)}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Compliance & Poicies
                  </span>
                </div>

              
              <div className={`submenu ${showSubmenu ? "active" : ""}`}>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Compliance Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Compliance Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Compliance Management
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Policy Documentaion" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Policy Documentaion")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Policy Documentaion
                  </span>
                </div>
              </div>
              

                <div
                  className={`right-sidebar-item-content dropdown ${
                    selectedMenuItem === "Analytics & Reports" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Analytics & Reports")}
                  onMouseEnter={() => handleSubmenu(true)}
                  onMouseLeave={() => handleSubmenu(false)}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    
                    Analytics & Reports
                  </span>
                </div>
                {selectedMainItem === "Analytics & Reports" && (
                  <div className={`submenu ${showSubmenu ? "active" : ""}`}>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Custom Reports" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Custom Reports")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text">
                        {" "}
                        Custom Reports
                      </span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Data Analysis Tools"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleMenuItemClick("Data Analysis Tools")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text">
                        Data Analysis Tools
                      </span>
                    </div>
                  </div>
                
        

                <div
                  className={`right-sidebar-item-content dropdown ${
                    selectedMenuItem === " Communication & Collaboration"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleMenuItemClick(" Communication & Collaboration")
                  }
                  onMouseEnter={() => handleSubmenu(true)}
                  onMouseLeave={() => handleSubmenu(false)}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Communication & Collaboration
                  </span>
                </div>
                {selectedMainItem === "Communication and Collaboration" && (
                  <div className={`submenu ${showSubmenu ? "active" : ""}`}>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Email" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Email")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> Email</span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Chat" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Chat")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> Chat</span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "File Sharing" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("File Sharing")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> File Sharing</span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Collaboration Tools"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleMenuItemClick("Collaboration Tools")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text">
                        Collaboration Tools
                      </span>
                      <span>
                        <IoIosArrowDropright />
                      </span>
                    </div>
                  </div>
                )}
                {selectedMainItem === "Collaboration Tools" && (
                  <div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Docs" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Docs")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> Docs</span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Sheets" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Sheets")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> Sheets</span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Presentation" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Presentation")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> Presentation</span>
                    </div>
                    <div
                      className={`right-sidebar-item-content ${
                        selectedMenuItem === "Drawing Board" ? "active" : ""
                      }`}
                      onClick={() => handleMenuItemClick("Drawing Board")}
                    >
                      <span className="right-sidebar-icon">
                        <IoIosPeople />
                      </span>
                      <span className="right-sidebar-text"> Drawing Board</span>
                    </div>
                  </div>
                )}
              </div>
            )}

                */}

            {selectedMainItem === "Settings" && (
              <div className="ml-4 mt-6">
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "New Asset Category" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("New Asset Category")}
                >
                  <span className="right-sidebar-icon">
                    <FaLaptopMedical />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    New Aseet Category
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "New Sla" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("New Sla")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosTime />
                  </span>
                  <span className="right-sidebar-text"> New Sla</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "New Roles" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("New Roles")}
                >
                  <span className="right-sidebar-icon">
                    <FaPersonCirclePlus />
                  </span>
                  <span className="right-sidebar-text"> New Roles</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "New Location" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("New Location")}
                >
                  <span className="right-sidebar-icon">
                    <MdAddLocation />
                  </span>
                  <span className="right-sidebar-text"> New Location</span>
                </div>
              </div>
            )}

            {showSubmenu && (
              <div className={`submenu ${showSubmenu ? "active" : ""}`}>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Compliance Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Compliance Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Compliance Management
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Policy Documentaion" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Policy Documentaion")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Policy Documentaion
                  </span>
                </div>
              </div>
            )}
            {/* Add more sub-items based on main items */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
