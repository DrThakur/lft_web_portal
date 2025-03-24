import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useStateContext } from "../Contexts/ContextProvider";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";
import Chat from "./Chat";
import logo from "../data/omniflex_logo_final.svg";
import { CgMenuGridR } from "react-icons/cg";
import { Dialog } from "primereact/dialog";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { SiZoho } from "react-icons/si";
import greytHRLogo from "../data/greytHr-removebg-preview.png";
import mantisLogo from "../data/mantis_logo.png";
import lftLogo from "../data/LFT-Logo.svg";
import sonicWallLogo from "../data/sonicwalllogo.svg";

const NavButton = ({ title, position, customFunc, icon, color, dotColor }) => (
  <div>
    <Tooltip title={title} placement={position} arrow>
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="navButton relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </Tooltip>
  </div>
);

const Navbar = () => {
  const {
    user,
    currentColor,
    activeMenu,
    activeRightSidebar,
    setActiveRightSidebar,
    setActiveMenu,
    activeName,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    setActiveName,
  } = useStateContext();

  const [visible, setVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // Track search input visibility
  const [searchText, setSearchText] = useState(""); // Track the search text

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  console.log("my user navbar:: ", user);

  // const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const handleActiveName = () => {
    if (activeName && activeRightSidebar) {
      // If both are true, make them both false
      setActiveName(false);
      setActiveRightSidebar(false);
    } else if (!activeName && !activeRightSidebar) {
      // If both are false, make them both true
      setActiveName(true);
      setActiveRightSidebar(true);
    }
    // If only one of them is true, do nothing
  };

  const handleActiveMenuList = () => {
    setVisible(true);
  };
  const toggleChat = () => {
    // Check the current state of the chat and toggle it
    handleClick(isClicked.chat ? "" : "chat");
  };

  const toggleNotification = () => {
    // Check the current state of the chat and toggle it
    handleClick(isClicked.notification ? "" : "notification");
  };

  const toggleUserProfile = () => {
    // Check the current state of the chat and toggle it
    handleClick(isClicked.userProfile ? "" : "userProfile");
  };

  //small screen search icon visibility
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchText("");  // Clear search text when toggling
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

//this is for show menu items
  const [dialogStyle, setDialogStyle] = useState({});
  useEffect(() => {
    const updateDialogPosition = () => {
      const isSmallScreen = window.innerWidth < 768; // Check for small screen size
      const newStyle = isSmallScreen
        ? {
            background: "white",
            borderRadius: "0 10px 10px 0",
            padding: "10px",
            top: "50%", 
            left: `calc(50% + 35px)`, 
            transform: "translate(-50%, -50%)", 
            boxShadow: "0px 0px 5px 0px",
            position: "fixed", 
            zIndex: "1000", 
            width: "75%", 
  
          }
        : {
            background: "white",
            borderRadius: "0 10px 10px 0",
            padding: "10px",
            top: "16%", // Default positioning for medium screens
            left: "80px", // Default left position for medium screens
            boxShadow: "0px 0px 5px 0px",
            position: "fixed", // Fixed positioning to stay in place
            zIndex: "1000", // Ensure it's above other content
            width: "auto", // Keep original width for larger screens
          };
      setDialogStyle(newStyle); // Update the dialog style
    };

    // Run on initial render and whenever the screen size changes
    updateDialogPosition();
    window.addEventListener("resize", updateDialogPosition);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateDialogPosition);
  }, []);

  return (
    <div className="flex flex-grow justify-between p-2 relative shadow-md bg-white rounded-bl-lg rounded-br-lg ">
      <div className="flex flex-row flex-wrap justify-start items-center gap-2 lg:gap-6">
        <img
          src={logo} // Replace with the path to your Omniflex logo
          alt="Omniflex Logo"
          className="w-10 h-10 mr-2"
        />

        {/* Conditional rendering for "Omniflex" text */}
        {screenSize > 900 && (
          <p className="text-2xl font-bold" style={{ color: currentColor }}>
            Omniflex
          </p>
        )}

        <NavButton
          title="Menu"
          position="right"
          customFunc={handleActiveMenuList}
          color={currentColor}
          icon={<CgMenuGridR className="text-xl" />}
          className="hover:drop-shadow-xl hover:bg-light-gray "
        />

        <Dialog
          header="Menu"
          visible={visible}
          style={dialogStyle}
          onHide={() => setVisible(false)}
          // style={{
          //   background: "white",
          //   borderRadius: "0 10px 10px 0",
          //   padding: "10px",
          //   top: "16%", // Change to 10px to ensure it's not off-screen
          //   left: "85px", // Move to the top-right corner
          //   boxShadow: "0px 0px 5px 0px",
          //   position: "fixed", // Fixed positioning to stay in place even on scroll
          //   zIndex: "1000", // Ensure it's above other content
            
          // }}

        >
          <div className="grid grid-cols-2 grid-rows-5 gap-2">
            <a
              href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ARZ0qKJai0DCrAhTkvc9-sBC3fjUOM_FJfsMGJPDeUQD6o1nHKT1k6O0pk71iix6emb8Dh6ZYaGgWA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1106949504%3A1713357050342816&theme=mn&ddm=0"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGoogle />
              </span>
              <span>LFTG-Suite</span>
            </a>
            <a
              href="https://lft.greythr.com/"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={greytHRLogo} alt="greytHR" width={40} height={40} />
              <span>greytHR</span>
            </a>
            <a
              href="https://itsupport.logic-fruit.com/"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLaptopCode className="text-3xl" />
              </span>
              <span>IT Helpdesk</span>
            </a>
            <a
              href="https://assist.zoho.in/org/60017919035/app/unattended/devices"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <SiZoho className="text-3xl" />
              </span>
              <span>ZohoAssist</span>
            </a>
            <a
              href="https://crm.zoho.in/crm/org60028744494/tab/Home/begin"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <SiZoho className="text-3xl" />
              </span>
              <span>ZohoCRM</span>
            </a>
            <a
              href="https://10.0.0.1/svn/"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://tortoisesvn.net/assets/img/logo-256x256.png"
                alt="tortoiseSVN"
                width={45}
                height={45}
              />
              <span>TortoiseSVN</span>
            </a>
            <a
              href="http://10.0.0.10:8080/WebInterface/login.html#/"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={lftLogo} alt="LFTP" width={70} height={70} />
              <span>LFTP</span>
            </a>
            <a
              href="http://10.0.0.7/mantis/login_page.php?error=1&return=index.php"
              className="flex flex-col justify-center items-center gap-2 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mantisLogo} alt="mantis" width={70} height={70} />
              <span>Mantis-Bug Tracker</span>
            </a>
            <a
              href="https://10.0.0.3:7608/sonicui/7/login/#/"
              className="flex flex-col justify-center items-center gap-2 p-3 hover:bg-gray-200 hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sonicWallLogo} alt="mantis" width={70} height={70} />
              <span>SonicWall</span>
            </a>
          </div>
        </Dialog>
      </div>

      <div className="flex justify-evenly">
        {/* Show search icon on small screens */}
        {screenSize < 767 && (
          <>
            <Tooltip title="Search" placement="bottom" arrow>
              <div
                className={`flex justify-between items-center border-solid rounded-[50px] border-gray-300 bg-white overflow-hidden max-w-96 md:shadow-md mr-2`}
                style={{ borderColor: currentColor }}
              >
                {isSearchVisible ? (
                  <>
                    <button
                      onClick={() => setIsSearchVisible(false)}
                      className="p-2"
                      style={{ color: currentColor }}
                    >
                      <FaSearch />
                    </button>
                    <input
                      type="text"
                      id="search"
                      placeholder="Search here"
                      className="border-0 w-24 text-sm focus:outline-0"
                      value={searchText}
                      onChange={handleSearchChange}
                    />
                  </>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className="p-2"
                    style={{ color: currentColor }}
                  >
                    <FaSearch />
                  </button>
                )}
              </div>
            </Tooltip>
          </>
        )}

        {/* For large screens, keep the normal search bar */}
        {screenSize > 767 && (
          <Tooltip title="Search" placement="bottom" arrow>
            <div
              className={`flex justify-between items-center border-solid rounded-[50px] border-gray-300 bg-white overflow-hidden max-w-96 md:shadow-md mr-2`}
              style={{ borderColor: currentColor }}
            >
              <span>
                <FaSearch style={{ color: currentColor }} className="m-2" />
              </span>
              <input
                type="text"
                id="search"
                placeholder="Search here"
                className="border-0 w-24 text-sm focus:outline-0"
              />
            </div>
          </Tooltip>
        )}

        {/*
        <NavButton
          title="Chat"
          position="bottom"
          dotColor={currentColor}
          customFunc={toggleChat}
          color={currentColor}
          icon={<BsChatLeft />}
          className="hover:drop-shadow-xl hover:bg-light-gray"
        />
        */}
        {/* Notifications button */}
        {screenSize > 900 && (
          <NavButton
            title="Notifications"
            position="bottom"
            dotColor={currentColor}
            customFunc={toggleNotification}
            color={currentColor}
            icon={<RiNotification3Line />}
            className="hover:drop-shadow-xl hover:bg-light-gray"
          />
        )}

        <Tooltip title="Profile" placement="bottom" arrow>
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg "
            onClick={toggleUserProfile}
          >
            <img
              className="rounded-full w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0OobsBilOGySRuaSpCmAMSiuupz02KRRgyDyM1308w&s"
              alt="user-profile"
            />
            {screenSize > 900 &&
              <p>
                <span className="text-gray-400 text-14">Hi,</span>
                <span className="text-gray-400 font-bold ml-1 text-14">
                  {user.fullName}
                </span>
              </p>}
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>

        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useEffect, useState } from "react";
