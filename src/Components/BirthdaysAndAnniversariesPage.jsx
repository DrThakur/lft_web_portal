// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import { Badge } from 'primereact/badge';
// import axios from 'axios';
// import annivarsaryGif from "../data/icons8-confetti.gif";
// import birthdayGif from "../data/icons8-happy-birthday.gif";
// import { AiOutlineFrown, AiOutlineBell } from 'react-icons/ai';
// import { useNavigate } from "react-router-dom";
// import TodayEventsModal from '../Components/TodayEventsModal';
// import { MdFiberNew } from "react-icons/md";

// const BirthdaysAndAnniversariesPage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//   const [dailyEvents, setDailyEvents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const apiUrl = process.env.REACT_APP_API_URL;


//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/users/all`);
//         setEmployees(response.data.users);
//       } catch (err) {
//         setError('Error loading employee data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEmployees();
//   }, [apiUrl]);

//   const isEmployeeActive = (employee) => {
//     return employee.status === "Active";  // Only employees with status "Active" will be considered
//   };

//   const groupByMonthAndDate = (employees, year) => {
//     const grouped = {};

//     // Filter active employees
//     const activeEmployees = employees.filter((employee) => isEmployeeActive(employee));

//     activeEmployees.forEach((employee) => {
//       const birthday = employee.dateOfBirth ? new Date(employee.dateOfBirth) : null;
//       const anniversary = employee.dateOfJoining ? new Date(employee.dateOfJoining) : null;

//       if (birthday) {
//         const birthdayThisYear = new Date(year, birthday.getMonth(), birthday.getDate());
//         const monthYear = birthdayThisYear.getMonth(); // Using numerical month for sorting
//         const formattedDate = format(birthdayThisYear, 'd MMM yyyy');

//         if (!grouped[monthYear]) grouped[monthYear] = {};
//         if (!grouped[monthYear][formattedDate]) grouped[monthYear][formattedDate] = [];

//         grouped[monthYear][formattedDate].push({
//           type: 'Birthday',
//           name: employee.fullName,
//           id: employee.id,
//           date: birthdayThisYear,
//           formattedDate: format(birthdayThisYear, 'd MMM'),
//         });
//       }

//       if (anniversary) {
//         const anniversaryThisYear = new Date(year, anniversary.getMonth(), anniversary.getDate());
//         const monthYear = anniversaryThisYear.getMonth();
//         const yearsWorked = year - anniversary.getFullYear();

//         if (yearsWorked >= 1) {
//           const formattedDate = format(anniversaryThisYear, 'd MMM yyyy');

//           if (!grouped[monthYear]) grouped[monthYear] = {};
//           if (!grouped[monthYear][formattedDate]) grouped[monthYear][formattedDate] = [];

//           grouped[monthYear][formattedDate].push({
//             type: 'Anniversary',
//             name: employee.fullName,
//             years: yearsWorked,
//             id: employee.id,
//             date: anniversaryThisYear,
//             formattedDate: format(anniversaryThisYear, 'd MMM'),
//           });
//         }
//       }
//     });

//     return grouped;
//   };

//   const sortedEvents = groupByMonthAndDate(employees, selectedYear);

//   const sortGroupedEvents = (groupedEvents) => {
//     const sortedGrouped = {};
//     Object.keys(groupedEvents)
//       .sort((a, b) => a - b) // Sort by month number
//       .forEach((monthIndex) => {
//         const sortedDates = Object.entries(groupedEvents[monthIndex])
//           .sort(([dateA], [dateB]) => {
//             const dayA = new Date(dateA).getDate();
//             const dayB = new Date(dateB).getDate();
//             return dayA - dayB;
//           })
//           .reduce((acc, [date, events]) => {
//             acc[date] = events;
//             return acc;
//           }, {});

//         sortedGrouped[monthIndex] = sortedDates;
//       });

//     return sortedGrouped;
//   };

//   const sortedAndGroupedEvents = sortGroupedEvents(sortedEvents);

//   const handleYearChange = (event) => {
//     setSelectedYear(Number(event.target.value));
//     if (Number(event.target.value) !== new Date().getFullYear()) {
//       setSelectedMonth(0);
//     }
//   };

