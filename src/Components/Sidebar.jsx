import React, { useState } from "react";
import "./Sidebar.css"; // Import your CSS file for styling
import { LuLayoutDashboard } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { MdAttachMoney, MdOutlineCancel } from "react-icons/md";
import { RiStore2Line } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";
import { FaSellsy } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useStateContext } from "../Contexts/ContextProvider";
import { FaProjectDiagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = () => {
  const [selectedMainItem, setSelectedMainItem] = useState("Dashboard"); // State to track selected main item
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [showSubmenu, setShowSubmenu] = useState(false);
  // const [showRightSidebar, setShowRightSidebar] = useState(true);
  const { activeRightSidebar, setActiveRightSidebar } = useStateContext();
  const navigate = useNavigate();

  // Function to handle click on main items
  const handleMainItemClick = (mainItem) => {
    setSelectedMainItem(mainItem);
    setActiveRightSidebar(true);
    // Perform any other actions upon main item click
  };

  // Function to handle click on menu items
  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    if (menuItem === "All Projects") {
      navigate(`/all-projects`);
    } else if (menuItem === "Create Project") {
      navigate("/create-project");
    } else if (menuItem === "Purchase Order") {
      navigate("/purchase-order");
    } else if (menuItem === "Project Details") {
      navigate("/project-details");
    }

    // Perform any other actions upon main item click
  };

  // Function to handle submenu visibility
  const handleSubmenu = (status) => {
    console.log(status);
    setShowSubmenu(status);
  };

  const closeRightSidebar = (mainItem) => {
    console.log(mainItem);
    setSelectedMainItem(mainItem);
    setActiveRightSidebar(!activeRightSidebar);
  };

  if (selectedMainItem === "Dashboard") {
    // If selectedMainItem is "Dashboard", set activeRightSidebar to false
    setActiveRightSidebar(false);
  }

  return (
    <div className="app">
      {/* Left Column */}
      <div className="sidebar left-sidebar myscrollbar">
        {/*nav*/}
        <div className="sidebar-column-left">
          {/*ul*/}
          {/* Main items */}
          <Tooltip title="Dasshboard" placement="right" arrow>
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
          <Tooltip title="IT" placement="right" arrow>
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
            {selectedMainItem === "HR Operations" && (
              <div className="right-sidebar-item">
                {/* Sub-items for HR Ops */}
                {/* ... */}

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Employee Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Employee Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Employee Management
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Leave and Attendance" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Leave and Attendance")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Leave and Attendance
                  </span>
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
                  <span className="right-sidebar-text"> Recruitment</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Appraisals" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Appraisals")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Appraisals</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Event Calender" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Event Calender")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Event Calender </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Tickets" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Tickets")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Tickets </span>
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
            {selectedMainItem === "Finance Operations" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Expense Tracking" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Expense Tracking")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Expense Tracking</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Budgeting" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Budgeting")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Budgeting</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Progress Tracking" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Progress Tracking")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Progress Tracking</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Budget Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Budget Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Budget Management</span>
                </div>
              </div>
            )}

            {selectedMainItem === "Procurement" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Vendor Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Vendor Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Vendor Management</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Purchase Orders" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Purchase Orders")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Purchase Orders</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Resource Allocation" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Resource Allocation")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    Resource Allocation
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Workload Balancing" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Workload Balancing")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    Workload Balancing
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
                    selectedMenuItem === "All Projects" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("All Projects")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
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
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Create Project</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Purchase Order" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Purchase Order")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Purchase Order</span>
                </div>

                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Details" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Details")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">Project Details</span>
                </div>
              </div>
            )}

            {selectedMainItem === "IT" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
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

            {selectedMainItem === "Sales and Marketing" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "CRM" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("CRM")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> CRM</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Campaign Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Campaign Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    Campaign Management
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Client Collaboration" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Client Collaboration")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Client Collaboration
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Performance Metrics" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Performance Metrics")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    Performance Metrics
                  </span>
                </div>
              </div>
            )}

            {selectedMainItem === "R&D" && (
              <div className="right-sidebar-item">
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Project Management" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Project Management")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text">
                    {" "}
                    Project Management
                  </span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Idea Repository" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Idea Repository")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Idea Repository</span>
                </div>
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "Risk Manangement" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("Risk Manangement")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
                  </span>
                  <span className="right-sidebar-text"> Risk Manangement</span>
                </div>
              </div>
            )}

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

                {/* 
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
              */}

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
                    {" "}
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
                )}

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

            {selectedMainItem === "Settings" && (
              <div>
                {/* Sub-items for Finance Ops */}
                {/* ... */}
                <div
                  className={`right-sidebar-item-content ${
                    selectedMenuItem === "New Aseet Category" ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("New Aseet Category")}
                >
                  <span className="right-sidebar-icon">
                    <IoIosPeople />
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
                    <IoIosPeople />
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
                    <IoIosPeople />
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
                    <IoIosPeople />
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
