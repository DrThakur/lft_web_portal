import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiList, FiCalendar, FiArrowLeft, FiX, FiClock } from "react-icons/fi";
import { LayoutList,Grid3x3 } from 'lucide-react';
const AllEvents = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("list");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      date: "29 Feb",
      time: "4:00-4:30 PM",
      name: "Month End Birthday Party",
      description: "Celebrating all birthdays of the month with cake and games.",
      creator: "Ankit Kumar Thakur", // Added creator
    },
    {
      date: "31 Mar",
      time: "12:00-2:00 PM",
      name: "Women's Day Celebration",
      description: "Appreciation event with lunch and gifts for women employees.",
      creator: "Rajkumar Rao", // Added creator
    },
    {
      date: "30 Apr",
      time: "11:00-12:30 PM",
      name: "Project Management Training",
      description: "Interactive session on Agile and project planning.",
      creator: "Amritpreet Singh", // Added creator
    },
    {
      date: "31 May",
      time: "3:00-4:00 PM",
      name: "FPGA Training",
      description: "Intro to FPGA programming and digital design.",
      creator: "Dhruv Kumar Saxena", // Added creator
    },
    {
      date: "30 Aug",
      time: "3:00-4:00 PM",
      name: "Advanced FPGA Training",
      description: "Advanced FPGA techniques and project showcase.",
      creator: "Catherine Green", // Added creator
    },
  ];


  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const upcomingEvents = events.filter(event => {
    const [day, month] = event.date.split(" ");
    const eventDate = new Date(`${month} ${day}, ${currentYear}`);
    return eventDate >= currentDate;
  });

  const getDayOfWeek = (date) => {
    const [day, month] = date.split(" ");
    const eventDate = new Date(`${month} ${day}, ${currentYear}`);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[eventDate.getDay()];
  };

  return (
    <div className="p-6 w-full bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 rounded-lg shadow-2xl max-h-screen relative">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 shadow-lg rounded-lg bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4 sm:mb-0">
          Current & Upcoming Events
        </h1>
        <div className="flex gap-3">
        <div className="flex">
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 py-2 px-4 rounded-l-lg text-sm font-semibold transition ${viewMode === "list" ? "bg-teal-600 text-white" : "bg-white text-gray-700"
              }`}
          >
            <LayoutList className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={`flex items-center gap-2 py-2 px-4 rounded-r-lg text-sm font-semibold transition ${viewMode === "calendar" ? "bg-teal-600 text-white" : "bg-white text-gray-700"
              }`}
          >
            <Grid3x3 className="w-5 h-5"  />
          </button>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FiArrowLeft />
            Back
          </button>
        </div>
      </div>

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-6 mt-6 h-[72vh]">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => setSelectedEvent(event)}
                className="flex items-center cursor-pointer gap-6 p-4 bg-white rounded-lg border-l-4 border-teal-600 shadow-md hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center sm:items-start text-sm sm:text-base font-semibold text-gray-700">
                  <span className="text-xl sm:text-2xl font-bold">{event.date.split(" ")[0]}</span>
                  <span className="text-sm sm:text-base text-gray-500">{event.date.split(" ")[1]}</span>
                </div>
                <div className="flex flex-col text-left">
                  <div className="text-xs sm:text-sm text-gray-600">{event.time}</div>
                  <div className="text-lg font-semibold text-gray-800 mt-1">{event.name}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">No upcoming events.</p>
          )}
        </div>
      )}

      {/* Calendar View */}
      {viewMode === "calendar" && (
        <div className="space-y-6 mt-6 h-[72vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 ">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition border border-teal-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <FiClock className="text-gray-400" />
                  {event.time}
                </div>
                <div className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full font-semibold">
                  {event.date} 
                  {/* | {getDayOfWeek(event.date)} */}
                </div>
              </div>
              <h2 className="text-md font-semibold text-gray-800">{event.name}</h2>
            </div>
          ))}
        </div>
        </div>
      )}

      {/* Modal */}
      {selectedEvent && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 " onClick={() => setSelectedEvent(null)}></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 ml-20 px-1">
              <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl relative">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                >
                  <FiX size={20} />
                </button>
                <div className="mb-4">
                  <div className="text-xs text-gray-500"> {selectedEvent.time}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mt-2">{selectedEvent.name}</h2>
                  <div className="text-xs text-gray-500 mt-2">
                    {selectedEvent.date} | {getDayOfWeek(selectedEvent.date)}
                  </div>
                  {/* Display the creator */}
                  <div className="text-sm text-gray-500 mt-2">Created by: {selectedEvent.creator}</div>
                </div>
                <p className="text-gray-600">{selectedEvent.description || "No additional information available."}</p>
              </div>
            </div>
        </>
      )}

    </div>
  );
};

export default AllEvents;
