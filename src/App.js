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

const App = () => {
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
            <Route path="/test" element={<ProjectCarousel />} />
            <Route path="/test2" element={<ProjectCard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
