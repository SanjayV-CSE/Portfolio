import React from 'react'
import sanjay from '../assets/Images/SanjayAboutMe.jpg'

const AboutMe = () => {
  return (
    <div>
      <div className="px-12 h-screen bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-PallyBold mt-10">ABOUT ME <i className="fa-solid fa-user"></i></h1>
        <h2 className='text-1xl font-Pally'>My Introduction</h2>
        </div>
        <div className='flex justify-center space-x-20 mt-10'>
            <img className='w-72 ml-8' src={sanjay} alt="my-image" />
            <p className='w-94 text-lg'>
              <div className='flex space-x-28 justify-center items-center'>
                <div className='flex-col space-y-5 bg-white rounded p-6 border-[1px] border-gray-950 flex justify-center items-center'>
                <i class="fa-brands fa-figma fa-xl"></i>
                <h1>UI/UX Designer</h1>
                </div>
                <div className='flex-col space-y-5 bg-white rounded p-6 border-[1px] border-gray-950 flex justify-center items-center'>
                <i class="fa-solid fa-code fa-xl"></i>
                <h1>Frontend Developer</h1>
                </div>
              </div>
              <br />
              I'm a Designer with expertise in UI/UX and Graphic design. I've successfully completed over 10 projects for 4+ satisfied clients as a freelancer. 
              My passion lies in crafting scalable and exceptional user interfaces with modern technologies. I'm eager to collaborate on innovative design solutions!
              <br />
              <br />
              <button className='font-Jersey text-2xl tracking-wider bg-orange-600 rounded p-3 text-white shadow-wider'>Say hello <i class="fa-solid fa-hands-clapping"></i> </button>
            </p>

        </div>

      </div>
    </div>
  )
}

export default AboutMe
