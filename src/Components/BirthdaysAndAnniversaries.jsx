import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Badge } from "primereact/badge";
import { useNavigate } from "react-router-dom";
import annivarsaryGif from "../data/icons8-confetti.gif";
import birthdayGif from "../data/icons8-happy-birthday.gif";
import axios from "axios";
import "./BirthdayAnniversary.css";

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
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEosData();
  }, [apiUrl]);

  const getCurrentMonthEmployees = () => {
    if (!employees) return [];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    return employees.filter((employee) => {
      const birthdayMonth = new Date(employee.dateOfBirth).getMonth() + 1;
      const hireDateMonth = new Date(employee.dateOfJoining).getMonth() + 1;
      return birthdayMonth === currentMonth || hireDateMonth === currentMonth;
    });
  };

  const currentMonthEmployees = getCurrentMonthEmployees();
  const groupedEvents = {};

  currentMonthEmployees.forEach((employee) => {
    const birthdayDate = employee.dateOfBirth ? new Date(employee.dateOfBirth) : new Date(); // Fallback to current date
    if (isNaN(birthdayDate)) {
      console.error("Invalid date value:", employee.dateOfBirth);
    } else {
      console.log("Valid date:", birthdayDate);
    }
    
    const anniversaryDate = new Date(employee.dateOfJoining);

    const birthdayKey = format(birthdayDate, "dd MMM");
    const anniversaryKey = format(anniversaryDate, "dd MMM");

    // Merged condition for grouping events
    if (new Date().getMonth() + 1 === birthdayDate.getMonth() + 1) {
      if (!groupedEvents[birthdayKey]) {
        groupedEvents[birthdayKey] = [];
      }
      groupedEvents[birthdayKey].push({
        type: "Birthday",
        name: employee.fullName,
      });
    }

    if (new Date().getMonth() + 1 === anniversaryDate.getMonth() + 1) {
      if (!groupedEvents[anniversaryKey]) {
        groupedEvents[anniversaryKey] = [];
      }
      groupedEvents[anniversaryKey].push({
        type: "Anniversary",
        name: employee.fullName,
        years: new Date().getFullYear() - anniversaryDate.getFullYear(),
      });
    }
  });

  const displayedDates = Object.entries(groupedEvents).sort(
    (a, b) => new Date(a[0]) - new Date(b[0])
  );

  const handleViewAll = () => {
    // navigate("/test13")
  };

  // Handling screen size change
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isWithinRange = (screenSize <=371) || (screenSize >= 766 && screenSize <= 854) || (screenSize >= 1536 && screenSize <= 1897);

  return (
    <div className="p-4 w-full bg-white rounded-lg shadow-lg max-h-96 min-h-96">
      {/* Conditionally render styles based on screen size */}
      <h1
        className={`${
          screenSize <= 371 ? "py-0  min-h-16" : isWithinRange ? "py-1 min-h-20" : "py-2 min-h-10"
  } flex items-center text-base sm:text-lg md:text-2xl lg:text-lg font-bold mb-4 bg-purple-200 px-3 rounded-lg`}
      >
        Birthdays and Anniversaries
      </h1>


      <div className={`${
          isWithinRange ? "max-h-60 min-h-60" : "max-h-64 min-h-64"
        }space-y-4  overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 
        scrollbar-track-transparent overflow-x-auto lg:overflow-x-hidden lg:hover:overflow-x-auto`}>
        <ul className="space-y-1 p-1">
          {displayedDates.map(([date, events]) => (
            <li key={date}>
              <p className="font-semibold text-sm sm:text-base md:text-lg">{date}</p>
              <ul className="ml-2">
                {events.map((event) => (
                  <li key={`${date}-${event.type}-${event.name}`}>
                    <div className="flex flex-row justify-start gap-2 w-full">
                      <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">
                        {event.name}
                      </span>
                      <span>
                        <Badge
                          value={event.type}
                          severity={event.type === "Birthday" ? "success" : "warning"}
                          className="text-xs sm:text-sm"
                        ></Badge>
                      </span>
                      {event.type === "Anniversary" && (
                        <span>
                          <Badge
                            value={`${event.years} Year${event.years !== 1 ? "s" : ""}`}
                            severity="info"
                            className="text-xs sm:text-sm"
                          ></Badge>
                        </span>
                      )}
                      <span>
                        {event.type === "Birthday" && (
                          <img
                            src={birthdayGif}
                            alt="🎉"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 "
                          />
                        )}
                      </span>
                      <span>
                        {event.type === "Anniversary" && (
                          <img
                            src={annivarsaryGif}
                            alt="🎂"
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                          />
                        )}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* View all button */}
      <div className={`${
          isWithinRange ? "mt-1 " : "mt-4 "
        }text-center `}>
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

export default BirthdaysAndAnniversaries;
