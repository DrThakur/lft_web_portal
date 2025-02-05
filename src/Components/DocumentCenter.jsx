import React, { useState, useEffect, useRef } from "react";
import {
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaFolder,
  FaEllipsisV,
  FaChevronRight,
  FaFile,
  FaShare,
  FaDownload,
  FaEdit,
  FaStar,
  FaList,
  FaTh,
  FaUpload,
  FaSearch,
} from "react-icons/fa";
import {
  MdOpenInNew,
  MdFileDownload,
  MdEdit as MdEditIcon,
  MdContentCopy,
  MdShare,
  MdFolderOpen,
  MdInfo,
  MdDelete,
} from "react-icons/md";
import UploadModal from "./UploadModal";
import { GrDocumentText } from "react-icons/gr";

const DocumentCenter = () => {
  const [files, setFiles] = useState([
    {
      name: "Document1.pdf",
      type: "pdf",
      createdAt: new Date("2024-06-27T09:30:00Z"),
      department: "HR",
      path: "/docs/Document1.pdf",
    },
    {
      name: "Folder1",
      type: "folder",
      createdAt: new Date("2024-06-26T14:45:00Z"),
      department: "Finance",
      path: "/docs/Folder1",
    },
    {
      name: "Document2.docx",
      type: "doc",
      createdAt: new Date("2024-06-25T16:20:00Z"),
      department: "IT",
      path: "/docs/Document2.docx",
    },
    {
      name: "Document3.pdf",
      type: "pdf",
      createdAt: new Date("2024-06-24T11:10:00Z"),
      department: "Marketing",
      path: "/docs/Document3.pdf",
    },
    {
      name: "Spreadsheet.xlsx",
      type: "excel",
      createdAt: new Date("2024-06-23T08:55:00Z"),
      department: "Sales",
      path: "/docs/Spreadsheet.xlsx",
    },
    {
      name: "Presentation.pptx",
      type: "ppt",
      createdAt: new Date("2024-06-22T13:25:00Z"),
      department: "R&D",
      path: "/docs/Presentation.pptx",
    },
  ]);
  const [isGridView, setIsGridView] = useState(true);
  const [isFileView, setIsFileView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUpload = (newFiles) => {
    setFiles([
      ...files,
      ...newFiles.map((file) => ({
        ...file,
        createdAt: new Date(),
        department: "Unknown",
        path: `/docs/${file.name}`,
      })),
    ]);
  };

  const renderIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-2xl" />;
      case "doc":
        return <FaFileWord className="text-blue-500 text-2xl" />;
      case "excel":
        return <FaFileExcel className="text-green-500 text-2xl" />;
      case "ppt":
        return <FaFilePowerpoint className="text-orange-500 text-2xl" />;
      case "folder":
        return <FaFolder className="text-yellow-500 text-2xl" />;
      default:
        return <FaFile className="text-gray-500 text-2xl" />;
    }
  };

  const renderMenu = (index) => (
    <div
      ref={menuRef}
      className="absolute right-0 mt-52 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
    >
      <div className="py-1">
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdOpenInNew className="mr-3 text-lg" />
          Open With
          <FaChevronRight className="ml-auto text-gray-500" />
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdFileDownload className="mr-3 text-lg" />
          Download
          
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdEditIcon className="mr-3 text-lg" />
          Rename
        
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdContentCopy className="mr-3 text-lg" />
          Make a copy
        
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdShare className="mr-3 text-lg" />
          Share
          <FaChevronRight className="ml-auto text-gray-500" />
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdFolderOpen className="mr-3 text-lg" />
          Organize
          <FaChevronRight className="ml-auto text-gray-500" />
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdInfo className="mr-3 text-lg" />
          File Information
          <FaChevronRight className="ml-auto text-gray-500" />
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100">
          <MdDelete className="mr-3 text-lg" />
          Move to Trash
        </button>
      </div>
    </div>
  );

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 2) {
      // More than 48 hours ago, show date and time
      return `${date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })} ${date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`;
    } else if (days > 1) {
      // More than 24 hours ago (but less than 48), show "yesterday"
      return "Yesterday";
    } else if (hours >= 12) {
      // More than 12 hours ago, show "today"
      return "Today";
    } else if (hours > 0) {
      // Between 1 and 12 hours ago, show hours ago
      return `${hours} ${hours > 1 ? "hours" : "hour"} ago`;
    } else if (minutes > 0) {
      // Less than an hour ago, show minutes ago
      return `${minutes} ${minutes > 1 ? "minutes" : "minute"} ago`;
    } else {
      // Less than a minute ago, show seconds ago
      return `${seconds} ${seconds > 1 ? "seconds" : "second"} ago`;
    }
  };
 
    const [containerHeight, setContainerHeight] = useState('55vh'); // Default is 55%
  
    const calculateHeight = () => {
      const height = window.innerHeight;
      const newHeightPercentage = Math.min(Math.floor(height / 100), 100); // Increase percentage with height
      setContainerHeight(`${newHeightPercentage}%`);
    };
  
    useEffect(() => {
      calculateHeight(); // Initial calculation
      window.addEventListener('resize', calculateHeight); // Recalculate on resize
  
      return () => {
        window.removeEventListener('resize', calculateHeight); // Clean up event listener
      };
    }, []);
    const [scrollHeight, setScrollHeight] = useState(220); // initial height for the scrollable container

  // Function to calculate the scrollable container height
  const calculateScrollHeight = () => {
    const windowHeight = window.innerHeight;
  const newScrollHeight = 220 + Math.floor((windowHeight - 600) / 1);
    setScrollHeight(newScrollHeight);
  };

  // Use effect to listen to window resize
  useEffect(() => {
    // Call on initial render
    calculateScrollHeight();

    // Add event listener to handle window resize
    window.addEventListener('resize', calculateScrollHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateScrollHeight);
    };
  }, []);
  return (
<div className="h-[calc(100vh-115px)] xs:h-[calc(100vh-106px)] w-full bg-gray-100 mb-2">
  <div className="w-full h-full mx-auto bg-white rounded-lg shadow-md p-6" >
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg py-1 xxss:p-2 " >
      <h1 className="text-lg xxss:text-2xl font-bold xxss:mb-4 sm:mb-0 py-2 xxss:py-0">Document Center</h1>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setIsFileView(false)}
          className={`flex items-center px-4 py-2 rounded-l-lg ${
            !isGridView
              ? "bg-yellow-500 text-white"
              : "bg-white text-yellow-500 hover:bg-gray-200"
          }`}
        >
          <GrDocumentText className="text-xl mr-2" />
        </button>
        <button
          onClick={() => setIsFileView(true)}
          className={`flex items-center px-4 py-2 rounded-r-lg mr-2 ${
            isGridView
              ? "bg-yellow-500 text-white"
              : "bg-white text-yellow-500 hover:bg-gray-200"
          }`}
        >
          <FaFolder className="text-xl mr-2" />
        </button>
        <button
          onClick={() => setIsGridView(false)}
          className={`flex items-center px-4 py-2 rounded-l-lg ${
            !isGridView
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 hover:bg-gray-200"
          }`}
        >
          <FaList className="text-xl mr-2" />
        </button>
        <button
          onClick={() => setIsGridView(true)}
          className={`flex items-center px-4 py-2 rounded-r-lg ${
            isGridView
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 hover:bg-gray-200"
          }`}
        >
          <FaTh className="text-xl mr-2" />
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex flex-row justify-start items-center gap-2"
        >
          <FaUpload className="text-xl mr-2" />
          Upload
        </button>
      </div>
    </div>

    <div className="relative w-full sm:w-3/4 mx-auto bg-white sm:p-6 flex flex-row justify-center items-center mt-4 sm:mt-6">
      {/* Search Icon */}
      <FaSearch className="text-gray-400 absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 text-xl" />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search files or folders..."
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
      />
    </div>

    <div className="overflow-y-auto mt-4 sm:mt-6 mb-2" style={{
    height: `${scrollHeight}px`, // Dynamically adjusted height based on window size
  }}> 
      {!isGridView ? (
        <div className="space-y-4 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <span className="font-bold">Name</span>
            <span className="font-bold">Last Modified</span>
            <span className="font-bold">Department</span>
            <span className="font-bold">Path</span>
            <span className="font-bold">Actions</span>
          </div>
          {files.map((file, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-center p-4  border rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex items-center gap-2 ">
                {renderIcon(file.type)}
                <span>{file.name}</span>
              </div>
              <span className="text-sm text-gray-500">{formatDate(file.createdAt)}</span>
              <span className="text-sm text-gray-500">{file.department}</span>
              <span className="text-sm text-gray-500">{file.path}</span>
              <div className="relative flex items-center gap-4">
                {activeMenu === index && renderMenu(index)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4  mb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative border rounded-lg bg-gray-50 h-48 flex flex-col items-center justify-center gap-2 hover:bg-gray-100"
            >
              <div className="absolute top-2 right-2">
                <button onClick={() => setActiveMenu(activeMenu === index ? null : index)}>
                  <FaEllipsisV className="text-gray-500 " />
                </button>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                {renderIcon(file.type)}
                <span>{file.name}</span>
              </div>
              <span className="text-sm text-gray-500 px-3">
                {file.type === "folder" ? (
                  <>
                    Created on: {formatDate(file.createdAt)}
                    <br />
                    Last modified: {formatDate(file.createdAt)}
                  </>
                ) : (
                  <>
                    Uploaded on: {formatDate(file.createdAt)}
                    <br />
                    Last modified: {formatDate(file.createdAt)}
                  </>
                )}
              </span>
              {activeMenu === index && renderMenu(index)}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

  <UploadModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    onUpload={handleUpload}
  />
</div>

  );
};

export default DocumentCenter;
