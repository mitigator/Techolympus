import React from 'react';
import { motion } from 'framer-motion';
import OliveLeaf from '../assets/OliveLeaf.png';
import zeus from '../assets/zeus.svg';
import Card from '../components/Card';
import Trails from '../components/Trial';
import Techolympys from '../assets/Techolympuslogo.svg';
import contentData from '../json/Theme.json';
import gatewaysData from '../json/Gateways.json';
import Logo from '../assets/WhiteLogo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home2 = () => {
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
    <div className='relative'>
        <Navbar/>
        <div className=" md:bg-fixed md:bg-cover fixed inset-0 bg-center bg-no-repeat bg-contain bg-scroll z-0 " 
     style={{
       backgroundImage: `url(${zeus})`,
       backgroundPosition: 'bottom',
     }} 
     >
</div>


<div className='bg-[#0f0f19] text-[#e7b472] flex flex-col justify-center items-center h-[100vh] md:h-[100vh]  overflow-hidden' >      
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

    <div className='bg-[#0f0f19] min-h-screen flex flex-col items-center gap-20 p-20 overflow-x-hidden'>
        <h1 className='text-[#E7B472] text-[50px] mb-6 font-abril-fatface '>Events</h1>
        <div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36'>
        <Trails eventName="Coding & Debugging" link='/coding_debugging' />
        <Trails eventName="Capture The Flag" link='/capture_the_flag' />
        </div>
        <div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36'>
        <Trails  eventName="Hackathon" link='/hackathon'  />
        <Trails  eventName="IOT" link='/iot' />
        <Trails  eventName="IT Quiz" link='/it_quiz' />

        </div>
        <div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36'>
        <Trails  eventName="UI/UX" link='/uiux' />
        <Trails  eventName="Gaming" link='/gaming' />
        <Trails  eventName="It Manager" link='/it_manager' />

        </div>
        <div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36'>
        <Trails  eventName="Photography" link='/photography' />
        <Trails  eventName="Surprise Event" link='/surprise' />
        <Trails  eventName="Treasure Hunt" link='/treasure' />

        </div>
    </div>

    <div className='bg-[#0f0f19] flex flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'>
            <h1 className='font-bilbo-swap-caps text-[#e7b472] text-5xl mb-10'>{contentData.themeTitle}</h1>
            <div className='flex flex-col-reverse md:flex-row max-w-4xl w-full  gap-8'>
                <div className='md:border-y md:border-r border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed xl:translate-x-[-275px] 2xl:translate-x-[-350px] lg:translate-x-[-80px] md:translate-x-[-40px] justify-between'>
                    {contentData.description[0]}
                    {contentData.description[1]}
                </div>

                <div className='flex justify-center items-center'>
                    <img src={Techolympys} alt="Techolympus Logo" className='w-44 h-44 object-contain' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-4xl w-full gap-8 justify-between'>
                <div className='flex justify-center items-center'>
                    <Card />
                </div>
                <div className='md:border-y md:border-l border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed 2xl:translate-x-[340px] xl:translate-x-[275px] lg:translate-x-[70px] md:translate-x-[40px]'>
                    {contentData.description[0]}
                    {contentData.description[1]}
                </div>
            </div>
        </div>

        <div className='bg-[#0f0f19] flex flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'>
    <h1 className='font-abril-fatface text-[#e7b472] text-5xl mb-10'>{gatewaysData.title}</h1>
    <div className='flex flex-col-reverse md:flex-row md:h-[300px] w-full gap-8'>
        <div className='md:border-y md:border-r border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed flex justify-center items-center 2xl:translate-x-[-50px] xl:translate-x-[-40px] lg:translate-x-[-60px] md:translate-x-[-40px]'>
            <div className='text-center'>
                {gatewaysData.description[0]}
                {gatewaysData.description[1]}
            </div>
        </div>

        <div className='flex justify-center items-center md:w-1/3'>
            <img src={Logo} alt="Techolympus Logo" className='w-full h-full object-contain' />
        </div>
    </div>
</div>

<Footer/>

    </div>
  )
}

export default Home2
