import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AwardRecognition.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
        <div className="text-center">
          <h3>1</h3>
        </div>
        <div className="">
          <h3>2</h3>
        </div>
        <div className="">
          <h3>3</h3>
        </div>
        <div className="">
          <h3>4</h3>
        </div>
        <div className="">
          <h3>5</h3>
        </div>
        <div className="">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default AwardsRecognition;

