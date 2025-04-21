import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dropdown } from "primereact/dropdown";  // Import Dropdown
import profile1 from "../assets/images/images.jpg";

const NewHire = () => {
  const [recruitments, setRecruitments] = useState([]);
  const [scrollHeight, setScrollHeight] = useState("320px");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [currentRecruitment, setCurrentRecruitment] = useState(null);
  const toast = React.useRef(null);

  const managers = [
    { label: "Dhruv Kumar Saxena", value: "Dhruv Kumar Saxena" },
    { label: "Amritpreet Singh", value: "Amritpreet Singh" },
    { label: "Ravi Kumar", value: "Ravi Kumar" },  // Add more managers as needed
  ];

  const statuses = [
    { label: "Onboarded", value: "Onboarded" },
    { label: "In Progress", value: "In Progress" },
    { label: "Pending", value: "Pending" },
  ];

  const roles = [
    { label: "Project Manage", value: "Project Manage" },
    { label: "Web Developer", value: "Web Developer" },
    { label: "Data Scientist", value: "Data Scientist" },
    { label: "FPGA Engineer", value: "FPGA Engineer" },
    { label: "Sr Verification Engineer", value: "Sr Verification Engineer" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScrollHeight("320px");
      } else {
        setScrollHeight("400px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      roleAppliedFor: "Data Scientist",
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
            onClick={() => onEditClick(rowData)} 
          />
          <Button
            icon="pi pi-trash text-red-400"
            rounded
            outlined
            severity="danger"
            className="border border-red-400 rounded-full"
            onClick={() => onDeleteClick(rowData)} 
          />
        </div>
      </React.Fragment>
    );
  };

  const onEditClick = (rowData) => {
    setCurrentRecruitment({ ...rowData }); 
    setDialogVisible(true); 
  };

  const onDialogHide = () => {
    setDialogVisible(false);
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

  const handleSave = () => {
    // Handle save logic
    setRecruitments((prevRecruitments) =>
      prevRecruitments.map((recruitment) =>
        recruitment.fullName === currentRecruitment.fullName
          ? currentRecruitment
          : recruitment
      )
    );
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Recruitment details updated successfully!",
      life: 3000,
    });
    setDialogVisible(false);
  };

  const onDeleteClick = (rowData) => {
    // Confirm the delete action
    confirmDialog({
      className:"max-w-[75%] md:max-w-full ml-20 md:ml-0",
      message: `Are you sure you want to delete ${rowData.fullName}?`,
      header: "Confirm Deletion",
      icon: "pi pi-exclamation-triangle",
      accept: () => handleDelete(rowData),
      reject: () => toast.current.show({ severity: "info", summary: "Cancelled", detail: "Delete action cancelled", life: 3000 }),
    });
  };

  const handleDelete = (rowData) => {
    // Delete the recruitment from the list
    setRecruitments((prevRecruitments) =>
      prevRecruitments.filter((recruitment) => recruitment.fullName !== rowData.fullName)
    );
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: `${rowData.fullName} has been deleted successfully!`,
      life: 3000,
    });
  };

  return (
    <div className="w-full h-full p-3">
      {/* Toast component */}
      <Toast ref={toast} />
      {/* Confirm Dialog component */}
      <ConfirmDialog />

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

      {/* Dialog for editing */}
      <Dialog
        visible={dialogVisible}
        onHide={onDialogHide}
        header="Edit New Joinee"
        className="w-full md:w-auto  rounded-lg shadow-lg "
        footer={
          <div>
            <Button label="Cancel" icon="pi pi-times" onClick={onDialogHide} className="p-button-text" />
            <Button label="Save" icon="pi pi-check" onClick={handleSave} />
          </div>
        }
      >
        {currentRecruitment && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="font-bold">Full Name</label>
              <InputText
                id="fullName"
                value={currentRecruitment.fullName}
                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, fullName: e.target.value })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="role" className="font-bold">Role Applied For</label>
              <Dropdown
                id="role"
                value={currentRecruitment.roleAppliedFor}
                options={roles}
                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, roleAppliedFor: e.value })}
                placeholder="Select role"
                scrollHeight="170px"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="manager" className="font-bold">Reporting Manager</label>
              <Dropdown
                id="manager"
                value={currentRecruitment.reportingManager}
                options={managers}
                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, reportingManager: e.value })}
                placeholder="Select Manager"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="status" className="font-bold">Status</label>
              <Dropdown
                id="status"
                value={currentRecruitment.status}
                options={statuses}
                onChange={(e) => setCurrentRecruitment({ ...currentRecruitment, status: e.value })}
                placeholder="Select Status"
              />
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default NewHire;