// import Tooltip from "@mui/material/Tooltip";
// import { AiOutlineMenu } from "react-icons/ai"; // Hamburger Icon
// import { CgCloseO } from "react-icons/cg";
// import { BsChatLeft } from "react-icons/bs";
// import { RiNotification3Line } from "react-icons/ri";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";
// import { useStateContext } from "../Contexts/ContextProvider";
// import Notifications from "./Notifications";
// import UserProfile from "./UserProfile";
// import Chat from "./Chat";
// import logo from "../data/omniflex_logo_final.svg";
// import { CgMenuGridR } from "react-icons/cg";
// import { Dialog } from "primereact/dialog";
// import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { FaLaptopCode } from "react-icons/fa";
// import { SiZoho } from "react-icons/si";
// import greytHRLogo from "../data/greytHr-removebg-preview.png";
// import mantisLogo from "../data/mantis_logo.png";
// import lftLogo from "../data/LFT-Logo.svg";
// import sonicWallLogo from "../data/sonicwalllogo.svg";
// import Sidebar from "./Sidebar";

// const NavButton = ({ title, position, customFunc, icon, color, dotColor }) => (
//   <div>
//     <Tooltip title={title} placement={position} arrow>
//       <button
//         type="button"
//         onClick={() => customFunc()}
//         style={{ color }}
//         className="navButton relative text-xl rounded-full p-3 hover:bg-light-gray"
//       >
//         <span
//           style={{ background: dotColor }}
//           className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
//         />
//         {icon}
//       </button>
//     </Tooltip>
//   </div>
// );

