// import React from "react";

// const HRTickets = ({ data }) => {
//   return (
//     <div className="p-4 bg-white shadow rounded-md">
//       <h2 className="text-xl font-bold">HR Tickets</h2>
//       <ul>
//         <li>Pending: {data.pending}</li>
//         <li>Closed This Month: {data.closedThisMonth}</li>
//       </ul>
//     </div>
//   );
// };

// export default HRTickets;

import React from 'react'

const HRTickets = ({data}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-teal-200 to-green-300 text-white shadow-lg rounded-lg max-h-96">
      <h2 className="text-2xl font-extrabold mb-4">HR Tickets</h2>
      <ul className="space-y-3">
        <li className="flex justify-between items-center bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300 text-lg">
          <span>Pending:</span>
          <span className="font-bold">{data.pending}</span>
        </li>
        <li className="flex justify-between items-center bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300 text-lg">
          <span>Closed This Month:</span>
          <span className="font-bold">{data.closedThisMonth}</span>
        </li>
      </ul>
    </div>
  )
}

export default HRTickets
