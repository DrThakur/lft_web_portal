import React from 'react';
import Announcement from './Annoucement';

const AnnouncementsPage = ({ announcements }) => {
  return (
    <div className=" mx-auto ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Announcements</h1>
      <div className="overflow-y-auto h-screen -ml-1">
        <div className="grid grid-cols-1 gap-4 p-4 ">
          {announcements.map((announcement, index) => (
            <Announcement
              key={index}
              date={announcement.date}
              title={announcement.title}
              content={announcement.content}
              fullWidth // Set fullWidth to true to make announcement take full width
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
