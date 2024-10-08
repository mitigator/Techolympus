import React, { useState, useEffect } from 'react';
import bg from '../assets/bgleaf.svg';
import Navbar from '../components/Navbar';
import hera from '../assets/Hades.svg';
import end from '../assets/borderline.svg';
import Preloader from '../components/Preloader'

export const Itmanager = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch data from API
        fetch('https://mitigator.github.io/EventApi/event.json')
            .then(response => response.json())
            .then(data => {
                setEventData(data[9]);  
            })
            .catch(error => console.error('Error fetching event data:', error));
    }, []);

    if (!eventData) {
        return <div><Preloader/></div>;     
    }

    return (
        <div>
            <Navbar />
            <div
                className="bg-[#0f0f19] min-h-screen bg-bgleaf bg-no-repeat bg-cover bg-center bg-fixed flex flex-col items-center gap-10 font-caesar-dressing pt-20"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* Image Section */}
                <div className="border-2 border-[#E7B472] h-[40%] md:h-[50%] w-[90%] md:w-[75%] flex items-center justify-center overflow-hidden">
                    <img src={hera} alt="image" className="h-[250px] w-[250px] object-contain md:h-[400px] md:w-[400px]" />
                </div>

                {/* Event Details Section */}
                <div className="text-[#FFD6A1]  w-[90%] md:w-[75%] flex flex-col gap-4 md:flex-row md:justify-between px-4 md:px-0 text-lg md:text-2xl">
                    <div className="flex flex-col items-start md:items-center">
                        <p>Event Type: {eventData.eventType}</p>
                        <p>Team Size: {eventData.teamSize}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-center">
                        <p>Venue: {eventData.venue}</p>
                        <p>Rounds: {eventData.rounds}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-center">
                        <p>Contact Person: {eventData.contactPerson}</p>
                        <p>Contact Number: {eventData.contactNumber}</p>
                    </div>
                </div>
                <img src={end} alt="Border" className="object-contain" />


                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-text">
                    {eventData.title}
                </h1>

                {/* Description */}
                <p className="text-[#FFD6A1] text-lg md:text-xl text-center px-4 md:px-0">
                    {eventData.description}
                </p>
                <img src={end} alt="Border" className="object-contain" />


                {/* Prize Section */}
                <div className="text-[#FFD6A1] text-2xl text-center">
                    <h2 className="text-6xl md:text-6xl font-bold bg-clip-text pb-10 text-transparent bg-gradient-text">Prizes</h2>
                    <p>1st Prize: {eventData.firstPrize}</p>
                    <p>2nd Prize: {eventData.secondPrize}</p>
                    <p>3rd Prize: {eventData.thirdPrize}</p>
                </div>

                <img src={end} alt="Border" className="object-contain" />


                {/* Rules Section */}
                <div className="text-[#FFD6A1] text-center px-4 md:px-0">
                    <h2 className="text-6xl md:text-6xl font-bold bg-clip-text text-transparent pb-10 bg-gradient-text">Rules</h2>
                    <ul className="list-inside text-2xl  list-none text-justify">
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
                        className="bg-[#FFD6A1] text-[#0f0f19] px-6 py-2 rounded-md text-lg md:text-xl font-bold hover:bg-[#E7B472] font-abril-fatface transition"
                    >
                        Register Now
                    </a>
                </div>

                <img src={end} alt="Border" className="object-contain" />
            </div>
        </div>
    );
};
