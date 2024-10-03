import React from 'react';
import Logo from '../assets/FooterLogo.png';

const Footer = () => {
  return (
    <div className='relative z-50' >
      <div className='bg-[#E7B472] flex flex-col md:flex-row justify-between items-center text-[#0f0f19] h-auto md:h-20 py-4 md:py-0 z-100'>
      <div className='flex flex-col ml-5 md:ml-10 justify-center items-center mb-4 md:mb-0'>
        <p className='font-abril-fatface text-lg md:text-xl'>Gateways 2024</p>
        <p className='font-bilbo-swap-caps text-sm md:text-base ml-0 md:ml-2'>techOlympus</p>
      </div>
      <div className='md:flex hidden justify-center gap-5 md:gap-20 font-abril-fatface items-center space-x-0 md:space-x-4 mb-4 md:mb-0'>
        <a href="#events" className="block py-2 text-sm md:text-base">Events</a>
        <a href="#about" className="block py-2 text-sm md:text-base">About</a>
        <a href="#gallery" className="block py-2 text-sm md:text-base">Gallery</a>
      </div>
      <div className='mr-5 md:mr-10'>
        <img src={Logo} alt='FooterLogo' className="h-12 md:h-16 hidden md:block" />
      </div>
    </div>
    </div>
  );
};

export default Footer;
