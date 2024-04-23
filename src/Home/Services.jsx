import React, { useEffect } from 'react';
import service_img from '../assets/Images/service_img.jpg';

const Services = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const boxes = document.querySelectorAll(".parallax");

      boxes.forEach(box => {
        const boxX = box.offsetLeft + (box.offsetWidth / 2);
        const boxY = box.offsetTop + (box.offsetHeight / 2);

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
      <div className="px-12 h-screen bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-3xl font-PallyBold mt-10">My Services <i class="fa-solid fa-users"></i></h1>
          <h2 className='text-1xl font-Pally'>What I provide ?</h2>
          <img className='w-96 mt-8 shadow-gray-500 shadow-2xl rounded' src={service_img} alt="" />
        </div>
        <div className='relative' id="parallax-container">
          <div className='absolute top-[-345px] left-80 bg-orange-300 rounded-lg border-[1.5px] border-black p-3 parallax content-box hover:z-10'>
            <h1>Graphic Design <i className="fa-solid fa-square-check"></i></h1>
          </div> 
          <div className='absolute top-[-220px] left-[700px] bg-white rounded-lg border-[1px] border-black p-3 parallax content-box z-0'>
            <h1>UI/UX Design <i className="fa-solid fa-square-check"></i></h1>
          </div>
          <div className='absolute top-[-90px] left-[350px] bg-white rounded-lg border-[1px] border-black p-3 parallax content-box z-0'>
            <h1>Content Maintenance <i className="fa-solid fa-square-check"></i></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
