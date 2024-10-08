import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

// Import local images for technical events
import uiuxImage from '../assets/aphrodite.svg'; 
import hackathonImage from '../assets/aphrodite.svg';
import captureTheFlagImage from '../assets/Hermes.svg';
import itQuizImage from '../assets/athena.svg';
import iotImage from '../assets/athena.svg';
import codingDebuggingImage from '../assets/Poseiden.svg';

// Import local images for non-technical events
import photographyImage from '../assets/Apollo.svg';
import gamingImage from '../assets/disynonys.svg';
import treasureHuntImage from '../assets/Apollo.svg';
import itManagerImage from '../assets/athena.svg';
import surpriseEventImage from '../assets/hera.svg';

const EventCard = ({ title, description, linkUrl, imageUrl }) => (
  <motion.div
    className="bg-[#1a1a2e] bg-opacity-50 shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-150"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ width: '300px', height: '450px' }} // Fixed card size
  >
    <div className="h-48 overflow-hidden" style={{ height: '200px' }}>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col justify-between" style={{ height: '250px' }}>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-[#E7B472]">{title}</h3>
        <p className="text-[#E7B472] opacity-80 mb-4">{description}</p>
      </div>
      <a
        href={linkUrl}
        className="inline-block bg-[#E7B472] text-[#0f0f19] px-4 py-2 rounded-full hover:bg-[#d9a661] transition duration-300"
      >
        Learn More
      </a>
    </div>
  </motion.div>
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
    <div className="mx-auto px-4 py-12 bg-[#0f0f19] min-h-screen text-[#E7B472]">
      <Navbar />

      <section className="mb-16 pt-16">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technical Events
        </motion.h2>
        <div className="grid grid-cols-1 md:pl-24 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {technicalEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard
                title={event.name}
                description={event.description}
                linkUrl={`/${event.slug}`}
                imageUrl={event.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.h2
          className="text-3xl font-semibold mb-6 pt-20 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Non-Technical Events
        </motion.h2>
        <div className="grid grid-cols-1 md:pl-24 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {nonTechnicalEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <EventCard
                title={event.name}
                description={event.description}
                linkUrl={`/${event.slug}`}
                imageUrl={event.imageUrl}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
