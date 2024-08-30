import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCurrencyDollar, BsPeople, BsShield } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { RiStore2Line } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";
import { FaSellsy } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";
import product8 from "./product8.jpg";
import { FiCreditCard } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";

export const leftSidebarData = [
  {
    title: "Dashboard",
    name: "dashboard",
    icon: <LuLayoutDashboard />,
  },

  {
    title: "HR",
    name: "hr",
    icon: <BsPeople />,
  },

  {
    title: "Finance",
    name: "finance",
    icon: <MdAttachMoney />,
  },

  {
    title: "Procurement",
    name: "procurement",
    icon: <RiStore2Line />,
  },

  {
    title: "IT",
    name: "it",
    icon: <BsLaptop />,
  },

  {
    title: "S&M",
    name: "sales_marketing",
    icon: <FaSellsy />,
  },

  {
    title: "R&D",
    name: "research_development",
    icon: <GiArchiveResearch />,
  },

  {
    title: "Admin",
    name: "admin",
    icon: <RiAdminLine />,
  },

  {
    title: "Settings",
    name: "settings",
    icon: <IoSettingsOutline />,
  },
];

export const rightSidebarData = {
  dashboard: [],
  hr: [
    {
      title: "Employee Management",
      name: "employeeManagement",
      icon: <IoIosPeople />,
    },
    {
      title: "Leave and Attendance",
      name: "leaveAttendance",
      icon: <IoIosPeople />,
    },
    {
      title: "Recruitment",
      name: "recruitment",
      icon: <IoIosPeople />,
    },
    {
      title: "Appraisals",
      name: "appraisals",
      icon: <IoIosPeople />,
    },
    {
      title: "Event Calendar",
      name: "eventCalendar",
      icon: <IoIosPeople />,
    },
    {
      title: "Tickets",
      name: "tickets",
      icon: <IoIosPeople />,
    },
    {
      title: "Reports",
      name: "reports",
      icon: <IoIosPeople />,
    },
  ],
  finance: [], // Add right sidebar data for other left sidebar items as needed
  procurement: [],
  it: [],
  sales_marketing: [],
  research_development: [],
  admin: [],
  settings: [],
};

export const rightSidebarSubItemsData = {
  employeeManagement: [
    {
      title: "ABCD",
      name: "abcd",
      icon: <IoIosPeople />,
    },
    {
      title: "EFGH",
      name: "efgh",
      icon: <IoIosPeople />,
    },
    {
      title: "IJKL",
      name: "ijkl",
      icon: <IoIosPeople />,
    },
  ],
};

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  // {
  //   icon: <BsShield />,
  //   title: "My Inbox",
  //   desc: "Messages & Emails",
  //   iconColor: "rgb(0, 194, 146)",
  //   iconBg: "rgb(235, 250, 242)",
  // },
  // {
  //   icon: <FiCreditCard />,
  //   title: "My Tasks",
  //   desc: "To-do and Daily Tasks",
  //   iconColor: "rgb(255, 244, 229)",
  //   iconBg: "rgb(254, 201, 15)",
  // },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const hiringStatusData = {
  totalRequests: 10,
  pending: 2,
  inProgress: 3,
  closed: 5,
};

export const hrTicketsData = {
  pending: 4,
  closedThisMonth: 8,
};

export const eventsData = {
  thisWeek: ["Team Building Activity", "HR Meet"],
  thisMonth: ["Annual Review", "Performance Appraisal"],
};

export const employeesData = {
  pipNotice: [
    { name: "John Doe", status: "PIP" },
    { name: "Jane Smith", status: "Notice" },
  ],
  resigned: [{ name: "Alex Johnson", lwd: "2024-09-15" }],
  newJoinings: [{ name: "Emily Davis", joiningDate: "2024-08-10" }],
};

export const chartsData = {
 gender: [
    { name: 'Male', value: 70 },
    { name: 'Female', value: 30 },
  ],
  locations: { GGN: 45, BLR: 55 },
 attrition: [
    { name: 'January', attrition: 2 },
    { name: 'February', attrition: 3 },
    { name: 'March', attrition: 1 },
    { name: 'April', attrition: 4 },
    { name: 'May', attrition: 2 },
    { name: 'June', attrition: 3 },
    { name: 'July', attrition: 1 },
    { name: 'August', attrition: 0 },
  ],
};

export const employeeStrengthDistribution = [
  { name: "GGN", value: 400 },
  { name: "BLR", value: 300 },
];

export const newJoiningData = [
  { name: 'Alice Johnson', joiningDate: 'August 1, 2024', department: 'Engineering', initials: 'AJ' },
  { name: 'Bob Smith', joiningDate: 'August 5, 2024', department: 'Marketing', initials: 'BS' },
  { name: 'Carol White', joiningDate: 'August 10, 2024', department: 'HR', initials: 'CW' },
];

export const resignedEmployeeData = [
  { name: 'Alice Johnson', lwd: '2024-09-01', department: 'Engineering' },
  { name: 'Bob Smith', lwd: '2024-08-30', department: 'Marketing' },
  { name: 'Carol White', lwd: '2024-09-03', department: 'HR' },
  { name: 'David Brown', lwd: '2024-09-10', department: 'Finance' },
];