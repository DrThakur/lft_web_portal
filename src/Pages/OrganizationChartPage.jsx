import React from "react";
import OragnizationChart from "../Components/OragnizationChart";
import Tooltip from "@mui/material/Tooltip";
import { TabView, TabPanel } from "primereact/tabview";

const OrganizationChartPage = () => {
    const departments =["Board of Directors", "Management Team","Software Department","Hardware Department","FPGA Department", "QA Department", "Verification Department", "HR Department", "IT Department","S&M Department", "Finance Department","  Procurement Department"," Admin Department"]


  const handleOnClick = (click) => {
    console.log(click + " button is clicked");
  };

  return (
    <div className="bg-white h-full rounded-lg mt-2 p-4">
      <h1 className="text-2xl font-bold bg-purple-50 p-2 rounded-lg">Organization Chart</h1>
       {/*
      <div className="flex flex-row flex-wrap justify-start items-center gap-2 mt-2 p-2">
        <Tooltip title="Board Of Directors" placement="right" arrow>
          <button
            className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg shadow border "
            onClick={() => handleOnClick("first")}
          >
            BoD
          </button>
        </Tooltip>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg  shadow border"
          onClick={() => handleOnClick("second")}
        >
          Management Team
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("third")}
        >
          Software Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("4th")}
        >
          Hardware Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("5th")}
        >
          FPGA Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("6th")}
        >
          QA Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("7th")}
        >
          Verification Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("8th")}
        >
          HR Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("9th")}
        >
          IT Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("10th")}
        >
          S&M Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("11th")}
        >
          Finance Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("12th")}
        >
          Procurement Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border"
          onClick={() => handleOnClick("13th")}
        >
          Admin Department
        </button>
      </div>
       */}
 {/*
      <div className="flex flex-row flex-wrap justify-start items-center gap-2 mt-2 p-2">
        <Tooltip title="Board Of Directors" placement="right" arrow>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-semibold p-2 rounded-lg shadow border w-[220px] "
            onClick={() => handleOnClick("first")}
          >
            BoD
          </button>
        </Tooltip>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg  shadow border w-[220px]"
          onClick={() => handleOnClick("second")}
        >
          Management Team
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("third")}
        >
          Software Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("4th")}
        >
          Hardware Department{" "}
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("5th")}
        >
          FPGA Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("6th")}
        >
          QA Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("7th")}
        >
          Verification Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("8th")}
        >
          HR Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("9th")}
        >
          IT Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("10th")}
        >
          S&M Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("11th")}
        >
          Finance Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg  shadow border w-[220px]"
          onClick={() => handleOnClick("12th")}
        >
          Procurement Department
        </button>
        <button
          className=" hover:bg-blue-700 text-black hover:text-white font-semibold p-2 rounded-lg   shadow border w-[220px]"
          onClick={() => handleOnClick("13th")}
        >
          Admin Department
        </button>
      </div>
      */}
      <div className="p-2">
        <TabView scrollable>
          {departments.map((department, index) => {
            return (
              <TabPanel key={index} header={department}>
                <OragnizationChart tabTitle ={department}/>
              </TabPanel>
            );
          })}
        </TabView>
      </div>
    </div>
  );
};

export default OrganizationChartPage;
