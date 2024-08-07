import React from "react";
import DigitalClock from "./DigitalClock";

const Header = ({ department, title }) => {
  const myDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = myDate.toLocaleDateString(undefined, options);
  return (
    <div className=" mb-10  rounded-lg p-2">
      <p className="text-lg text-black">{department}</p>
      <p className="text-3xl font-bold tracking-tight  text-teal-900">
        {title}
      </p>
      <div className="text-xl font-semibold tracking-tight text-slate-700 mt-4 flex flex-row justify-start items-center gap-4 ">
      {formattedDate}  <DigitalClock />
      </div>
    </div>
  );
};

export default Header;
