
import React, { useEffect, useRef, useState } from "react";
import { Chart } from "primereact/chart";

const ProjectDetails = () => {
  const project = [
    {
      jd: "1",
      projectName: "PCIe Host FPGA-SSD bridging- Stage 2",
      plannedStartDate: "2024-05-02T18:30:00.000Z",
      plannedEndDate: "2024-05-24T18:30:00.000Z",
      actualStartDate: "2024-05-09T18:30:00.000Z",
      currentStage: "MS 1.2/MS 1.3",
      projectBudget: "$2000",
      invoicedToClient: "$5000",
      projectOverallHealth: "Delay",
      projectDescription:
        "LFT Self Funded JESD 204C IP development Project targeted for Xilinx FPGA and tested with Xilinx IP",
    },
  ];
  const [products, setProducts] = useState([]);
  const dt = useRef(null);

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [pieChartOptions, setPieChartOptions] = useState({});

  const formatDate = (value) => {
    const date = new Date(value);
    console.log("my date", date);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const plannedStartDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    return formatDate(rowData.plannedStartDate);
  };
  const plannedEndDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    return formatDate(rowData.plannedStartDate);
  };
  const actualStartDateTemplate = (rowData) => {
    console.log("my rowDate", rowData);
    return formatDate(rowData.actualStartDate);
  };

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["MS 1.1", "MS 1.2", "MS 1.3", "MS 1.4", "MS 1.5", "Misc"],
      datasets: [
        {
          label: "Total Tasks",
          backgroundColor: documentStyle.getPropertyValue("--blue-300"),
          borderColor: documentStyle.getPropertyValue("--blue-300"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Completed",
          backgroundColor: documentStyle.getPropertyValue("--green-300"),
          borderColor: documentStyle.getPropertyValue("--green-300"),
          data: [28, 48, 40, 19, 36, 27, 30],
        },
        {
          label: "In Progress",
          backgroundColor: documentStyle.getPropertyValue("--yellow-300"),
          borderColor: documentStyle.getPropertyValue("--yellow-300"),
          data: [20, 25, 30, 45, 6, 12, 9],
        },
        {
          label: "ON Hold",
          backgroundColor: documentStyle.getPropertyValue("--red-300"),
          borderColor: documentStyle.getPropertyValue("--red-300"),
          data: [2, 3, 5, 0, 1, 2, 4],
        },
        {
          label: "Not Started",
          backgroundColor: documentStyle.getPropertyValue("--gray-300"),
          borderColor: documentStyle.getPropertyValue("--gray-300"),
          data: [1, 0, 0, 0, 1, 0, 2],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Completed", "In Progress", "On Hold", "Not Started"],
      datasets: [
        {
          data: [540, 325, 702, 600],
          backgroundColor: [
            documentStyle.getPropertyValue("--green-300"),
            documentStyle.getPropertyValue("--yellow-300"),
            documentStyle.getPropertyValue("--red-300"),
            documentStyle.getPropertyValue("--gray-300"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--green-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--red-400"),
            documentStyle.getPropertyValue("--gray-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setPieChartData(data);
    setPieChartOptions(options);
  }, []);

  return (
    <div className="bg-white p-4 rounded ">
      <h1 className="text-2xl font-bold mb-4">Project Details</h1>

      <div className="flex flex-row justify-center items-center gap-2">
        <div className="border-r-4 border-black p-2">
          <span className="text-5xl font-bold">Rockwell Collins</span>
        </div>
        <div>
          <span className="text-5xl font-bold">
            PCIe Host FPGA-SSD bridging
          </span>
          <span className="text-5xl font-bold">-</span>
          <span className="text-5xl font-bold"> Stage 2</span>
        </div>
      </div>
      <div className="table w-full rounded">
        {/*<DataTable
          ref={dt}
          value={project}
          tableStyle={{ minWidth: "50rem", background: "rgb(144, 202, 249)" }}
          className="bg-blue-200"
        >
          <Column field="projectName" header="Project"></Column>
          <Column
            field="plannedStartDate"
            header="Planned Start Date"
            body={plannedStartDateTemplate}
          ></Column>
          <Column
            field="plannedEndDate"
            header="Planned End Date"
            body={plannedEndDateTemplate}
          ></Column>
          <Column
            field="actualStartDate"
            header="Actual Start Date"
            body={actualStartDateTemplate}
          ></Column>
          <Column field="currentStage" header="Current Stage"></Column>
          <Column field="projectBudget" header="Project Budget"></Column>
          <Column field="invoicedToClient" header="Invoiced to Client"></Column>
          <Column
            field="projectOverallHealth"
            header="Prohect Overall Health"
          ></Column>
        </DataTable>
        */}
        <div className="w-full">
          <table className="table-auto border-collapse border w-full">
            <thead>
              <tr>
                <th className="border p-2">Project</th>
                <th className="border p-2">Planned Start Date</th>
                <th className="border p-2">Planned End Date</th>
                <th className="border p-2">Actual Start Date</th>
                <th className="border p-2">Current Stage</th>
                <th className="border p-2">Project Budget</th>
                <th className="border p-2">Invoiced To Client</th>
                <th className="border p-2">Project Overall Health</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  PCIe Host FPGA-SSD bridging- Stage 2
                </td>
                <td className="border p-2">03 May 2024</td>
                <td className="border p-2">03 May 2024</td>
                <td className="border p-2">10 May 2024</td>
                <td className="border p-2">MS 1.2/MS 1.3</td>
                <td className="border p-2">$2000</td>
                <td className="border p-2">$5000</td>
                <td className="border p-2">Delay</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="projectDescription grid grid-cols-3 gap-4 mt-4">
        <div className="projectBrief bg-gray-200 p-2">
          <h3 className="text-xl font-semibold mb-2 rounded">Project Brief:</h3>
          <span>
            Develop bridge application between HOST & NVMe SSD running at PCIe
            Gen4x4 which allows AES-XTS encryption/decryption during data
            transfer from HOST to SSD and SSD to HOST. To be implemented using
            Achronix Speedster AC7t1500 FPGA on S7t-VG6 Vector Path board
          </span>
        </div>
        <div className="projectStatusTable bg-white col-span-2 rounded-md ">
          <table className="table-auto border-collapse border w-full">
            <tbody>
              <tr>
                <td
                  colSpan={7}
                  className="text-center text-xl font-semibold bg-gray-200"
                >
                  Project Mielstones Tracking
                </td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold ">
                  Milestones{" "}
                </td>
                <td className="border p-2 bg-green-200">1.1</td>
                <td className="border p-2 bg-yellow-200">1.2</td>
                <td className="border p-2 bg-yellow-300">1.3</td>
                <td className="border p-2 bg-red-200">1.4</td>
                <td className="border p-2">1.5</td>
                <td className="border p-2">1.6</td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold">
                  Planned
                </td>
                <td className="border p-2 bg-green-200">31 Jan 24</td>
                <td className="border p-2 bg-yellow-200">29 Feb 24</td>
                <td className="border p-2 bg-yellow-300">31 Mar 24</td>
                <td className="border p-2 bg-red-200">30 Apr 24</td>
                <td className="border p-2">31 May 24</td>
                <td className="border p-2">30 Jun 24</td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold">
                  Actual / Estimated
                </td>
                <td className="border p-2 bg-green-200">6 Mar 24</td>
                <td className="border p-2 bg-yellow-200">31 Mar 24*</td>
                <td className="border p-2 bg-yellow-300">23 May 24*</td>
                <td className="border p-2 bg-red-200">30 Apr 24*</td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
              <tr>
                <td className="border p-2 bg-blue-200 font-semibold">
                  C-Sat Level
                </td>
                <td className="border p-2 bg-green-200">+ve</td>
                <td className="border p-2 bg-yellow-200">Neutral</td>
                <td className="border p-2 bg-yellow-300"></td>
                <td className="border p-2 bg-red-200"></td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="rolesContainer grid grid-cols-3 gap-4">
        <div className="roles mt-2 col-span-1">
          <table className="table-auto border-collapse border h-full">
            <thead>
              <tr>
                <td
                  colSpan={7}
                  className="text-center text-xl font-semibold bg-blue-200"
                >
                  Project Mielstones Tracking
                </td>
              </tr>
              <tr className="bg-yellow-200">
                <th className="border p-2">Role</th>
                <th className="border p-2">Planned</th>
                <th className="border p-2">Deployed</th>
                <th className="border p-2">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 bg-green-200">FPGA Architect</td>
                <td className="border p-2 bg-gray-200">1</td>
                <td className="border p-2 bg-gray-200">1</td>
                <td className="border p-2 bg-teal-100">Vineet G</td>
              </tr>
              <tr>
                <td className="border p-2 bg-green-200">PM</td>
                <td className="border p-2 bg-gray-200">1</td>
                <td className="border p-2 bg-gray-200">1</td>
                <td className="border p-2 bg-teal-100">Vishal S</td>
              </tr>
              <tr>
                <td className="border p-2 bg-green-200">FPGA Lead</td>
                <td className="border p-2 bg-gray-200">2</td>
                <td className="border p-2 bg-gray-200">2</td>
                <td className="border p-2 bg-teal-100">Rishab / Karan</td>
              </tr>
              <tr>
                <td className="border p-2 bg-green-200">FPGA Engineer</td>
                <td className="border p-2 bg-gray-200">2</td>
                <td className="border p-2 bg-gray-200">3</td>
                <td className="border p-2 bg-teal-100">
                  Abhinav / Lalit / Yash / Pratik / Purnima
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="graph1">
          <h1 className="bg-gray-200 p-2 mt-2 text-center font-semibold rounded">
            Milestone Status
          </h1>
          <Chart
            type="bar"
            data={chartData}
            options={chartOptions}
            className="w-full"
          />
        </div>
        <div className="graph2">
          <h1 className="bg-gray-200 p-2 mt-2 text-center font-semibold rounded">
            Project Tasks Status
          </h1>
          <Chart
            type="pie"
            data={pieChartData}
            options={pieChartOptions}
            className="w-10/12 md:w-30rem"
          />
        </div>
      </div>
      <div className="lastTable mt-2 rounded">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr>
              <td
                colSpan={7}
                className="text-center text-xl font-semibold bg-red-200"
              >
                Risk Mitigation Plan
              </td>
            </tr>
            <tr className="bg-yellow-200">
              <th className="border p-2">Milestones</th>
              <th className="border p-2">Risks</th>
              <th className="border p-2">Priority</th>
              <th className="border p-2">Impact</th>
              <th className="border p-2">Response Strategy</th>
              <th className="border p-2">Target Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 bg-green-200">MS 1.2</td>
              <td className="border p-2 bg-yellow-200">
                Re-coding in case issues in Sim Verification - TX PHY TOP BLOCK
              </td>
              <td className="border p-2 bg-red-300">High</td>
              <td className="border p-2 bg-red-300">High</td>
              <td className="border p-2 bg-gray-200">
                Plan Project flow accordingly
              </td>
              <td className="border p-2 bg-sky-200">25 Mar 24</td>
            </tr>
            <tr>
              <td className="border p-2 bg-green-200">MS 1.2</td>
              <td className="border p-2 bg-yellow-200">
                Delay in MS1.2 Invoicing in FY24
              </td>
              <td className="border p-2 bg-yellow-300">Medium</td>
              <td className="border p-2 bg-red-300">High</td>
              <td className="border p-2 bg-gray-200">
                Push Tasks with additional resources
              </td>
              <td className="border p-2 bg-sky-200">29 Mar 24</td>
            </tr>
            <tr>
              <td className="border p-2 bg-green-200">MS 1.3</td>
              <td className="border p-2 bg-yellow-200">
                Delay in Payload processing module
              </td>
              <td className="border p-2 bg-red-300">High</td>
              <td className="border p-2 bg-red-300">High</td>
              <td className="border p-2 bg-gray-200">
                Engage SME resource to support
              </td>
              <td className="border p-2 bg-sky-200">30 Apr 24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectDetails;
