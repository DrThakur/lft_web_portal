import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

const RecruitmentProgress = () => {
  const [products, setProducts] = useState([]);
  const [recruitments, setRecruitments] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const recruitmentData = [
    {
      fullName: "Ankit Kumar Thakur",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Project Manager",
      status: "Resume Screening",
    },
    {
      fullName: "Abhishek Kumar Thakur",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Web Developer",
      status: "Telephonic Round",
    },
    {
      fullName: "Rajkumar Rao",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Data Sceientist",
      status: "Tech Interview Round",
    },
    {
      fullName: "Bajirao Mastani",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "FPGA Engineer",
      status: "Cultural Fit Round",
    },
    {
      fullName: "Rinku Jain",
      profilePic:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      roleAppliedFor: "Sr Verification Engineer",
      status: "Task Round",
    },
  ];

  useEffect(() => {
    setRecruitments(recruitmentData);
  }, []);

  const recruitemntBodyTemplate = (rowData) => {
    // const createdBy = rowData.projectManager;

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
          //   onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash text-red-400"
          rounded
          outlined
          severity="danger"
          //   onClick={() => confirmDeleteProject(rowData)}
          className="border border-red-400 rounded-full"
        />
      </React.Fragment>
    );
  };

  const getSeverity = (recruitmemt) => {
    switch (recruitmemt.status) {
      case "Hired":
        return "success";

      case "Resume Screening":
        return "secondary";

      case "Telephonic Round":
        return "info";

      case "Tech Interview Round":
        return "warning";

      case "Cultural Fit Round":
        return "danger";

      case "Task Round":
        return "primary";

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
    <div className="w-full h-full">
      <div className="flex flex-row justify-between items-center gap-2 px-3 py-1">
        <h3 className="font-bold text-lg">Recruitment Progress</h3>
        <button className="bg-blue-300 hover:bg-blue-500 px-2 py-1 rounded-lg font-semibold hover:text-white">
          View All
        </button>
      </div>
      <DataTable
        value={recruitments}
        tableStyle={{ minWidth: "50rem" }}
        size="small"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column
          field="fullName"
          header="Full Name"
          body={recruitemntBodyTemplate}
          style={{ width: '25%' }}
        ></Column>
        <Column field="roleAppliedFor" header="Role" style={{ width: '15%' }}></Column>
        <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '15%' }}></Column>
        <Column
          field="quantity"
          header="Action"
          body={actionBodyTemplate}
          style={{ width: '15%' }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default RecruitmentProgress;
