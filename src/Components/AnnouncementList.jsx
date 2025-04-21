
import React, { useEffect, useRef, useState } from "react";
import Announcement from "./Annoucement";
import { useNavigate } from "react-router-dom";

const AnnouncementList = () => {
  const navigate = useNavigate();
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const [announcements, setAnnouncements] = useState([
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
    {
      date: "May 5, 2024",
      title: "Product Launch Announcement",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // More announcements...
  ]);
  const [visibleAnnouncementsCount, setVisibleAnnouncementsCount] = useState(3);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    date: "",
  });

  const announcementContainerRef = useRef(null);
  const announcementIndexRef = useRef(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the screen size on initial load
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleAnnouncements(announcements.slice(0, visibleAnnouncementsCount));

    // Start auto-scrolling
    const intervalId = setInterval(scrollAnnouncements, 5000);

    return () => clearInterval(intervalId);
  }, [announcements, visibleAnnouncementsCount]);

  const handleViewAll = () => {
    navigate("/announcements");
  };

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

  const handleAddAnnouncement = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewAnnouncement({
      title: "",
      content: "",
      date: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnnouncement((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAnnouncement.title && newAnnouncement.content && newAnnouncement.date) {
      setAnnouncements([
        ...announcements,
        newAnnouncement,
      ]);
      handleCloseModal();
    } else {
      alert("Please fill all fields.");
    }
  };

  // Handle screen size ranges
  const isWithinRange =
    screenSize <= 371 ||
    (screenSize >= 768 && screenSize <= 854) ||
    (screenSize >= 1536 && screenSize <= 1897);

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      {/* Header */}
      <div
        className={`flex justify-between items-center gap-2 mb-4 bg-red-200 rounded-lg px-2 ${
          screenSize <= 371
            ? "py-0  min-h-16"
            : isWithinRange
            ? "py-0.5 min-h-20"
            : "py-2 min-h-10"
        }`}
      >
        {/* Title */}
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-lg font-bold bg-red-200 rounded-lg flex-grow">
          Announcements
        </h1>

        {/* Button to Open Modal */}
        <button
          onClick={handleAddAnnouncement}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-0.5 px-2 rounded text-xs sm:text-sm md:text-base flex-shrink-0"
        >
          {screenSize <= 335 ||
          (screenSize >= 1536 && screenSize <= 1628)
            ? "+"
            : "+ Add"}
        </button>
      </div>

      {/* Announcement List */}
      <div
        ref={announcementContainerRef}
        className={`${
          isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
        }max-h-64 overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent`}
        onScroll={handleScroll}
      >
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

      {/* View All Button */}
      <div className={`${isWithinRange ? "mt-1" : "mt-4"} text-center`}>
        <button
          className="text-blue-500 hover:underline text-sm sm:text-base font-semibold transition duration-300 ease-in-out"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>

      {/* Modal for Creating Announcement */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 sm:w-[600px] sm:h-[400px] ml-20 lg:ml-0">
            <h2 className="text-xl font-semibold mb-4">Create New Announcement</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newAnnouncement.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                  name="content"
                  value={newAnnouncement.content}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newAnnouncement.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          </div>
      )}
    </div>
  );
};

export default AnnouncementList;
