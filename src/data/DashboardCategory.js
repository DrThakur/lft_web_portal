import { FaLaptopCode } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdCable, MdKeyboard } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import { BsFillPeopleFill, BsTicketPerforated } from "react-icons/bs";

const DashboardCategory = [
  {
    name: "Total Employees",
    count: 250,
    present: 230,
    absent: 20,
    icon: <FaLaptopCode />,
  },
  {
    name: "Projects",
    count: 25,
    completed: 15,
    ongoing: 10,
    icon: <MdKeyboard />,
  },
  {
    name: "Revenue",
    count: "$65,0000",
    assigned: 0,
    remaining: 0,
    icon: <MdCable />,
  },
  {
    name: "Expenses",
    count: "$25,0000",
    assigned: 0,
    remaining: 0,
    icon: <FiHardDrive />,
  },
  {
    name: "New Employees",
    count: 15,
    assigned: 0,
    remaining: 15,
    icon: <BsTicketPerforated />,
  },
  {
    name: "Sales & Marketing",
    count: 0,
    icon: <CgSoftwareDownload />,
  },
  {
    name: "Procurement",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "R&D",
    count: 3517,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Tickets",
    count: 109010,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Admin",
    count: 37,
    icon: <BsFillPeopleFill />,
  },
];

export default DashboardCategory;
