import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import zeus from '../assets/zeus.svg';
// Import local images for technical events
import uiuxImage from '../assets/aphrodite.svg'; 
import hackathonImage from '../assets/ares.svg';
import captureTheFlagImage from '../assets/Hermes.svg';
import itQuizImage from '../assets/athena.svg';
import iotImage from '../assets/iot.svg';
import codingDebuggingImage from '../assets/Poseiden.svg';
import border from '../assets/borderline.svg';

// Import local images for non-technical events
import photographyImage from '../assets/Apollo.svg';
import gamingImage from '../assets/disynonys.svg';
import treasureHuntImage from '../assets/artemis.svg';
import itManagerImage from '../assets/Hades.svg';
import surpriseEventImage from '../assets/hera.svg';
import Footer from '../components/Footer';

const EventCard = ({ title, description, linkUrl, imageUrl }) => (
  <div
   data-aos="zoom-in"
   data-aos-duration="1000"
    className=" bg-[#0000004f] px-[10px] border-[#E7B472]  py-[20px] hover:shadow-[#E7B472] shadow-lg  overflow-hidden transform transition duration-100 hover:scale-[105%]"
    // initial={{ opacity: 0, y: 20 }}
    // animate={{ opacity: 1, y: 0 }}
    
    style={{ width: '300px' }} // Fixed card size
  >
    <div className="h-48 " >
      <img src={imageUrl} alt={title} className="object-contain w-full h-full" />
    </div>
    <div className="flex flex-col justify-between p-4 " >
      <div className='h-[200px] md:h-[180px] text-center md:text-left'>
        <h3 className="text-xl text-center font-semibold mb-2 text-[#E7B472] font-abril-fatface">{title}</h3>
        <p className="text-[#fff] font-mono opacity-80 mb-4 md:text-justify ">{description}</p>
      </div>
      <a
        href={linkUrl}
        className=" font-mono inline-block text-center hover:bg-[#E7B472] text-[#E7B472] hover:text-[#0f0f19] px-4 py-2  border border-[#E7B472] transition duration-300 "
      >
        Explore
      </a>
    </div>
  </div>
);

const Events = () => {
  const [technicalEvents, setTechnicalEvents] = useState([]);
  const [nonTechnicalEvents, setNonTechnicalEvents] = useState([]);

  useEffect(() => {
    const technicalData = [
      { name: "UI/UX - Aphrodite's Aurora", description: "A design competition focusing on creating intuitive user interfaces and enhancing user experiences.", slug: 'uiux', imageUrl: uiuxImage },
      { name: "Hackathon - Ares Techwar", description: "A 24-hour hackathon where participants solve real-world problems using innovative technologies.", slug: 'hackathon', imageUrl: hackathonImage },
      { name: "Capture the Flag - Hermes' Bytechase", description: "A cybersecurity competition to test participants' hacking skills in a controlled environment.", slug: 'capture_the_flag', imageUrl: captureTheFlagImage },
      { name: "IT Quiz - Athena's Arena", description: "A quiz competition testing participants' knowledge in IT and computer science.", slug: 'it_quiz', imageUrl: itQuizImage },
      { name: "IoT - Hephaestus' Forge", description: "An Internet of Things competition focusing on creating smart solutions for everyday problems.", slug: 'iot', imageUrl: iotImage },
      { name: "Coding and Debugging - Poseidon's Code Current", description: "A coding competition focused on solving algorithms and debugging code under time constraints.", slug: 'coding_debugging', imageUrl: codingDebuggingImage }
    ];
    
    const nonTechnicalData = [
      { name: "Photography - Apollo's Luminous Lens", description: "A photography event capturing the essence of light and shadow in unique environments.", slug: 'photography', imageUrl: photographyImage },
      { name: "Gaming - Dionysus' Battleground", description: "A gaming tournament featuring popular multiplayer games with fierce competition.", slug: 'gaming', imageUrl: gamingImage },
      { name: "Treasure Hunt - Artemis' Adventure", description: "A treasure hunt event where participants solve clues and challenges to find the hidden treasure.", slug: 'treasure', imageUrl: treasureHuntImage },
      { name: "IT Manager - Hades' Tech Authority", description: "An event testing participants' skills in IT management, problem-solving, and decision-making.", slug: 'it_manager', imageUrl: itManagerImage },
      { name: "Surprise Event - Hera's Trails", description: "A surprise event where participants face unexpected challenges and tasks.", slug: 'surprise', imageUrl: surpriseEventImage }
    ];

    setTechnicalEvents(technicalData);
    setNonTechnicalEvents(nonTechnicalData);
  }, []);

  return (
    <div className="mx-auto  pt-12  bg-[#000000] min-h-screen text-[#E7B472] overflow-y-hidden">
      <Navbar activePage="events"/>
      <motion.div
                className="fixed inset-0 z-0 min-h-screen bg-scroll bg-bottom bg-no-repeat bg-contain md:bg-top md:bg-fixed md:bg-cover "
                style={{
                    backgroundImage: `url(${zeus})`,
                   
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
            />

      <section className="pt-16 mb-16">
        <div
        data-aos="fade-up"
        data-aos-duration="1000"
          className=" tracking-[3px] px-10 mb-20 text-5xl font-semibold text-center md:px-auto font-abril-fatface "
         
        >
          Technical Events
        </div>
        <div className="grid gap-8 grid-col s-1 sm:grid-cols-2 lg:grid-cols-3">
          {technicalEvents.map((event, index) => (
            <div
            
              className='flex justify-center '
              key={index}
            data-aos="zoom-in-up"
            data-aos-duration={1000+100*index}
              // 
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1, delay: index * 0.1 }}
            >
              <EventCard
                title={event.name}
                description={event.description}
                linkUrl={`/${event.slug}`}
                imageUrl={event.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>
      <div data-aos="fade-up"
        data-aos-duration="1000" className='flex justify-center w-full'>

      <img src={border} alt="Border" className="object-contain w-[70%] md:w-auto " loading="lazy" />
      </div>


      <section>
        <div
          className="tracking-[3px]  pt-20 mb-20 text-5xl font-semibold text-center font-abril-fatface "
          data-aos="fade-up"
        data-aos-duration="1000"
        >
          Non-Technical Events
        </div>
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nonTechnicalEvents.map((event, index) => (
            <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration={1000+100*index}
            className='flex justify-center '  
              // key={index}
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <EventCard
                title={event.name}
                description={event.description}
                linkUrl={`/${event.slug}`}
                imageUrl={event.imageUrl}
              />
            </div>
          ))}
        </div>
      </section>
      <div className='pt-[100px]'>

      <Footer/>
      </div>
    </div>
  );
};

export default Events;
