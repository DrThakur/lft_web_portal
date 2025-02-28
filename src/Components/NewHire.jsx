import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
// Import your images
import profile1 from "../assets/images/images.jpg";

const NewHire = () => {

  const [recruitments, setRecruitments] = useState([]);
  const [scrollHeight, setScrollHeight] = useState("320px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollHeight("320px");
      } else {
        setScrollHeight("400px");
      }
    };

    // Initialize the scroll height based on the current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means it runs once after initial render


  const recruitmentData = [
    {
      fullName: "Ankit Kumar Thakur",
      profilePic: profile1,
      roleAppliedFor: "Project Manager",
      reportingManager: "Dhruv Kumar Saxena",
      status: "Onboarded",
    },
    {
      fullName: "Abhishek Kumar Thakur",
      profilePic: profile1,
      roleAppliedFor: "Web Developer",
      reportingManager: "Amritpreet Singh",
      status: "In Progress",
    },
    {
      fullName: "Rajkumar Rao",
      profilePic: profile1,
      roleAppliedFor: "Data Sceientist",
      reportingManager: "Dhruv Kumar Saxena",
      status: "Pending",
    },
    {
      fullName: "Bajirao Mastani",
      profilePic: profile1,
      roleAppliedFor: "FPGA Engineer",
      reportingManager: "Amritpreet Singh",
      status: "Onboarded",
    },
    {
      fullName: "Rinku Jain",
      profilePic: profile1,
      roleAppliedFor: "Sr Verification Engineer",
      reportingManager: "Dhruv Kumar Saxena",
      status: "In Progress",
    },
  ];


  useEffect(() => {
    setRecruitments(recruitmentData);
  }, []);

  const recruitemntBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start cursor-default">
          <img
            alt={rowData.profilePic}
            src={rowData.profilePic}
            width="40"
            height="40"
            className="rounded-full"
          />
          <a
            href="/"
            className="ml-2 text-blue-500 hover:text-blue-900"
            onClick={(e) => e.preventDefault()}
          >
            {rowData.fullName}
          </a>

        </div>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <div className="flex justify-center gap-4">
          <Button
            icon="pi pi-pencil text-blue-400"
            rounded
            outlined
            className="mr-2 border border-blue-400 rounded-full"
          />
          <Button
            icon="pi pi-trash text-red-400"
            rounded
            outlined
            severity="danger"
            className="border border-red-400 rounded-full"
          />
        </div>
      </React.Fragment>
    );
  };

  const getSeverity = (recruitmemt) => {
    switch (recruitmemt.status) {
      case "Onboarded":
        return "success";
      case "In Progress":
        return "warning";
      case "Pending":
        return "danger";
      default:
        return null;
    }
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.status}
        severity={getSeverity(rowData)}
      ></Tag>
    );
  };

  return (
    <div className="w-full h-full p-3">
      <div className="flex justify-between items-center gap-1">
        <h3 className="font-bold text-lg cursor-default">New Joinee</h3>
        <button className="bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-lg font-semibold text-white">
          View All
        </button>
      </div>

      <DataTable
        value={recruitments}
        tableStyle={{ minWidth: "50rem" }}
        size="small"
        scrollable
        scrollHeight={scrollHeight}
        responsiveLayout="scroll"


      >
        <Column
          field="fullName"
          header="Full Name"
          body={recruitemntBodyTemplate}
          className="cursor-default"
          style={{ width: '25%' }}
        ></Column>
        <Column field="roleAppliedFor" header="Role" className="cursor-default" style={{ width: '15%' }}></Column>
        <Column field="reportingManager" header="Reporting Manager" className="cursor-default" style={{ width: '15%' }}></Column>
        <Column field="status" header="Onboarding Status" body={statusBodyTemplate} className="cursor-default" style={{ width: '15%' }}></Column>
        <Column
          field="action"
          header="Action"
          alignHeader={"center"}
          body={actionBodyTemplate}
          className="cursor-default"
          style={{ width: '15%', textAlign: "center" }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default NewHire;
