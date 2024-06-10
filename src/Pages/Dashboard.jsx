import React from "react";
import { Header } from "../Components";
import HolidayCalendar from "../Components/HolidayCalender";
import AnnouncementList from "../Components/AnnouncementList";
import BirthdaysAndAnniversaries from "../Components/BirthdaysAndAnniversaries";
import QuickAccess from "../Components/QuickAccess";
import JobVacancy from "../Components/JobVacancy";
import AwardsRecognition from "../Components/AwardsRecognition";
import NewHire from "../Components/NewHire";
import WelcomeCard from "../Components/WelcomeCard";

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
    <div className="h-screen w-full overflow-hidden rounded-lg p-2 mt-1">
      <Header title="Dashboard" />

        {/* */}
        <div className="big h-screen grid grid-cols-6 grid-rows-4 gap-2 -mt-8">
          <div
            key=""
            className={`col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white`}
          >
            <WelcomeCard/>
          </div>
          <div
            key=""
            className={`col-start-2 col-end-3 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white`}
          >
            <QuickAccess />
          </div>

          <div
            key=""
            className={`w-72 col-start-3 col-end-4 row-start-1 row-end-2 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer bg-white`}
          >
            <JobVacancy />
          </div>

          <div
            key=""
            className={`w-72 col-start-4 col-end-5 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white`}
          >
            <HolidayCalendar holidays={holidays} />
          </div>

          <div
          key=""
          className={`w-72 col-start-5 col-end-6 row-start-1 row-end-2  rounded-lg shadow-md cursor-pointer p-1 bg-white`}
        >
          <AnnouncementList />
        </div>

        <div
        key=""
        className={`w-72 col-start-6 col-end-7 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white `}
      >
        <BirthdaysAndAnniversaries />
      </div>

          {/*
        <div
            key=""
            className={`col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Projects
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
                  Clients
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
                  Milestones
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
                  Tasks
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
                  Openings
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
                  Total Applicant
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
                  Resigned Emlpoyees
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
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Total Revenue
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
        */}

          <div
            key=""
            className={`rounded-lg col-start-1 col-end-4 row-start-2 row-end-4  shadow-md  cursor-pointer p-2 bg-white`}
          >
            <NewHire />
          </div>

          <div
            key=""
            className={`rounded-lg col-start-4 col-end-7 row-start-2 row-end-4  shadow-md  cursor-pointer bg-black`}
          >
            <AwardsRecognition />
          </div>

          {/*
          <div
            key=""
            className={`rounded-lg col-start-1 col-end-6 row-start-7 row-end-9  shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Awards and Recignition
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
          */}
    
      {/*
        <div className="small col-start-6 col-end-7 grid grid-cols-1 grid-rows-8 gap-2">
         
        
        </div>
      */}
      </div>
    </div>
  );
};

export default Dashboard;
