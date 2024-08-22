import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Badge } from 'primereact/badge';
import { useNavigate } from 'react-router-dom';
import annivarsaryGif  from "../data/icons8-confetti.gif"
import birthdayGif from "../data/icons8-happy-birthday.gif"
import axios from 'axios';

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


const BirthdaysAndAnniversaries = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
  const fetchEosData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${apiUrl}/users/all`);
      const users = res.data.users;

      setEmployees(users);
    } catch (error) {
      console.error("Error fetching EOS data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchEosData();
}, [apiUrl]);


console.log("employees", employees);

const getCurrentMonthEmployees = () => {
  if (!employees) return []; 

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  console.log("my current date", currentDate);
  console.log("my current month", currentMonth);


  return employees.filter(employee => {
    const birthdayMonth = new Date(employee.dateOfBirth).getMonth() + 1;
    const hireDateMonth = new Date(employee.dateOfJoining).getMonth() + 1;
    return birthdayMonth === currentMonth || hireDateMonth === currentMonth;
  });
};


  const currentMonthEmployees = getCurrentMonthEmployees();
  console.log("my current month employees", currentMonthEmployees);
  const groupedEvents = {};

  currentMonthEmployees.forEach(employee => {
    const birthdayDate = new Date(employee.dateOfBirth);
    const anniversaryDate = new Date(employee.dateOfJoining);


    const birthdayKey = format(birthdayDate, 'dd MMM');
    const anniversaryKey = format(anniversaryDate, 'dd MMM');

    // console.log("my birthday", birthdayDate);

    // if (!groupedEvents[birthdayKey]) {
    //   groupedEvents[birthdayKey] = [];
    // }
    // if (!groupedEvents[anniversaryKey]) {
    //   groupedEvents[anniversaryKey] = [];
    // }

    // groupedEvents[birthdayKey].push({ type: 'Birthday', name: employee.fullName });
    // groupedEvents[anniversaryKey].push({ type: 'Anniversary', name: employee.fullName, years: new Date().getFullYear() - anniversaryDate.getFullYear() });\


     // Grouping birthday events
     if (new Date().getMonth() + 1 === birthdayDate.getMonth() + 1) {
      if (!groupedEvents[birthdayKey]) {
        groupedEvents[birthdayKey] = [];
      }
      groupedEvents[birthdayKey].push({ type: 'Birthday', name: employee.fullName });
    }

    // Grouping anniversary events
    if (new Date().getMonth() + 1 === anniversaryDate.getMonth() + 1) {
      if (!groupedEvents[anniversaryKey]) {
        groupedEvents[anniversaryKey] = [];
      }
      groupedEvents[anniversaryKey].push({ type: 'Anniversary', name: employee.fullName, years: new Date().getFullYear() - anniversaryDate.getFullYear() });
    }
  });

  // console.log("Grouped Events:", groupedEvents);
  const displayedDates = Object.entries(groupedEvents).sort((a, b) => new Date(a[0]) - new Date(b[0]));


  // console.log("Dispay date:", displayedDates);
  const handleViewAll = () => {
    // navigate("/test13")
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
