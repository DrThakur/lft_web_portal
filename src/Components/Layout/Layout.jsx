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
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Navbar />
      </div>

      <div
        style={{ position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 99 }}
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
          style={{ overflowY: "auto",overflowX:"hidden", height: "calc(100% - 4rem)" }}
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
