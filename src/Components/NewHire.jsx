import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

const NewHire = () => {

  const [recruitments, setRecruitments] = useState([]);

  const recruitmentData = [
    {
      fullName: "Ankit Kumar Thakur",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Project Manager",
      reportingManager:"Dhruv Kumar Saxena",
      status: "Onboarded",
    },
    {
      fullName: "Abhishek Kumar Thakur",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Web Developer",
      reportingManager:"Amritpreet Singh",
      status: "In Progress",
    },
    {
      fullName: "Rajkumar Rao",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Data Sceientist",
      reportingManager:"Dhruv Kumar Saxena",
      status: "Pending",
    },
    {
      fullName: "Bajirao Mastani",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "FPGA Engineer",
      reportingManager:"Amritpreet Singh",
      status: "Onboarded",
    },
    {
      fullName: "Rinku Jain",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Sr Verification Engineer",
      reportingManager:"Dhruv Kumar Saxena",
      status: "In Progress",
    },
  ];


  useEffect(() => {
    setRecruitments(recruitmentData);
  }, []);

  const recruitemntBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start ">
          <img
            alt={rowData.profilePic}
            src={rowData.profilePic}
            width="40"
            height="40"
            className="rounded-full"
          />
          <a href="/" className="ml-2 text-blue-500 hover:text-blue-900">
            {rowData.fullName}
          </a>
        </div>
      </div>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
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
        <h3 className="font-bold text-lg">New Joinee</h3>
        <button className="bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-lg font-semibold text-white">
          View All
        </button>
      </div>

      <DataTable
        value={recruitments}
        tableStyle={{ minWidth: "50rem" }}
        size="small"
      >
        <Column
          field="fullName"
          header="Full Name"
          body={recruitemntBodyTemplate}
          style={{ width: '25%' }}
        ></Column>
        <Column field="roleAppliedFor" header="Role" style={{ width: '15%' }}></Column>
        <Column field="reportingManager" header="Reporting Manager" style={{ width: '15%' }}></Column>
        <Column field="status" header="Onboarding Status" body={statusBodyTemplate} style={{ width: '15%' }}></Column>
        <Column
          field="action"
          header="Action"
          body={actionBodyTemplate}
          style={{ width: '15%' }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default NewHire;
