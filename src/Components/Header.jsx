import React from "react";
import DigitalClock from "./DigitalClock";

const Header = ({ department, title }) => {
  const myDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = myDate.toLocaleDateString(undefined, options);
  return (
    <div className=" mb-10 ml-2 bg-yellow-400 rounded-lg p-2">
      <p className="text-lg text-black">{department}</p>
      <p className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </p>
      <p className="text-xl font-semibold tracking-tight text-slate-500 mt-4 flex flex-row justify-start items-center gap-4">
      {formattedDate}  <DigitalClock />
      </p>
    </div>
  );
};

export default Header;
