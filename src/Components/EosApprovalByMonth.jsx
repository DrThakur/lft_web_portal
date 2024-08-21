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
import axios from "axios";
import { Tag } from "primereact/tag";
import { InputNumber } from "primereact/inputnumber";
import { useParams } from "react-router-dom";

const EosApprovalByMonth = () => {
  // Assuming eosData is an array of objects with the required fields
  const { year, month } = useParams();
  const selectedMonth = `${month} ${year}`;
  const [eosData, setEosData] = useState(null);
  const [remarksFilled, setRemarksFilled] = useState({});
  const [approverRemarks, setApproverRemarks] = useState({});
  const [globalFilter, setGlobalFilter] = useState(null);
  const [filteredEosData, setFilteredEosData] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setEosData(EosData);
  //   setFilteredEosData(EosData);
  // }, []);

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

  // useEffect(() => {
  //   if (eosData) {
  //     const updatedRemarksFilled = {};
  //     eosData.forEach((item) => {
  //       if (item.employeeId in updatedRemarksFilled) {
  //         updatedRemarksFilled[item.employeeId] +=
  //           item.approverRemarks.trim() !== "" ? 1 : 0;
  //       } else {
  //         updatedRemarksFilled[item.employeeId] =
  //           item.approverRemarks.trim() !== "" ? 1 : 0;
  //       }
  //     });
  //     setRemarksFilled(updatedRemarksFilled);
  //   }
  // }, [eosData]);

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
      <div className="flex flex-row justify-start items-center gap-1">
        <img
          alt={rowData.employee.fullName}
          src={`https://wl-incrivel.cf.tsp.li/resize/728x/webp/0ec/140/d189845022bb6eddb88bb5279a.jpg.webp`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-bold">{rowData.employee.fullName}</span>
      </div>
    );
  };
  const reportingManagerBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-row justify-start items-center gap-2">
        <img
          alt={rowData.employee.reportingManager}
          src={`https://assets-global.website-files.com/636b968ac38dd1495ec4edcd/63c97f9c86d126510abef78e_in-trees_Andrii%20AI%20photo%20avatar%20Dyvo.webp`}
          width={30}
          height={30}
          className="rounded-full"
        />
        <span className="font-bold">{rowData.employee.reportingManager}</span>
      </div>
    );
  };

  const projectManagerBodyTemplate = (rowData) => {
    return (
      <div className="flex flex-col justify-start items-start gap-2">
        {rowData.projects.map((project, index) => (
          <div className="flex flex-row justify-center items-center gap-2">
            <img
              alt={project.project.projectManager.fullName}
              src={`https://assets-global.website-files.com/636b968ac38dd1495ec4edcd/63c97f9c86d126510abef78e_in-trees_Andrii%20AI%20photo%20avatar%20Dyvo.webp`}
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-bold">
              {project.project.projectManager.fullName}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const projectsBodyTemplate = (rowData) => {
    console.log("my row dtaa projects", rowData.projects);
    return (
      <div className="flex flex-col justify-start items-start gap-2">
        {rowData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <p>{project.project.projectName}</p>
          </div>
        ))}
      </div>
    );
  };
  const worksBodyTemplate = (rowData) => {
    console.log("my row dtaa projects", rowData.projects);
    return (
      <div>
        {rowData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <p>{project.occupancy}</p>
          </div>
        ))}
      </div>
    );
  };
  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.inventoryStatus}
        severity={getSeverity(rowData)}
      ></Tag>
    );
  };

  const isPositiveInteger = (val) => {
    let str = String(val);

    str = str.trim();

    if (!str) {
      return false;
    }

    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
  };


  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "quantity":
      case "price":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };


  const cellEditor = (options) => {
    if (options.field === "price") return priceEditor(options);
    else return textEditor(options);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const priceEditor = (options) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
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

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchEosData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiUrl}/eos`);
        const eosList = res.data.eosList;

        setEosData(eosList);
      } catch (error) {
        console.error("Error fetching EOS data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEosData();
  }, [apiUrl]);

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


          <h1 className="text-3xl font-semibold mb-4 text-center text-white bg-gray-500 rounded-lg border shadow-lg">No EOS Information Available for Month: {selectedMonth}</h1>
         {/*
          <DataTable
            value={eosData}
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
              field="employee.employeeId"
              // header={headerTemplate("Employee Id")}
              header="Employee Id"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ width: "8rem", fontWeight: "bold", textAlign: "center" }}
            ></Column>
            <Column
              field="employee.fullName"
              header="Employee Name"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={emloyeeBodyTemplate}
              style={{ width: "20rem", textAlign: "center" }}
            ></Column>
            <Column
              field="employee.reportingManager"
              header="Reporting Manager"
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              alignHeader={"center"}
              body={reportingManagerBodyTemplate}
              style={{ width: "14rem", textAlign: "center" }}
            ></Column>
            <Column
              field="projects.project.projectName"
              header="Project Name"
              alignHeader={"center"}
              body={projectsBodyTemplate}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              style={{ textAlign: "center" }}
            ></Column>
            <Column
              field="workPercentage"
              header="Work %"
              alignHeader={"center"}
              body={worksBodyTemplate}
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
              body={"N/A"}
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
            <Column
              field="approverRemarks"
              header="Approver Remarks"
              alignHeader={"center"}
              headerStyle={{
                backgroundColor: "rgb(187 247 208)",
                textAlign: "center",
              }}
              body={statusBodyTemplate}
              style={{ minWidth: "12rem" }}
              editor={(options) => cellEditor(options)}
              onCellEditComplete={onCellEditComplete}
            ></Column>
            <Column
              field="action"
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
           */}
        </div>
      </div>
    </div>
  );
};

export default EosApprovalByMonth;
