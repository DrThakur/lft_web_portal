// import React from 'react'

// const EmployeePIPNotice = ({data}) => {
//   return (
//     <div className="p-4 bg-white shadow rounded-md">
//     <h2 className="text-xl font-bold">Employees on PIP/Notice</h2>
//     <h3>PIP/Notice</h3>
//     <ul>
//       {data.pipNotice.map((emp, index) => (
//         <li key={index}>{emp.name} - {emp.status}</li>
//       ))}
//     </ul>
//     <h3>Resigned</h3>
//     <ul>
//       {data.resigned.map((emp, index) => (
//         <li key={index}>{emp.name} - LWD: {emp.lwd}</li>
//       ))}
//     </ul>
//     <h3>New Joinings</h3>
//     <ul>
//       {data.newJoinings.map((emp, index) => (
//         <li key={index}>{emp.name} - Joining Date: {emp.joiningDate}</li>
//       ))}
//     </ul>
//   </div>
//   )
// }

// export default EmployeePIPNotice


import React,{ useState, useRef, useEffect } from 'react'

const EmployeePIPNotice = ({data}) => {
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
    <div className="p-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-white shadow-xl rounded-xl max-h-96 min-h-96">
      <h2 className="text-2xl font-extrabold mb-6">PIP/Notice</h2>
      
      <div
        ref={scrollContainerRef}
        className={`overflow-y-hidden max-h-64 transition-all duration-300
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
        
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 border-b-2 border-white pb-1 overflow-y-auto">PIP/Notice</h3>
        <ul className="space-y-3">
          {data.pipNotice.map((emp, index) => (
            <li 
              key={index} 
              className="bg-white bg-opacity-20 rounded-md p-3 shadow-md hover:bg-opacity-30 transition duration-300"
            >
              <span className="font-semibold">{emp.name}</span> - {emp.status}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 border-b-2 border-white pb-1">Resigned</h3>
        <ul className="space-y-3">
          {data.resigned.map((emp, index) => (
            <li 
              key={index} 
              className="bg-white bg-opacity-20 rounded-md p-3 shadow-md hover:bg-opacity-30 transition duration-300"
            >
              <span className="font-semibold">{emp.name}</span> - LWD: {emp.lwd}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 border-b-2 border-white pb-1">New Joinings</h3>
        <ul className="space-y-3">
          {data.newJoinings.map((emp, index) => (
            <li 
              key={index} 
              className="bg-white bg-opacity-20 rounded-md p-3 shadow-md hover:bg-opacity-30 transition duration-300"
            >
              <span className="font-semibold">{emp.name}</span> - Joining Date: {emp.joiningDate}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default EmployeePIPNotice
