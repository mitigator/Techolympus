import React from 'react';

const Card = ({personName,position}) => {
    return (
        <div
            className="w-64 h-64 border-t-[1px] border-l-[1px] border-r-[1px] border-[#ED9523] rounded-lg overflow-hidden flex items-center justify-center shadow-lg" 
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), -4px -4px 8px rgba(0, 0, 0, 0.3)', // Retaining the boxShadow as a fallback
            }}
        >
            <div className="text-center">
                <h2 className="text-lg font-semibold text-[#ED9523]">{personName}</h2>
                <p className="mt-2 text-white">{position}</p>
            </div>
        </div>
    );
};

export default Card;
