import React from 'react';

const Header = ({ department, title }) => (
  <div className=" mb-10 ml-4">
    <p className="text-lg text-black">{department}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
