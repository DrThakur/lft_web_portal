// import React from 'react'

// const HREvents = ({ data }) => {
//   return (
//     <div className="p-4 bg-white shadow rounded-md">
//     <h2 className="text-xl font-bold">Events</h2>
//     <h3>This Week</h3>
//     <ul>
//       {data.thisWeek.map((event, index) => (
//         <li key={index}>{event}</li>
//       ))}
//     </ul>
//     <h3>This Month</h3>
//     <ul>
//       {data.thisMonth.map((event, index) => (
//         <li key={index}>{event}</li>
//       ))}
//     </ul>
//   </div>
//   )
// }

// export default HREvents



import React from 'react'

const HREvents = ({data}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg rounded-lg max-h-96">
      <h2 className="text-2xl font-extrabold mb-4">Events</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">This Week</h3>
        <ul className="space-y-1">
          {data.thisWeek.map((event, index) => (
            <li 
              key={index} 
              className="bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300"
            >
              {event}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">This Month</h3>
        <ul className="space-y-1">
          {data.thisMonth.map((event, index) => (
            <li 
              key={index} 
              className="bg-white bg-opacity-10 rounded-md p-3 shadow-md hover:bg-opacity-20 transition duration-300"
            >
              {event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HREvents

