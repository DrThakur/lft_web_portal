import React from "react";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../index";
import { FiSettings } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import "./Layout.css";
import { useStateContext } from "../../Contexts/ContextProvider";
const Layout = ({ children }) => {
  const { currentColor, themeSettings, setThemeSettings, activeRightSidebar } =
    useStateContext();

  return (
    <div
      className="layout"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div
        className="navbar-container"
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Navbar />
      </div>

      <div
        className="sidebar-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 99,
        }}
      >
        <Sidebar />
      </div>
      <div
        style={{
          marginLeft: activeRightSidebar ? "14rem" : "5rem",
          marginTop: "3.5rem",
          padding: "0.3rem",
          flex: 1,
          overflowY: "hidden",
        }}
      >
        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "calc(100% - 4rem)",
          }}
          className="children w-full"
        >
          {children}
          <div className="text-center">
            <Footer />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          right: "1rem",
          bottom: "1rem",
          zIndex: "1000",
        }}
      >
        <Tooltip title="Settings" placement="top" arrow>
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray settingsButton animate-spin-slow"
            aria-label="Open settings"
          >
            <FiSettings />
          </button>
        </Tooltip>
      </div>

      {themeSettings && <ThemeSettings />}
    </div>
  );
};

export default Layout;


// import React, { useState, useEffect } from "react";
// import { Navbar, Footer, Sidebar, ThemeSettings } from "../index";
// import { FiSettings } from "react-icons/fi";
// import Tooltip from "@mui/material/Tooltip";
// import "./Layout.css";
// import { useStateContext } from "../../Contexts/ContextProvider";
// const Layout = ({ children }) => {
//   const { currentColor, themeSettings, setThemeSettings, activeRightSidebar } =
//     useStateContext();

//     const [screenSize, setScreenSize] = useState(window.innerWidth);
  
//     useEffect(() => {
//       const handleResize = () => setScreenSize(window.innerWidth);
//       window.addEventListener("resize", handleResize);
      
//       // Cleanup the event listener on unmount
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);

//   return (
//     <div
//       className="layout"
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//     >
//       <div
//         className="navbar-container"
//         style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
//       >
//         <Navbar />
//       </div>

//       {  screenSize > 900 && (
//         <div
//           className="sidebar-container"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             bottom: 0,
//             zIndex: 99,
//           }}
//         >
//           <Sidebar />
//         </div>
//       )}
//       <div
//         style={{
//           marginLeft: activeRightSidebar ? "14rem" : "5rem",
//           marginTop: "3.5rem",
//           padding: "0.3rem",
//           flex: 1,
//           overflowY: "hidden",
//         }}
//       >
//         <div
//           style={{
//             overflowY: "auto",
//             overflowX: "hidden",
//             height: "calc(100% - 4rem)",
//           }}
//           className="children w-full"
//         >
//           {children}
//           <div className="text-center">
//             <Footer />
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           position: "fixed",
//           right: "1rem",
//           bottom: "1rem",
//           zIndex: "1000",
//         }}
//       >
//         <Tooltip title="Settings" placement="top" arrow>
//           <button
//             type="button"
//             onClick={() => setThemeSettings(true)}
//             style={{ background: currentColor, borderRadius: "50%" }}
//             className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray settingsButton animate-spin-slow"
//             aria-label="Open settings"
//           >
//             <FiSettings />
//           </button>
//         </Tooltip>
//       </div>

//       {themeSettings && <ThemeSettings />}
//     </div>
//   );
// };

// export default Layout;
// import React, { useState, useEffect } from "react";
// import { Navbar, Footer, Sidebar, ThemeSettings } from "../index";
// import { FiSettings } from "react-icons/fi";
// import Tooltip from "@mui/material/Tooltip";
// import "./Layout.css";
// import { useStateContext } from "../../Contexts/ContextProvider";

// const Layout = ({ children }) => {
//   const { currentColor, themeSettings, setThemeSettings, activeRightSidebar } =
//     useStateContext();

//   const [screenSize, setScreenSize] = useState(window.innerWidth);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

//   useEffect(() => {
//     const handleResize = () => setScreenSize(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     // Cleanup the event listener on unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handle sidebar toggle
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div
//       className="layout"
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//     >
//       <div
//         className="navbar-container"
//         style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
//       >
//         <Navbar onSidebarToggle={toggleSidebar} />
//       </div>

//       {/* Conditionally render the sidebar */}
//       {screenSize > 900 && isSidebarOpen && (
//         <div
//           className="sidebar-container"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             bottom: 0,
//             zIndex: 99,
//             transition: "width 0.3s ease", // Smooth transition
//           }}
//         >
//           <Sidebar />
//         </div>
//       )}

//       {/* Main content area */}
//       <div
//         style={{
//           marginLeft: isSidebarOpen && screenSize > 900 ? "5rem" : "0", // Adjust margin based on sidebar visibility
//           marginTop: "3.5rem",
//           padding: "0.3rem",
//           flex: 1,
//           overflowY: "hidden",
//           transition: "margin-left 0.3s ease", // Smooth transition for content area
          
//         }}
//       >
//         <div
//           style={{
//             overflowY: "auto",
//             overflowX: "hidden",
//             height: "calc(100% - 4rem)",
//           }}
//           className="children w-full"
//         >
//           {children}
//           <div className="text-center">
//             <Footer />
//           </div>
//         </div>
//       </div>

//       {/* Settings Button */}
//       <div
//         style={{
//           position: "fixed",
//           right: "1rem",
//           bottom: "1rem",
//           zIndex: "1000",
//         }}
//       >
//         <Tooltip title="Settings" placement="top" arrow>
//           <button
//             type="button"
//             onClick={() => setThemeSettings(true)}
//             style={{ background: currentColor, borderRadius: "50%" }}
//             className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray settingsButton animate-spin-slow"
//             aria-label="Open settings"
//           >
//             <FiSettings />
//           </button>
//         </Tooltip>
//       </div>

//       {themeSettings && <ThemeSettings />}
//     </div>
//   );
// };

// export default Layout;
