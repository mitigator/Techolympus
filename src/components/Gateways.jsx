import React, { useEffect, useState } from 'react';
import contentData from '../json/Gateways.json';
import Logo from '../assets/WhiteLogo.png'

const Gateways = () => {
  const [content, setContent] = useState(contentData);

  return (
    <div className='bg-[#0f0f19] flex flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'>
    <h1 className='font-abril-fatface text-[#e7b472] text-5xl mb-10'>{content.title}</h1>
    <div className='flex flex-col-reverse md:flex-row md:h-[300px] w-full gap-8'>
        <div className='md:border-y md:border-r border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed flex justify-center items-center 2xl:translate-x-[-50px] xl:translate-x-[-40px] lg:translate-x-[-60px] md:translate-x-[-40px]'>
            <div className='text-center'>
                {content.description[0]}
                {content.description[1]}
            </div>
        </div>

        <div className='flex justify-center items-center md:w-1/3'>
            <img src={Logo} alt="Techolympus Logo" className='w-full h-full object-contain' />
        </div>
    </div>
</div>

  );
};

export default Gateways;
