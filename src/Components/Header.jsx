import React from "react";
import DigitalClock from "./DigitalClock";

const Header = ({ department, title }) => {
  const myDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = myDate.toLocaleDateString(undefined, options);

  return (
    <div className="mb-1 lg:mb-2 rounded-lg py-1 lg:py-2 px-3 mt-1">
      <p className="text-sm sm:text-base md:text-lg text-black ">{department}</p>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-teal-900">
        {title}
      </p>
      <div className="text-sm sm:text-base md:text-xl font-semibold tracking-tight text-slate-700 mt-1 lg:mt-2 flex flex-row justify-start items-center gap-4">
        {formattedDate} <DigitalClock />
      </div>
    </div>
  );
};

export default Header;
