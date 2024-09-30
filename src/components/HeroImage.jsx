import React from 'react';
import BG from '../assets/BG.svg';
import zeus from '../assets/zeus.svg';

const HeroImage = () => {
    return (
        <div 
            className="w-full h-[85vh] md:h-[100vh] lg:h-[80vh]  bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${BG})` }}
        >
            <div className="flex items-center justify-center h-full relative z-20"> 
                <h1 className="text-white text-4xl font-bold">Your Content Here</h1>
            </div>
            <img 
                src={zeus} 
                alt="Zeus" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 object-cover w-full lg:h-[80vh]"
                
            />
        </div>
    );
};

export default HeroImage;
