
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "primereact/badge";

const AllOpeningJobs = () => {
  const navigate = useNavigate();

  const jobList = [
    {
      title: "R&D Engineer",
      description: "Work on cutting-edge research and development in electronics and embedded systems.",
      openings: 5,
    },
    {
      title: "Sr. Verification Engineer",
      description: "Responsible for the verification of ASIC/FPGA design modules.",
      openings: 1,
    },
    {
      title: "Data Scientist",
      description: "Analyze complex datasets to help drive decision-making across departments.",
      openings: 2,
    },
    {
      title: "Software Developer (Intern)",
      description: "Build and test web apps with modern JavaScript frameworks during your internship.",
      openings: 4,
    },
    {
      title: "FPGA Engineer",
      description: "Design and optimize FPGA-based systems for high-performance computing tasks.",
      openings: 1,
    },
  ];

  return (
    <div className="p-6 w-full bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-100 rounded-lg shadow-xl max-h-screen">
      {/* Header */}
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

      {/* Job List */}
      <div className="overflow-y-auto max-h-[calc(100vh-220px)] scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-200">
        <ul className="space-y-4">
          {jobList.map((job, index) => (
            <li
              key={index}
              className="hover:bg-teal-200 transition-all rounded-lg py-4 px-6 w-full text-sm sm:text-base lg:text-lg bg-white shadow-md hover:shadow-lg transform"
            >
              <div className="flex justify-between items-center">
                <Link to="/" className="text-gray-800 font-semibold hover:text-teal-600">
                  {job.title}
                </Link>
                <Badge value={job.openings} severity="danger" className="ml-4" />
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">
                {job.description}{" "}
                <span className="font-medium text-teal-700">
                  ({job.openings} {job.openings === 1 ? "opening" : "openings"})
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllOpeningJobs;
