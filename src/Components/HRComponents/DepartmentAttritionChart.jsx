// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const DepartmentAttritionChart = ({ data }) => {
//   return (
//     <div className="p-4 bg-white shadow rounded-md">
//     <BarChart width={400} height={200} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Tooltip className="text-red"/>
//       <Bar dataKey="attrition" fill="#8884d8" />
//     </BarChart>
//     </div>
//   );
// };

// export default DepartmentAttritionChart;


import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const DepartmentAttritionChart = ({data}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 shadow-lg rounded-xl text-white max-h-96 min-h-96">
      <h2 className="text-2xl font-extrabold mb-4">Department-wise Attrition</h2>
      <div className="flex justify-center items-center w-full" >
      <BarChart
        width={280}
        height={270}
        data={data}
        className="transform hover:scale-105 transition duration-300"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.3)" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px",
            borderRadius: "8px",
            padding: "10px",
            color:"black"
          }}
          cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
        />
        <Bar dataKey="attrition" fill="#201ae8" />
      </BarChart>
      </div>
    </div>
  )
}

export default DepartmentAttritionChart
