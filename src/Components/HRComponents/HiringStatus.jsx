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

import React from 'react'

const HiringStatus = ({data}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg rounded-lg max-h-96">
    <h2 className="text-2xl font-extrabold mb-4">Hiring Status</h2>
    <ul className="space-y-3">
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
