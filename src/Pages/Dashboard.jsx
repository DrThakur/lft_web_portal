import React from "react";
import { Header } from "../Components";
import HolidayCalendar from "../Components/HolidayCalender";
import AnnouncementList from "../Components/AnnouncementList";
import BirthdaysAndAnniversaries from "../Components/BirthdaysAndAnniversaries";

const Dashboard = () => {
  const holidays = [
    { day: 1, month: 1, name: "New Year's Day" }, // January 1st
    { day: 26, month: 1, name: "Australia Day" }, // January 26th
    { day: 14, month: 2, name: "Valentine's Day" }, // February 14th
    { day: 17, month: 3, name: "St. Patrick's Day" }, // March 17th
    { day: 10, month: 4, name: "Good Friday" }, // April 10th
    { day: 12, month: 4, name: "Easter Sunday" }, // April 12th
    { day: 25, month: 4, name: "Anzac Day" }, // April 25th
    { day: 25, month: 4, name: "Anzac Day" }, // April 25th
    { day: 25, month: 4, name: "Anzac Day" }, // April 25th
    { day: 25, month: 4, name: "Anzac Day" }, // April 25th
    { day: 25, month: 4, name: "Anzac Day" }, // April 25th
    // Add more holidays here
  ];

  return (
    <div className="h-screen bg-gray-400 rounded-lg p-2 mt-2">
      <Header title="Dashboard" />
      <div className="grid grid-cols-6 gap-2 bg-purple-400">
        {/* */}
        <div className="big col-start-1 col-end-6 grid grid-cols-5 grid-rows-4 gap-2">
          <div
            key=""
            className={`col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Total Employees
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>

          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                {/* <span className="text-4xl text-white">{category.icon}</span> */}
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
                  Attendance
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>

          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                {/* <span className="text-4xl text-white">{category.icon}</span> */}
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
                  Leave Requests
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>

          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                {/* <span className="text-4xl text-white">{category.icon}</span> */}
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
                  Job Applications
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>

          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
                  New Hire
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>

          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Check-In
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Check-In
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Check-In
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Check-In
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Check-In
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
          <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Check-In
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
        </div>

        <div className="small col-start-6 col-end-7 grid grid-cols-1 grid-rows-4 gap-4">
          <div
            key=""
            className={`w-72 row-start-1 flex flex-row justify-end row-end-2 rounded-lg shadow-md cursor-pointer bg-white -mb-2`}
          >
            <HolidayCalendar holidays={holidays} />
          </div>

          <div
            key=""
            className={`w-72 row-start-2 row-end-3 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-1 bg-white`}
          >
            <AnnouncementList />
          </div>
          <div
            key=""
            className={`w-72 row-start-3 row-end-4 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer bg-white`}
          >
            <BirthdaysAndAnniversaries/>
          </div>
          <div
            key=""
            className={`row-start-4 row-end-5 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                {/* <span className="text-4xl text-white">{category.icon}</span> */}
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
                  Leave Requests
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
