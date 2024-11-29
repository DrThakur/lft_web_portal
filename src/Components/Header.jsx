import React from "react";
import DigitalClock from "./DigitalClock";

const Header = ({ department, title }) => {
  const myDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = myDate.toLocaleDateString(undefined, options);
  return (
    <div className="mb-4 rounded-lg p-1">
      <p className="text-lg text-black">{department}</p>
      <p className="text-3xl font-bold tracking-tight  text-teal-900">
        {title}
      </p>
      <div className="text-xl font-semibold tracking-tight text-slate-700 mt-2 flex flex-row justify-start items-center gap-4 ">
      {formattedDate}  <DigitalClock />
      </div>
    </div>
  );
};

export default Header;
