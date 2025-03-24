import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "primereact/badge";
import { useNavigate } from "react-router-dom";

const AllOpeningJobs = () => {
    const navigate = useNavigate();
  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-screen">
      {/* Heading for Job Openings */}
      <h1 className="py-2 min-h-10 flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-pink-200 px-3 rounded-lg">
        All Job Openings
      </h1>

      {/* List of All Job Openings with Badge */}
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <ul className="flex flex-col justify-start items-start w-full space-y-3 sm:space-y-2 md:space-y-3">
          <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
            <Link to="/">R&D Engineer <Badge value={5} severity="danger"></Badge></Link>
          </li>
          <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
            <Link to="/">Sr. Verification Engineer <Badge value={1} severity="danger"></Badge></Link>
          </li>
          <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
            <Link to="/">Data Scientist <Badge value={2} severity="danger"></Badge></Link>
          </li>
          <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
            <Link to="/">Software Developer(Inter) <Badge value={4} severity="danger"></Badge></Link>
          </li>
          <li className="hover:bg-green-200 rounded-lg py-2 px-4 w-full text-sm sm:text-base lg:text-lg">
            <Link to="/">FPGA Engineer <Badge value={1} severity="danger"></Badge></Link>
          </li>
        </ul>
      </div>
      {/* Back Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllOpeningJobs;