//   const handleMonthChange = (event) => {
//     setSelectedMonth(Number(event.target.value));
//   };

//   const years = Array.from(new Array(10), (_, index) => new Date().getFullYear() - index);
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//   useEffect(() => {
//     const getTodayEvents = (groupedEvents) => {
//       const today = new Date();
//       const todayKey = format(today, 'd MMM yyyy');
//       const eventsForToday = [];

//       Object.entries(groupedEvents).forEach(([monthYear, dates]) => {
//         Object.entries(dates).forEach(([date, events]) => {
//           events.forEach((event) => {
//             const eventDate = format(event.date, 'd MMM yyyy');
//             if (eventDate === todayKey) {
//               eventsForToday.push(event);
//             }
//           });
//         });
//       });

//       setDailyEvents((prevEvents) => {
//         if (JSON.stringify(prevEvents) !== JSON.stringify(eventsForToday)) {
//           return eventsForToday;
//         }
//         return prevEvents;
//       });
//     };

//     getTodayEvents(sortedAndGroupedEvents);
//   }, [employees, selectedYear, selectedMonth]);

//   const handleNotificationClick = () => {
//     if (dailyEvents.length > 0) {
//       setIsModalOpen(true);
//     } else {
//       alert('No events today!');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
//         <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="px-4 py-6 bg-gradient-to-r from-blue-100 to-teal-100 min-h-screen">
//       <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 shadow-lg rounded-lg bg-white">
//         <h1 className="text-4xl font-extrabold text-teal-600 mb-4 sm:mb-0 text-center sm:text-left">Birthdays and Anniversaries</h1>

//         <div className="flex items-center space-x-4">
//           <div className="text-center mt-4 sm:mt-0">
//             <button
//               onClick={() => navigate(-1)}
//               className="text-teal-600 hover:text-teal-800 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
//               ← Back
//             </button>
//           </div>

//           <div className="mb-4 sm:mb-0">
//             <label htmlFor="year-select" className="sr-only">Select Year</label>
//             <select
//               id="year-select"
//               value={selectedYear}
//               onChange={handleYearChange}
//               className="p-3 border-2 border-teal-400 rounded-md bg-teal-600 text-white focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all ease-in-out w-36 sm:w-48"
//             >
//               {years.map((year) => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="relative">
//             <MdFiberNew
//               className="text-3xl cursor-pointer text-teal-600 transition-all duration-300 transform hover:scale-105 hover:text-teal-400 focus:outline-none"
//               onClick={handleNotificationClick}
//             />
//             {dailyEvents.length > 0 && (
//               <div className="absolute -top-3 left-5 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
//                 {dailyEvents.length}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {isModalOpen && <TodayEventsModal events={dailyEvents} onClose={() => setIsModalOpen(false)} />}

//       {Object.keys(sortedAndGroupedEvents).length === 0 ? (
//         <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
//           <AiOutlineFrown className="text-5xl text-gray-500 mb-4" />
//           <p className="text-lg text-gray-600 font-semibold">No Data Available</p>
//           <p className="text-sm text-gray-400 mt-2">No events to display for the selected year.</p>
//         </div>
//       ) : (
//         Object.entries(sortedAndGroupedEvents).map(([monthIndex, dates]) => {
//           // Skip months before the selected month for the selected year
//           if (selectedYear === new Date().getFullYear() && monthIndex < selectedMonth ) return null;

          
//           return (


