import React, { useEffect, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  setMonth,
  isAfter,
  isSameMonth,
  isSameYear,
  parse,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const MonthYearPicker = () => {
    const { year, month } = useParams();
    const location = useLocation();
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const navigate = useNavigate("");

  // Split the pathname by "/" and take the first two parts
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const basePath = `/${pathSegments[0]}`;


  useEffect(() => {
    if (year && month) {
      const newDate = parse(`${month} ${year}`, "MMM yyyy", new Date());
      setCurrentDate(newDate);
    }
  }, [year, month]);

  const handlePreviousMonth = (e) => {
    e.stopPropagation(); // Prevent triggering the calendar toggle
    const newDate = subMonths(currentDate, 1);
    setCurrentDate(newDate);
    handleNavigation(newDate);
  };

  const handleNextMonth = (e) => {
    e.stopPropagation(); // Prevent triggering the calendar toggle
    if (!isNextDisabled) {
      const newDate = addMonths(currentDate, 1);
      setCurrentDate(newDate);
      handleNavigation(newDate);
    }
  };

  const handleMonthYearClick = () => {
    setShowCalendar(!showCalendar);
  };

  const handleMonthSelect = (selectedMonth) => {
    const newDate = setMonth(currentDate, selectedMonth);
    setCurrentDate(newDate);
    setShowCalendar(false);
    handleNavigation(newDate);
  };

  const renderCalendar = () => {
    const months = [];
    for (let i = 0; i < 12; i++) {
      const month = new Date(currentDate.getFullYear(), i);
      const isDisabled = isAfter(month, today);
      months.push(
        <div
          key={i}
          className={`cursor-pointer p-2 rounded ${
            isDisabled
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => !isDisabled && handleMonthSelect(i)}
        >
          {format(month, "MMM yyyy")}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-3 gap-4 p-4 bg-white shadow-lg rounded">
        {months}
      </div>
    );
  };

  const isNextDisabled =
    isSameMonth(currentDate, today) && isSameYear(currentDate, today);

  const handleNavigation = (newDate) => {
    if (isSameMonth(newDate, today) && isSameYear(newDate, today)) {
      navigate(basePath);
    } else {
      navigate(
        `${basePath}/${format(newDate, "yyyy")}/${format(newDate, "MMM")}`
      );
    }
  };


  return (
    <div className="relative w-full min-w-36 sm:w-auto sm:max-w-xs ">
      <div
        className="flex items-center px-2 xs:px-4 py-2 border cursor-pointer bg-white w-full justify-center rounded-lg"
        onClick={handleMonthYearClick}
      >
        <FaChevronLeft
          onClick={handlePreviousMonth}
          className="text-xl md:text-2xl"
        />
        <span>{format(currentDate, "MMM yyyy")}</span>
        <FaChevronRight
          onClick={handleNextMonth}
          className={`text-xl md:text-2xl ${
            isNextDisabled ? "text-gray-400 cursor-not-allowed" : ""
          }`}
        />
      </div>

      {showCalendar && (
        <div className="absolute mt-2 z-10 w-full sm:w-auto sm:max-w-xs ">
          {renderCalendar()}
        </div>
      )}
    </div>
  );
};

export default MonthYearPicker;
