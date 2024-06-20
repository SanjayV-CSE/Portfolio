import React from "react";
import sanjay from "../assets/Images/SanjayAboutME.jpg";
import Resume from "../assets/Images/SanjayResume.png";
const AboutMe = () => {
  return (
    <div>
      <div className="px-4 h-full bg-gradient-to-r from-gray-300 from-1% via-orange-100 to-gray-300 to-1%">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-PallyBold mt-2 lg:mt-20">
            ABOUT ME <i className="fa-solid fa-user text-md lg:text-3xl ml-2"></i>
          </h1> 
          <h2 className="text-sm lg:text-xl font-Pally">My Introduction</h2>
        </div>
         
        <div className="flex flex-col justify-center items-center mt-4 sm:flex-row sm:gap-x-10 sm:mt-8 lg:gap-x-6">  
          <div>
              <img className="w-52 sm:w-[720px] lg:w-[980px] shadow-2xl rounded-lg hover:shadow-orange-700" src={sanjay} alt="my-image" />
          </div>
          <br />

          <div className="">
           <div className="gap-y-2 flex max-lg:flex-col lg:gap-x-10 justify-content items-center">
              <div className="gap-x-5 bg-white rounded p-2 text-md border-[1px] border-gray-950">
                <h1 className="text-xs md:text-sm lg:text-lg"><i class="fa-brands fa-figma fa-md"></i> <b>UI/UX Designer</b></h1>
              </div>

              <div className="gap-x-5 bg-white rounded p-2 text-md border-[1px] border-gray-950">
                <h1 className="text-xs md:text-sm lg:text-lg"><i class="fa-solid fa-code fa-md"></i> <b>Frontend Developer</b></h1>
              </div>
           </div>
           <br />
           <p className="text-sm md:text-base lg:text-2xl">
            A person who can <b>Design</b> and <b>Develop</b> web interfaces, with expertise in UI/UX and Graphic design. 
            Have successfully completed over <b>10</b> design projects for <b>4+</b> satisfied clients as
            a <b>Freelancer</b>. I'm eager to collab with new peoples 🤩.
            <br />
            <br />
            <div className="flex gap-x-8">
            <a href="https://wa.me/+919597588914" target="_blank" ><button className="w-30 font-Jersey text-xl lg:text-3xl tracking-widest bg-orange-600 rounded px-3 py-2 text-white shadow-md shadow-black">
              Say hello <i class="fa-solid fa-hands-clapping"></i>{" "}
            </button></a>
            <a href={Resume} download><button className="w-30 font-Jersey text-xl lg:text-3xl tracking-widest bg-orange-600 rounded px-3 py-2 text-white shadow-md shadow-black">
              Resume <i class="fa-solid fa-download"></i>{" "}
            </button></a>
            </div>
           </p>
          </div>
          
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AboutMe;
