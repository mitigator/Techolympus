import React from 'react';
import { motion } from 'framer-motion';

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
    <div className='bg-[#0f0f19] text-[#e7b472] flex flex-col items-center h-[100vh]'>
      <motion.h1 className='font-abril-fatface md:text-[80px] text-[50px] md:mt-20 mt-10'>
        {splitText("Gateways 2024")}
      </motion.h1>
      <motion.h2
        className='font-bilbo-swap-caps md:text-[100px] text-[65px]'
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 1, delay: 1.5 }}
      >
        techOlympus
      </motion.h2>
    </div>
  );
};

export default Hero;
