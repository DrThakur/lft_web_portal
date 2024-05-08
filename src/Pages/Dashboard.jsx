import React from "react";
import { Header } from "../Components";

const Dashboard = () => {
  return (
    <div className="h-screen">
      <Header department="Dashboard" title="" />
      <div className="ml-2 mr-2">
        <h1>HR Dashboard</h1>
        <div className="grid grid-cols-4 gap-2 h-36">
         {/* */} 
         <div
            key=""
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
          >
            <div className="flex flex-row">
              <div className="flex flex-col justify-center items-center">
             
                <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
                  Total Employees
                </h3>
              </div>

              <div className="flex flex-col justify-start items-start mt-0 ml-4">
                <div className="flex items-center" key="">
                  <h2 className="text-white text-sm">Chat</h2>
                  <span className="text-white text-sm mx-1">:</span>
                  <h2 className="text-white text-sm">Key</h2>
                </div>
              </div>
            </div>

            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
            >
              Name
            </p>
          
          </div>


          <div
          key=""
          className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
        >
          <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center">
              {/* <span className="text-4xl text-white">{category.icon}</span> */}
              <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
                Attendance
              </h3>
            </div>

            <div className="flex flex-col justify-start items-start mt-0 ml-4">
              <div className="flex items-center" key="">
                <h2 className="text-white text-sm">Chat</h2>
                <span className="text-white text-sm mx-1">:</span>
                <h2 className="text-white text-sm">Key</h2>
              </div>
            </div>
          </div>

          <p
            className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
          >
            Name
          </p>
        
        </div>

        <div
        key=""
        className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
      >
        <div className="flex flex-row">
          <div className="flex flex-col justify-center items-center">
            {/* <span className="text-4xl text-white">{category.icon}</span> */}
            <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
              Leave Requests
            </h3>
          </div>

          <div className="flex flex-col justify-start items-start mt-0 ml-4">
            <div className="flex items-center" key="">
              <h2 className="text-white text-sm">Chat</h2>
              <span className="text-white text-sm mx-1">:</span>
              <h2 className="text-white text-sm">Key</h2>
            </div>
          </div>
        </div>

        <p
          className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
        >
          Name
        </p>
      
      </div>

      <div
      key=""
      className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
    >
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-center">
          {/* <span className="text-4xl text-white">{category.icon}</span> */}
          <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
            Job Applications
          </h3>
        </div>

        <div className="flex flex-col justify-start items-start mt-0 ml-4">
          <div className="flex items-center" key="">
            <h2 className="text-white text-sm">Chat</h2>
            <span className="text-white text-sm mx-1">:</span>
            <h2 className="text-white text-sm">Key</h2>
          </div>
        </div>
      </div>

      <p
        className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
      >
        Name
      </p>
    
    </div>

    <div
    key=""
    className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
  >
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center">
    
        <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4 ">
          New Hire
        </h3>
      </div>

      <div className="flex flex-col justify-start items-start mt-0 ml-4">
        <div className="flex items-center" key="">
          <h2 className="text-white text-sm">Chat</h2>
          <span className="text-white text-sm mx-1">:</span>
          <h2 className="text-white text-sm">Key</h2>
        </div>
      </div>
    </div>

    <p
      className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
    >
      Name
    </p>
  
  </div>
          
  <div
  key=""
  className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 bg-white`}
>
  <div className="flex flex-row">
    <div className="flex flex-col justify-center items-center">
      <h3 className="font-bold text-xl transition-all duration-300 ease-in-out -mt-4">
        Check-In
      </h3>
    </div>

    <div className="flex flex-col justify-start items-start mt-0 ml-4">
      <div className="flex items-center" key="">
        <h2 className="text-white text-sm">Chat</h2>
        <span className="text-white text-sm mx-1">:</span>
        <h2 className="text-white text-sm">Key</h2>
      </div>
    </div>
  </div>

  <p
    className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out `}
  >
    Name
  </p>

</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
