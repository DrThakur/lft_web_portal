import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AwardRecognition.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AwardCard from "./AwardsCard";
import star from "../data/hand-star.jpg"

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
    <div className="relative w-full h-full">
      <div className="flex flex-row justify-between items-center absolute top-1/2 z-10 w-full -mt-8">
        <button
          className="button rounded-full p-2 text-white shadow"
          onClick={previous}
        >
          <IoIosArrowBack className="text-5xl" />
        </button>

        <button
          className="button rounded-full shadow p-2 text-white "
          onClick={next}
        >
          <IoIosArrowForward className="text-5xl" />
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="rounded-lg w-full h-full shadow-lg bg-red-300"
      >
        <div>
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://t4.ftcdn.net/jpg/05/14/71/33/360_F_514713300_ge2kLA0kHcJZMJeGE3YRaK13PPH31fMY.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="John Doe"
            userRole="Software Engineer"
            userDepartment="IT Department"
            awardDetails="Employee of the Month"
            frameImage={star}
          />
        </div>
        <div className="">
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
        <div className="">
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://t4.ftcdn.net/jpg/05/14/71/33/360_F_514713300_ge2kLA0kHcJZMJeGE3YRaK13PPH31fMY.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="Jane Smith"
            userRole="Sales Manager"
            userDepartment="Sales Department"
            awardDetails="Top Performer"
            frameImage={star}
          />
        </div>
        <div className="">
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="Emily Johnson"
            userRole="Project Manager"
            userDepartment="Project Management"
            awardDetails="Top Performer"
            frameImage={star}
          />
        </div>
        <div className="">
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://img.freepik.com/free-vector/trophy-award-laurel-wreath-composition-with-realistic-image-golden-cup-decorated-with-garland-with-reflection_1284-32301.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="Emily Johnson"
            userRole="Project Manager"
            userDepartment="Project Management"
            awardDetails="Top Performer"
            frameImage={star}
          />
        </div>
        <div className="">
          <AwardCard
            userImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            image="https://t4.ftcdn.net/jpg/05/14/71/33/360_F_514713300_ge2kLA0kHcJZMJeGE3YRaK13PPH31fMY.jpg"
            imagePosition="right"
            message="Well done! We are really proud of the difference you have made which gives everybody the reason to applaud & appreciate."
            userName="Emily Johnson"
            userRole="Project Manager"
            userDepartment="Project Management"
            awardDetails="Top Performer"
            frameImage={star}
          />
        </div>
      </Slider>
    </div>
  );
};

export default AwardsRecognition;