// const Navbar = () => {
//   const {
//     user,
//     currentColor,
//     activeMenu,
//     activeRightSidebar,
//     setActiveRightSidebar,
//     setActiveMenu,
//     activeName,
//     handleClick,
//     isClicked,
//     setScreenSize,
//     screenSize,
//     setActiveName,
//   } = useStateContext();

//   const [visible, setVisible] = useState(false);
//   const [isSearchVisible, setIsSearchVisible] = useState(false); 
//   const [searchText, setSearchText] = useState(""); 

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

//   useEffect(() => {
//     const handleResize = () => setScreenSize(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, [setScreenSize]);

//   useEffect(() => {
//     if (screenSize <= 900) {
//       setActiveMenu(false);
//     } else {
//       setActiveMenu(true);
//     }
//   }, [screenSize, setActiveMenu]);

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
//   };

//   const handleActiveMenuList = () => {
//     setVisible(true);
//   };

//   const toggleChat = () => {
//     handleClick(isClicked.chat ? "" : "chat");
//   };

//   const toggleNotification = () => {
//     handleClick(isClicked.notification ? "" : "notification");
//   };

//   const toggleUserProfile = () => {
//     handleClick(isClicked.userProfile ? "" : "userProfile");
//   };

//   const toggleSearch = () => {
//     setIsSearchVisible(!isSearchVisible);
//     setSearchText("");  // Clear search text when toggling
//   };

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const [dialogStyle, setDialogStyle] = useState({});
//   useEffect(() => {
//     const updateDialogPosition = () => {
//       const isSmallScreen = window.innerWidth < 768;
//       const newStyle = isSmallScreen
//         ? {
//             background: "white",
//             borderRadius: "0 10px 10px 0",
//             padding: "10px",
//             top: "50%", 
//             left: `calc(50% + 35px)`, 
//             transform: "translate(-50%, -50%)", 
//             boxShadow: "0px 0px 5px 0px",
//             position: "fixed", 
//             zIndex: "1000", 
//             width: "75%", 
//           }
//         : {
//             background: "white",
//             borderRadius: "0 10px 10px 0",
//             padding: "10px",
//             top: "16%",
//             left: "80px", 
//             boxShadow: "0px 0px 5px 0px",
//             position: "fixed", 
//             zIndex: "1000", 
//             width: "auto", 
//           };
//       setDialogStyle(newStyle); 
//     };

//     updateDialogPosition();
//     window.addEventListener("resize", updateDialogPosition);
//     return () => window.removeEventListener("resize", updateDialogPosition);
//   }, []);

//   return (
//     <div className="flex flex-grow justify-between p-2 relative shadow-md bg-white rounded-bl-lg rounded-br-lg">
//       <div className="flex flex-row flex-wrap justify-start items-center gap-2 lg:gap-6">
//         <img
//           src={logo} 
//           alt="Omniflex Logo"
//           className="w-10 h-10 mr-2"
//         />

