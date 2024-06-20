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
    slidesToShow: 4, // Default to show 4 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on large screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        }
      }
    ]
  };

  return (
    <div className="w-full px-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-4xl font-PallyBold mt-10 text-center">
          TOP PROJECTS TO<br /> CLIENTS <i className="fa-solid fa-medal lg:text-3xl"></i>
        </h1>
        <h2 className="text-sm lg:text-xl font-Pally">What they like actually ?</h2>
      </div>
      <Slider {...settings} className="mt-10">
        <div className="px-2">
          <img src={slider5} alt="Slider 5" className="w-full h-auto" />
        </div>
        <div className="px-2">
          <img src={slider1} alt="Slider 1" className="w-full h-auto" />
        </div>
        <div className="px-2">
          <img src={slider2} alt="Slider 2" className="w-full h-auto" />
        </div>
        <div className="px-2">
          <img src={slider7} alt="Slider 7" className="w-full h-auto" />
        </div>
        <div className="px-2">
          <img src={slider4} alt="Slider 4" className="w-full h-auto" />
        </div>
        <div className="px-2">
          <img src={slider6} alt="Slider 6" className="w-full h-auto" />
        </div>
        <div className="px-2">
          <img src={slider3} alt="Slider 3" className="w-full h-auto" />
        </div>
      </Slider>
      <div className="flex justify-center items-center mt-12">
        <button className="w-30 font-Jersey text-xl tracking-widest bg-orange-600 rounded px-3 py-2 text-white shadow-md shadow-black">
          <a href="https://www.behance.net/sanjayv2003/services" target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;