import React, { useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { TabView, TabPanel } from "primereact/tabview";
import { Timeline } from "primereact/timeline";
import ProjectCarousel from "../Components/ProjectCarousel";
import axios from "axios";
import { useStateContext } from "../Contexts/ContextProvider";
import { format } from "date-fns";
import MySkills from "../Components/MySkills";

const UserProfilePage = () => {
  const [resume, setResume] = useState(null);
  const [users, setUsers] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const uploadInputRef = useRef(null);

  const { user } = useStateContext();

  const apiUrl = process.env.REACT_APP_API_URL;


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${user._id}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    if (user && user._id) {
      fetchUserDetails();
    }
  }, [user, apiUrl]);

  if (!userDetails) return <div>Loading...</div>;

  console.log("My user---1122", user);

  const handleEditClick = () => {
    // Programmatically click the hidden file input element
    uploadInputRef.current.click();
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    // Upload file to backend (you'll need to implement this)
    // After successful upload, update the state to the new resume
    setResume(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the file upload here
  };

  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd-MMM-yyyy");
  };


  // console.log("baseUrl", baseURL);
  // console.log("port", port);

  // useEffect(() => {
  //   const fetchUserInformation = async () => {
  //     try {
  //       // const res = await axios.get(`http://${baseURL}:${port}/users`);
  //       const res = await axios.get(`https://lft-web-portal-backend.onrender.com/users`);
  //       console.log("response data", res.data);
  //      setUsers(res.data);
  //     } catch (error) {
  //       console.error("Error", error);
  //     }
  //   }

  // fetchUserInformation();
  // })

  const events = [
    {
      institutionName: "N/A",
      courseName: "N/A",
      duration: "N/A",
      date: "N/A",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      institutionName: "N/A",
      courseName: "N/A",
      duration: "N/A",
      date: "N/A",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      institutionName: "N/A",
      courseName: "N/A",
      duration: "N/A",
      date: "N/A",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
  ];
  // const events = [
  //   {
  //     institutionName: "ABC University",
  //     courseName: "B.Tech(CSE)",
  //     duration: "2013-2017",
  //     date: "15/10/2020 10:30",
  //     icon: "pi pi-shopping-cart",
  //     color: "#9C27B0",
  //     image: "game-controller.jpg",
  //   },
  //   {
  //     institutionName: "XYZ School",
  //     courseName: "12th CBSE(Science Stream)",
  //     duration: "2011-2012",
  //     date: "15/10/2020 14:00",
  //     icon: "pi pi-cog",
  //     color: "#673AB7",
  //   },
  //   {
  //     institutionName: "ABC School",
  //     courseName: "10th CBSE(General)",
  //     duration: "2009-2010",
  //     date: "15/10/2020 16:15",
  //     icon: "pi pi-shopping-cart",
  //     color: "#FF9800",
  //   },
  // ];
  const experienceEvents = [
    {
      designation: "N/A",
      companyName: "N/A",
      joiningDate: "N/A",
      leavingDate: "N/A",
      date: "N/A",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      designation: "N/A",
      companyName: "N/A",
      joiningDate: "N/A",
      leavingDate: "N/A",
      date: "N/A",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      designation: "N/A",
      companyName: "N/A",
      joiningDate: "N/A",
      leavingDate: "N/A",
      date: "N/A",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
  ];
  // const experienceEvents = [
  //   {
  //     designation: "Senior Software Engineer",
  //     companyName: "XYZ Pvt. Ltd",
  //     joiningDate: "Sep 2023",
  //     leavingDate: "Present",
  //     date: "15/10/2020 10:30",
  //     icon: "pi pi-shopping-cart",
  //     color: "#9C27B0",
  //     image: "game-controller.jpg",
  //   },
  //   {
  //     designation: "Software Engineer",
  //     companyName: "ABC Pvt. Ltd",
  //     joiningDate: "July 2022",
  //     leavingDate: "Aug 2023",
  //     date: "15/10/2020 14:00",
  //     icon: "pi pi-cog",
  //     color: "#673AB7",
  //   },
  //   {
  //     designation: "Frontend Developer",
  //     companyName: "DEF Pvt Ltd",
  //     joiningDate: "Dec 2020",
  //     leavingDate: "July 2023",
  //     date: "15/10/2020 16:15",
  //     icon: "pi pi-shopping-cart",
  //     color: "#FF9800",
  //   },
  // ];

  const customizedContent = (item) => {
    return (
      <div className="flex flex-col justify-start items-start mb-2 -mt-1">
        <h3 className="font-bold text-base">{item.institutionName}</h3>
        <p className="text-gray-400 font-medium">{item.courseName}</p>
        <p className="text-gray-400 font-light">{item.duration}</p>
      </div>
    );
  };
  const customizedContentExperience = (item) => {
    return (
      <div className="flex flex-col justify-start items-start mb-2 -mt-1">
        <div className="flex flex-row justify-start items-center gap-2">
          <h3 className="font-bold text-base">{item.designation}</h3>
          <span className="text-black font-bold">at</span>
          <h3 className="font-bold text-base">{item.companyName}</h3>
        </div>
        <p className="text-gray-400 font-medium">
          {item.joiningDate}- {item.leavingDate} (2 Years 5 Momnths)
        </p>
      </div>
    );
  };

  const initialSkills = userDetails.techSkills;

  return (
    <div className="bg-white p-2 h-full w-full mt-2 overflow-y-auto border rounded-lg shadow-lg ">
      <h1 className="text-xl font-bold">My Profile</h1>

      <div className="main Container flex flex-col">
        {/* Profile Section */}
        <div className="container1 flex flex-col lg:flex-row border rounded-lg shadow-md p-4 mt-4 mb-4 gap-4 ">

          <div className="subContainer1 flex flex-col items-center w-full lg:w-1/2">
            <div className="flex flex-col xs:flex-row items-center md:items-start gap-8">
              {/* Image */}
              <div className="flex flex-col items-center text-center relative">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt="userImage"
                  width={220}
                  height={220}
                  className="rounded-full"
                />
                <button className="absolute top-0 lg:-top-2 xl:top-2 right-12 transform translate-x-1/2 translate-y-1/2 bg-gray-100 text-blue-500 rounded-full p-2 shadow-lg hover:bg-blue-500 hover:text-white z-50">
                  <label htmlFor="file-upload">
                    <MdModeEdit />
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </button>
              </div>

              {/* Profile Values */}
              <div className="profileValue flex flex-col justify-start md:justify-between items-start -mt-10 xs:mt-0 gap-1 col-span-1">
                <p className="text-xl font-bold py-1 w-full">
                  {user.fullName || "Ankit Kumar Thakur"}
                </p>
                <p className="text-gray-400 py-1">
                  {user.designation || "R&D Engineer"}
                </p>
                <p className="text-gray-400 py-1">
                  {user.location || "Gurgaon"}
                </p>
                <p className="text-gray-400 py-1">
                  {user.department || "Software Department"}
                </p>
                <p className="font-medium py-1">
                  Employee Id: {user.employeeId || "N/A"}
                </p>
                <p className="font-medium py-1">
                  Date of Join:{" "}
                  {user.dateOfJoining ? formatDate(user.dateOfJoining) : "N/A"}
                </p>
              </div>
            </div>

            <div className="buttons flex flex-col sm:flex-row justify-center items-center gap-4 mt-2 w-full">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto h-14 p-2 px-6 bg-blue-500 hover:bg-blue-700 text-white rounded shadow">
                <BsFillSendFill />
                Send Message
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto h-14 p-2 px-6 bg-red-300 hover:bg-red-500 text-white rounded shadow">
                Reset Password
              </button>
              <button className="flex items-center justify-center w-full sm:w-auto h-14 p-2 px-6 bg-yellow-300 hover:bg-yellow-500 text-white font-medium rounded shadow">
                Send Reset Password Link
              </button>
            </div>
          </div>


          {/* Divider for Layout */}
          <div className="subContainer2 border-b-2 border-gray-300 lg:border-r-2 lg:border-gray-300 lg:h-1-2 md:mr-16"></div>


          {/*Other Profile Details*/}
          <div className="subContainer3 col-span-1 md:col-span-2 lg:col-span-1 w-full lg:w-1/2 overflow-x-auto relative">
            <table className="min-w-full table-auto">
              <tbody>
                <tr>
                  <td className="font-bold px-2 w-1/4">Phone&nbsp;</td>
                  <td className="px-2">:</td>
                  <td className="px-2">&nbsp; &nbsp; </td>
                  <td className="px-2 w-3/4">{user.phoneNumber || "7011711442"}</td>
                </tr>
                <tr>
                  <td className="font-bold px-2">Email&nbsp; </td>
                  <td className="px-2">:</td>
                  <td className="px-2">&nbsp; &nbsp; </td>
                  <td className="px-2">{user.email || "ankit.thakur@logic-fruit.com"}</td>
                </tr>
                <tr>
                  <td className="font-bold px-2">Birthday&nbsp;</td>
                  <td className="px-2">:</td>
                  <td className="px-2">&nbsp; &nbsp; </td>
                  <td className="px-2">{user.dateOfBirth ? formatDate(user.dateOfBirth) : "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-bold px-2">Address&nbsp;</td>
                  <td className="px-2">: </td>
                  <td className="px-2"> &nbsp; &nbsp; </td>
                  <td className="px-2">{user.permanentAddress || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-bold px-2">Gender&nbsp;</td>
                  <td className="px-2">:</td>
                  <td className="px-2">&nbsp; &nbsp; </td>
                  <td className="px-2">{user.gender || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-bold px-2">Reports to&nbsp;</td>
                  <td className="px-2">:</td>
                  <td className="px-2">&nbsp; &nbsp; </td>
                  <td className="px-2">
                    <span className="flex flex-row items-center justify-start">
                      <img
                        alt="reportsTo"
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                        width="40"
                        height="40"
                      />
                      <a href="/" className="ml-2 text-blue-500 hover:text-blue-900">
                        {user.reportingManager}
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Edit Button */}
            <div className="absolute top-1 -right-14 xs:right-6 sm:top-4  sm:right-6 md:right-6 lg:right-6">
              <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2">
                <MdModeEdit />
              </button>
            </div>

          </div>
        </div>

        <div className="container2">
          <TabView>
            <TabPanel header="Profile">
              <div className="resume border rounded shadow-lg p-2 sm:p-6 w-full mx-auto mb-4 flex flex-row justify-between items-center  ">
                {resume ? (
                  <span className="font-bold text-xl ml-5 text-blue-500">
                    {resume.name}
                  </span>
                ) : (
                  <span className="font-bold text-xl ml-5">Upload Resume</span>
                )}
                <div className="editButton">
                  <input
                    ref={uploadInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleUpload}
                    style={{ display: "none" }} // Hide the input visually
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload"></label>
                  <button
                    className="hover:text-blue-500 bg-gray-200 rounded-full p-2 sm:mr-5 ml-2"
                    onClick={handleEditClick}
                  >
                    <MdModeEdit />
                  </button>
                </div>
              </div>
              <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="profile1 personalInformation border shadow-lg rounded  p-4 sm:px-8 min-h-96 max-h-96">
                  <div className="tableInformation">
                    <div className="flex flex-row justify-between items-start ">
                      <h3 className="font-bold text-xl">Personal Information</h3>
                      <div className="editButton">
                        <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2 ">
                          <MdModeEdit />
                        </button>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="mt-2 ">

                        {/* 
                      <tr>
                        <td className="font-semibold px-2 py-2">
                          Aadhar Number
                        </td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">Voter Id</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">PAN No.</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                       */}
                        <tr>
                          <td className="font-semibold px-2 py-2">Nationality</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Religion</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Marital Status</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Employed Spouse</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">No. of Children</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="profile2 emergencyContact border shadow-lg rounded p-4 sm:px-8 min-h-96 max-h-96">
                  <div className="emergencyInformation">
                    <div className="flex flex-row justify-between items-start">
                      <h3 className="font-bold text-xl">Emergency Contact</h3>
                      <div className="editButton">
                        <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2 ">
                          <MdModeEdit />
                        </button>
                      </div>
                    </div>
                    <div className="primary mt-2 overflow-x-auto">
                      <h4 className="font-medium text-blue-500">Primary</h4>
                      <table>
                        <tr>
                          <td className="font-semibold px-2 py-2">Name</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Relationship</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Phone</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                      </table>
                    </div>

                    <hr className="border-gray-300 mt-2 mb-2" />
                    <div className="secondary overflow-x-auto">
                      <h4 className="font-medium text-blue-500">Secondary</h4>
                      <table>
                        <tr>
                          <td className="font-semibold px-2 py-2">Name</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Relationship</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                        <tr>
                          <td className="font-semibold px-2 py-2">Phone</td>
                          <td className="px-2 py-2">:</td>
                          <td className="px-2 py-2">&nbsp;</td>
                          <td className="px-2 py-2">{"N/A"}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bankandepfo grid grid-cols-2 gap-4 mt-4 -ml-5">
                <div className="bank border shadow-lg rounded p-4 px-8">
                  <div className="bankInforation">
                    <div className="flex flex-row justify-between items-start">
                      <h3 className="font-bold text-xl">Bank Information</h3>
                      <div className="editButton">
                        <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2 ">
                          <MdModeEdit />
                        </button>
                      </div>
                    </div>
                    <table className="mt-2">
                      <tr>
                        <td className="font-semibold px-2 py-2">Bank Name</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">Branch</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">Account No.</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">IFSC Code</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">
                          Account Holder Name
                        </td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="epfo border shadow-lg rounded p-4 px-8">
                  <div className="emfoInforation">
                    <div className="flex flex-row justify-between items-start">
                      <h3 className="font-bold text-xl">EPFO Information</h3>
                      <div className="editButton">
                        <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2 ">
                          <MdModeEdit />
                        </button>
                      </div>
                    </div>
                    <table className="mt-2">
                      <tr>
                        <td className="font-semibold px-2 py-2">UAN No.</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">Member Id:</td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold px-2 py-2">
                          Account Holder Name
                        </td>
                        <td className="px-2 py-2">:</td>
                        <td className="px-2 py-2">&nbsp;</td>
                        <td className="px-2 py-2">{"N/A"}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
               */}

              <div className="educationexperience flex flex-col sm:flex-row gap-4 mt-4 w-full mx-auto">
                <div className="education border shadow-lg rounded p-4 sm:px-8 flex-1 min-h-96 max-h-96">
                  <div className="educationInformation flex flex-col">
                    <div className="flex flex-row justify-between items-start">
                      <h3 className="font-bold text-xl">Education Information</h3>
                      <div className="editButton">
                        <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2 ">
                          <MdModeEdit />
                        </button>
                      </div>
                    </div>
                    <div className="educationTimeline -ml-40 xs:-ml-[345px] sm:-ml-[164px] md:-ml-[235px] lg:-ml-[350px] xl:-ml-[490px] 2xl:-ml-[610px] mt-4 ">
                      <Timeline value={events} content={customizedContent}  />
                    </div>
                  </div>
                </div>

                <div className="experience border shadow-lg rounded p-4 sm:px-8 flex-1 min-h-96 max-h-96">
                  <div className="experienceInformation flex flex-col ">
                    <div className="flex flex-row justify-between items-start">
                      <h3 className="font-bold text-xl">Experience</h3>
                      <div className="editButton">
                        <button className="hover:text-blue-500 bg-gray-200 rounded-full p-2 ">
                          <MdModeEdit />
                        </button>
                      </div>
                    </div>
                    <div className="educationTimeline -ml-40 xs:-ml-[345px] sm:-ml-[164px] md:-ml-[235px] lg:-ml-[350px] xl:-ml-[490px] 2xl:-ml-[610px] mt-4">
                      <Timeline
                        value={experienceEvents}
                        content={customizedContentExperience}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </TabPanel>
            <TabPanel header="My Skills">
              <div className="-mt-10 -ml-5">
                <MySkills initialSkills={initialSkills} userId={user._id} />
              </div>
            </TabPanel>
            <TabPanel header="My Projects">
              <div className="-mt-10 -ml-5">
                <ProjectCarousel title="On Going Projects" userDetails={userDetails} />
              </div>
            </TabPanel>
            {/*   <TabPanel header="Bank & Statuatory(Admin Only)">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
            <TabPanel header="Assets">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
            <TabPanel header="Accessories">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
            <TabPanel header="Licences">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
            <TabPanel header="Consumables">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
             */}
          </TabView>
        </div>

        <div className="conatiner3"></div>
      </div>
    </div>
  );
};

export default UserProfilePage;
