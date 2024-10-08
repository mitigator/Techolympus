import React, { useState, useEffect } from 'react';
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
import border from '../assets/borderline.svg';
import Preloader from '../components/Preloader';

const Home2 = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate content loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating a 2-second load time
        return () => clearTimeout(timer);
    }, []);

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
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    // If still loading, show the Preloader
    if (isLoading) {
        return <Preloader />;
    }

    return (
        <motion.div
            className='relative'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Navbar />

            {/* Background Image with lazy loading */}
            <motion.div
                className="fixed inset-0 z-0 bg-scroll bg-center bg-no-repeat bg-contain md:bg-fixed md:bg-cover"
                style={{
                    backgroundImage: `url(${zeus})`,
                    backgroundPosition: 'bottom',
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />

            <div className='bg-[#0f0f19] text-[#e7b472] flex flex-col justify-center items-center h-[100vh] md:h-[100vh] overflow-hidden'>
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
                        className='translate-y-[65px] md:translate-y-[85px] flex flex-col'
                        // whileHover={{ scale: 1.1 }}
                    >
                        <p className='text-[25px] sm:text-[40px] '>30</p>
                        <p className='text-[12px] sm:text-[20px] leading-[0px]'>years</p>
                    </motion.div>

                    <motion.img
                        src={OliveLeaf}
                        alt='Olive Leaf'
                        className='h-[80px] w-[100px] sm:h-[120px] sm:w-[160px] mt-2 sm:mt-4'
                        loading="lazy" // Lazy loading added
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 2 }}
                    />

                    <motion.p
                        className='font-bilbo-swap-caps text-[#e7b472] text-[1.2em] sm:text-[1.8em] md:text-[2em] mt-4'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        Department Of Computer Science
                    </motion.p>
                </motion.div>
            </div>


            <motion.div
                className='bg-[#0f0f19] min-h-screen flex flex-col items-center gap-20 p-20 overflow-x-hidden'
                variants={containerVariants}
            >
                <img src={border} alt="Border" className="object-contain" loading="lazy" />

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
                className='bg-[#0f0f19] flex flex-col gap-5 items-center p-10 min-h-screen overflow-x-hidden'
                variants={containerVariants}
            >
                <motion.h1
                    className='font-bilbo-swap-caps text-[#e7b472] text-5xl '
                    variants={itemVariants}
                >
                    {contentData.themeTitle}
                </motion.h1>
                <motion.div
                    className='flex flex-col-reverse items-center w-full gap-8 md:max-w-5xl md:flex-row'
                    variants={containerVariants}
                >
                    <motion.div
                        className='md:border-y md:border-r  md:border-l h-fit border-[#e7b472] text-white p-6 w-full text-justify md:w-full font-mono text-sm leading-relaxed xl:translate-x-[-275px] 2xl:translate-x-[-350px] lg:translate-x-[-80px] md:translate-x-[-40px] justify-between'
                        variants={itemVariants}
                    >
                        {contentData.description[0]}
                        <br/> <br/>
                                                {contentData.description[1]}
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-center'
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <img src={Techolympys} alt="Techolympus Logo" className='object-contain w-[30rem] h-[30rem]' />
                    </motion.div>
                </motion.div>
                <motion.div
                    className='flex flex-col justify-between w-full max-w-4xl gap-8 md:flex-row'
                    variants={containerVariants}
                >
                    {/* <motion.div
                        className='flex items-center justify-center'
                        variants={itemVariants}
                    >
                        <Card />
                    </motion.div>
                    <motion.div
                        className='md:border-y md:border-l md:border-r border-[#e7b472] text-white p-6 w-full text-justify md:w-3/4 font-mono text-sm leading-relaxed 2xl:translate-x-[340px] xl:translate-x-[275px] lg:translate-x-[70px] md:translate-x-[40px]'
                        variants={itemVariants}
                    >
                        {contentData.description[0]}
                        {contentData.description[1]}
                    </motion.div> */}
                </motion.div>
            </motion.div>

 

            <motion.div
                className='bg-[#0f0f19] flex  flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'
                variants={containerVariants}
            >
                <motion.h1
                    className='font-abril-fatface text-[#e7b472] text-5xl mb-10'
                    variants={itemVariants}
                >
                    {gatewaysData.title}
                </motion.h1>
                <motion.div
                    className='flex  justify-center flex-col-reverse md:flex-row-reverse md:h-[300px] w-full gap-8'
                    variants={containerVariants}
                >
                    <motion.div
                        className='md:border-y md:border-r md:border-l border-[#e7b472] text-white p-6 w-full text-justify md:w-1/2 font-mono text-sm leading-relaxed flex justify-center items-center 2xl:translate-x-[-50px] xl:translate-x-[-40px] lg:translate-x-[-60px] md:translate-x-[-40px]'
                        variants={itemVariants}
                    >
                        <div className='text-justify'>
                            {gatewaysData.description[0]}
                            {gatewaysData.description[1]}
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex items-center justify-center md:w-1/3'
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                        <img src={Logo} alt="Techolympus Logo" className='object-contain w-full h-full' />
                    </motion.div>
                </motion.div>
            </motion.div>    
                   
            <Footer />
        </motion.div>
    );
};

export default Home2;