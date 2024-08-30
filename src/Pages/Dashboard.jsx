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
import Events from "../Components/Events";

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
      <div className="big h-screen grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-4 gap-2 -mt-8">
        <div
          className={`col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl hover:z-50`}
        >
          <Events />
        </div>
        <div
          className={`col-start-2 col-end-3 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl hover:z-50`}
        >
          <QuickAccess />
        </div>

        <div
          className={`col-start-3 col-end-4 row-start-1 row-end-2 rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer bg-white hover:shadow-xl hover:z-50`}
        >
          <JobVacancy />
        </div>

        <div
          className={`col-start-4 col-end-5 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl hover:z-50`}
        >
          <HolidayCalendar holidays={holidays} />
        </div>

        <div
          className={`col-start-5 col-end-6 row-start-1 row-end-2  rounded-lg shadow-md cursor-pointer p-1 bg-white hover:shadow-xl hover:z-50`}
        >
          <AnnouncementList />
        </div>

        <div
          className={`col-start-6 col-end-7 row-start-1 row-end-2 rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl hover:z-50 `}
        >
          <BirthdaysAndAnniversaries />
        </div>

        <div
          className={`rounded-lg col-start-1 col-end-4 row-start-2 row-end-4  shadow-md  cursor-pointer p-2 bg-white hover:shadow-xl hover:z-50`}
        >
          <NewHire />
        </div>

        <div
          className={`rounded-lg col-start-4 col-end-7 row-start-2 row-end-4  shadow-md  cursor-pointer bg-black hover:shadow-xl hover:z-50 `}
        >
          <AwardsRecognition />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
