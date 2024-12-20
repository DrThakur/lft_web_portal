

import React, { useEffect, useRef, useState } from "react";
import Announcement from "./Annoucement";
import { useNavigate } from "react-router-dom";

const AnnouncementList = () => {
  const navigate = useNavigate();
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const announcementContainerRef = useRef(null);
  const announcementIndexRef = useRef(0);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the screen size on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleViewAll = () => {
    navigate("/announcements");
  };

  useEffect(() => {
    // Initially, display the first three announcements
    setVisibleAnnouncements(announcements.slice(0, 3));

    // Start auto-scrolling
    const intervalId = setInterval(scrollAnnouncements, 5000);

    // Clean up function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  const scrollAnnouncements = () => {
    announcementIndexRef.current =
      (announcementIndexRef.current + 1) % announcements.length;
    const nextAnnouncements = [
      announcements[announcementIndexRef.current],
      announcements[(announcementIndexRef.current + 1) % announcements.length],
      announcements[(announcementIndexRef.current + 2) % announcements.length],
    ];
    setVisibleAnnouncements(nextAnnouncements);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } =
      announcementContainerRef.current;
    if (scrollTop + clientHeight === scrollHeight) {
      // If scrolled to the bottom, load more announcements
      const nextAnnouncements = announcements.slice(
        visibleAnnouncements.length,
        visibleAnnouncements.length + 3
      );
      setVisibleAnnouncements((prevState) => [
        ...prevState,
        ...nextAnnouncements,
      ]);
    }
  };

  const announcements = [
    {
      date: "June 1, 2024",
      title: "Important Update",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "June 2, 2024",
      title: "New Feature Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more announcements here as needed
    {
      date: "May 5, 2024",
      title: "Prodcuct1 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct2 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct3 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct4 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "May 5, 2024",
      title: "Prodcuct5 Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more announcements here as needed
  ];

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      {/* Header */}
      <div className="flex justify-between items-center gap-2 mb-4 bg-red-200 rounded-lg py-2 px-2 text-lg sm:text-xl md:text-2xl font-bold">
        <h1 className="text-base sm:text-lg md:text-xl font-bold">Announcements</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded text-xs sm:text-sm md:text-base">
          {/* Conditionally render button content based on screenSize */}
          {screenSize <= 335 ? "+" : screenSize >= 1024 && screenSize <= 1205 ? "+" : "+Add"}
        </button>
      </div>

      {/* Scrollable Announcement List */}
      <div
        ref={announcementContainerRef}
        className="max-h-64 overflow-y-hidden hover:overflow-y-auto transition-all duration-300
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        style={{
          overflowX: "hidden",
          top: `-${announcementIndexRef.current * 100}%`,
          transition: "top 1s cubic-bezier(0, 1, 0, 1)",
        }}
        onScroll={handleScroll}
      >
        <div className="grid grid-cols-1 gap-2 ">
          {visibleAnnouncements.map((announcement, index) => (
            <Announcement
              key={index}
              date={announcement.date}
              title={announcement.title}
              content={announcement.content}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default AnnouncementList;
