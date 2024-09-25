import React from 'react';
import christ from '../assets/christlogo.png'


const Navbar = () => {
  return (
    <div className="relative">
      <nav className="bg-[#0f0f19] text-[#E7B472] font-abril-fatface  p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        </div>
        <div className="flex space-x-6 justify-center gap-24 ">
          <a href="#events" >Events</a>
          <a href="#about" >About</a>
          <a href="#gallery" >Gallery</a>
        </div>
        <div className="flex items-center">
          <img src={christ} alt="Christ University logo" className="h-8 w-auto" />
        </div>
      </nav>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-[65%] bg-[#E7B472]"></div>
      </div>
  );
};

export default Navbar;