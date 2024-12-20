// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Badge } from "primereact/badge";

// const JobVacancy = () => {
//   const navigate = useNavigate();
//   const handleViewAll = () => {
//     navigate("/test13");
//   };

//   return (
//     <div className="p-4 w-full h-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
//       <div>
//         {/* Heading for Job Openings */}
//         <h3 className="text-lg md:text-xl font-bold mb-2 bg-pink-200 py-2 px-3 rounded-lg">
//           Job Openings
//         </h3>
//          {/* List of Job Openings with Badge */}
//         <div className="max-h-64 overflow-auto  sm:overflow-y-hidden sm:hover:overflow-y-auto transition-all duration-300 [&::-webkit-scrollbar]:w-2
//   [&::-webkit-scrollbar-track]:rounded-full
//   [&::-webkit-scrollbar-thumb]:rounded-full
//   [&::-webkit-scrollbar-thumb]:bg-gray-300
//   dark:[&::-webkit-scrollbar-track]:bg-neutral-700
//   dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
//           <ul
//             className="flex flex-col justify-start items-start w-full space-y-1 sm:space-y-2 md:space-y-3"
//           >
//             <li className="hover:bg-green-200 rounded-lg py-1 px-2 w-full text-sm sm:text-base lg:text-lg">
//               <Link to="/">
//                 R&D Engineer <Badge value={5} severity="danger"></Badge>
//               </Link>
//             </li>
//             <li className="hover:bg-green-200 rounded-lg py-1 px-2  w-full text-sm sm:text-base lg:text-lg">
//               <Link to="/">
//                 Sr. Verification Engineer
//                 <Badge value={1} severity="danger"></Badge>
//               </Link>
//             </li>
//             <li className="hover:bg-green-200 rounded-lg py-1  px-2  w-full text-sm sm:text-base lg:text-lg">
//               <Link to="/">
//                 Data Scientist <Badge value={2} severity="danger"></Badge>
//               </Link>
//             </li>
//             <li className="hover:bg-green-200 rounded-lg py-1  px-2  w-full text-sm sm:text-base lg:text-lg">
//               <Link to="/">
//                 Software Developer(Inter){" "}
//                 <Badge value={4} severity="danger"></Badge>
//               </Link>
//             </li>
//             <li className="hover:bg-green-200 rounded-lg py-1  px-2  w-full text-sm sm:text-base lg:text-lg">
//               <Link to="/">
//                 FPGA Engineer <Badge value={1} severity="danger"></Badge>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="text-center mt-10">
//         <button
//           className="text-blue-500 hover:underline text-sm md:text-base"
//           onClick={handleViewAll}
//         >
//           View All
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobVacancy;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "primereact/badge";

const JobVacancy = () => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/test13");
  };

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      <div>
        {/* Heading for Job Openings */}
        <h3 className=" text-base sm:text-lg md:text-2xl font-bold mb-4 bg-pink-200 py-2 px-3 rounded-lg">
          Job Openings
        </h3>
        {/* List of Job Openings with Badge */}
        <div className="max-h-64 min-h-64 overflow-auto sm:overflow-y-hidden sm:hover:overflow-y-auto transition-all duration-300 
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
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
      <div className="text-center mt-4">
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