//             <div key={monthIndex} className=" mt-4 ">
//               <h2 className="text-2xl font-semibold text-teal-800 ">
//                 {months[monthIndex]} {selectedYear}
//               </h2>
//               <div className='h-[650px] overflow-y-auto'>
//                 <ul className="space-y-4 p-3 mt-0 ">
//                   {Object.entries(dates).map(([date, events]) => (
//                     <li key={date}>
//                       <p className="font-semibold text-sm sm:text-base">{date}</p>
//                       <ul className="ml-3 mt-2">
//                         {events.map((event, index) => (
//                           <li key={`${date}-${event.type}-${event.name}-${event.id || index}`} className="flex flex-col sm:flex-row justify-between items-center py-5 px-6 bg-white rounded-lg shadow-md transition-all duration-300  hover:shadow-xl hover:bg-teal-100 hover:border-teal-500 hover:border-2 my-2 w-full " >
//                             <div className="flex flex-col sm:flex-row justify-between items-center w-full py-1 px-4 border-b border-teal-200 rounded-md">
//                               <div className="flex items-center space-x-3 w-full sm:w-auto">
//                                 <span className="whitespace-nowrap  text-teal-700 text-sm sm:text-base font-medium ">{event.name}</span>
//                                 {event.type === "Birthday" && (
//                                   <img src={birthdayGif} alt="🎉" className="w-10 h-10 sm:w-12 sm:h-12" />
//                                 )}
//                                 {event.type === "Anniversary" && (
//                                   <img src={annivarsaryGif} alt="🎂" className="w-10 h-10 sm:w-12 sm:h-12" />
//                                 )}
//                               </div>

//                               <div className="flex items-center space-x-2 mt-2 sm:mt-0">
//                                 <Badge
//                                   value={event.type}
//                                   severity={event.type === "Birthday" ? "success" : "warning"}
//                                   className="text-xs sm:text-sm font-medium"
//                                 />
//                                 {event.type === "Anniversary" && (
//                                   <Badge
//                                     value={`${event.years} Year${event.years !== 1 ? "s" : ""}`}
//                                     severity="info"
//                                     className="text-xs sm:text-sm font-medium"
//                                   />
//                                 )}
//                               </div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
  
// };

// export default BirthdaysAndAnniversariesPage;





//practice 
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Badge } from 'primereact/badge';
import axios from 'axios';
import annivarsaryGif from "../data/icons8-confetti.gif";
import birthdayGif from "../data/icons8-happy-birthday.gif";
import { AiOutlineFrown, AiOutlineBell } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import TodayEventsModal from '../Components/TodayEventsModal';
import { MdFiberNew } from "react-icons/md";

const BirthdaysAndAnniversariesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [dailyEvents, setDailyEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;


  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/all`);
        setEmployees(response.data.users);
      } catch (err) {
        setError('Error loading employee data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, [apiUrl]);

  const isEmployeeActive = (employee) => {
    return employee.status === "Active";  // Only employees with status "Active" will be considered
  };

  const groupByMonthAndDate = (employees, year) => {
    const grouped = {};

    // Filter active employees
    const activeEmployees = employees.filter((employee) => isEmployeeActive(employee));

    activeEmployees.forEach((employee) => {
      const birthday = employee.dateOfBirth ? new Date(employee.dateOfBirth) : null;
      const anniversary = employee.dateOfJoining ? new Date(employee.dateOfJoining) : null;

      if (birthday) {
        const birthdayThisYear = new Date(year, birthday.getMonth(), birthday.getDate());
        const monthYear = birthdayThisYear.getMonth(); // Using numerical month for sorting
        const formattedDate = format(birthdayThisYear, 'd MMM yyyy');

        if (!grouped[monthYear]) grouped[monthYear] = {};
        if (!grouped[monthYear][formattedDate]) grouped[monthYear][formattedDate] = [];

        grouped[monthYear][formattedDate].push({
          type: 'Birthday',
          name: employee.fullName,
          id: employee.id,
          date: birthdayThisYear,
          formattedDate: format(birthdayThisYear, 'd MMM'),
        });
      }

      if (anniversary) {
        const anniversaryThisYear = new Date(year, anniversary.getMonth(), anniversary.getDate());
        const monthYear = anniversaryThisYear.getMonth();
        const yearsWorked = year - anniversary.getFullYear();

        if (yearsWorked >= 1) {
          const formattedDate = format(anniversaryThisYear, 'd MMM yyyy');

          if (!grouped[monthYear]) grouped[monthYear] = {};
          if (!grouped[monthYear][formattedDate]) grouped[monthYear][formattedDate] = [];

          grouped[monthYear][formattedDate].push({
            type: 'Anniversary',
            name: employee.fullName,
            years: yearsWorked,
            id: employee.id,
            date: anniversaryThisYear,
            formattedDate: format(anniversaryThisYear, 'd MMM'),
          });
        }
      }
    });

    return grouped;
  };

  const sortedEvents = groupByMonthAndDate(employees, selectedYear);

  const sortGroupedEvents = (groupedEvents) => {
    const sortedGrouped = {};
    Object.keys(groupedEvents)
      .sort((a, b) => a - b) // Sort by month number
      .forEach((monthIndex) => {
        const sortedDates = Object.entries(groupedEvents[monthIndex])
          .sort(([dateA], [dateB]) => {
            const dayA = new Date(dateA).getDate();
            const dayB = new Date(dateB).getDate();
            return dayA - dayB;
          })
          .reduce((acc, [date, events]) => {
            acc[date] = events;
            return acc;
          }, {});

        sortedGrouped[monthIndex] = sortedDates;
      });

    return sortedGrouped;
  };

  const sortedAndGroupedEvents = sortGroupedEvents(sortedEvents);

  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
    if (Number(event.target.value) !== new Date().getFullYear()) {
      setSelectedMonth(0);
    }
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };

  const years = Array.from(new Array(10), (_, index) => new Date().getFullYear() - index);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    const getTodayEvents = (groupedEvents) => {
      const today = new Date();
      const todayKey = format(today, 'd MMM yyyy');
      const eventsForToday = [];

      Object.entries(groupedEvents).forEach(([monthYear, dates]) => {
        Object.entries(dates).forEach(([date, events]) => {
          events.forEach((event) => {
            const eventDate = format(event.date, 'd MMM yyyy');
            if (eventDate === todayKey) {
              eventsForToday.push(event);
            }
          });
        });
      });

      setDailyEvents((prevEvents) => {
        if (JSON.stringify(prevEvents) !== JSON.stringify(eventsForToday)) {
          return eventsForToday;
        }
        return prevEvents;
      });
    };

    getTodayEvents(sortedAndGroupedEvents);
  }, [employees, selectedYear, selectedMonth]);

  const handleNotificationClick = () => {
    if (dailyEvents.length > 0) {
      setIsModalOpen(true);
    } else {
      alert('No events today!');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="px-4 py-6 bg-gradient-to-r from-blue-100 to-teal-100 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 shadow-lg rounded-lg bg-white">
        <h1 className="text-4xl font-extrabold text-teal-600 mb-4 sm:mb-0 text-center sm:text-left">Birthdays and Anniversaries</h1>

        <div className="flex items-center space-x-4">
          <div className="text-center mt-4 sm:mt-0">
            <button
              onClick={() => navigate(-1)}
              className="text-teal-600 hover:text-teal-800 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
              ← Back
            </button>
          </div>

          <div className="mb-4 sm:mb-0">
            <label htmlFor="year-select" className="sr-only">Select Year</label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={handleYearChange}
              className="p-3 border-2 border-teal-400 rounded-md bg-teal-600 text-white focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all ease-in-out w-36 sm:w-48"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <MdFiberNew
              className="text-3xl cursor-pointer text-teal-600 transition-all duration-300 transform hover:scale-105 hover:text-teal-400 focus:outline-none"
              onClick={handleNotificationClick}
            />
            {dailyEvents.length > 0 && (
              <div className="absolute -top-3 left-5 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                {dailyEvents.length}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:h-[690px] lg:overflow-y-auto mt-6">

      {isModalOpen && <TodayEventsModal events={dailyEvents} onClose={() => setIsModalOpen(false)} />}

      {Object.keys(sortedAndGroupedEvents).length === 0 ? (
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
          <AiOutlineFrown className="text-5xl text-gray-500 mb-4" />
          <p className="text-lg text-gray-600 font-semibold">No Data Available</p>
          <p className="text-sm text-gray-400 mt-2">No events to display for the selected year.</p>
        </div>
      ) : (
        Object.entries(sortedAndGroupedEvents).map(([monthIndex, dates]) => {
          // Skip months before the selected month for the selected year
          if (selectedYear === new Date().getFullYear() && monthIndex < selectedMonth ) return null;

          
          return (


            <div key={monthIndex} className=" mt-0 ">
              <h2 className="sticky top-0 bg-blue-300 px-3 py-2 text-lg font-bold text-white shadow-md rounded-md">
                {months[monthIndex]} {selectedYear}
              </h2>
              
                <ul className="space-y-4 p-3 mt-0 ">
                  {Object.entries(dates).map(([date, events]) => (
                    <li key={date}>
                      <p className="font-semibold text-sm sm:text-base">{date}</p>
                      <ul className="ml-3 mt-2">
                        {events.map((event, index) => (
                          <li key={`${date}-${event.type}-${event.name}-${event.id || index}`} className="flex flex-col sm:flex-row justify-between items-center py-5 px-6 bg-white rounded-lg shadow-md transition-all duration-300  hover:shadow-xl hover:bg-teal-100 hover:border-teal-500 hover:border-2 my-2 w-full " >
                            <div className="flex flex-col sm:flex-row justify-between items-center w-full py-1 px-4 border-b border-teal-200 rounded-md">
                              <div className="flex items-center space-x-3 w-full sm:w-auto">
                                <span className="whitespace-nowrap  text-teal-700 text-sm sm:text-base font-medium ">{event.name}</span>
                                {event.type === "Birthday" && (
                                  <img src={birthdayGif} alt="🎉" className="w-10 h-10 sm:w-12 sm:h-12" />
                                )}
                                {event.type === "Anniversary" && (
                                  <img src={annivarsaryGif} alt="🎂" className="w-10 h-10 sm:w-12 sm:h-12" />
                                )}
                              </div>

                              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                                <Badge
                                  value={event.type}
                                  severity={event.type === "Birthday" ? "success" : "warning"}
                                  className="text-xs sm:text-sm font-medium"
                                />
                                {event.type === "Anniversary" && (
                                  <Badge
                                    value={`${event.years} Year${event.years !== 1 ? "s" : ""}`}
                                    severity="info"
                                    className="text-xs sm:text-sm font-medium"
                                  />
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            
          );
        })
      )}
      </div>
    </div>
  );
  
};

export default BirthdaysAndAnniversariesPage;



// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import { Badge } from 'primereact/badge';
// import axios from 'axios';
// import annivarsaryGif from "../data/icons8-confetti.gif";
// import birthdayGif from "../data/icons8-happy-birthday.gif";
// import { AiOutlineFrown } from 'react-icons/ai';
// import { MdFiberNew } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import TodayEventsModal from '../Components/TodayEventsModal';

// const BirthdaysAndAnniversariesPage = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
//   const [dailyEvents, setDailyEvents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const apiUrl = process.env.REACT_APP_API_URL;

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/users/all`);
//         setEmployees(response.data.users);
//       } catch (err) {
//         setError('Error loading employee data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEmployees();
//   }, [apiUrl]);

