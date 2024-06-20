import React, { useState } from 'react';
import contactMe from '../assets/Images/contactMe.png';
import Services from './Services';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 via-orange-200 to-gray-300 px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-xl lg:text-4xl font-PallyBold mt-4 lg:mt-20">
          Let's Work Together <i className="fa-solid fa-address-book ml-2"></i>
        </h1>
        <h2 className="text-sm lg:text-xl font-Pally mt-2">Fill + ClickSend = Done ✔</h2>
      </div>
      <div className='flex flex-col gap-x-24 md:flex-row justify-center items-center p-10 mt-4 rounded bg-white'>
        <div>
        <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="2a751c73-47f4-4089-8520-d20a6d340b39" />
  
  <label className="block text-gray-700 font-bold mb-2 text-sm lg:text-xl" htmlFor="name">Name</label>
  <input className="w-full p-2 border rounded text-xs lg:text-lg" type="text" name="name" placeholder="Type your name" required />
  
  <label className="block text-gray-700 font-bold mb-2 text-sm lg:text-xl" htmlFor="email">Email</label>
  <input className="w-full p-2 border rounded text-xs lg:text-lg" type="email" name="email" placeholder="Type your email" required />
  
  <label className="block text-gray-700 font-bold mb-2 text-sm lg:text-xl" htmlFor="message">Message</label>
  <textarea className="w-full p-2 border rounded text-xs lg:text-lg" name="message" placeholder="Type your message" rows="6" required></textarea>

  <button className="w-30 font-Jersey text-xl lg:text-2xl tracking-widest bg-orange-600 rounded px-3 py-2 text-white shadow-md shadow-black left-2">
    Send <i className="fa-solid fa-hands-clapping"></i>
  </button>
</form>

        </div>
        <div>
          <img className="w-60 p-4 lg:w-96" src={contactMe} alt="Contact Me" />
            <div className='text-center flex items-center justify-center gap-x-4'>
              <div>
                <a href="https://www.linkedin.com/in/sanjayv2003" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in text-xl lg:text-4xl cursor-pointer "></i>  
                </a>
              </div>
              <div>
                <a href="https://github.com/SanjayV-CSE" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github text-xl lg:text-4xl cursor-pointer"></i>
                </a>
              </div>
              <div>
                <a href="https://www.behance.net/sanjayv2003" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-behance text-xl lg:text-4xl cursor-pointer"></i>
                </a>
              </div>
              <div>
                <a href="https://dev.to/sanjay_v" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-dev textxl lg:text-4xl cursor-pointer"></i>
                </a>
              </div>
            </div>
        </div>
      </div>
      <div className='text-center p-3'>
          <p className='text-xs lg:text-lg mt-3 mb-3'>Copyright <i class="fa-regular fa-copyright"></i> @2024 <b>SANJAY</b></p>
        </div>
    </div>

  );
};
