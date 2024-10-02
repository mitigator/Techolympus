import React from 'react';
import bg from '../assets/bgleaf.svg';
import Navbar from '../components/Navbar';
import hera from '../assets/hera.svg';
import end from '../assets/borderline.svg';
import textData from '../json/heratrials.json';

const HeraTrial = () => {
    return (
        <div>
            <Navbar/>
            <div
                className="bg-[#0f0f19] h-screen bg-bgleaf bg-no-repeat bg-cover bg-center flex flex-col items-center gap-10 font-caesar-dressing pt-10"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-text">
                    {textData.eventId}
                </h1>
                <div className="border-2 border-[#E7B472] h-[40%] md:h-[50%] w-[90%] md:w-[75%] flex items-center relative justify-center overflow-hidden text-lg md:text-2xl">
                    <img src={hera} alt="image" className="w-full h-full object-contain" />
                    <p className="absolute left-2 top-2 text-[#FFD6A1]">{textData.eventType}</p>
                    <p className="absolute right-2 top-2 text-[#FFD6A1]">{textData.venue}</p>
                    <div className="absolute left-2 bottom-2 text-[#FFD6A1]">
                        <p>{textData.teamSize}</p>
                        <p>{textData.rounds}</p>
                    </div>
                    <div className="absolute right-2 bottom-2 text-[#FFD6A1]">
                        <p>{textData.contactPerson}</p>
                        <p>{textData.contactNumber}</p>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-text">
                    {textData.title}
                </h1>

                <p className="text-[#FFD6A1] text-lg md:text-xl text-center px-4 md:px-0">
                    {textData.description}
                </p>

                <img src={end} alt="image" className="" />
            </div>
        </div>
    );
};

export default HeraTrial;
