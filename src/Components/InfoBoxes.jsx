import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const InfoBoxes = ({ title, bgColor }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [category, setCategory] = useState("");

  useEffect(() => {
    const data = {
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            "#48BB78", // green-500,
            "#4299E1", // blue-500
            // "#D97706", // yellow-500
          ],
          hoverBackgroundColor: [
            "#38A169", // green-400,
            "#3182CE", // blue-400
            // "#C05621", // yellow-400
          ],
        },
      ],
    };
    const options = {
      cutout: "60%",
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  const categories = ["Today", "1 Week", "1 Month", "1 Year", "Custom Dates"];

  return (
    <div
      key=""
      className={`rounded-lg shadow-md flex flex-row justify-center items-center cursor-pointer p-4 ${bgColor}`}
    >
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="flex flex-row justify-between items-center gap-6">
          <h3 className="text-white font-bold transition-all duration-300 ease-in-out">
            {title}
          </h3>
          <div className="text-[10px] rounded-md">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg w-full p-2 border border-gray-300 bg-blue-100"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-row justify-start items-center gap-4">
          <h2 className="text-4xl text-white font-bold">250</h2>
          <div className="card flex justify-content-end items-end ">
            <Chart
              type="doughnut"
              data={chartData}
              options={chartOptions}
              className="w-[100px] md:w-30rem"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 mt-2">
          <div className="flex flex-row justify-center items-center" key="">
            <h2 className="text-white text-sm">Male</h2>
            <span className="text-white text-sm mx-1">:</span>
            <h2 className="text-white text-sm">200</h2>
          </div>
          <div className="flex flex-row justify-center items-center" key="">
            <h2 className="text-white text-sm">Female</h2>
            <span className="text-white text-sm mx-1">:</span>
            <h2 className="text-white text-sm">50</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
