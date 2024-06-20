import React from 'react'
import sanjay from '../assets/Images/sanjay.png'

const Header = () => {
  return (
    <div>
      <div className="px-2 h-full w-full bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
        <div className="relative cursor-pointer top-3">
          <i
            className="fab fa-linkedin text-md sm:text-2xl lg:text-4xl sm:px-3 bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-44 left-2 sm:left-20 lg:left-40 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-html5 text-md sm:text-2xl lg:text-4xl sm:px-3 bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-6 right-4 sm:top-10 lg:right-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-css3-alt text-md sm:text-2xl lg:text-4xl sm:px-3 bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-6 right-40 sm:top-10 lg:right-60 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-github text-md sm:text-2xl lg:text-4xl sm:px-3 bg-white p-0.5 px-2 py-2 rounded absolute top-4 left-14 sm:top-10 sm:left-4 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-figma text-md sm:text-2xl lg:text-4xl sm:px-3 bg-white p-0.5 px-2 py-2 rounded absolute top-60 right-4 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-square-js text-md sm:text-2xl lg:text-4xl sm:px-3 bg-white p-0.5 px-2 py-2 rounded absolute top-20 left-4 sm:top-72 sm:left-4 lg:left-20 lg:top-72 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-node text-md bg-white sm:text-2xl lg:text-4xl sm:px-3 p-0.5 px-2 py-2 rounded absolute top-36 right-6 sm:right-24 sm:top-72 lg:right-36 lg:top-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-react text-md bg-white sm:text-2xl lg:text-4xl sm:px-3 p-0.5 px-2 py-2 rounded absolute top-20 left-28 sm:left-[500px] lg:top-10 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-npm text-md bg-white sm:text-2xl lg:text-4xl sm:px-3 p-0.5 px-2 py-2 rounded absolute top-4 left-44 lg:left-64 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-git text-md bg-white sm:text-2xl lg:text-4xl sm:px-3 p-0.5 px-2 py-2 rounded -rotate-12 absolute top-16 right-20 sm:top-36 lg:right-48 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
        </div>
        <div className="flex flex-col justify-center items-center p-6 text-center text-black gap-y-4">
          <img className="w-22 mt-24 sm:w-96 lg:w-[520px]" src={sanjay} alt="" />
          <h1 className="text-3xl sm:text-5xl lg:text-7xl tracking-[0.3rem] lg:tracking-[0.8rem] font-SuperMario256">
            <p>HELLO, MY <p className='text-orange-700'>BEST FRIEND</p></p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header