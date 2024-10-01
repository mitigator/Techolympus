import React from 'react';
import { motion } from 'framer-motion';
import OliveLeaf from '../assets/OliveLeaf.png';
import zeus from '../assets/zeus.svg';

const Hero = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
    <div 
    className='bg-[#0f0f19] text-[#e7b472] flex flex-col justify-center items-center h-[100vh] relative overflow-hidden bg-no-repeat bg-cover bg-center '
    style={{ backgroundImage: `url(${zeus})` , }}
    
    >
      <motion.h1 
        className='font-abril-fatface text-[40px] sm:text-[50px] md:text-[80px] mt-10 md:mt-20 z-10'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        {splitText("Gateways 2024")}
      </motion.h1>
      
      <motion.h2
        className='font-bilbo-swap-caps text-[50px] sm:text-[65px] md:text-[100px] z-10'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1, delay: 1.5 }}
      >
        techOlympus
      </motion.h2>

      <motion.div 
        className='flex flex-col items-center font-abril-fatface'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className='translate-y-[65px] md:translate-y-[85px]'>
          <p className='text-[25px] sm:text-[40px]'>30</p>
          <p className='text-[12px] sm:text-[20px]'>years</p>
        </div>

        <motion.img 
          src={OliveLeaf} 
          alt='Olive Leaf' 
          className='h-[80px] w-[100px] sm:h-[120px] sm:w-[160px] mt-2 sm:mt-4'
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1.2, delay: 2 }} 
        />
        
        <p className='font-bilbo-swap-caps text-[#e7b472] text-[1.2em] sm:text-[1.8em] md:text-[2em] mt-4'>
          Computer Science Department PG
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
