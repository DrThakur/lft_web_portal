import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuickAccess = () => {
  // State for screen size
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if screen size is within a specific range
  const isWithinRange =
    (screenSize <=371) ||
    (screenSize >= 766 && screenSize <= 854) ||
    (screenSize >= 1536 && screenSize <= 1897);

  // Links for quick access
  const quickAccessLinks = [
    { label: "Reimbursement Form", to: "/reimbursement-form" },
    { label: "HR Documents", to: "/hr-documents" },
    { label: "IT Documents", to: "/it-documents" },
    { label: "IT Statement", to: "/it-statement" },
    { label: "Salary Slip", to: "/salary-slip" },
  ];

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      <h1
  className={`${
    screenSize <= 371 ? "py-0  min-h-16" : isWithinRange ? "py-1 min-h-20" : "py-2 min-h-10"
  } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-yellow-100 px-3 rounded-lg`}
>
  Quick Access
</h1>

      {/* Quick Access List */}
      <ul
        className={`${
          isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
        } flex flex-col justify-start items-start w-full space-y-3 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
      >
        {quickAccessLinks.map(({ label, to }, index) => (
          <li key={index} className="w-full">
            <Link
              to={to}
              className="block py-2 px-4 w-full text-left rounded-lg hover:bg-blue-200 hover:text-red-700 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickAccess;
