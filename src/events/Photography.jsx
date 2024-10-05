import React from 'react'
import bg from '../assets/bgleaf.svg';
import Navbar from '../components/Navbar';
import hera from '../assets/hera.svg';
import end from '../assets/borderline.svg';
import textData from '../json/heratrials.json';
import { useEffect } from 'react';


const Photography = () => {
    const eventData = textData[1]; 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Navbar />
            <div
                className="bg-[#0f0f19] min-h-screen bg-bgleaf bg-no-repeat bg-cover bg-center bg-fixed flex flex-col items-center gap-10 font-caesar-dressing pt-20"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="border-2 border-[#E7B472] h-[40%] md:h-[50%] w-[90%] md:w-[75%] flex items-center relative justify-center overflow-hidden text-lg md:text-2xl">
                    <img src={hera} alt="image" className="h-full object-contain" />
                    <p className="absolute left-2 top-2 text-[#FFD6A1]">{eventData.eventType}</p>
                    <p className="absolute right-2 top-2 text-[#FFD6A1]">{eventData.venue}</p>
                    <div className="absolute left-2 bottom-2 text-[#FFD6A1]">
                        <p>{eventData.teamSize}</p>
                        <p>{eventData.rounds}</p>
                    </div>
                    <div className="absolute right-2 bottom-2 text-[#FFD6A1]">
                        <p>{eventData.contactPerson}</p>
                        <p>{eventData.contactNumber}</p>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-text">
                    {eventData.title}
                </h1>

                <p className="text-[#FFD6A1] text-lg md:text-xl text-center px-4 md:px-0">
                    {eventData.description}
                </p>

                {/* Prize Section */}
                <div className="text-[#FFD6A1] text-center">
                    <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-text">Prizes</h2>
                    <p>1st Prize: {eventData.firstPrize}</p>
                    <p>2nd Prize: {eventData.secondPrize}</p>
                    <p>3rd Prize: {eventData.thirdPrize}</p>
                </div>

                {/* Rules Section */}
                <div className="text-[#FFD6A1] text-center px-4 md:px-0">
                    <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-text">Rules</h2>
                    <ul className="list-inside list-none">
                        {eventData.rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                </div>

                {/* External Link Button */}
                <div className="mt-6">
                    <a 
                        href={eventData.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#FFD6A1] text-[#0f0f19] px-6 py-2 rounded-md text-lg md:text-xl font-bold hover:bg-[#E7B472] transition"
                    >
                        Learn More
                    </a>
                </div>

                <img src={end} alt="Border" className=" " />
            </div>
        </div>
    );
}

export default Photography