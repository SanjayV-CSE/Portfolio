import React, { useEffect, useRef, useState } from "react";
import Header from "./Home/Header";
import AboutMe from "./Home/AboutMe";
import Services from "./Home/Services";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Teatimonial";
import { ContactPage } from "./Home/ContactPage";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  const handleScroll = (e) => {
    if (ref && ref.current && ref.current.children[1].offsetTop < e.target.scrollTop) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  const handleMenuClick = (event, componentName) => {
    event.preventDefault();
    console.log(`${componentName} link clicked!`);
    // Implement your custom functionality here
    // For example, smooth scroll to the section:
    const component = document.getElementById(componentName);
    if (component) {
      component.scrollIntoView({ behavior: 'smooth', block:'start' });
    }
  };

  const Menu = [
    { component: 'Header', icon: 'fa-house' },
    { component: 'AboutMe', icon: 'fa-user' },
    { component: 'Projects', icon: 'fa-paper-plane' },
    { component: 'Services', icon: 'fa-users' },
    { component: 'ImageSlider', icon: 'fa-medal' },
    { component: 'Testimonial', icon: 'fa-comments' },
  ];

  return (
    <div className="relative">
      {showMenu && (
        <div className="absolute bottom-[20px] right-[24px]">
          <div className="bg-white rounded-lg ">
            <ul className="p-3 h-72 space-y-6">
              {Menu.map((menuItem, index) => (
                <li className="cursor-pointer" key={index}>
                  <a href={`#${menuItem.component}`} onClick={(e) => handleMenuClick(e, menuItem.component)}>
                    <i className={`fa-solid ${menuItem.icon} fa-md`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div
        className="sm:h-auto sm:w-auto"
        ref={ref}
        onScroll={handleScroll}
      >
        <div id="Header"><Header /></div>
        <div id="AboutMe"><AboutMe /></div>
        <div id="Projects"><Projects /></div>
        <div id="Services"><Services /></div>
        <div id="Testimonial"><Testimonial /></div>
        <div id="ContactPage"><ContactPage /></div>
      </div>
    </div>
  );
};

export default App;
