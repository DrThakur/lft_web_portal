import React from 'react';
import Announcement from './Annoucement';

const AnnouncementsPage = ({ announcements }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Announcements</h1>
      <div className="-ml-1 h-[calc(100vh-156px)] xs:h-[calc(100vh-146px)] overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 transition-all
       duration-300">
        <div className="grid grid-cols-1 gap-2 p-1 ">
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
