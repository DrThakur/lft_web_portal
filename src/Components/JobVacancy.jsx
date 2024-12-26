import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "primereact/badge";

const JobVacancy = () => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/test13");
  };

      // Handle Screen Size Change
        const [screenSize, setScreenSize] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      const isWithinRange =(screenSize <=371) || (screenSize >= 766 && screenSize <= 854) || (screenSize >= 1536 && screenSize <= 1897);

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      <div>
        {/* Heading for Job Openings */}
        <h1 className={`${
          isWithinRange ? "py-1 min-h-20" : "py-2 min-h-10"
  } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-pink-200 px-3 rounded-lg`}>
          Job Openings
        </h1>
        {/* List of Job Openings with Badge */}
        <div className={`${
         screenSize <= 371 ? "py-0  min-h-16" : isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
        } overflow-auto sm:overflow-y-hidden sm:hover:overflow-y-auto transition-all duration-300 
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}>

          <ul className="flex flex-col justify-start items-start w-full space-y-3 sm:space-y-2 md:space-y-3">
            <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
              <Link to="/">
                R&D Engineer <Badge value={5} severity="danger"></Badge>
              </Link>
            </li>
            <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
              <Link to="/">
                Sr. Verification Engineer
                <Badge value={1} severity="danger"></Badge>
              </Link>
            </li>
            <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
              <Link to="/">
                Data Scientist <Badge value={2} severity="danger"></Badge>
              </Link>
            </li>
            <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
              <Link to="/">
                Software Developer(Inter){" "}
                <Badge value={4} severity="danger"></Badge>
              </Link>
            </li>
            <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
              <Link to="/">
                FPGA Engineer <Badge value={1} severity="danger"></Badge>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isWithinRange ? "mt-1" : "mt-4"} text-center`}>
        <button
          className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default JobVacancy;
