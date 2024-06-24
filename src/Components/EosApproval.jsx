import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import MonthYearPickerFinal from "./MonthYearPickerFinal";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

const EosApproval = () => {
  // Assuming eosData is an array of objects with the required fields

  const [eosData, setEosData] = useState([
    {
      id: 1,
      employeeId: 23001,
      employeeName: "John Doe",
      projectName: "Project A",
      workPercentage: 80,
      remarks: "Good work",
      approverRemarks: "",
      status: "",
    },
    {
      id: 2,
      employeeId: 23002,
      employeeName: "Jane Smith",
      projectName: "Project B",
      workPercentage: 60,
      remarks: "Needs improvement",
      approverRemarks: "",
      status: "",
    },
    {
      id: 3,
      employeeId: 23003,
      employeeName: "Alice Johnson",
      projectName: "Project C",
      workPercentage: 100,
      remarks: "Excellent work",
      approverRemarks: "",
      status: "",
    },
    {
      id: 4,
      employeeId: 23004,
      employeeName: "Bob Williams",
      projectName: "Project D",
      workPercentage: 75,
      remarks: "Satisfactory",
      approverRemarks: "",
      status: "",
    },
    {
      id: 5,
      employeeId: 23001,
      employeeName: "John Doe",
      projectName: "Project B",
      workPercentage: 80,
      remarks: "Good work-2",
      approverRemarks: "",
      status: "",
    },
    {
      id: 6,
      employeeId: 23002,
      employeeName: "Jane Smith",
      projectName: "Project C",
      workPercentage: 60,
      remarks: "Needs improvement-2",
      approverRemarks: "",
      status: "",
    },
    {
      id: 7,
      employeeId: 23003,
      employeeName: "Alice Johnson",
      projectName: "Project D",
      workPercentage: 100,
      remarks: "Excellent work-2",
      approverRemarks: "",
      status: "",
    },

    {
      id: 8,
      employeeId: 23004,
      employeeName: "Bob Williams",
      projectName: "Project A",
      workPercentage: 75,
      remarks: "Satisfactory-2",
      approverRemarks: "",
      status: "",
    },
    {
      id: 9,
      employeeId: 23001,
      employeeName: "John Doe",
      projectName: "Project C",
      workPercentage: 80,
      remarks: "Good work-3",
      approverRemarks: "",
      status: "",
    },
    {
      id: 10,
      employeeId: 23002,
      employeeName: "Jane Smith",
      projectName: "Project D",
      workPercentage: 60,
      remarks: "Needs improvement-3",
      approverRemarks: "",
      status: "",
    },
    {
      id: 11,
      employeeId: 23003,
      employeeName: "Alice Johnson",
      projectName: "Project A",
      workPercentage: 100,
      remarks: "Excellent work-3",
      approverRemarks: "",
      status: "",
    },
    {
      id: 12,
      employeeId: 23004,
      employeeName: "Bob Williams",
      projectName: "Project B",
      workPercentage: 75,
      remarks: "Satisfactory-3",
      approverRemarks: "",
      status: "",
    },
    {
      id: 13,
      employeeId: 23001,
      employeeName: "John Doe",
      projectName: "Project D",
      workPercentage: 80,
      remarks: "Good work-4",
      approverRemarks: "",
      status: "",
    },
    {
      id: 14,
      employeeId: 23001,
      employeeName: "John Doe",
      projectName: "Project E",
      workPercentage: 80,
      remarks: "Good work-5",
      approverRemarks: "",
      status: "",
    },
    {
      id: 15,
      employeeId: 23002,
      employeeName: "Jane Smith",
      projectName: "Project E",
      workPercentage: 60,
      remarks: "Needs improvement-4",
      approverRemarks: "",
      status: "",
    },
    {
      id: 16,
      employeeId: 23002,
      employeeName: "Jane Smith",
      projectName: "Project A",
      workPercentage: 60,
      remarks: "Needs improvement-5",
      approverRemarks: "",
      status: "",
    },
    {
      id: 17,
      employeeId: 23003,
      employeeName: "Alice Johnson",
      projectName: "Project B",
      workPercentage: 100,
      remarks: "Excellent work-4",
      approverRemarks: "",
      status: "",
    },
    {
      id: 18,
      employeeId: 23003,
      employeeName: "Alice Johnson",
      projectName: "Project E",
      workPercentage: 100,
      remarks: "Excellent work-5",
      approverRemarks: "",
      status: "",
    },
    {
      id: 19,
      employeeId: 23004,
      employeeName: "Bob Williams",
      projectName: "Project C",
      workPercentage: 75,
      remarks: "Satisfactory-4",
      approverRemarks: "",
      status: "",
    },
  ]);

  const [remarksFilled, setRemarksFilled] = useState({});
  

  useEffect(() => {
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

  const emloyeeBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
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

  // const rowExpansionTemplate = (data) => {
  //   const employeeId = data[0].employeeId;
  //   return (
  //     <div className="p-3">
  //       <Button
  //         label="Approve All"
  //         icon="pi pi-check"
  //         onClick={() => handleApprove(employeeId)}
  //         className={`p-button-success mr-2 ${
  //           isApproved(employeeId) ? "" : "p-button-outlined"
  //         }`}
  //         rounded
  //       />
  //       <Button
  //         label="Reject All"
  //         icon="pi pi-times"
  //         onClick={() => handleReject(employeeId)}
  //         className={`p-button-danger ${
  //           isRejected(employeeId) ? "" : "p-button-outlined"
  //         }`}
  //         rounded
  //       />
  //     </div>
  //   );
  // };
  const inputTextareaBodyTemplate = (rowData) => {
    return (
      <>
        {rowData.approverRemarks && rowData.approverRemarks !== "" ? (
          <span>{rowData.approverRemarks}</span>
        ) : (
          <InputText
            value={rowData.approverRemarks}
            onChange={(e) => handleRemarksChange(rowData.id, e.target.value)}
            className="block" // Hide when status is not approved or rejected
            placeholder="Enter remarks"
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
      <div className="flex flex-column gap-2">
        <div className="flex gap-2">
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
            label="Reject"
            icon="pi pi-times"
            onClick={() =>
              handleAction(rowData.id, "Rejected", rowData.approverRemarks)
            }
            className={`p-button-danger ${
              rowData.status === "Rejected" ? "" : "p-button-outlined"
            }`}
            disabled={disableButtons}
            rounded
          />
        </div>
      </div>
    );
  };

  return (
    <div className="p-grid p-fluid bg-white p-6 rpunded-lg shadow-md h-full w-full rounded-lg">
      <div className="p-col-12">
        <div className="card card-w-title">
          <div className="flex flex-row justify-between items-center mb-4">
            <h1 className="font-bold text-2xl mb-4">Eos Approval</h1>
            <MonthYearPickerFinal />
          </div>
          <DataTable
            value={eosData}
            rowGroupMode="rowspan"
            groupRowsBy="employeeId"
            sortMode="single"
            sortField="employeeId"
            sortOrder={1}
            className="p-datatable text-center"
            // expandedRows={[...new Set(eosData.map((data) => data.employeeId))]} // Automatically expand all groups
            // rowExpansionTemplate={(rowData) =>
            //   rowExpansionTemplate(
            //     eosData.filter((data) => data.employeeId === rowData.employeeId)
            //   )
            // }
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25, 50]}
            tableStyle={{ borderRadius: "20px" }}
            showGridlines
          >
            <Column
              header="#"
              headerStyle={{
                width: "3rem",
                backgroundColor: "rgb(187 247 208)",
              }}
              body={(data, options) => options.rowIndex + 1}
            ></Column>
            <Column
              field="employeeId"
              header="Employee Id"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
              style={{ fontWeight: "bold" }}
            ></Column>
            <Column
              field="employeeId"
              header="Employee Name"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
              body={emloyeeBodyTemplate}
            ></Column>
            <Column
              field="projectName"
              header="Project Name"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
            ></Column>
            <Column
              field="workPercentage"
              header="Work Percentage"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
            ></Column>
            <Column
              field="remarks"
              header="Remarks"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
            ></Column>
            <Column
              field="approverRemarks"
              header="Approver Remarks"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
              body={inputTextareaBodyTemplate}
            ></Column>
            <Column
              field="employeeId"
              header="Actions"
              headerStyle={{ backgroundColor: "rgb(187 247 208)" }}
              body={actionBodyTemplate}
              style={{ width: "12rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default EosApproval;

// function actionBodyTemplate(rowData) {
//     const id = rowData.employeeId;
//     return (
//       <div className="flex flex-row justify-start items-center gap-2 w-64">
//         <Button
//           label="Approve"
//           icon="pi pi-check"
//           onClick={() => handleApprove(id)}
//           className={`p-button-success w-1/2 ${
//             isApproved(id) ? "" : "p-button-outlined"
//           }`}
//           rounded
//         />
//         <Button
//           label="Reject"
//           icon="pi pi-times"
//           onClick={() => handleReject(id)}
//           className={`p-button-danger w-1/2 ${
//             isRejected(id) ? "" : "p-button-outlined"
//           }`}
//           rounded
//         />
//       </div>
//     );
//   }
