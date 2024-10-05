import React from 'react';
import Navbar from '../components/Navbar';
import bg from '../assets/aboutBackground.svg'; 
import light from '../assets/light.svg';
import logo from '../assets/aboutLogo.svg';
import Card from '../components/Card';
import transition from '../components/transition';

const About = () => {
  return (
    <div className='bg-[#0f0f19]'>
      <Navbar />
      <div 
        className="relative h-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }} 
      >
        {/* Overlay Background */}
        <div 
          className="absolute inset-0 h-full bg-cover md:bg-contain bg-[#0f0f19] opacity-40" 
          style={{ backgroundImage: `url(${light})`, backgroundAttachment: 'fixed' }} 
        ></div>

        {/* Centered Content */}
        <div className='flex flex-col gap-8 md:gap-10 items-center z-10 text-[#E7B472] pt-16 px-4'>
          <h1 className='text-3xl md:text-4xl font-abril-fatface font-bold text-center'>Christ University</h1>
          <img src={logo} alt="About Logo" className='w-1/2 md:w-1/3' />
          <p className='font-atomic-age text-center w-full md:w-[75%]'>
            Welcome to CHRIST (Deemed to be University), a prestigious institution renowned for its pioneering role in Indian higher education. Established as Christ College in 1969, the institution has led the way in offering innovative curricula, promoting academic discipline, and delivering holistic education while adopting global higher education standards, all thanks to its creative and dedicated faculty.
          </p>
          <p className='font-atomic-age text-center w-full md:w-[75%]'>
            Join us as we celebrate this vibrant legacy at our upcoming event!
          </p>
        </div>

        <div className='flex flex-col gap-8 md:gap-10 items-center z-10 text-[#E7B472] pt-16 px-4'>
          <h1 className='text-3xl md:text-4xl font-abril-fatface font-bold text-center'>Department of Computer Science</h1>
          <p className='font-atomic-age text-center w-full md:w-[75%]'>
            The Department of Computer Science at CHRIST (Deemed to be University), Bangalore, established in 1990, is committed to shaping skilled computer professionals equipped with strong ethical values and a deep sense of social responsibility. Over the past two decades, we have steadily built our expertise in cutting-edge computer science education and research while maintaining a focus on fostering global perspectives grounded in Indian values.
          </p>
          <p className='font-atomic-age text-center w-full md:w-[75%]'>
            Our mission is to prepare young minds for the evolving challenges of the IT industry, nurturing them to become leaders who will shape the future with both technical excellence and human compassion.
          </p>
        </div>

        {/* Team Section */}
        <div className='flex flex-col items-center gap-10 md:gap-20 pb-20 overflow-x-hidden'>
          <h1 className='text-[#E7B472] text-3xl md:text-[50px] mb-6 font-abril-fatface pt-10 text-center'>Meet Our Team</h1>
          <div className='flex flex-col md:flex-row justify-evenly gap-10 md:gap-20'>
            <Card personName="Dr. Cynthia T" position='Fest Coordinator' />
            <Card personName="Dr. Sudhakar T" position='Fest Coordinator' />
          </div>
          <div className='flex flex-col md:flex-row flex-wrap justify-evenly gap-10 md:gap-20'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className='flex flex-col md:flex-row justify-evenly flex-wrap gap-10 md:gap-20'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className='flex flex-col md:flex-row justify-evenly flex-wrap gap-10 md:gap-20'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(About);