//         {screenSize > 900 && (
//           <p className="text-2xl font-bold" style={{ color: currentColor }}>
//             Omniflex
//           </p>
//         )}

//         {/* Hamburger icon appears for small screens */}
//         {/* {screenSize <= 900 && (
//           <button onClick={handleSidebarToggle}>
//             <AiOutlineMenu className="text-xl" />
//           </button>
//         )} */}
//         {/* Hamburger icon appears for small screens */}
// {screenSize <= 900 && (
//   <button onClick={handleSidebarToggle}>
//     {isSidebarOpen ? (
//       // Show close icon if sidebar is open
//       <CgCloseO className="text-xl text-cyan-500" />
//     ) : (
//       // Show hamburger icon if sidebar is closed
//       <AiOutlineMenu className="text-xl text-cyan-500" />
//     )}
//   </button>
// )}


//         {/* Menu Button for larger screens */}
//         <NavButton
//           title="Menu"
//           position="right"
//           customFunc={handleActiveMenuList}
//           color={currentColor}
//           icon={<CgMenuGridR className="text-xl" />}
//           className="hover:drop-shadow-xl hover:bg-light-gray "
//         />

//         <Dialog
//           header="Menu"
//           visible={visible}
//           style={dialogStyle}
//           onHide={() => setVisible(false)}
//         >
//           <div className="grid grid-cols-2 grid-rows-5 gap-2">
//             {/* Your menu items here */}
//           </div>
//         </Dialog>
//       </div>

//       <div className="flex justify-evenly">
//         {/* Show search icon on small screens */}
//         {screenSize < 767 && (
//           <>
//             <Tooltip title="Search" placement="bottom" arrow>
//               <div
//                 className={`flex justify-between items-center border-solid rounded-[50px] border-gray-300 bg-white overflow-hidden max-w-96 md:shadow-md mr-2`}
//                 style={{ borderColor: currentColor }}
//               >
//                 {isSearchVisible ? (
//                   <>
//                     <button
//                       onClick={() => setIsSearchVisible(false)}
//                       className="p-2"
//                       style={{ color: currentColor }}
//                     >
//                       <FaSearch />
//                     </button>
//                     <input
//                       type="text"
//                       id="search"
//                       placeholder="Search here"
//                       className="border-0 w-24 text-sm focus:outline-0"
//                       value={searchText}
//                       onChange={handleSearchChange}
//                     />
//                   </>
//                 ) : (
//                   <button
//                     onClick={toggleSearch}
//                     className="p-2"
//                     style={{ color: currentColor }}
//                   >
//                     <FaSearch />
//                   </button>
//                 )}
//               </div>
//             </Tooltip>
//           </>
//         )}

//         {screenSize > 767 && (
//           <Tooltip title="Search" placement="bottom" arrow>
//             <div
//               className={`flex justify-between items-center border-solid rounded-[50px] border-gray-300 bg-white overflow-hidden max-w-96 md:shadow-md mr-2`}
//               style={{ borderColor: currentColor }}
//             >
//               <span>
//                 <FaSearch style={{ color: currentColor }} className="m-2" />
//               </span>
//               <input
//                 type="text"
//                 id="search"
//                 placeholder="Search here"
//                 className="border-0 w-24 text-sm focus:outline-0"
//               />
//             </div>
//           </Tooltip>
//         )}

//         {screenSize > 900 && (
//           <NavButton
//             title="Notifications"
//             position="bottom"
//             dotColor={currentColor}
//             customFunc={toggleNotification}
//             color={currentColor}
//             icon={<RiNotification3Line />}
//             className="hover:drop-shadow-xl hover:bg-light-gray"
//           />
//         )}

//         <Tooltip title="Profile" placement="bottom" arrow>
//           <div
//             className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
//             onClick={toggleUserProfile}
//           >
//             <img
//               className="rounded-full w-8 h-8"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0OobsBilOGySRuaSpCmAMSiuupz02KRRgyDyM1308w&s"
//               alt="user-profile"
//             />
//             {screenSize > 900 && (
//               <p>
//                 <span className="text-gray-400 text-14">Hi,</span>
//                 <span className="text-gray-400 font-bold ml-1 text-14">
//                   {user.fullName}
//                 </span>
//               </p>
//             )}
//             <MdKeyboardArrowDown className="text-gray-400 text-14" />
//           </div>
//         </Tooltip>

//         {isClicked.chat && <Chat />}
//         {isClicked.notification && <Notifications />}
//         {isClicked.userProfile && <UserProfile />}
//       </div>

//       {/* Sidebar (conditional rendering based on isSidebarOpen state) */}
//       {isSidebarOpen && (
//         <div className="fixed top-0 left-0 z-50">
//           <div className="">
//             <Sidebar/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
