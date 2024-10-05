import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      className='relative z-50'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='bg-[#E7B472] flex  justify-between items-center text-[#0f0f19] h-auto md:h-20 py-4 md:py-0 z-100'>
        <motion.div 
          className='flex flex-col ml-5 md:ml-10 justify-center items-center mb-4 md:mb-0'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className='font-abril-fatface text-lg md:text-xl'>Gateways 2024</p>
          <p className='font-bilbo-swap-caps text-sm md:text-base ml-0 md:ml-2'>techOlympus</p>
        </motion.div>
        
        <div className='flex space-x-4 mr-5 md:mr-10'>
          <motion.a 
            href='https://www.instagram.com/2024gateways/?igsh=MWNhdzh6YXdia3NwNg%3D%3D' 
            target='_blank' 
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="h-5 w-5 md:h-8 md:w-8 text-[#0f0f19]" />
          </motion.a>
          <motion.a 
            href='https://www.linkedin.com/in/gateways2024/' 
            target='_blank' 
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="h-5 w-5 md:h-8 md:w-8 text-[#0f0f19]" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;