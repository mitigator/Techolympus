import React from 'react';
import Circle from '../assets/Circle.svg';

const Card = ({ eventName }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div
        className="bg-[#352A2E] h-64 w-64 flex justify-center items-center relative"
        style={{
          clipPath: 'polygon(50% 5%, 100% 0, 95% 15%, 98% 93%, 50% 100%, 50% 100%, 2% 93%, 5% 15%, 0 0)',
          zIndex: 0,
        }}
      >
        <img
        src={Circle}
        alt="rotating circle"
        className="absolute w-24 h-24 animate-spin-slow"
        style={{
          animationDuration: '30s', 
          zIndex: 5,
        }}
      />
        <h2 className="text-[#E7B472] text-xl font-abril-fatface z-20">{eventName}</h2>
      </div>
    </div>
  );
};



export default Card;
