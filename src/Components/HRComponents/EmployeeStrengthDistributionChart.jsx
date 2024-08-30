import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#FF6384", "#36A2EB"]; // Colors for GGN and BLR

const EmployeeStrengthDistributionChart = ({data}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-xl text-white max-h-96">
      <h2 className="text-2xl font-extrabold mb-4 text-center">Employee Strength Distribution</h2>
      <PieChart width={280} height={280} className="mx-auto">
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
          label
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
          wrapperStyle={{ paddingTop: "20px", color: "#fff" }}
        />
      </PieChart>
    </div>
  )
}

export default EmployeeStrengthDistributionChart
