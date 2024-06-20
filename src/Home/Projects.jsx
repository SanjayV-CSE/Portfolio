import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="px-12 h-full bg-gradient-to-r from-gray-300 from-1% via-orange-100 to-gray-300 to-1%">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-PallyBold mt-2 lg:mt-20 ">
            MY PROJECTS <i class="fa-solid text-md lg:text-3xl fa-paper-plane ml-2"></i>
          </h1>
          <h2 className="text-sm lg:text-xl font-Pally">What I contribute ?</h2>
        </div>
        <br />
        <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex justify-center items-center bg-white p-2 rounded-lg font-PallyBold tracking-wider">
          <h1 className="text-md lg:text-xl">
            DEVELOPMENT <i class="fa-solid ml-2 fa-code fa-lg"></i>
          </h1>
        </div>
        <div className="flex justify-center max-md:flex-col md:flex-wrap md:gap-x-4 lg:gap-x-8 gap-y-4">
          <div className="bg-white p-3 w-72 rounded">
            <h1 className="font-PallyBold text-md lg:text-2xl">HOME PAGE</h1>
            <p className="text-sm lg:text-lg">
              Simple landing page, that contains simple animation of bounce and
              glow effect when click the button.
            </p>
           <div>
            <a
                href="https://6598b15f4826247c5319b62f--incredible-vacherin-46aa63.netlify.app/"
                target="_blank"
              >
                <i class="fa-solid fa-up-right-from-square fa-sm lg:text-xl"></i>
              </a>
              <a
                href="https://github.com/SanjayV-CSE/Home-page"
                target="_blank"
              >
                <i class="fa-brands fa-github ml-3 lg:text-xl"></i>
              </a>
           </div>
          </div>

          <div className="bg-white p-3 w-72 rounded gap-y-2">
            <h1 className="font-PallyBold text-md lg:text-2xl">TOMATO</h1>
            <p className="text-sm lg:text-lg">
              I developed the food ordering landing page for TOMATO using React.
            </p>
            <div>
              <a
                href="https://github.com/SanjayV-CSE/Tomato-FullStack"
                target="_blank"
              >
                <i class="fa-brands fa-github ml-3 lg:text-xl"></i>
              </a>
            </div>
          </div>

          <div className="bg-white p-3 w-72 rounded gap-y-2">
            <h1 className="font-PallyBold text-md lg:text-2xl">TOGGLE-LIGHT</h1>
            <p className="text-sm lg:text-lg">
              The toggle light is an interactive interface that enables users to
              switch a virtual light on or off.
              <div>
              <a
                href="https://toggle-lamp-homepage-dnk5.vercel.app/"
                target="_blank"
              >
                <i class="fa-solid fa-up-right-from-square fa-sm lg:text-xl"></i>
              </a>
              <a
                href="https://github.com/SanjayV-CSE/Toggle-lamp-Homepage"
                target="_blank"
              >
                <i class="fa-brands fa-github ml-3 lg:text-xl"></i>
              </a>
              </div>
            </p>
          </div>

        </div>
          
        </div>

        {/* Design Projects */}
        <div className="mt-10 gap-y-4 flex flex-col justify-center items-center">
        <div>
          <h1 className="bg-white p-2 text-lg lg:text-xl rounded-lg font-PallyBold tracking-wider">
            DESIGNS <i class="fa-brands fa-figma ml-2 lg:text-xl"></i>
          </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-y-4 md:gap-x-4 lg:gap-x-8 max-md:flex-col">
          <div className="bg-white p-3 w-72 rounded gap-y-2">
            <h1 className="font-PallyBold text-md lg:text-2xl">AMENITY-MANAGEMENT</h1>
            <p className="text-sm lg:text-lg">
              AMS offers for managing amenities in apartments, offices, and
              hotels, ensuring usability for administrators and residents.
            </p>
            <div>
            <a
                href="https://www.behance.net/gallery/196302153/UIUX-Design-Amenity-Management-System"
                target="_blank"
              >
                <i class="fa-brands fa-square-behance fa-xl lg:text-2xl"></i>
              </a>
              <a
                href="https://www.figma.com/file/Ws2PPsLxhPuX7zv2bESDtN/Amenity-Management-System?type=design&node-id=0%3A1&mode=design&t=BDdi006P5XJZb6Ca-1"
                target="_blank"
              >
                <i class="fa-brands fa-figma fa-xl ml-2"></i>
              </a>
            </div>
          </div>

          <div className="bg-white border-1 border-black flex flex-col justify-start items-start p-3 w-72 rounded gap-y-2">
            <h1 className="font-PallyBold text-md lg:text-2xl">LANDING PAGE - SHOP</h1>
            <p className="text-sm lg:text-lg">
              Simple landing page, that contains simple animation of bounce and
              glow effect when click the button.
            </p>
            <div>
              <a
                href="https://www.behance.net/gallery/196327207/UIUX-Shopping-App-landing-page"
                target="_blank"
              >
                <i class="fa-brands fa-square-behance fa-xl"></i>
              </a>
              <a
                href="https://www.figma.com/file/TbV1XDfBpDu37qV3nqYc52/Shopping-Website-(Community)?type=design&node-id=2%3A2&mode=design&t=BDdi006P5XJZb6Ca-1"
                target="_blank"
              >
                <i class="fa-brands fa-figma fa-xl ml-2"></i>
              </a>
            </div>
          </div>

          <div className="bg-white border-1 border-black flex flex-col justify-start items-start p-3 w-72 rounded gap-y-2">
            <h1 className="font-PallyBold text-md lg:text-2xl">TABLEFIT</h1>
            <p className="text-sm lg:text-lg">
              Simple landing page, that contains simple animation of bounce and
              glow effect when click the button.
            </p>
            <div>
            <a
                href="https://www.figma.com/file/D75uilZCT0ohsu8fqRMlC9/TT---Design?type=design&node-id=161%3A119&mode=design&t=BDdi006P5XJZb6Ca-1"
                target="_blank"
              >
                <i class="fa-brands fa-figma fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
