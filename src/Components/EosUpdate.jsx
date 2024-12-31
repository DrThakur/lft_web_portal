import React, { useEffect, useState } from "react";
import MonthYearPicker from "./MonthYearPicker";
import { useStateContext } from "../Contexts/ContextProvider";
import axios from "axios";

const EosUpdate = () => {
  // State to keep track of the number of project rows
  //   const [numProjects, setNumProjects] = useState(14);
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [salesLeadError, setSalesLeadError] = useState("");
  const [userDetails, setUserDetails] = useState({});

  // State to manage the form data
  const [formData, setFormData] = useState({
    // ...defaultEmployeeDetails,
    // projects: [...Array(numProjects)].map(() => ({
    //   project: "",
    //   workPercentage: "",
    //   remarks:"",
    // })),
    employeeId: "",
    employeeName: "",
    email: "",
    reportingManager: "",
    projects: [],
    activities: [],
  });

  const { user } = useStateContext();

  const apiUrl = process.env.REACT_APP_API_URL;
  console.log("mydakskj", user);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${user._id}`);
        console.log("my userdeatils--111", response.data);
        setUserDetails(response.data);

        console.log(
          "activities Array",
          Array.isArray(response.data.activities)
        );
        setActivities(response.data.activities);
        console.log("Projects Array", Array.isArray(response.data.projects));
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    if (user && user._id) {
      fetchUserDetails();
    }
  }, [user, apiUrl]);

  //   const projectManagers = [
  //     "Mohammad Rafi",
  //     "Deepak Goyal",
  //     "Raghavan T V",
  //     "Vishal Sinha",
  //     "Monika Gupta",
  //     "Akash Jain",
  //     "Shashank Chaurasia",
  //     "Sonu Sonkar",
  //     "Rahul Sharma",
  //     "Ramakrishna D C",
  //     "Dhruv Kumar Saxena",
  //     "Gurpreet Singh",
  //     "Vineet Goel",
  //     "Abhishek Khandelwal",
  //     "NA",
  //     "Puneet Sinha",
  //     "Amritpreet Singh",
  //     "Madhukar Manohar",
  //   ];

  useEffect(() => {
    const projectsData = [
      "ITI_HCRR_052",
      "Keysight_LOKI_PCIe_Gen6_LTSSM_085",
      "IPRC_Lab_Data_Acquisition_System_031",

      // "ITI_ISS_Version2_090",
      // "Lattice_Display_Port_2.0_IP_099",
      // "Keysight_Corvette_Gen5_Analyzer_156",
      // "Keysight_Corvette_Gen5_Exerciser_157",
      // "Keysight_Corvette_Gen6_Exerciser_T&M_158",
      // "Keysight_Corvette_Gen6_Analyzer_T&M_159",
      // "Keysight_Vision_PCIe_Gen6_LTSSM_112",
      // "Microxlab_Cytox_Phase3_116",
      // "LFT_eCPRI_IP_Development_117",
      // "LFT_Software_Defined_Radio_(SDR)_125",
      // "Credo_PCIe_Retimer_T&M_127",
      // "LFT_Intel_XEON_Single_Board_Computer_(SBC)_128",
      // "Lattice_USB_Example_Design_129",
      // "LFT_Lattice_Avant_FPGA_Based_Evaluation_Board_134",
      // "Keysight_CXL_2.0_Exercsier_144",
      // "Keysight_CXL_2.0_Analyzer_145",
      // "Keysight_CXL_3.0_Exercsier_146",
      // "Keysight_CXL_3.0_Analyzer_147",
      // "CASDIC_Lab_STANAG_Video_Switching_Unit_Version2_150",
      // "HAL_ARINC_TO_DVI_Converter_IP_151",
      // "Lattice_MIPI_To_HDMI_Reference_Design_153",
      // "LRDE_EPS_Firmware_Development_154",
      // "Keysight_PCIe_Gen5_Cutter_PTC_155",
      // "LFT_Internal_Web_Portal_161",
      // "IRDE_Video_Processing_for_Thermal_Imager_v2_163",
      // "LFT_AMD_AI_Video_scalar_demo_164",
      // "Lattice_RCS_V2_166",
      // "LFT_PCIe_CXL_Verilog_IP_Core_Development_167",
      // "LFT_ARINC818_IP_Porting_on_NI_System_168",
      // "LFT_Achronix_Development_Board_169",
      // "Stryker_QT_GUI_SOW2-2_170",
      // "Self Learning",
      // "Collins_PCIe_NVMe_Bridge_Solution_Stage2_171",
      // "Astra_Microwave_Custom_Board_Booting_172",
      // "LFT_Achronix_JESD204C_IP_Enhancements_173",
      // "Astra_40G_UDP_IP_Stack_Development_174",
      // "Keysight_Vision_ED_Gen7_SKP_OS_Filtering_176",
      // "LFT_ARINC818_Verification_177",
      // "LFT_Avant_G_Min_Versa_Board_Development_178",
      // "LFT_Co_Pilot_179",
      // "LFT_ARINC_818_Based_Product_Development_180",
      // "IDEX_ImageProcessing_algorithm_Development_181",
    ];
    const defaultEmployeeDetails = {
      employeeId: "23026",
      employeeName: "Ankit Kumar Thakur",
      email: "ankit.thakur@logic-fruit.com",
      reportingManager: "Dhruv Kumar Saxena",
      projectManager: "Ankit Kumar Thakur",
      cutOff: "24 Jun 2024",
    };
    const activitiesData = [
      "Admin Activities",
      "Finance Activities",
      "HR Activities",
      "IT Activities",
      "Learning & Development",
      "Management Activities",
      "Payroll Activities",
      "Purchase Activities",
      "Recruitment Activities",
      "Sales Lead Investigation",
      "Sales & Marketing Activities",
    ];

    setUserData(defaultEmployeeDetails);
    // setProjects(projectsData);
    // setActivities(activitiesData);

    setFormData({
      ...defaultEmployeeDetails,
      projects: projectsData.map((project) => ({
        project,
        workPercentage: "",
        remark: "",
      })),
      activities: activitiesData.map((activity) => ({
        activity,
        workPercentage: "",
        remark: "",
      })),
      remarks: "",
    });
  }, []);

  //   const activities = [
  //     "Admin Activities",
  //     "Finance Activities",
  //     "HR Activities",
  //     "IT Activities",
  //     "Learning & Development",
  //     "Management Activities",
  //     "Payroll Activities",
  //     "Purchase Activities",
  //     "Recruitment Activities",
  //     "Sales Lead Investigation",
  //     "Sales & Marketing Activities",
  //   ];

  // Default values for employee details

  // State to manage the error message
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle addition of a new project row
  //   const addProjectRow = () => {
  //     setNumProjects((prevNum) => prevNum + 1);
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       projects: [...prevData.projects, { project: "", workPercentage: "" }],
  //     }));
  //   };

  // Function to handle input changes
  //   const handleInputChange = (e) => {
  //     const { id, value } = e.target;
  //     setFormData({ ...formData, [id]: value });
  //   };

  // Function to handle project input changes
  const handleProjectInputChange = (index, field, value) => {
    const newProjects = [...formData.projects];
    const numValue = Number(value);

    // Validation logic
    let errorMessage = "";
    if (numValue < 0) {
      errorMessage = "Value cannot be negative.";
    } else if (numValue > 100) {
      errorMessage = "Value cannot exceed 100.";
    }

    // const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    newProjects[index].error = errorMessage;
    setFormData({ ...formData, projects: newProjects });
  };

  const handleActivityInputChange = (index, field, value) => {
    const newActivities = [...formData.activities];
    newActivities[index][field] = value;
    setFormData({ ...formData, activities: newActivities });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here

    // Calculate the total work percentage
    const totalProjectWorkPercentage = formData.projects.reduce(
      (total, project) => total + parseInt(project.workPercentage || 0, 10),
      0
    );

    const totalActivityWorkPercentage = formData.activities.reduce(
      (total, activity) => total + parseInt(activity.workPercentage || 0, 10),
      0
    );

    const totalWorkPercentage =
      totalProjectWorkPercentage + totalActivityWorkPercentage;

    const salesLeadInvestigation = formData.activities.find(
      (activity) => activity.activity === "Sales Lead Investigation"
    );

    if (
      salesLeadInvestigation &&
      salesLeadInvestigation.workPercentage &&
      !salesLeadInvestigation.remark
    ) {
      setSalesLeadError(
        "Remark is required for Sales Lead Investigation if its work percentage is filled"
      );
      return;
    }

    // Check if total work percentage exceeds 100
    if (totalWorkPercentage !== 100) {
      setErrorMessage("Total work percentage must be exactly 100%");
      return;
    }
    // Filter out empty projects
    const filteredProjects = formData.projects.filter(
      (project) => project.project && project.workPercentage
    );

    const filteredActivities = formData.activities.filter(
      (activity) => activity.activity && activity.workPercentage
    );

    // Create the final form data with filtered projects
    const finalFormData = {
      ...formData,
      projects: filteredProjects,
      activities: filteredActivities,
    };

    console.log("Form Data Submitted:", finalFormData);

    // Reset form data to default values
    // setFormData({
    //   ...defaultEmployeeDetails,
    //   projects: [...Array(14)].map(() => ({ project: "", workPercentage: "" })),
    //   remarks: "",
    // });

    setFormData({
      ...userData,
      projects: projects.map((project) => ({
        project,
        workPercentage: "",
        remark: "",
      })),
      activities: activities.map((activity) => ({
        activity,
        workPercentage: "",
        remark: "",
      })),
      remarks: "",
    });

    setErrorMessage("");
  };

  if (!userDetails) return <div>Loading...</div>;

  console.log("My userDeatiols for proejcts", userDetails);

  const validateInput = (value) => {
    const numValue = Number(value);
    // Ensure the value is a positive number and not greater than 100
    if (numValue < 0) return 0;
    if (numValue > 100) return 100;
    return numValue;
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-md ">

      <div className="flex flex-col sm:flex-row justify-between items-center md:items-center mb-2 bg-gray-200 py-2 px-4 rounded-lg">
        <h1 className="text-2xl font-bold text-left md:text-left w-full md:w-auto">EoS Update</h1>

        {/* Button and MonthYearPicker */}
        <div className="flex flex-col xs:flex-row justify-evenly items-center gap-4 w-full md:w-auto mt-2">
          {/* Submit Button */}
          <div className="flex justify-start w-full min-w-36 md:w-auto">
            <button
              type="submit"
              className="xs:px-2 px-4 py-2 w-full md:w-[150px] h-[40px] bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {/* MonthYearPicker */}
          <div className="w-full md:w-auto">
            <div className=" w-full md:w-[150px] h-[40px]">
              <MonthYearPicker />
            </div>
          </div>
        </div>
      </div>

      <form className="space-y-6">
        {/* Employee Details Section */}

        {userDetails && (
          <div className="bg-green-200 rounded-lg p-4 -mb-4">
            <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Employee ID */}
              <div>
                <p className="text-sm font-medium text-gray-700">Employee ID</p>
                <p className="mt-2 text-blue-500 font-bold">
                  {userDetails.employeeId}
                </p>
              </div>

              {/* Employee Name */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Employee Name
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {userDetails.fullName}
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <p className="mt-2 text-blue-500 font-bold">
                  {userDetails.email}
                </p>
              </div>

              {/* Reporting Manager */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Reporting Manager
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {userDetails.reportingManager}
                </p>
              </div>

              {/* Project Manager */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Project Manager
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {userDetails.projectManager || "N/A"}
                </p>
              </div>

              {/* Cut-Off Date */}
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Cut-Off Date
                </p>
                <p className="mt-2 text-blue-500 font-bold">
                  {formData.cutOff}
                </p>
              </div>
            </div>
          </div>
        )}



        {/* Project Information Section */}
        <div className="bg-gray-100 rounded-lg p-2">
          <h2 className="text-xl font-semibold mb-4">Work Information</h2>
          <div>
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {/* Work 1 Label and Project Name */}
                <div className="text-left">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`project${index + 1}`}
                  >
                    Work {index + 1}
                  </label>
                  <p
                    id={`project${index + 1}`}
                    className="mt-2 text-blue-500 font-semibold"
                  >
                    {project.project.projectName}
                  </p>
                </div>

                {/* Occupancy Input */}
                <div className="flex flex-col xs:flex-row md:flex-col xs:items-center md:items-start justify-evenly gap-2 ">
                  <label
                    className="block text-sm font-medium text-gray-700 xs:w-1/2 md:w-full"
                    htmlFor={`workPercentage${index + 1}`}
                  >
                    Occupancy (In %)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
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
                    className={`-mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300 ${project.error ? "border-red-500" : "border-gray-300"}`}
                  />
                </div>

                {/* Remarks Input */}
                <div className="flex flex-col xs:flex-row md:flex-col justify-evenly xs:items-center md:items-start gap-2 ">
                  <label
                    className="block text-sm font-medium text-gray-700 xs:w-1/2 md:w-full"
                    htmlFor={`remarks${index + 1}`}
                  >
                    Remarks
                  </label>
                  <input
                    type="text"
                    id={`remarks${index + 1}`}
                    value={project.remark}
                    onChange={(e) =>
                      handleProjectInputChange(index, "remark", e.target.value)
                    }
                    className="-mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  />
                </div>
              </div>
            ))}

            {formData.activities.map((activity, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Work Label and Activity */}
                <div className="text-left">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={`activity${index + 1}`}
                  >
                    Work {projects.length + index + 1}
                  </label>
                  <p
                    id={`activity${index + 1}`}
                    className="mt-2 text-blue-500 font-semibold"
                  >
                    {activity.activity}
                  </p>
                </div>

                {/* Occupancy Input */}
                <div className="flex flex-col xs:flex-row md:flex-col justify-evenly xs:items-center md:items-start gap-2 ">
                  <label
                    className="block text-sm font-medium text-gray-700 xs:w-1/2 md:w-full"
                    htmlFor={`workPercentage${formData.projects.length + index + 1}`}
                  >
                    Occupancy (In %)
                  </label>
                  <input
                    type="number"
                    id={`workPercentage${formData.projects.length + index + 1}`}
                    value={activity.workPercentage}
                    onChange={(e) =>
                      handleActivityInputChange(
                        index,
                        "workPercentage",
                        e.target.value
                      )
                    }
                    className="-mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  />
                </div>

                {/* Remarks Input */}
                <div className="flex flex-col xs:flex-row md:flex-col justify-evenly xs:items-center md:items-start gap-2 ">
                  <label
                    className="block text-sm font-medium text-gray-700 xs:w-1/2 md:w-full"
                    htmlFor={`remark${formData.projects.length + index + 1}`}
                  >
                    {activity.activity === "Sales Lead Investigation" ? (
                      <React.Fragment>
                        Remarks
                        <span style={{ color: "red" }}> *</span>
                      </React.Fragment>
                    ) : (
                      "Remarks"
                    )}
                  </label>
                  <input
                    type="text"
                    id={`remark${formData.projects.length + index + 1}`}
                    value={activity.remark}
                    onChange={(e) =>
                      handleActivityInputChange(index, "remark", e.target.value)
                    }
                    className="-mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Display error message */}
          {errorMessage && (
            <div className="text-red-500 font-semibold mb-4 text-center">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Display error messagem for sales lead investigation remarks */}
        {salesLeadError && (
          <div className="text-red-500 font-semibold mb-4 text-center">
            {salesLeadError}
          </div>
        )}
      </form>
    </div>
  );
};

export default EosUpdate;
