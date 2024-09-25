import React from 'react';
import { motion } from 'framer-motion';
import OliveLeaf from '../assets/OliveLeaf.png';
import HeroLeft from '../assets/HeroLeft.png';
import HeroRight from '../assets/HeroRight.png';

const Hero = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className='bg-[#0f0f19] text-[#e7b472] flex flex-col justify-center items-center h-[100vh] md:h-[150vh] relative overflow-hidden'>
      <motion.h1 className='font-abril-fatface text-[40px] sm:text-[50px] md:text-[80px] mt-10 md:mt-20 z-10'>
        {splitText("Gateways 2024")}
      </motion.h1>
      
      <motion.h2
        className='font-bilbo-swap-caps text-[50px] sm:text-[65px] md:text-[100px] z-10'
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 1, delay: 1.5 }}
      >
        techOlympus
      </motion.h2>

      <img 
        src={HeroLeft} 
        alt='Hero Image'  
        className='absolute h-[200px] sm:h-[400px] md:h-[600px] left-0 bottom-0 translate-y-[-60px]' 
      />
      <img 
        src={HeroRight} 
        alt='Hero Image'  
        className='absolute h-[200px] sm:h-[400px] md:h-[600px] right-0 top-10' 
      />

      <div className='flex flex-col items-center font-abril-fatface'>
        <div className='translate-y-[20px] sm:translate-y-[50px] md:translate-y-[85px]'>
          <p className='text-[30px] sm:text-[40px]'>30</p>
          <p className='text-[15px] sm:text-[20px]'>years</p>
        </div>

        <img 
          src={OliveLeaf} 
          alt='Olive Leaf' 
          className='h-[80px]  w-[100px] sm:h-[120px] sm:w-[160px] mt-2 sm:mt-4' 
        />
        
        <p className='font-bilbo-swap-caps text-[#e7b472] text-[1.2em] sm:text-[1.8em] md:text-[2em] mt-4'>
          Computer Science Department PG
        </p>
      </div>
    </div>
  );
};

export default Hero;
