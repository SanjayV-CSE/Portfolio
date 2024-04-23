import React from 'react'
import sanjay from '../assets/Images/sanjay.png'

const Header = () => {
  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-gray-300 from-1% via-orange-200 to-gray-300 to-1%">
        <div className="relative cursor-pointer top-3">
          <i
            className="fab fa-linkedin fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-40 left-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-html5 fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-80 left-40 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-css3-alt fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[50px] right-[420px] animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-github fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-[180px] right-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-figma fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-20 left-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-reddit-alien fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[480px] left-[400px] animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-square-js fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[480px] right-80 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-node fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-[450px] right-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-stripe fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-[250px] right-40 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-react fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-6 left-[460px] animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-npm fa-2x bg-white p-0.5 px-2 py-2 rounded rotate-12 absolute top-[480px] left-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
          <i
            className="fa-brands fa-git fa-2x bg-white p-0.5 px-2 py-2 rounded -rotate-12 absolute top-10 right-20 animate-bounce"
            style={{ color: "#4D4D4D" }}
          ></i>
        </div>
        <div className="flex flex-col justify-center items-center p-12 text-center text-black">
          <img className="w-4/12" src={sanjay} alt="" />
        
          <h1 className="text-7xl tracking-[1rem] font-SuperMario256">
            <p>HELLO, MY</p>
            <p>BEST FRIEND</p>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Header
