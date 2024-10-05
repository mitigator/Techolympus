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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <motion.div 
            className='relative'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Navbar/>
            <motion.div 
                className="md:bg-fixed md:bg-cover fixed inset-0 bg-center bg-no-repeat bg-contain bg-scroll z-0"
                style={{
                    backgroundImage: `url(${zeus})`,
                    backgroundPosition: 'bottom',
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className='bg-[#0f0f19] text-[#e7b472] flex flex-col justify-center items-center h-[100vh] md:h-[100vh] overflow-hidden' >      
                <motion.h1 
                    className='font-abril-fatface text-[40px] sm:text-[50px] md:text-[80px] mt-10 md:mt-20 z-10'
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                >
                    {splitText("Gateways 2024")}
                </motion.h1>
                
                <motion.h2
                    className='font-bilbo-swap-caps text-[50px] sm:text-[65px] md:text-[100px] z-10'
                    variants={fadeIn}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    techOlympus
                </motion.h2>

                <motion.div 
                    className='flex flex-col items-center font-abril-fatface'
                    variants={fadeIn}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <motion.div 
                        className='translate-y-[65px] md:translate-y-[85px]'
                        whileHover={{ scale: 1.1 }}
                    >
                        <p className='text-[25px] sm:text-[40px]'>30</p>
                        <p className='text-[12px] sm:text-[20px]'>years</p>
                    </motion.div>

                    <motion.img 
                        src={OliveLeaf} 
                        alt='Olive Leaf' 
                        className='h-[80px] w-[100px] sm:h-[120px] sm:w-[160px] mt-2 sm:mt-4'
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 2 }} 
                    />
                    
                    <motion.p 
                        className='font-bilbo-swap-caps text-[#e7b472] text-[1.2em] sm:text-[1.8em] md:text-[2em] mt-4'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        Computer Science Department PG
                    </motion.p>
                </motion.div>
            </div>

            <motion.div 
                className='bg-[#0f0f19] min-h-screen flex flex-col items-center gap-20 p-20 overflow-x-hidden'
                variants={containerVariants}
            >
                <motion.h1 
                    className='text-[#E7B472] text-[50px] mb-6 font-abril-fatface'
                    variants={itemVariants}
                >
                    Events
                </motion.h1>
                <motion.div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36' variants={containerVariants}>
                    <motion.div variants={itemVariants}><Trails eventName="Coding & Debugging" link='/coding_debugging' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Capture The Flag" link='/capture_the_flag' /></motion.div>
                </motion.div>
                <motion.div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36' variants={containerVariants}>
                    <motion.div variants={itemVariants}><Trails eventName="Hackathon" link='/hackathon' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="IOT" link='/iot' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="IT Quiz" link='/it_quiz' /></motion.div>
                </motion.div>
                <motion.div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36' variants={containerVariants}>
                    <motion.div variants={itemVariants}><Trails eventName="UI/UX" link='/uiux' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Gaming" link='/gaming' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="It Manager" link='/it_manager' /></motion.div>
                </motion.div>
                <motion.div className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36' variants={containerVariants}>
                    <motion.div variants={itemVariants}><Trails eventName="Photography" link='/photography' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Surprise Event" link='/surprise' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Treasure Hunt" link='/treasure' /></motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                className='bg-[#0f0f19] flex flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'
                variants={containerVariants}
            >
                <motion.h1 
                    className='font-bilbo-swap-caps text-[#e7b472] text-5xl mb-10'
                    variants={itemVariants}
                >
                    {contentData.themeTitle}
                </motion.h1>
                <motion.div 
                    className='flex flex-col-reverse md:flex-row max-w-4xl w-full gap-8'
                    variants={containerVariants}
                >
                    <motion.div 
                        className='md:border-y md:border-r md:border-l border-[#e7b472] text-white p-6 w-full text-center md:w-full font-mono text-sm leading-relaxed xl:translate-x-[-275px] 2xl:translate-x-[-350px] lg:translate-x-[-80px] md:translate-x-[-40px] justify-between'
                        variants={itemVariants}
                    >
                        {contentData.description[0]}
                        {contentData.description[1]}
                    </motion.div>

                    <motion.div 
                        className='flex justify-center items-center'
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <img src={Techolympys} alt="Techolympus Logo" className='w-44 h-44 object-contain' />
                    </motion.div>
                </motion.div>
                <motion.div 
                    className='flex flex-col md:flex-row max-w-4xl w-full gap-8 justify-between'
                    variants={containerVariants}
                >
                    <motion.div 
                        className='flex justify-center items-center'
                        variants={itemVariants}
                    >
                        <Card />
                    </motion.div>
                    <motion.div 
                        className='md:border-y md:border-l md:border-r border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed 2xl:translate-x-[340px] xl:translate-x-[275px] lg:translate-x-[70px] md:translate-x-[40px]'
                        variants={itemVariants}
                    >
                        {contentData.description[0]}
                        {contentData.description[1]}
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                className='bg-[#0f0f19] flex flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'
                variants={containerVariants}
            >
                <motion.h1 
                    className='font-abril-fatface text-[#e7b472] text-5xl mb-10'
                    variants={itemVariants}
                >
                    {gatewaysData.title}
                </motion.h1>
                <motion.div 
                    className='flex flex-col-reverse md:flex-row md:h-[300px] w-full gap-8'
                    variants={containerVariants}
                >
                    <motion.div 
                        className='md:border-y md:border-r md:border-l border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed flex justify-center items-center 2xl:translate-x-[-50px] xl:translate-x-[-40px] lg:translate-x-[-60px] md:translate-x-[-40px]'
                        variants={itemVariants}
                    >
                        <div className='text-center'>
                            {gatewaysData.description[0]}
                            {gatewaysData.description[1]}
                        </div>
                    </motion.div>

                    <motion.div 
                        className='flex justify-center items-center md:w-1/3'
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                        <img src={Logo} alt="Techolympus Logo" className='w-full h-full object-contain' />
                    </motion.div>
                </motion.div>
            </motion.div>

            <Footer/>
        </motion.div>
    )
}

export default Home2