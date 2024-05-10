import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProjectCarousel.css"


const projects = [
  {
    id: 1,
    name: "LFT Intranet Web Portal",
    deadline: "01 Jan 2024",
    description: "Lorem ipsum...",
    manager: "John Doe",
    teams: ["Software", "Hardware", "FPGA"],
    progress: 50,
  },
  {
    id: 2,
    name: "Corvett",
    deadline: "10 Feb 2024",
    description: "Lorem ipsum...",
    manager: "Dhruv Kumar Saxena",
    teams: ["Software", "Hardware"],
    progress: 60,
  },
  {
    id: 3,
    name: "Lattice",
    deadline: "02 Apr 2024",
    description: "Lorem ipsum...",
    manager: "Vishal Sing",
    teams: ["Software", "Hardware"],
    progress: 70,
  },
  {
    id: 4,
    name: "Keysight",
    deadline: "15 May 2024",
    description: "Lorem ipsum...",
    manager: "Ankit Kumar Thakur",
    teams: ["Software", "Hardware"],
    progress: 80,
  },
  {
    id: 5,
    name: "Analyser",
    deadline: "30 June 2024",
    description: "Lorem ipsum...",
    manager: "Pardeep Kumar",
    teams: ["Software", "Hardware"],
    progress: 90,
  },
  {
    id: 6,
    name: "Debugger",
    deadline: "11 July 2024",
    description: "Lorem ipsum...",
    manager: "Fuzail Qamar",
    teams: ["Software", "Hardware"],
    progress: 95,
  },
  {
    id: 7,
    name: "Chatbot",
    deadline: "15 Aug 2024",
    description: "Lorem ipsum...",
    manager: "Vineet Goyal",
    teams: ["Software", "Hardware"],
    progress: 10,
  },
  {
    id: 8,
    name: "AI Car",
    deadline: "23 Sep 2024",
    description: "Lorem ipsum...",
    manager: "Sanjeev Kumar",
    teams: ["Software", "Hardware"],
    progress: 20,
  },
  // Add more project data as needed
];

const ProjectCarousel = ({title}) => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="">
      <div className="mb-16">
        <button
          className={`absolute top-0 right-0 bg-gray-200  p-2 rounded-full m-4 hover:bg-blue-500 hover:text-white ${
            currentSlide === rest.totalItems - 1 ? "hidden" : ""
          }`}
          onClick={() => next()}
        >
          <FaChevronRight className="h-4 w-4" />
        </button>
        <button
          className="absolute top-0 right-12 bg-gray-200 p-2 rounded-full m-4 hover:bg-blue-500 hover:text-white"
          onClick={() => previous()}
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>
      </div>
      </div>
    );
  };


  return (
    <div className="relative mt-4 rounded-lg py-10">
    <h3 className="font-bold text-xl ml-2">{title}</h3>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        itemClass="carousel-item-padding-40-px" 
        // customTransition="transform 300ms ease-in-out"
        partialVisible={true}
      >
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
        <div className="w-screen">
          <ProjectCard />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
