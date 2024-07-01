import React from 'react';
import { format } from 'date-fns';
import { Badge } from 'primereact/badge';
import { useNavigate } from 'react-router-dom';
import annivarsaryGif  from "../data/icons8-confetti.gif"
import birthdayGif from "../data/icons8-happy-birthday.gif"

const employees = [
  { name: 'John Doe', birthday: '1990-06-15', hireDate: '2015-06-03' },
  { name: 'Jane Smith', birthday: '1985-06-25', hireDate: '2016-06-10' },
  { name: 'Bob Johnson', birthday: '1992-06-05', hireDate: '2017-06-20' },
  { name: 'Bobby John', birthday: '1992-06-05', hireDate: '2017-06-21' },
  { name: 'John Cena', birthday: '1992-06-06', hireDate: '2017-06-22' },


  { name: 'John Doe', birthday: '1990-07-15', hireDate: '2015-07-03' },
  { name: 'Jane Smith', birthday: '1985-07-25', hireDate: '2016-07-10' },
  { name: 'Bob Johnson', birthday: '1992-07-05', hireDate: '2017-07-20' },
  { name: 'Bobby John', birthday: '1992-07-05', hireDate: '2017-07-21' },
  { name: 'John Cena', birthday: '1992-07-06', hireDate: '2017-07-22' },
  // Add more employees here
];

const getCurrentMonthEmployees = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return employees.filter(employee => {
    const birthdayMonth = new Date(employee.birthday).getMonth() + 1;
    const hireDateMonth = new Date(employee.hireDate).getMonth() + 1;
    return birthdayMonth === currentMonth || hireDateMonth === currentMonth;
  });
};

const BirthdaysAndAnniversaries = () => {
  const navigate = useNavigate();
  const currentMonthEmployees = getCurrentMonthEmployees();
  const groupedEvents = {};

  currentMonthEmployees.forEach(employee => {
    const birthdayDate = new Date(employee.birthday);
    const anniversaryDate = new Date(employee.hireDate);
    const birthdayKey = format(birthdayDate, 'dd MMM');
    const anniversaryKey = format(anniversaryDate, 'dd MMM');

    if (!groupedEvents[birthdayKey]) {
      groupedEvents[birthdayKey] = [];
    }
    if (!groupedEvents[anniversaryKey]) {
      groupedEvents[anniversaryKey] = [];
    }

    groupedEvents[birthdayKey].push({ type: 'Birthday', name: employee.name });
    groupedEvents[anniversaryKey].push({ type: 'Anniversary', name: employee.name, years: new Date().getFullYear() - anniversaryDate.getFullYear() });
  });

  const displayedDates = Object.entries(groupedEvents).sort((a, b) => new Date(a[0]) - new Date(b[0]));

  const handleViewAll = () => {
    navigate("/test13")
  }

  return (
    <div className="p-4 w-72 rounded -mt-2">
      <h2 className="text-lg font-bold mb-1 bg-purple-200 py-2 px-2 -ml-2 -mr-2 rounded-lg">Birthdays and Anniversaries</h2>
      <div className="h-96 overflow-y-auto" style={{ maxHeight: "137px", overflowY: "auto" }}>
        <ul className="space-y-1">
          {displayedDates.map(([date, events]) => (
            <li key={date}>
              <p className="font-semibold">{date}</p>
              <ul className="ml-2">
                {events.map(event => (
                  <li key={`${date}-${event.type}-${event.name}`}>
                    <div className='flex flex-row justify-start gap-1'>
                      <span>{event.name}</span>
                      <span><Badge style={{"fontSize":"9px"}} value={event.type} severity={event.type === 'Birthday' ? 'success' : 'warning'}></Badge></span>
                      {event.type === 'Anniversary' && (
                        <span> <Badge style={{"fontSize":"9px"}}  value={`${event.years} Year${event.years !== 1 ? 's' : ''}`} severity="info"></Badge> </span>
                      )}
                      <span>{event.type === 'Birthday' && <img src={birthdayGif} alt="🎉" width={25} height={25}/>}</span>
                      <span>{event.type === 'Anniversary' && <img src={annivarsaryGif} alt="🎂" width={25} height={25}/>}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <button className="text-blue-500 hover:underline" onClick={handleViewAll}>
          View All
        </button>
      </div>
    </div>
  );
};

export default BirthdaysAndAnniversaries;
