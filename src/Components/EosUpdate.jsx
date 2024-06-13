import React, { useState } from "react";

const EosUpdate = () => {
  // State to keep track of the number of project rows
  const [numProjects, setNumProjects] = useState(5);
  const projectManagers = [
    "Mohammad Rafi",
    "Deepak Goyal",
    "Raghavan T V",
    "Vishal Sinha",
    "Monika Gupta",
    "Akash Jain",
    "Shashank Chaurasia",
    "Sonu Sonkar",
    "Rahul Sharma",
    "Ramakrishna D C",
    "Dhruv Kumar Saxena",
    "Gurpreet Singh",
    "Vineet Goel",
    "Abhishek Khandelwal",
    "NA",
    "Puneet Sinha",
    "Amritpreet Singh",
    "Madhukar Manohar",
  ];

  const projects = [
    "ITI_HCRR_052",
    "Keysight_LOKI_PCIe_Gen6_LTSSM_085",
    "IPRC_Lab_Data_Acquisition_System_031",
    "ITI_ISS_Version2_090",
    "Lattice_Display_Port_2.0_IP_099",
    "Keysight_Corvette_Gen5_Analyzer_156",
    "Keysight_Corvette_Gen5_Exerciser_157",
    "Keysight_Corvette_Gen6_Exerciser_T&M_158",
    "Keysight_Corvette_Gen6_Analyzer_T&M_159",
    "Keysight_Vision_PCIe_Gen6_LTSSM_112",
    "Microxlab_Cytox_Phase3_116",
    "LFT_eCPRI_IP_Development_117",
    "LFT_Software_Defined_Radio_(SDR)_125",
    "Credo_PCIe_Retimer_T&M_127",
    "LFT_Intel_XEON_Single_Board_Computer_(SBC)_128",
    "Lattice_USB_Example_Design_129",
    "LFT_Lattice_Avant_FPGA_Based_Evaluation_Board_134",
    "Keysight_CXL_2.0_Exercsier_144",
    "Keysight_CXL_2.0_Analyzer_145",
    "Keysight_CXL_3.0_Exercsier_146",
    "Keysight_CXL_3.0_Analyzer_147",
    "CASDIC_Lab_STANAG_Video_Switching_Unit_Version2_150",
    "HAL_ARINC_TO_DVI_Converter_IP_151",
    "Lattice_MIPI_To_HDMI_Reference_Design_153",
    "LRDE_EPS_Firmware_Development_154",
    "Keysight_PCIe_Gen5_Cutter_PTC_155",
    "LFT_Internal_Web_Portal_161",
    "IRDE_Video_Processing_for_Thermal_Imager_v2_163",
    "LFT_AMD_AI_Video_scalar_demo_164",
    "Lattice_RCS_V2_166",
    "LFT_PCIe_CXL_Verilog_IP_Core_Development_167",
    "LFT_ARINC818_IP_Porting_on_NI_System_168",
    "LFT_Achronix_Development_Board_169",
    "Stryker_QT_GUI_SOW2-2_170",
    "Self Learning",
    "Collins_PCIe_NVMe_Bridge_Solution_Stage2_171",
    "Astra_Microwave_Custom_Board_Booting_172",
    "LFT_Achronix_JESD204C_IP_Enhancements_173",
    "Astra_40G_UDP_IP_Stack_Development_174",
    "Keysight_Vision_ED_Gen7_SKP_OS_Filtering_176",
    "LFT_ARINC818_Verification_177",
    "LFT_Avant_G_Min_Versa_Board_Development_178",
    "LFT_Co_Pilot_179",
    "LFT_ARINC_818_Based_Product_Development_180",
    "IDEX_ImageProcessing_algorithm_Development_181",
  ];

  // Default values for employee details
  const defaultEmployeeDetails = {
    employeeId: "23026",
    employeeName: "Ankit Kumar Thakur",
    email: "ankit.thakur@logic-fruit.com",
    reportingManager: "Dhruv Kumar Saxena",
  };

  // State to manage the form data
  const [formData, setFormData] = useState({
    ...defaultEmployeeDetails,
    projects: [...Array(numProjects)].map(() => ({
      project: "",
      workPercentage: "",
    })),
    remarks: "",
  });

  // Function to handle addition of a new project row
  const addProjectRow = () => {
    setNumProjects((prevNum) => prevNum + 1);
    setFormData((prevData) => ({
      ...prevData,
      projects: [...prevData.projects, { project: "", workPercentage: "" }],
    }));
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Function to handle project input changes
  const handleProjectInputChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    
    // Calculate the total work percentage
    const totalWorkPercentage = formData.projects.reduce(
      (total, project) => total + parseInt(project.workPercentage || 0, 10),
      0
    );

    // Check if total work percentage exceeds 100
    if (totalWorkPercentage > 100) {
      alert("Total work percentage cannot exceed 100%");
      return;
    }
    // Filter out empty projects
    const filteredProjects = formData.projects.filter(
      (project) => project.project && project.workPercentage
    );

    // Create the final form data with filtered projects
    const finalFormData = {
      ...formData,
      projects: filteredProjects,
    };

    console.log("Form Data Submitted:", finalFormData);

    // Reset form data to default values
    setFormData({
      ...defaultEmployeeDetails,
      projects: [...Array(5)].map(() => ({ project: "", workPercentage: "" })),
      remarks: "",
    });
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">EoS Update</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Employee Details Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Employee ID */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="employeeId"
              >
                Employee ID *
              </label>
              <input
                type="text"
                id="employeeId"
                value={formData.employeeId}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>

            {/* Employee Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="employeeName"
              >
                Employee Name *
              </label>
              <input
                type="text"
                id="employeeName"
                value={formData.employeeName}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>

            {/* Reporting Manager */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="reportingManager"
              >
                Reporting Manager *
              </label>
              <select
                id="reportingManager"
                value={formData.reportingManager}
                readOnly
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Project Manager
                </option>
                {projectManagers.map((manager, index) => (
                  <option key={index} value={manager}>
                    {manager}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Information Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Project Information</h2>
          <div className="">
            {formData.projects.map((project, index) => (
              <div
                key={index}
                className="col-span-1 grid grid-cols-2 gap-4 mb-2"
              >
                <div className="col-start-1 col-end-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`project${index + 1}`}
                  >
                    Project {index + 1}
                    {index < 1 && " *"}
                  </label>
                  <select
                    id={`project${index + 1}`}
                    value={project.project}
                    onChange={(e) =>
                      handleProjectInputChange(index, "project", e.target.value)
                    }
                    required={index < 1}
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Project
                    </option>
                    {projects.map((proj, i) => (
                      <option key={i} value={proj}>
                        {proj}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-start-2 col-end-3 flex flex-col justify-start gap-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`workPercentage${index + 1}`}
                  >
                    Work Percentage in project {index + 1} (In %)
                    {index < 1 && " *"}
                  </label>
                  <input
                    type="number"
                    id={`workPercentage${index + 1}`}
                    value={project.workPercentage}
                    onChange={(e) =>
                      handleProjectInputChange(
                        index,
                        "workPercentage",
                        e.target.value
                      )
                    }
                    required={index < 1}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Button to add a new project row */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={addProjectRow}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Add Project
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              (Only for Sales Lead Investigation & Sales & Marketing Activities)
            </h2>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="remarks"
              >
                Remarks
              </label>
              <textarea
                type="text"
                id="remarks"
                rows={5}
                value={formData.remarks}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EosUpdate;