//   const isEmployeeActive = (employee) => employee.status === "Active";

//   const groupEvents = (employees, year) => {
//     const allEvents = [];

//     employees
//       .filter(isEmployeeActive)
//       .forEach((employee) => {
//         const birthday = employee.dateOfBirth ? new Date(employee.dateOfBirth) : null;
//         const anniversary = employee.dateOfJoining ? new Date(employee.dateOfJoining) : null;

//         if (birthday) {
//           const birthdayThisYear = new Date(year, birthday.getMonth(), birthday.getDate());
//           allEvents.push({
//             type: 'Birthday',
//             name: employee.fullName,
//             id: employee.id,
//             date: birthdayThisYear,
//             formattedDate: format(birthdayThisYear, 'd MMM yyyy')
//           });
//         }

//         if (anniversary) {
//           const anniversaryThisYear = new Date(year, anniversary.getMonth(), anniversary.getDate());
//           const yearsWorked = year - anniversary.getFullYear();

//           if (yearsWorked >= 1) {
//             allEvents.push({
//               type: 'Anniversary',
//               name: employee.fullName,
//               id: employee.id,
//               date: anniversaryThisYear,
//               years: yearsWorked,
//               formattedDate: format(anniversaryThisYear, 'd MMM yyyy')
//             });
//           }
//         }
//       });

