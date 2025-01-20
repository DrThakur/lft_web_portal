import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AwardRecognition.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AwardCard from "./AwardsCard";
import star from "../data/hand-star.jpg";

const AwardsRecognition = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div className="relative w-full h-full ">
      {/* Navigation buttons */}
      <div className="flex flex-row justify-between items-center absolute top-1/2 z-10 w-full -mt-8 px-3 md:px-10">
        <button
          className="button rounded-full p-2 text-white shadow"
          onClick={previous}
        >
          <IoIosArrowBack className="text-3xl sm:text-4xl md:text-5xl" />
        </button>

        <button
          className="button rounded-full shadow p-2 text-white"
          onClick={next}
        >
          <IoIosArrowForward className="text-3xl sm:text-4xl md:text-5xl" />
        </button>
      </div>

      {/* Slider */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="rounded-lg w-full h-full shadow-lg bg-red-300"
      >
        {/* Slide 1 */}
        <div>
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
           image="https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="John Doe"
            userRole="Software Engineer"
            userDepartment="IT Department"
            awardDetails="Employee of the Month"
            frameImage={star}
          />
        </div>

        {/* Slide 2 */}
        <div>
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="Jane Smith"
            userRole="Sales Manager"
            userDepartment="Sales Department"
            awardDetails="Best Salesperson"
            frameImage={star}
          />
        </div>

        {/* Slide 3 */}
        <div>
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="Jane Smith"
            userRole="Sales Manager"
            userDepartment="Sales Department"
            awardDetails="Top Performer"
            frameImage={star}
          />
        </div>

        {/* More slides... */}
      </Slider>
    </div>
  );
};

export default AwardsRecognition;
