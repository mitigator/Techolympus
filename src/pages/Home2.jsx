import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import OliveLeaf from '../assets/OliveLeaf.png';
import zeus from '../assets/zeus.svg';
import zuesMobile from '../assets/zeusMobile.svg'
import Trails from '../components/Trial';
import Techolympys from '../assets/Techolympuslogo.svg';
import contentData from '../json/Theme.json';
import gatewaysData from '../json/Gateways.json';
import Logo from '../assets/WhiteLogo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import border from '../assets/borderline.svg';
import Preloader from '../components/Preloader';
import Countdown from '../components/Countdown';
// import { div } from 'framer-motion/client';

const Home2 = () => {

    useEffect(()=>{
        document.title = "Gateways 2024";
        window.scrollTo(0,0)
    },[])


    const [isLoading, setIsLoading] = useState(true);
    const targetDate = '2024-11-14T07:30:00';

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

    const htr = [
        'Name of the college the student is currently studying in',
        'Name,College provided student register number and phone number of Member-1 who is the team leader ',
        'Details of other teammates in the team. (Only applicable for Team Events)',
        'Open the payment link provided in the google form and make the payment to register for the event. Payment has to be done only once per  individual.',
        'In case, if the Individual / Team is registering for another event, they can upload the same payment screenshot/s that displays the Transaction ID.',
        'Upload the screenshot of the payment made either in an image format or pdf format. (No other formats will be accepted). All the payment screenshots of the team members need to be added in a single pdf file.',
        'Details of other teammates in the team. (Only applicable for Team Events)',
        // 'Open the payment link provided in the google form and make the payment to register for the evet. Payment has to be done only once and not for individual events.',
        // 'Upload the screenshot of the payment made either in an image format or pdf format. (No other formats will be accepted)',
        'Click on the Submit button in the google form to submit the details mentioned in the form and successfully complete the registration for the event.'

    ]

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
        <div className='min-h-screen relative overflow-y-hidden bg-[#000000]'>
            <Navbar activePage="home" />

            {/* Background Image with lazy loading */}
            <motion.div
            className={`fixed inset-0 z-0 hidden sm:flex min-h-screen bg-scroll bg-bottom bg-no-repeat bg-contain lightning-zap md:bg-top md:bg-fixed md:bg-cover `}
                style={{
                    backgroundImage: `url(${zeus})`,
                   
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />
            {/* Background Image with lazy loading  for mobile*/}
            <motion.div
            className={`fixed  flex sm:hidden inset-0 z-0  min-h-screen bg-scroll bg-bottom bg-no-repeat bg-contain lightning-zap md:bg-top md:bg-fixed md:bg-cover `}
                style={{
                    backgroundImage: `url(${zuesMobile})`,
                   
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />

      

            <div className=' text-[#e7b472] flex flex-col justify-center items-center h-[100vh] md:h-[110vh] overflow-hidden'>
                <motion.h1
                    className='font-abril-fatface text-[40px] sm:text-[50px] md:text-[80px] mt-10 md:mt-20 z-10'
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                >
                    {splitText("Gateways 2024")}
                </motion.h1>

                <motion.h2
                    className='text-white font-bilbo-swap-caps text-[50px] sm:text-[65px] md:text-[100px] z-10'
                    variants={fadeIn}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    techOlympus
                </motion.h2>
                <div  data-aos="zoom-in"
        data-aos-duration="1000">

                <Countdown targetDate={targetDate} />
                </div>


                <motion.div
                    className='flex flex-col items-center font-abril-fatface md:translate-y-[-50px]'
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <motion.div
                        className='translate-y-[52px] md:translate-y-[85px] flex flex-col'
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
                        transition={{ duration: 0.5, delay: 1 }}
                    />

                    <motion.p
                        className='font-bilbo-swap-caps text-center text-[#e7b472] text-[1.2em] sm:text-[1.8em] md:text-[2em] mt-4 md:mb-10'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5}}
                    >
                        Department Of Computer Science, Central Campus, Bangalore
                    </motion.p>

                </motion.div>
            </div>


            <motion.div
                className='flex flex-col items-center min-h-screen gap-20 p-20 overflow-x-hidden '
                variants={containerVariants}
            >
                <img 
                 data-aos="fade-up"
        data-aos-duration="1000" 
        src={border} alt="Border" className="object-contain w-[90%] md:w-auto" loading="lazy" />

                <div
                 data-aos="fade-up"
        data-aos-duration="1000"
                    className='text-[#E7B472] text-[50px] mb-6 font-abril-fatface'
                >
                    Events
                </div>

                <div
                 data-aos="zoom-in"
                 data-aos-duration="1000"
                className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36' >
                    <motion.div variants={itemVariants}><Trails eventName="Coding  Debugging" link='/coding_debugging' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Capture The Flag" link='/capture_the_flag' /></motion.div>
                </div>
                <div
                data-aos="zoom-in"
                 data-aos-duration="1000"
                 className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36' >
                    <motion.div variants={itemVariants}><Trails eventName="Hackathon" link='/hackathon' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="IOT" link='/iot' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="IT Quiz" link='/it_quiz' /></motion.div>
                </div>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1000" 
                 className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36'>
                    <motion.div variants={itemVariants}><Trails eventName="UI/UX" link='/uiux' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Gaming" link='/gaming' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="It Manager" link='/it_manager' /></motion.div>
                </div>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1000"
                 className='flex flex-col flex-wrap md:flex-row justify-evenly gap-36'>
                    <motion.div variants={itemVariants}><Trails eventName="Photography" link='/photography' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Surprise Event" link='/surprise' /></motion.div>
                    <motion.div variants={itemVariants}><Trails eventName="Treasure Hunt" link='/treasure' /></motion.div>
                </div>
            </motion.div> 
            
            

            <motion.div
                className='flex flex-col items-center min-h-screen gap-5 p-10 overflow-x-hidden '
                variants={containerVariants}
            >
            <img data-aos="fade-up"
                 data-aos-duration="1000" src={border} alt="Border" className="object-contain w-[90%] md:w-auto" loading="lazy" />

                <h1
                    className='font-bilbo-swap-caps text-color-animation text-[#e7b472] text-center text-6xl  md:text-7xl md:my-20 mt-10 md:mt-auto'
                    data-aos="zoom-in"
                 data-aos-duration="1000"
                >
                    {contentData.themeTitle}
                </h1>
                <motion.div
                    className='flex flex-col-reverse items-center w-full gap-8 md:max-w-5xl md:flex-row'
                >
                    <div
                        className='md:border-y md:border-r  md:border-l h-fit border-[#e7b472] text-white md:p-6 w-full text-justify md:w-full font-mono text-sm leading-relaxed justify-between'
                        data-aos="fade-up"
                        data-aos-duration="1000"                    >
                        {contentData.description[0]}
                        <br/> <br/>
                                                {contentData.description[1]}
                    </div>

                    <div
                        className='flex items-center justify-center scale-animation'
                        data-aos="zoom-in"
                 data-aos-duration="1000"
                       
                    >
                        <img src={Techolympys} alt="Techolympus Logo" className='object-contain w-[30rem] h-30rem]' />
                    </div>
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
                className='flex flex-col items-center gap-10 p-10 overflow-x-hidden overflow-y-hidden h-fit'
                variants={containerVariants}
            >
                            <img
                            data-aos="fade-up"
                            data-aos-duration="1000" src={border} alt="Border" className=" object-contain w-[90%] md:w-auto" loading="lazy" />

                <h1
                    className='font-abril-fatface text-[#e7b472] text-5xl mb-10'
                    data-aos="zoom-in"
                    data-aos-duration="1000"                >
                    {gatewaysData.title}
                </h1>
                <motion.div
                    className='flex flex-col items-center justify-center w-full gap-8 md:flex-row md:h-auto'
                    variants={containerVariants}

                >
                   

                    <div
                        className='flex items-center justify-center md:w-1/3 scale-animation'
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <img src={Logo} alt="Techolympus Logo" className='object-contain w-full h-full scale-[80%]' />
                    </div>
                    <div
                        className=' max-w-[500px] md:border-y md:border-r h-fit md:border-l border-[#e7b472] text-white md:p-6 w-full text-justify md:w-1/2 font-mono text-sm leading-relaxed flex justify-center items-center '
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className='text-justify'>
                            {gatewaysData.description[0]}
                            {gatewaysData.description[1]}
                        </div>
                    </div>
                </motion.div>
            </motion.div>


            <motion.div
                className='flex flex-col items-center min-h-screen gap-10 p-6 overflow-x-hidden'
                variants={containerVariants}
            >
                            <img data-aos="fade-up"
                    data-aos-duration="1000" src={border} alt="Border" className="object-contain w-[80%] md:w-auto" loading="lazy" />

                <h1

                    className='font-abril-fatface text-center w-full  text-[#e7b472] text-5xl md:mb-10'
                    data-aos="zoom-in"
                    data-aos-duration="1000"                >
                    How To Register
                </h1>
                <motion.div
                    className='flex flex-col-reverse justify-center w-full gap-8 md:flex-row-reverse'
                    variants={containerVariants}
                >
                    <div
                        className='md:border-y bg-[#0000004c] flex-col md:border-r md:border-l  p-5 px-4 md:px-8 border-[#e7b472] text-white   w-full text-justify md:w-1/2 font-mono text-sm leading-relaxed flex justify-center  '
                        data-aos="fade-in"
                        data-aos-duration="1000"                        
                    >
                        {
                            htr.map((node,i)=>(
                                <div 
                                data-aos="zoom-in"
                                data-aos-duration={1000+i*100}
                                // data-aos-once
                                key={i} className={`flex flex-col my-2 ${i===5?"bg-[#e7b47245] p-2 border-[#e7b472] border scale-animation":""} `}>
                                    <div className={`text-xl font-bold text-[#e7b472] underline underline-offset-2 `}>Step {i+1}</div>
                                    <div>{node}</div>
                                </div>

                            ))
                        }
                    </div>
                    

                    
                </motion.div>
            </motion.div>


                   
            <Footer />
            </div>

    );
};

export default Home2;
