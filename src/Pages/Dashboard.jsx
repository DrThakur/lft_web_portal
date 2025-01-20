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
    <div className="h-full w-full overflow-hidden rounded-lg ">
      <Header title="Dashboard" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-2 overflow-y-auto h-[calc(100vh-226px)] xs:h-[calc(100vh-222px)] overflow-x-hidden mb-3 xxs:mb-1">
        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300`}
        >
          <Events />
        </div>
        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300`}
        >
          <QuickAccess />
        </div>

        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300`}>
          <JobVacancy />
        </div>

        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300`}
        >
          <HolidayCalendar holidays={holidays} />
        </div>

        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300`}
        >
          <AnnouncementList />
        </div>

        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300`}
        >
          <BirthdaysAndAnniversaries />
        </div>

        <div
          className={`rounded-lg shadow-md cursor-pointer bg-white hover:shadow-xl transition duration-300 col-span-1 md:col-span-2 lg:col-span-3  h-[455px] `}
        >
          <NewHire />
        </div>

        <div
          className={`rounded-lg shadow-md  cursor-pointer bg-black hover:shadow-xl  transition duration-300 col-span-1 md:col-span-2 lg:col-span-3  h-[455px]`}
        >
          <AwardsRecognition />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
