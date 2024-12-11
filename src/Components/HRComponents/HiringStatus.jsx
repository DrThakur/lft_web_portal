// import React from 'react'

// const HiringStatus = ({ data }) => {
//   return (
//     <div className="p-4 bg-white shadow rounded-md">
//     <h2 className="text-xl font-bold">Hiring Status</h2>
//     <ul>
//       <li>Total Requests: {data.totalRequests}</li>
//       <li>Pending: {data.pending}</li>
//       <li>In Progress: {data.inProgress}</li>
//       <li>Closed: {data.closed}</li>
//     </ul>
//   </div>
//   )
// }

// export default HiringStatus

import React, { useState, useRef, useEffect } from 'react'
const HiringStatus = ({ data }) => {

  const [isTouched, setIsTouched] = useState(false);
  const scrollContainerRef = useRef(null);

  // Timer to hide the scrollbar after a period of inactivity (e.g., 2 seconds)
  const hideScrollbarTimeout = useRef(null);

  // Function to handle touch or scroll event
  const handleInteraction = () => {
    if (!isTouched) {
      setIsTouched(true);
    }

    // Clear the previous timeout and start a new one to hide the scrollbar
    if (hideScrollbarTimeout.current) {
      clearTimeout(hideScrollbarTimeout.current);
    }

    // Set timeout to hide the scrollbar after 2 seconds of inactivity
    hideScrollbarTimeout.current = setTimeout(() => {
      setIsTouched(false);
    }, 2000); // 2000 ms = 2 seconds
  };

  const handleTouchEnd = () => {
    setIsTouched(false); // Hide scrollbar when touch ends
    if (hideScrollbarTimeout.current) {
      clearTimeout(hideScrollbarTimeout.current);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup the timeout when the component unmounts
      if (hideScrollbarTimeout.current) {
        clearTimeout(hideScrollbarTimeout.current);
      }
    };
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg rounded-lg max-h-96 min-h-96">
      <h2 className="text-2xl font-extrabold mb-4">Hiring Status</h2>

      <ul
        ref={scrollContainerRef}
        className={`space-y-3 overflow-y-hidden max-h-72 transition-all duration-300
           ${isTouched ? 'overflow-y-auto' : 'overflow-y-hidden'}
           hover:overflow-y-auto
           [&::-webkit-scrollbar]:w-2 
           [&::-webkit-scrollbar-track]:rounded-full 
           [&::-webkit-scrollbar-thumb]:rounded-full 
           [&::-webkit-scrollbar-thumb]:bg-white 
           dark:[&::-webkit-scrollbar-track]:bg-neutral-700 
           dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
         onTouchStart={handleInteraction}   // Trigger interaction on touch start
         onTouchEnd={handleTouchEnd}        // Trigger interaction end on touch
      >

        <li className="flex justify-between items-center bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300 text-lg">
          <span>Total Requests:</span>
          <span className="font-bold">{data.totalRequests}</span>
        </li>
        <li className="flex justify-between items-center bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300 text-lg">
          <span>Pending:</span>
          <span className="font-bold">{data.pending}</span>
        </li>
        <li className="flex justify-between items-center bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300 text-lg">
          <span>In Progress:</span>
          <span className="font-bold">{data.inProgress}</span>
        </li>
        <li className="flex justify-between items-center bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300 text-lg">
          <span>Closed:</span>
          <span className="font-bold">{data.closed}</span>
        </li>
      </ul>
    </div>
  )
}

export default HiringStatus
