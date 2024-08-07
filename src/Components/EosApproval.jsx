import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import MonthYearPickerFinal from "./MonthYearPickerFinal";
import { InputText } from "primereact/inputtext";
import { MdOutlineEmail } from "react-icons/md";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { eosData as EosData } from "../service/eosData";
import { MdFilterAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";
import { Toolbar } from "primereact/toolbar";
import { VscFilter } from "react-icons/vsc";
import { VscFilterFilled } from "react-icons/vsc";

const EosApproval = () => {
  // Assuming eosData is an array of objects with the required fields

  const [eosData, setEosData] = useState(null);
  const [remarksFilled, setRemarksFilled] = useState({});
  const [approverRemarks, setApproverRemarks] = useState({});
  const [globalFilter, setGlobalFilter] = useState(null);
  const [filteredEosData, setFilteredEosData] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setEosData(EosData);
    setFilteredEosData(EosData);
  }, []);

  useEffect(() => {
    if (eosData) {
      let filteredData = eosData;
      if (filterType === "filled") {
        filteredData = eosData.filter((eos) => {
          return Object.values(eos).every(
            (value) => value !== null && value !== ""
          );
        });
      } else if (filterType === "empty") {
        filteredData = eosData.filter((eos) => {
          return Object.values(eos).some(
            (value) => value === null || value === ""
          );
        });
      }
      setFilteredEosData(filteredData);
    }
  }, [filterType, eosData]);

  useEffect(() => {
    if (eosData) {
      const updatedRemarksFilled = {};
      eosData.forEach((item) => {
        if (item.employeeId in updatedRemarksFilled) {
          updatedRemarksFilled[item.employeeId] +=
            item.approverRemarks.trim() !== "" ? 1 : 0;
        } else {
          updatedRemarksFilled[item.employeeId] =
            item.approverRemarks.trim() !== "" ? 1 : 0;
        }
      });
      setRemarksFilled(updatedRemarksFilled);
    }
  }, [eosData]);

  const handleAction = (id, action, remarks) => {
    const updatedData = eosData.map((item) =>
      item.id === id
        ? { ...item, status: action, approverRemarks: remarks }
        : item
    );
    setEosData(updatedData);

    // Send data to the backend

    // Example: axios.post('/api/update-eos', { id, action, remarks });

    console.log("Updated Data:", updatedData); // For debugging
  };

  const handleRemarksChange = (id, remarks) => {
    const updatedData = eosData.map((item) =>
      item.id === id ? { ...item, approverRemarks: remarks } : item
    );
    setEosData(updatedData);
  };

  const handleButtonClick = (type) => {
    setActiveButton(type);
    setFilterType(type); // Ensure this function is defined elsewhere in your code
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <span className="p-input-icon-left text-right w-fit">
          <i className="pi pi-search" />
          <InputText
            type="search"
            onInput={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="placeholder-gray-500 placeholder-opacity-50 text-center border border-gray-300 rounded-md px-2 py-2"
          />
        </span>
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <button
          className={`px-3 rounded-lg flex flex-row justify-start items-center gap-2 w-fit p-2 ${
            activeButton === "filled" ? "bg-blue-500 text-white" : "bg-blue-300"
          }`}
          onClick={() => handleButtonClick("filled")}
        >
          {activeButton === "filled" ? <VscFilterFilled /> : <VscFilter />}{" "}
          Filled Eos
        </button>
        <button
          className={`px-3 rounded-lg flex flex-row justify-start items-center gap-2 w-fit p-2 ${
            activeButton === "empty"
              ? "bg-green-500 text-white"
              : "bg-green-300"
          }`}
          onClick={() => handleButtonClick("empty")}
        >
          {activeButton === "filled" ? <VscFilter /> : <VscFilterFilled />}{" "}
          Pending Eos
        </button>
        <button
          className={`px-3 rounded-lg flex flex-row justify-start items-center gap-2 w-fit p-2 ${
            activeButton === "filled" || activeButton === "empty"
              ? "bg-gray-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleButtonClick("all")}
        >
          <MdFilterAltOff /> Clear Filter
        </button>
      </div>
    );
  };

  // const renderHeader = () => {
  //   return (
  //     <div className="flex flex-row justify-between items-center gap-4 w-full">
  //       <span className="p-input-icon-left text-right w-fit">
  //         <i className="pi pi-search" />
  //         <InputText
  //           type="search"
  //           onInput={(e) => setGlobalFilter(e.target.value)}
  //           placeholder="Search..."
  //           className="placeholder-gray-500 placeholder-opacity-50 text-center border border-gray-300 rounded-md px-2 py-2"
  //         />
  //       </span>
  //       <div className="flex flex-row justify-start items-center gap-2">
  //         <button
  //           className="bg-blue-300 px-3 rounded-lg flex flex-row justify-start items-center gap-2 w-fit p-2"
  //           onClick={() => setFilterType("filled")}
  //         >
  //           <MdFilterAlt /> Filled EOS
  //         </button>
  //         <button
  //           className="bg-green-300 px-3 rounded-lg flex flex-row justify-start items-center gap-2 w-fit p-2 "
  //           onClick={() => setFilterType("empty")}
  //         >
  //           <MdFilterAlt /> Empty EOS
  //         </button>
  //         <button
  //           className="bg-gray-300 px-3 rounded-lg flex flex-row justify-start items-center gap-2 w-fit p-2"
  //           onClick={() => setFilterType("all")}
  //         >
  //           <MdFilterAltOff /> Clear Filter
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  // const header = renderHeader();

  const emloyeeBodyTemplate = (rowData) => {
    console.log("my row data", rowData);
    return (
      <div className="flex flex-row justify-center items-center gap-1">
        <img
          alt={rowData.employeeName}
          src={`https://wl-incrivel.cf.tsp.li/resize/728x/webp/0ec/140/d189845022bb6eddb88bb5279a.jpg.webp`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-bold">{rowData.employeeName}</span>
      </div>
    );
  };
  const reportingManagerBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-row justify-center items-center gap-2">
        <img
          alt={rowData.reportingManager}
          src={`https://assets-global.website-files.com/636b968ac38dd1495ec4edcd/63c97f9c86d126510abef78e_in-trees_Andrii%20AI%20photo%20avatar%20Dyvo.webp`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-bold">{rowData.reportingManager}</span>
      </div>
    );
  };

  const [approvedIds, setApprovedIds] = useState([]);
  const [rejectedIds, setRejectedIds] = useState([]);

  const handleApprove = (id) => {
    setApprovedIds([...approvedIds, id]);
  };

  const handleReject = (id) => {
    setRejectedIds([...rejectedIds, id]);
  };

  const isApproved = (id) => approvedIds.includes(id);
  const isRejected = (id) => rejectedIds.includes(id);

  const removeLastLetter = (str) => {
    if (str.length > 0) {
      return str.slice(0, -1);
    }
    return str;
  };

  const headerTemplate = (header) => {
    return <span>{header}</span>;
  };

  const inputTextareaBodyTemplate = (rowData) => {
    return (
      <>
        {rowData.approverRemarks !== undefined &&
        rowData.approverRemarks !== "" ? (
          <span>{rowData.approverRemarks}</span>
        ) : (
          <InputText
            value={rowData.approverRemarks || ""}
            onChange={(e) => handleRemarksChange(rowData.id, e.target.value)}
            className="block" // Hide when status is not approved or rejected
            placeholder="Enter remarks..."
          />
        )}
      </>
    );
  };

  const actionBodyTemplate = (rowData) => {
    const disableButtons =
      remarksFilled[rowData.employeeId] !==
      eosData.filter((item) => item.employeeId === rowData.employeeId).length;
    return (
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-col gap-2">
          <Button
            label="Approve"
            icon="pi pi-check"
            onClick={() =>
              handleAction(rowData.id, "Approved", rowData.approverRemarks)
            }
            className={`p-button-success ${
              rowData.status === "Approved" ? "" : "p-button-outlined"
            }`}
            disabled={disableButtons}
            rounded
          />
          <Button
            label="Correct"
            icon="pi pi-pencil"
            onClick={() =>
              handleAction(rowData.id, "Corrected", rowData.approverRemarks)
            }
            className={`p-button-warning ${
              rowData.status === "Corrected" ? "" : "p-button-outlined"
            }`}
            disabled={disableButtons}
            rounded
          />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rpunded-lg shadow-md h-full w-full rounded-lg">
      <div className="p-col-12">
        <div className="card card-w-title">
          <div className="flex flex-wrap flex-row justify-between items-center bg-gray-100 p-2 rounded-lg mb-1">
            <h1 className="font-bold text-2xl white-space: nowrap flex-shrink: 0">
              Eos Approval
            </h1>
            <div className="flex  flex-wrap flex-row justify-between items-center gap-4">
              <div className="bg-yellow-100 hover:bg-yellow-300 p-2 rounded-lg w-[220px] text-center cursor-pointer">
                <span className="font-bold">Pending Eos: &nbsp; </span>
                <span className="font-smmibold text-blue-500">4</span>
              </div>
              <div className="bg-red-100 hover:bg-red-300 p-2 rounded-lg w-[220px] text-center cursor-pointer">
                <span className="font-bold">Approval Status: &nbsp;</span>
                <span className="font-semibold  text-red-500">Pending</span>
              </div>
              <div className="bg-orange-100 hover:bg-orange-300 p-2 rounded-lg w-[220px] text-center cursor-pointer">
                <span className="font-bold">Cut-Off Date: &nbsp;</span>
                <span className="font-semibold  text-orange-500">
                  26 Jun 2024
                </span>
              </div>
              <div className="shadow-md">
                <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-700 flex flex-row justify-center items-center gap-4 w-[220px] text-center">
                  <MdOutlineEmail className="text-xl" /> Send Reminder
                </button>
              </div>
              <div className="shadow-md">
                <button className="bg-green-500 p-2 rounded-lg text-white hover:bg-green-700 px-4 w-[220px] text-center">
                  Submit
                </button>
              </div>
              <MonthYearPickerFinal />
            </div>
          </div>

          <Toolbar
            className="mb-2"
            pt={{
              root: { style: { padding: "8px" } },
            }}
            start={leftToolbarTemplate}
            end={rightToolbarTemplate}
          ></Toolbar>
          <DataTable
            value={filteredEosData}
            rowGroupMode="rowspan"
            groupRowsBy={["employeeId", "employeeName"]}
            sortMode="multiple"
            multiSortMeta={[
              { field: "employeeId", order: 1 },
              { field: "employeeName", order: 1 },
            ]}
            className="p-datatable text-center"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ borderRadius: "20px" }}
            showGridlines
            globalFilter={globalFilter}
            size="small"
          >
            <Column
              header="#"
              headerStyle={{
                width: "3rem",
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
                alignHeader={"center"}
              body={(data, options) => options.rowIndex + 1}
            ></Column>
            <Column
              field="employeeId"
              header={headerTemplate("Employee Id")}
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{fontWeight: "bold", textAlign: "center" }}
            ></Column>
            <Column
              field="employeeId"
              header="Employee Name"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={emloyeeBodyTemplate}
              style={{ width: "14rem", textAlign: "center" }}
            ></Column>
            <Column
              field="employeeId"
              header="Reporting Manager"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              alignHeader={"center"}
              body={reportingManagerBodyTemplate}
              style={{width:"18rem"}}
            ></Column>
            <Column
              field="projectName"
              header="Project Name"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{  textAlign: "center" }}
            ></Column>
            <Column
              field="workPercentage"
              header="Work %"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ width: "6rem", textAlign: "center" }}
            ></Column>
            <Column
              field="remarks"
              header="Remarks"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{
                width: "8rem",
                textAlign: "center",
                whiteSpace: "normal",
                wordBreak: "break=word",
              }}
            ></Column>
            {/*   <Column
              field="submitionDate"
              header="Submition Date"
                 alignHeader={'center'}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{
                textAlign: "center",
              }}
            ></Column>
            */}
            <Column
              field="approverRemarks"
              header="Approver Remarks"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={inputTextareaBodyTemplate}
              style={{ width:"8rem",textAlign: "center" }}
            ></Column>
            <Column
              field="employeeId"
              header="Actions"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={actionBodyTemplate}
              style={{ width: "12rem", textAlign: "center" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default EosApproval;
