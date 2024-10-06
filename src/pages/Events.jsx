import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const EventCard = ({ title, description, linkUrl, imageUrl }) => (
  <motion.div
    className="bg-[#1a1a2e] bg-opacity-50 shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-150 "
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
    // Fetch technical events
    fetch('https://mitigator.github.io/EventApi/technical.json')
      .then((response) => response.json())
      .then((data) => setTechnicalEvents(data.technicalEvents))
      .catch((error) => console.error('Error fetching technical events:', error));

    // Fetch non-technical events
    fetch('https://mitigator.github.io/EventApi/nonTechnical.json')
      .then((response) => response.json())
      .then((data) => setNonTechnicalEvents(data.nonTechnicalEvents))
      .catch((error) => console.error('Error fetching non-technical events:', error));
  }, []);

  return (
    <div className="mx-auto px-4  py-12 bg-[#0f0f19] min-h-screen text-[#E7B472]">
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
                linkUrl="#"
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
                linkUrl="#"
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
