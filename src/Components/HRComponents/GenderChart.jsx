// import React from "react";
// import { PieChart, Pie, Cell } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const GenderChart = ({ data }) => {
//   return (
//     <div className="p-4 bg-white shadow rounded-md">
//       <PieChart width={200} height={200}>
//         <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8" label>
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default GenderChart;

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const GenderChart = ({ data }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 shadow-lg rounded-xl text-white max-h-96 min-h-96">
      <h2 className="text-2xl font-extrabold mb-4">
        Gender Distribution
      </h2>
      <div className="flex justify-center items-center w-full" >
        <PieChart width={300} height={300} className="mx-auto">
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            innerRadius={60}
            fill="#8884d8"
            label
            className="transform hover:scale-105 transition duration-300"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              color: "#333",
            }}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={10}
            layout="horizontal"
            wrapperStyle={{
              position: "absolute",   // Absolute positioning within the parent container
              bottom: "15px",         // Adjust to move the legend higher or lower
              left: "40%",            // Center horizontally within the container
              transform: "translateX(-50%)", // To center the Legend exactly
              color: "#fff",
              padding: "10px",
            }}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default GenderChart;

