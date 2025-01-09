import React, { useState, useEffect ,useRef} from "react";
import { BsDot } from "react-icons/bs";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import { Tooltip } from "react-tooltip";
import { ProgressBar } from "primereact/progressbar";

const ProjectCard = ({ project, toggleModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollbar, setShowScrollbar] = useState(false);

  useEffect(() => {
    let timeout;

    const handleUserInteraction = () => {
      setShowScrollbar(true); // Show scrollbar on interaction
      clearTimeout(timeout); // Clear any previous timeout
      timeout = setTimeout(() => {
        setShowScrollbar(false); // Hide scrollbar after 3 seconds
      }, 3000); // 3000ms = 3 seconds
    };

    // Add event listeners for user interaction (touch or mouse)
    const cardBody = document.querySelector('.cardBody');
    cardBody.addEventListener('touchstart', handleUserInteraction);
    cardBody.addEventListener('mousedown', handleUserInteraction);

    // Clean up event listeners when the component unmounts
    return () => {
      cardBody.removeEventListener('touchstart', handleUserInteraction);
      cardBody.removeEventListener('mousedown', handleUserInteraction);
      clearTimeout(timeout);
    };
  }, []);

  // Function to toggle description
  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to truncate description to 15 words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  // Check if description exceeds 15 words
  const words = project.projectDescription.split(" ");
  const exceedsWordLimit = words.length > 15;


  const handleToggleProjectName = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateProjectName = (projectName, wordLimit) => {
    const words = projectName.split("_");
    if (words.length <= wordLimit) {
      return projectName;
    }
    return words.slice(0, wordLimit).join("_") + "...";
  };

  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Conditional class based on windowWidth
  const containerClasses = windowWidth < 480
    ? 'flex flex-col items-center justify-center gap-1 2xl:gap-2 mt-1 mb-1'
    : windowWidth >= 480 && windowWidth <= 640
      ? 'flex flex-col xs:flex-row  justify-start xs:items-center items-center gap-1 2xl:gap-2 mb-1 mt-1'
      : windowWidth >= 640 && windowWidth < 858
        ? 'flex flex-col items-center justify-center gap-1 2xl:gap-2 mb-1'
        : windowWidth >= 858 && windowWidth < 1024
          ? 'flex flex-col xs:flex-row  justify-start xs:items-center items-center gap-1 2xl:gap-2 mb-1'
          : windowWidth >= 1024 && windowWidth < 1247
            ? 'flex flex-col items-center justify-center gap-1 2xl:gap-2 mb-1'
            : windowWidth >= 1536 && windowWidth <= 1669
              ? 'flex flex-col items-center justify-center gap-1 2xl:gap-2 mb-1'
              : 'flex flex-col xs:flex-row  justify-start xs:items-center items-center gap-1 2xl:gap-2 mt-1 mb-1'; // Default for larger screens

  
  // State for responsive number of avatars to display
  const [avatarsToShow, setAvatarsToShow] = useState(4);
  // Default to 4 avatars

  // Avatar images array
  const avatars = [
    "https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",
    "https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png",
    "https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",
    "https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png",
    "https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",
    "https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",
    "https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",
    "https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",
  ];

  // Corresponding names for each avatar
  const avatarNames = [
    "Sonia Sharma",
    "Ankit Kumar Thakur",
    "Dhruv Kumar Saxena",
    "Vineet Goyal",
    "Pradeep Kumar",
    "Fuzail Qamar",
    "Abdul",
    "Sanjeev Kumar",
  ];

  // Function to toggle the modal visibility
  const handleAvatarClick = () => {
    // Trigger the modal to open with all avatars and names
    toggleModal(avatars, avatarNames);
  };

  // Effect hook to update the number of avatars based on window size
  useEffect(() => {
    const updateAvatarsToShow = () => {
      const width = window.innerWidth;

      if (width >= 1024) { // large screen
        setAvatarsToShow(6);
      } else if (width >= 768) { // medium screen
        setAvatarsToShow(5);
      } else { // small screen
        setAvatarsToShow(4);
      }
    };

    // Run on component mount and window resize
    updateAvatarsToShow();
    window.addEventListener("resize", updateAvatarsToShow);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", updateAvatarsToShow);
    };
  }, []);



  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

  const tooltipTimer = useRef(null);

  const handleAvatarTouchStart = (name) => {
    tooltipTimer.current = setTimeout(() => {
      setIsTooltipVisible(true);
      setTooltipContent(name);
    }, 1000);
  };
  
  const handleAvatarTouchEnd = () => {
    clearTimeout(tooltipTimer.current);
    setIsTooltipVisible(false);
    setTooltipContent("");
  };
  

  return (
    <div className="cardContainer border-2 rounded-lg shadow-lg mt-4 bg-gray-50 p-2 xs:p-3 2xl:p-4 w-[100%]  h-[384px]  lg:h-[450px] xl:h-[500px]  flex flex-col ">

      <div className="cardHeading p-2">
        <span className="flex flex-row justify-start items-center text-red-400 bg-red-50 rounded-lg w-full sm:w-[200px] font-semibold text-sm sm:text-base">
          <BsDot className="text-xl" /> Deadline : 10 Feb 2024
        </span>

        <h3 className="font-bold  text-lg md:text-xl -ml-2 overflow-wrap break-words">
          {project.projectName}
        </h3>

      </div>
      <div
        className={`cardBody flex flex-col gap-1 lg:gap-2 overflow-y-auto transition-all duration-300 [&::-webkit-scrollbar]:w-1.5 
          [&::-webkit-scrollbar-track]:rounded-full 
          [&::-webkit-scrollbar-thumb]:rounded-full 
          [&::-webkit-scrollbar-thumb]:bg-gray-300
          ${showScrollbar ? 'overflow-y-auto' : 'overflow-y-hidden'} hover:overflow-y-auto`}
        style={{
          maxHeight: '100%', // Ensure it has a max-height for scrollability
        }}
      >
        <div className="flex  rounded-lg flex-wrap ">
          <div className="flex-1 bg-blue-100 rounded-s p-1 flex flex-col justify-center items-center gap-1 max-w-full">
            <span className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {project.milestones || "N/A"}
            </span>
            <span>Milestones</span>
          </div>
          <div className="flex-1 bg-green-100 rounded-s p-1 flex flex-col justify-center items-center gap-1  max-w-full">
            <span className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {project.completed || "N/A"}
            </span>
            <span >
              Completed
            </span>
          </div>

          <div className="flex-1 bg-yellow-100 p-1 flex flex-col justify-center items-center gap-1  max-w-full">
            <span className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {project.active || "N/A"}
            </span>
            <span >
              Active
            </span>
          </div>

          <div className="flex-1 bg-red-100 rounded-e p-1 flex flex-col justify-center items-center gap-1  max-w-full">
            <span className="font-bold text-lg  sm:text-lg md:text-xl lg:text-2xl text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {project.pending || "N/A"}
            </span>
            <span >
              Pending
            </span>
          </div>
        </div>

        <div className="description flex flex-wrap gap-2">

          {isExpanded
            ? project.projectDescription
            : truncateDescription(project.projectDescription, 15)}

          {/* Only show the button if the description exceeds 14 words */}
          {exceedsWordLimit && (
            <button
              onClick={handleToggleDescription}
              className="text-blue-600 font-semibold hover:text-blue-800 text-sm sm:text-base md:text-lg"
            >
              {isExpanded ? " Read less" : "Read more"}
            </button>
          )}
        </div>


        <div className={containerClasses}>
          <h3 className="font-bold text-sm sm:text-base md:text-lg text-start">Project Manager: </h3>
          <span className="flex flex-row items-center justify-start gap-1 2xl:gap-2">
            <img
              alt="reportsTo"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              width="40"
              height="40"
              className="rounded-full"
            />
            <a
              href="/"
              className="text-blue-500 hover:text-blue-900 font-semibold text-xs sm:text-sm md:text-base"
            >
              {project.projectManager.fullName}
            </a>
          </span>
        </div>

        <div className={containerClasses}>

          <h3 className="font-bold text-sm sm:text-base md:text-lg">Teams:</h3>
          <div className="flex flex-wrap justify-start items-center gap-1 ml-8">
            {/*   {project.teams.map((team, index) => ({ team }))} */}
          </div>
        </div>

        <div className={containerClasses}>
          <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-0">Members:</h3>

          <div className="flex flex-wrap justify-start gap-2">
            {/* Tooltips for each avatar */}
            {avatars.slice(0, avatarsToShow).map((avatar, index) => (
              <Tooltip
                key={index}
                anchorSelect={`.avatar${index + 1}`}
                content={avatarNames[index]}
                style={{ borderRadius: "10px 10px" }}
              />
            ))}

            {/* Avatar Group: Show avatars based on screen size */}
            <AvatarGroup className="gap-4  lg:gap-0 lg:hover:gap-2 ">
              {/* Display avatars based on the `avatarsToShow` state */}
              {avatars.slice(0, avatarsToShow).map((avatar, index) => (
                <Avatar
                  key={index}
                  image={avatar}
                  shape="circle"
                  style={{ borderRadius: "100px" }}
                  className={`avatar${index + 1}`}
                  onTouchStart={() => handleAvatarTouchStart(avatarNames[index])}
                  onTouchEnd={handleAvatarTouchEnd}
                />
              ))}

              <div
                className="relative cursor-pointer -ml-4"
                onClick={handleAvatarClick}
              >
                {/* <Tooltip
        anchorSelect=".avatar9"  // Use the last avatar's class
        content={`+${avatars.length - avatarsToShow} More`}
        style={{ borderRadius: "10px 10px" }}
      /> */}
                <Avatar
                  label={`+${avatars.length - avatarsToShow}`}
                  shape="circle"
                  style={{
                    backgroundColor: "#9c27b0",
                    color: "#ffffff",
                    borderRadius: "100px",
                  }}
                  className="avatar9"
                />
              </div>
            </AvatarGroup>
          </div>
        </div>

        <div className="progressbar mt-2 flex flex-col gap-1 2xl:gap-2 mb-0.5">
          <h3 className={`font-bold text-sm sm:text-base md:text-lg text-center xs:text-start ${containerClasses}`}>Progress:</h3>
          <div><ProgressBar value={project.progress} showValue={true} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProjectCard;

