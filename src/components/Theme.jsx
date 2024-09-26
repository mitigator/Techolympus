import React, { useEffect, useState } from 'react';
import TecholympusLogo from '../assets/TecholympusLogo.png';
import Card from './Card';
import contentData from '../json/Theme.json'; // Adjust the path based on your folder structure

const Theme = () => {
    const [content, setContent] = useState(contentData); // Directly using imported content

    return (
        <div className='bg-[#0f0f19] flex flex-col gap-10 items-center p-10 min-h-screen overflow-x-hidden'>
            <h1 className='font-bilbo-swap-caps text-[#e7b472] text-5xl mb-10'>{content.themeTitle}</h1>
            <div className='flex flex-col-reverse md:flex-row max-w-4xl w-full gap-8'>
                <div className='md:border-y md:border-r border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed xl:translate-x-[-275px] 2xl:translate-x-[-350px] lg:translate-x-[-80px] md:translate-x-[-40px] justify-between'>
                    {content.description[0]}
                    {content.description[1]}
                </div>

                <div className='flex justify-center items-center'>
                    <img src={TecholympusLogo} alt="Techolympus Logo" className='w-32 h-32 object-contain' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row max-w-4xl w-full gap-8 justify-between'>
                <div className='flex justify-center items-center'>
                    <Card />
                </div>
                <div className='md:border-y md:border-l border-[#e7b472] text-white p-6 w-full text-center md:w-3/4 font-mono text-sm leading-relaxed 2xl:translate-x-[340px] xl:translate-x-[275px] lg:translate-x-[70px] md:translate-x-[40px]'>
                    {content.description[0]}
                    {content.description[1]}
                </div>
            </div>
        </div>
    );
};

export default Theme;
