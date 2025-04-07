import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "primereact/badge";
import { useNavigate } from "react-router-dom";

const AllOpeningJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 w-full bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-100 rounded-lg shadow-xl max-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 bg-indigo-200 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">
          All Job Openings
        </h1>
        <div className="text-center mt-4 sm:mt-0">
          <button
            onClick={() => navigate(-1)}
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Job Openings List */}
      <div className="overflow-y-auto max-h-[calc(100vh-220px)] scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-200">
        <ul className="space-y-4">
          {/* Job Card Item */}
          <li className="hover:bg-teal-200 transition-all rounded-lg py-4 px-6 w-full text-sm sm:text-base lg:text-lg flex justify-between items-center bg-white shadow-md hover:shadow-lg transform ">
            <Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">
              R&D Engineer
            </Link>
            <Badge value={5} severity="danger" className="ml-4" />
          </li>
          <li className="hover:bg-teal-200 transition-all rounded-lg py-4 px-6 w-full text-sm sm:text-base lg:text-lg flex justify-between items-center bg-white shadow-md hover:shadow-lg transform ">
            <Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">
              Sr. Verification Engineer
            </Link>
            <Badge value={1} severity="danger" className="ml-4" />
          </li>
          <li className="hover:bg-teal-200 transition-all rounded-lg py-4 px-6 w-full text-sm sm:text-base lg:text-lg flex justify-between items-center bg-white shadow-md hover:shadow-lg transform">
            <Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">
              Data Scientist
            </Link>
            <Badge value={2} severity="danger" className="ml-4" />
          </li>
          <li className="hover:bg-teal-200 transition-all rounded-lg py-4 px-6 w-full text-sm sm:text-base lg:text-lg flex justify-between items-center bg-white shadow-md hover:shadow-lg transform ">
            <Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">
              Software Developer (Intern)
            </Link>
            <Badge value={4} severity="danger" className="ml-4" />
          </li>
          <li className="hover:bg-teal-200 transition-all rounded-lg py-4 px-6 w-full text-sm sm:text-base lg:text-lg flex justify-between items-center bg-white shadow-md hover:shadow-lg transform ">
            <Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">
              FPGA Engineer
            </Link>
            <Badge value={1} severity="danger" className="ml-4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllOpeningJobs;
