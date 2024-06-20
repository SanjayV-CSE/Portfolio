import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../assets/Images/ImageSlider/slider1.png";
import slider2 from "../assets/Images/ImageSlider/slider2.png";
import slider3 from "../assets/Images/ImageSlider/slider3.png";
import slider4 from "../assets/Images/ImageSlider/slider4.png";
import slider5 from "../assets/Images/ImageSlider/slider5.png";
import slider6 from "../assets/Images/ImageSlider/slider6.png";
import slider7 from "../assets/Images/ImageSlider/slider7.png";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjusted to show 4 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <br />
      <div className="flex flex-col justify-center items-center px-6">
        <h1 className="text-xl lg:text-4xl font-PallyBold mt-10 text-center">
          TOP PROJECTS TO<br /> CLIENTS <i class="fa-solid fa-medal lg:text-3xl"></i>
        </h1>
        <h2 className="text-sm lg:text-xl font-Pally">What they like actually ?</h2>
      </div>
      <Slider {...settings} className="w-94 mt-10 space-x-4">
        <div>
          <img src={slider5} alt="" />
        </div>
        <div>
          <img className="w-52" src={slider1} alt="" />
        </div>
        <div>
          <img src={slider2} alt="" />
        </div>
        <div>
          <img src={slider7} alt="" />
        </div>
        <div>
          <img src={slider4} alt="" />
        </div>

        <div>
          <img src={slider6} alt="" />
        </div>
        <div>
          <img src={slider3} alt="" />
        </div>
      </Slider>
      <div className="flex justify-center items-center mt-12">
        <button className="w-30 font-Jersey text-xl tracking-widest bg-orange-600 rounded px-3 py-2 text-white shadow-md shadow-black left-2">
          <a href="https://www.behance.net/sanjayv2003" target="_blank">
            View More
          </a>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