//     return allEvents.sort((a, b) => a.date - b.date);
//   };

//   const splitEventsAroundToday = (events) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const future = [];
//     const todayList = [];
//     const past = [];

//     events.forEach((event) => {
//       const eventDate = new Date(event.date);
//       eventDate.setHours(0, 0, 0, 0);

//       if (eventDate.getTime() === today.getTime()) {
//         todayList.push(event);
//       } else if (eventDate > today) {
//         future.push(event);
//       } else {
//         past.push(event);
//       }
//     });

//     return [...future.reverse(), ...todayList, ...past];
//   };

//   const eventsThisYear = groupEvents(employees, selectedYear);
//   const allEvents = splitEventsAroundToday(eventsThisYear);

//   useEffect(() => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const todayFormatted = format(today, 'd MMM yyyy');

//     const todayEvents = eventsThisYear.filter(
//       (event) => format(event.date, 'd MMM yyyy') === todayFormatted
//     );

//     setDailyEvents((prev) => (
//       JSON.stringify(prev) !== JSON.stringify(todayEvents) ? todayEvents : prev
//     ));
//   }, [employees, selectedYear]);

//   const groupedByMonth = allEvents.reduce((acc, event) => {
//     const monthYear = format(event.date, 'MMMM yyyy');
//     if (!acc[monthYear]) {
//       acc[monthYear] = [];
//     }
//     acc[monthYear].push(event);
//     return acc;
//   }, {});

//   return (
//     <div className="px-4 py-6 bg-gradient-to-r from-blue-100 to-teal-100 min-h-screen">
//       <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-6 shadow-lg rounded-lg bg-white">
//         <h1 className="text-4xl font-extrabold text-teal-600 mb-4 sm:mb-0 text-center sm:text-left">
//           Birthdays and Anniversaries
//         </h1>

//         <div className="flex items-center space-x-4">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-teal-600 hover:text-teal-800 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
//           >
//             ← Back
//           </button>

//           <select
//             value={selectedYear}
//             onChange={(e) => setSelectedYear(Number(e.target.value))}
//             className="p-3 border-2 border-teal-400 rounded-md bg-teal-600 text-white focus:ring-2 focus:ring-teal-400 w-36 sm:w-48"
//           >
//             {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
//               <option key={year} value={year}>{year}</option>
//             ))}
//           </select>

//           <MdFiberNew
//             className="text-3xl cursor-pointer text-teal-600 hover:scale-105 hover:text-teal-400"
//             onClick={() => setIsModalOpen(true)}
//           />
//         </div>
//       </div>

//       <div className="h-[650px] overflow-y-auto mt-6">
//         {Object.keys(groupedByMonth).map((monthYear) => (
//           <div key={monthYear}>
//             <h2 className="sticky top-0 bg-blue-300 px-3 py-2 text-lg font-bold text-white shadow-md">
//               {monthYear}
//             </h2>

//             <ul className="space-y-4 p-3">
//               {groupedByMonth[monthYear].map((event, index) => (
//                 <li key={`${event.date}-${event.type}-${event.name}-${event.id || index}`}>
//                   <p className="font-semibold text-sm sm:text-base">{format(event.date, 'd MMM yyyy')}</p>
//                   <div className="flex flex-col sm:flex-row justify-between items-center py-5 px-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
//                     <span className="text-teal-700 text-sm sm:text-base font-medium">{event.name}</span>
//                     {event.type === "Birthday" && <img src={birthdayGif} alt="Birthday" className="w-10 h-10" />}
//                     {event.type === "Anniversary" && <img src={annivarsaryGif} alt="Anniversary" className="w-10 h-10" />}
//                     <Badge value={event.type} severity={event.type === "Birthday" ? "success" : "warning"} />
//                     {event.type === "Anniversary" && <Badge value={`${event.years} Year${event.years !== 1 ? "s" : ""}`} severity="info" />}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {isModalOpen && <TodayEventsModal events={dailyEvents} onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// };

// export default BirthdaysAndAnniversariesPage;
