import React, { useEffect } from "react";
import service_img from "../assets/Images/service_img.jpg";
import ImageSlider from "./ImageSlider";

const Services = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const boxes = document.querySelectorAll(".parallax");

      boxes.forEach((box) => {
        const boxX = box.offsetLeft + box.offsetWidth / 2;
        const boxY = box.offsetTop + box.offsetHeight / 2;

        const moveX = (mouseX - boxX) / 20;
        const moveY = (mouseY - boxY) / 20;

        box.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="p-5 h-full bg-gradient-to-r from-gray-300 from-1% via-orange-100 to-gray-300 to-1%">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-4xl font-PallyBold mt-2 lg:mt-20">
            MY SERVICES <i class="fa-solid fa-users lg:text-3xl ml-2"></i>
          </h1>
          <h2 className="text-sm lg:text-xl font-Pally">What I provide ?</h2>
        </div>
        <br />

      <div className="flex max-md:flex-col md:gap-x-10 justify-center items-center ">
        <div>
          <div>
            <div>
              <h1 className="bg-white p-2 text-md lg:text-xl w-48 lg:w-56 rounded-lg font-PallyBold tracking-wider">
                GRAPHIC DESIGN <i class="fa-solid fa-palette ml-2 fa-lg"></i>{" "}
              </h1>
              <p className="leading-7 lg:leading-8 text-sm lg:text-xl">
                Transform your <b>BRAND IDENTITY</b> with my Graphic
                Design services. From captivating <b>LOGOS</b> to stunning
                <b> Flyers</b>.{" "}
                <a href="https://www.behance.net/sanjayv2003/services" target="_blank">
                  <i class="fa-solid fa-up-right-from-square fa-lg fa-beat ml-2 text-orange-600"></i>
                </a>{" "}
              </p>
            </div>
<br />
            <div className="gap-y-2">
              <h1 className="bg-white p-2 text-md lg:text-xl w-44 lg:w-52 rounded-lg font-PallyBold tracking-wider">
                UI/UX DESIGN <i class="fa-brands fa-figma ml-2 fa-lg"></i>{" "}
              </h1>
              <p className="leading-7 lg:leading-8 text-sm lg:text-xl">
                Satisfy your <b>IDEA</b> with my <b>UI/UX Design</b>. I
                make seamless user experiences to ensure every interaction, it make your digital platform is
                memorable
                <a href="https://www.behance.net/sanjayv2003/services" target="_blank">
                  <i class="fa-solid fa-up-right-from-square fa-lg fa-beat ml-2 text-orange-600"></i>
                </a>
              </p>
            </div>
<br />
            <div className="gap-y-2">
              <h1 className="bg-white p-2 text-md lg:text-xl w-64 lg:w-80 rounded-lg font-PallyBold tracking-wider">
                CONTENT MAINTENANCE{" "}
                <i class="fa-regular fa-lg fa-clipboard ml-2"></i>{" "}
              </h1>
              <p className="leading-7 lg:leading-8 text-sm lg:text-xl">
                I keep your content <b>FRESH</b> and <b>RELEVANT</b>, to your data. Whether it's managing{" "}
                Social Media Profiles or Creating Blog Posts.
              </p>
            </div>
          </div>
        </div>
        <br />
          <div>
              <img className="w-72 md:w-[600px] lg:w-[750px] rounded-lg" src={service_img} alt=""/>
          <div className="relative" id="parallax-container">
           <div className="absolute w-38 left-4 bottom-44 bg-white rounded border-[1.5px] border-black p-2 parallax content-box hover:z-10">
            <h1 className="text-xs lg:text-lg">
              <b>GRAPHIC DESIGN</b>  <i className="fa-solid fa-square-check"></i>
            </h1>
           </div>

           <div className="absolute -bottom-2 w-30 left-10 bg-white rounded border-[1px] border-black p-2 parallax content-box z-0">
            <h1 className="text-xs lg:text-lg">
              <b>UI/UX DESIGN</b> <i className="fa-solid fa-square-check"></i>
            </h1>
           </div>
           
           <div className="absolute bottom-24 w-46 bg-white rounded border-[1px] border-black p-2 parallax content-box z-0">
            <h1 className="text-xs lg:text-lg">
              <b>CONTENT MAINTENANCE</b> <i className="fa-solid fa-square-check"></i>
            </h1>
           </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center items-center">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Services;