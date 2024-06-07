import React, { useEffect, useRef, useState } from "react";
import Announcement from "./Annoucement";
import { useNavigate } from "react-router-dom";

const AnnouncementList = () => {
  const navigate = useNavigate();
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const announcementContainerRef = useRef(null);
  const announcementIndexRef = useRef(0);

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
    announcementIndexRef.current = (announcementIndexRef.current + 1) % announcements.length;
    const nextAnnouncements = [
      announcements[announcementIndexRef.current],
      announcements[(announcementIndexRef.current + 1) % announcements.length],
      announcements[(announcementIndexRef.current + 2) % announcements.length]
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
    <div className="container mx-auto w-72 mt-2">
      <div className="flex flex-row justify-between items-center mb-4 bg-red-200 rounded-lg mr-3 ml-1 py-2 px-3">
        <h1 className="text-lg font-bold">Announcements</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded text-xs ">
          + Add New
        </button>
      </div>
      <div className="overflow-y-auto h-96" style={{ top: `-${announcementIndexRef.current * 100}%`, transition: 'top 1s cubic-bezier(0, 1, 0, 1)' }} >
        <div className="grid grid-cols-1 gap-2">
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
      <div className="text-center -mt-2">
        <button className="text-blue-500 hover:underline" onClick={handleViewAll}>
          View All
        </button>
      </div>
    </div>
  );
};

export default AnnouncementList;
