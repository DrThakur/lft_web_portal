import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { RiUserLine, RiShoppingCartLine, RiMailLine } from "react-icons/ri";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import axios from "axios";

const InfoBox = ({ categories, title }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [tickets, setTickets] = useState([]);
//   const navigate = useNavigate();

//   const baseURL = process.env.REACT_APP_BASE_URL ||"localhost";
//   const port = process.env.REACT_APP_BACKEND_PORT || "8000";

  useEffect(() => {
    // const fetchTickets = async () => {
    //   try {
    //     const res = await axios.get(`http://${baseURL}:${port}/tickets`);
    //     console.log("My Dashboard Ticket Responses", res);
    //     setTickets(res.data);
    //   } catch (error) {
    //     console.error("Error", error);
    //   }
    // };
    // fetchTickets();
  }, []);

  useEffect(() => {
    console.log(selectedCategory); // Verify selectedCategory value on each change
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // navigate(`/${category.name.replace(/\s+/g, "-").toLowerCase()}`);
    console.log(`/${category.name.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const getRandomColor = (index) => {
    const colors = [
      "bg-green-500",
      "bg-emerald-700",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-fuchsia-600",
      "bg-cyan-600",
      "bg-slate-500",
      "bg-indigo-500",
      "bg-fuchsia-500",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };
  const getLightRandomColor = (index) => {
    const colors = [
      "bg-green-400",
      "bg-blue-400",
      "bg-orange-400",
      "bg-yellow-400",
      "bg-lime-400",
      "bg-cyan-400",
      "bg-sky-400",
      "bg-indigo-400",
      "bg-fuchsia-400",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  return (
    <div className="w-[75%] h-full ml-1 mr-0">
      <h1 className="mb-2 ml-2 mt-2 font-semibold text-2xl">{title}</h1>
      <div className="grid grid-cols-4 gap-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md flex flex-col justify-center items-center cursor-pointer p-4 pl-1 pb-6 ${
              selectedCategory.name === category.name
                ? "bg-red-700 rounded-lg"
                : getRandomColor(index)
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.count !== undefined && category.count !== null && (
              <div className="">
                <div className="">
                  {/* <span className="text-4xl text-white">{category.icon}</span> */}
                  <h3 className="font-bold text-4xl text-white transition-all duration-300 ease-in-out ">
                    {category.count}
                  </h3>
                </div>
                {category.present !== undefined &&
                  category.absent !== undefined && (
                    <div className="flex flex-col justify-start items-start mt-0 ml-4">
                      {Object.keys(category).map((key) => {
                        if (
                          key.includes("present") ||
                          key.includes("absent") ||
                          key.includes("open") ||
                          key.includes("closed") ||
                          key.includes("assigned")||
                          key.includes("remaining") ||
                          key.includes("completed")||
                          key.includes("ongoing")
                        ) {
                          return (
                            // <h2 className="text-white text-sm" key={key}>
                            //   {key.charAt(0).toUpperCase() + key.slice(1)} :
                            //   {category[key]}
                            // </h2>
                            <div className="flex items-center" key={key}>
                              <h2 className="text-white text-sm">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </h2>
                              <span className="text-white text-sm mx-1">:</span>
                              <h2 className="text-white text-sm">
                                {category[key]}
                              </h2>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}
              </div>
            )}
            <p
              className={`text-white font-bold pt-1 text-lg text-center transition-all duration-300 ease-in-out ${
                category.count === undefined ? "-mt-4" : ""
              }`}
            >
              {category.name}
            </p>
            {/*
            <div
              className={`flex flex-row justify-center items-center space-x-4 ml-2 border-t-2 text-white mt-2 -mb-6 text-center rounded-b-lg hover:font-bold ${
                selectedCategory.name === category.name
                  ? ""
                  : getRandomColor(index)
              }`}
              style={{ width: "100%" }}
            >
              <span>View All </span>
              <BsFillArrowRightCircleFill className="hover:font-bold" />
            </div>
            */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;

// flex flex-row
// flex flex-col justify-center items-center