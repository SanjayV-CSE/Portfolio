import React from "react";
import women1 from "../assets/Images/Testimonial/women1.jpg";
import men1 from "../assets/Images/Testimonial/men1.jpg";
import men2 from "../assets/Images/Testimonial/men2.jpg";

const Teatimonial = () => {
  return (
    <div className="p-5 h-full bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-4xl font-PallyBold mt-3 lg:mt-20">
          TESTIMONIALS <i class="fa-solid fa-comments lg:text-3xl ml-2"></i>
        </h1>
        <h2 className="text-sm lg:text-xl font-Pally">What people think ?</h2>
      </div>

      <br />
      <div className="flex flex-wrap justify-center items-center gap-y-4 md:gap-x-4 max-md:flex-col">
        <div class="flex items-center bg-white rounded p-3 w-72">
          <div className="flex gap-x-4">
            <img src={women1} alt="P" class="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <p className="text-xs lg:text-base md:text-sm">
                Hey Sanjay! Your posters are just awesome, it increases visbility and attraction. A great experience too 😀
              </p>
              <br />
              <h1 class="text-xs lg:text-base font-Palley">
                <b>Principal of school</b>
              </h1>
            </div>
          </div>
        </div>

        <div class="flex items-center bg-white rounded p-3 w-72">
          <div className="flex gap-x-4">
            <img src={men1} alt="P" class="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <p className="text-xs lg:text-base md:text-sm">
                Your Designs are great 💥. But mainly, I get attracted with your kind approch as comparing to your works. 
              </p>
              <br />
              <h1 class="text-xs lg:text-base font-Palley">
                <b>Local Vendor</b>
              </h1>
            </div>
          </div>
        </div>

        <div class="flex items-center bg-white rounded p-3 w-72">
          <div className="flex gap-x-4">
            <img src={men2} alt="P" class="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <p className="text-xs lg:text-base md:text-sm">
                Hy man, You are just valuing the clients and also ready to re-design unitill they get satisfied!..
              </p>
              <br />
              <h1 class="text-xs lg:text-base font-Palley">
                <b>Online </b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teatimonial;
