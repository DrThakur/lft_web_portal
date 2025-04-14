import React from 'react';
import { Badge } from 'primereact/badge';
import annivarsaryGif from "../data/icons8-confetti.gif";
import birthdayGif from "../data/icons8-happy-birthday.gif";
import { format } from 'date-fns';

const TodayEventsModal = ({ events, onClose }) => {

  // Group events by their date
  const groupEventsByDate = (events) => {
    const grouped = {};

    events.forEach((event) => {
      const formattedDate = format(event.date, 'd MMM yyyy'); // Format date to group by

      if (!grouped[formattedDate]) {
        grouped[formattedDate] = [];
      }
      grouped[formattedDate].push(event);
    });

    return grouped;
  };

  const groupedEvents = groupEventsByDate(events);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-[70%] max-h-[80vh] overflow-y-auto transition-all duration-300">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-teal-600">Today's Events</h2>
          <button
            onClick={onClose} // Trigger the onClose handler
            className="text-gray-600 hover:text-gray-900 text-3xl transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Modal Body (Grouped Events by Date) */}
        <div className="mt-4 space-y-6 max-h-[70vh] overflow-y-auto">
          {Object.entries(groupedEvents).length === 0 ? (
            <p className="text-gray-600 text-center">No events today!</p>
          ) : (
            Object.entries(groupedEvents).map(([date, eventsOnDate]) => (
              <div key={date} className="bg-teal-50 p-6 rounded-xl shadow-xl mb-6">
                {/* Display Date */}
                <p className="font-semibold text-xl sm:text-2xl text-teal-800">{date}</p>

                {/* List events for this date */}
                <ul className="space-y-5 mt-4">
                  {eventsOnDate.map((event, index) => (
                    <li 
                      key={index} 
                      className="flex flex-col sm:flex-row justify-between items-center py-5 px-6 bg-white rounded-lg shadow-md transition-all duration-300  hover:shadow-xl hover:bg-teal-100 hover:border-teal-500 hover:border-2 "
                    >
                      {/* Event Information */}
                      <div className="flex flex-col sm:flex-row items-center ">
                        <span className="text-sm sm:text-base font-medium  text-gray-700">{event.name}</span>
                        {/* <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0 sm:ml-2">{event.type}</p> */}
                      </div>

                      {/* Badges & Icons */}
                      <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        <Badge
                          value={event.type}
                          severity={event.type === 'Birthday' ? 'success' : 'warning'}
                          className="text-xs sm:text-sm"
                        />
                        {event.type === 'Anniversary' && (
                          <Badge
                            value={`${event.years} Year${event.years !== 1 ? 's' : ''}`}
                            severity="info"
                            className="text-xs sm:text-sm"
                          />
                        )}
                        {event.type === 'Birthday' && (
                          <img
                            src={birthdayGif}
                            alt="🎉"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full "
                          />
                        )}
                        {event.type === 'Anniversary' && (
                          <img
                            src={annivarsaryGif}
                            alt="🎂"
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full "
                          />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodayEventsModal;
