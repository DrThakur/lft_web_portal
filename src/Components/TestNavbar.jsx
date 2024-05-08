import React, { useState } from 'react';

const TestNavbar = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My App</span>
      </div>
      <div className="block">
        <button
          onClick={toggleSubMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          Menu
        </button>
      </div>
      <div
        className={`${
          isSubMenuVisible ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </a>
          <div className="relative mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <span onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
              Services
            </span>
            {isSubMenuVisible && (
              <div className="absolute z-10 bg-white py-2 px-4 mt-2 shadow-lg">
                <a
                  href="#service1"
                  className="block mt-1 text-gray-900 hover:bg-gray-200 rounded-md py-1 px-2"
                >
                  Service 1
                </a>
                <a
                  href="#service2"
                  className="block mt-1 text-gray-900 hover:bg-gray-200 rounded-md py-1 px-2"
                >
                  Service 2
                </a>
                <a
                  href="#service3"
                  className="block mt-1 text-gray-900 hover:bg-gray-200 rounded-md py-1 px-2"
                >
                  Service 3
                </a>
              </div>
            )}
          </div>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TestNavbar;
