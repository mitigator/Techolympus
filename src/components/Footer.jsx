import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.div 
      data-aos="fade-up"
      className='relative z-50'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='bg-[#000000b7] flex-col w-full border-t border-[#e7b4727b]'>
       <div className='flex   justify-between items-center text-[#0f0f19] text-[#E7B472] h-auto md:h-20 pt-4 md:py-0 z-100'>
       <Link to="/">
        <motion.div 
          className='flex flex-col items-center justify-center mb-4 ml-5 md:ml-10 md:mb-0'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className='text-lg font-abril-fatface md:text-xl '>Gateways 2024</p>
          <p className='ml-0 text-sm font-bilbo-swap-caps md:text-base md:ml-2 text-color-animation'>techOlympus</p>
        </motion.div>
       </Link>
        
        <div className='flex mr-5 space-x-4 md:mr-10'>
          <motion.a 
            href='https://www.instagram.com/2024gateways/?igsh=MWNhdzh6YXdia3NwNg%3D%3D' 
            target='_blank' 
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="h-5 w-5 md:h-6 md:w-6 text-[#E7B472]" />
          </motion.a>
          <motion.a 
            href='https://www.linkedin.com/in/gateways2024/' 
            target='_blank' 
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="h-5 w-5 md:h-6 md:w-6 text-[#E7B472]" />
          </motion.a>
        </div>
       </div>
        <div className='py-1 bg-[#8668412b] border-t border-[#e7b4721a] text-[#E7B472] text-xs xl:text-[14px] mx-auto font-mono font-bold text-center'>Developed By <strong>Shubham</strong>, <strong>Pavitharani</strong> and <strong>Aravind</strong> 
          
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;