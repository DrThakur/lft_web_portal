import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from 'primereact/badge';

const JobVacancy = () => {

    const navigate = useNavigate();
    const handleViewAll = () => {
        navigate("/test13")
      }

  return (
    <div className="rounded p-2 w-full h-full">
    <div>
      <h3 className="text-lg font-bold mb-2 bg-pink-200 py-2 px-3 rounded-lg">Job Openings</h3>
      <div className="overflow-hidden">
      <ul className="flex flex-col justify-start items-start w-full" style={{ maxHeight: "137px", overflowY: "auto" }}>
      <li className="hover:bg-green-200 rounded-lg py-1 px-3 w-full"><Link to="/">R&D Engineer <Badge value={5} severity='danger'></Badge></Link></li>
      <li className="hover:bg-green-200 rounded-lg py-1 px-3 w-full"><Link to="/">Sr. Verification Engineer <Badge value={1} severity='danger'></Badge></Link></li>
      <li className="hover:bg-green-200 rounded-lg py-1 px-3 w-full"><Link to="/">Data Scientist <Badge value={2} severity='danger'></Badge></Link></li>
      <li className="hover:bg-green-200 rounded-lg py-1 px-3 w-full"><Link to="/">Software Developer(Inter) <Badge value={4} severity='danger'></Badge></Link></li>
      <li className="hover:bg-green-200 rounded-lg py-1 px-3 w-full"><Link to="/">FPGA Engineer <Badge value={1} severity='danger'></Badge></Link></li>
      </ul>
      </div>
      </div>
      <div className="text-center -mt-1">
      <button className="text-blue-500 hover:underline" onClick={handleViewAll}>
        View All
      </button>
    </div>
    </div>
  );
};

export default JobVacancy;
