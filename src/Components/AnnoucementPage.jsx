import React from 'react';
import { useNavigate } from 'react-router-dom';
import Announcement from './Annoucement';

const AnnouncementsPage = ({ announcements }) => {
  const navigate = useNavigate();
  
  return (
    <div className="px-6 py-8 bg-gradient-to-r from-blue-50 via-teal-100 to-indigo-100 ">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 shadow-lg rounded-lg bg-indigo-200 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          Announcements
        </h1>
        <div className="text-center mt-4 sm:mt-0">
          <button
            onClick={() => navigate(-1)}
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Announcement List */}
      <div className="overflow-y-auto max-h-[calc(100vh-230px)] scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-1 lg:p-4">
          {announcements.map((announcement, index) => (
            <Announcement
              key={index}
              date={announcement.date}
              title={announcement.title}
              content={announcement.content}
              fullWidth
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
