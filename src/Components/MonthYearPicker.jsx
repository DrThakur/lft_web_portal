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
import { useNavigate, useParams } from "react-router-dom";

const MonthYearPicker = () => {
    const { year, month } = useParams();
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const navigate = useNavigate("");

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
      navigate("/eos-update");
    } else {
      navigate(
        `/eos-update-month/${format(newDate, "yyyy")}/${format(newDate, "MMM")}`
      );
    }
  };

  return (
    <div className="relative mr-6 w-80">
      <div
        className="flex items-center space-x-2 p-2 border rounded cursor-pointer bg-white w-full justify-center"
        onClick={handleMonthYearClick}
      >
        <FaChevronLeft onClick={handlePreviousMonth} />
        <span>{format(currentDate, "MMM yyyy")}</span>
        <FaChevronRight
          onClick={handleNextMonth}
          className={isNextDisabled ? "text-gray-400 cursor-not-allowed" : ""}
        />
      </div>
      {showCalendar && (
        <div className="absolute mt-2 z-10">{renderCalendar()}</div>
      )}
    </div>
  );
};

export default MonthYearPicker;
