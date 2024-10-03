import React, { useState } from 'react';
import { motion } from 'framer-motion';
import christ from '../assets/christlogo.png';
import Gatewayslogo from '../assets/Gatewayslogo.png';
import Techolympys from '../assets/Techolympuslogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50 ">
      <nav className="bg-[#0f0f19] text-[#E7B472] font-abril-fatface p-4 md:p-0 flex justify-between items-center">
        <div className="md:flex items-center space-x-2 gap-5 hidden  z-10">
          <div className="w-12 rounded-full bg-[#e7b472] flex justify-center items-center">
            <img src={Gatewayslogo} alt="Gateways Logo" />
          </div>
          <div className="w-12 rounded-full bg-[#e7b472] flex justify-center items-center">
            <img src={Techolympys} alt="Techolympys Logo" />
          </div>
        </div>

        <div className="flex items-center">
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <motion.div
              initial={false}
              animate={isMenuOpen ? 'open' : 'closed'}
              className="space-y-1"
            >
              <motion.div
                className="w-6 h-0.5 bg-[#E7B472]"
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-[#E7B472]"
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-[#E7B472]"
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>

          <div className="hidden md:flex space-x-6 justify-center gap-24">
            <a href="/events">Events</a>
            <a href="/about">About</a>
            <a href="/gallery">Gallery</a>
          </div>
        </div>

        <motion.div
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}  
          transition={{ duration: 2 }}
          className="flex items-center"
        >
          <img src={christ} alt="Christ University logo" className="h-12 w-auto" />
        </motion.div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full h-[100vh] bg-[#0f0f19] p-4 md:hidden z-20"
        >
          <a href="/events" className="block py-2 text-[#E7B472]">Events</a>
          <a href="/about" className="block py-2 text-[#E7B472]">About</a>
          <a href="/gallery" className="block py-2 text-[#E7B472]">Gallery</a>
        </motion.div>
      )}

      <div className="md:block hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-[65%] bg-[#E7B472]"></div>
    </div>
  );
};

export default Navbar;
