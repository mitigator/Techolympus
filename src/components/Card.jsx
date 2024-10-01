import React from 'react';

const Card = ({ eventName }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div
        className="absolute inset-0 bg-transparent border-[#E7B472] border-[1px] h-64 w-64"
        style={{
          clipPath: 'polygon(50% 5%, 100% 0, 95% 15%, 98% 93%, 50% 100%, 50% 100%, 2% 93%, 5% 15%, 0 0)',
          boxShadow: '0 0 10px rgba(231, 180, 114, 0.5)', // Adjust shadow size and opacity as needed
        }}
      ></div>
      <div
        className="bg-[#352A2E] h-64 w-64 flex justify-center items-center"
        style={{
          clipPath: 'polygon(50% 5%, 100% 0, 95% 15%, 98% 93%, 50% 100%, 50% 100%, 2% 93%, 5% 15%, 0 0)',
        }}
      >
        <h2 className='text-[#E7B472] text-xl font-abril-fatface'>{eventName}</h2>
      </div>
    </div>
  );
};

export default Card;
