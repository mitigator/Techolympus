import React, { useState } from 'react';
import Circle from '../assets/Circle.svg';
import { useNavigate } from 'react-router-dom';

const Trial = ({ eventName, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link); // Redirect to the specified link
  };

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
    >
      <div
        className="bg-transparent h-60 w-60 flex justify-center items-center relative group cursor-pointer"
        onClick={handleCardClick} // Make the card clickable
      >
        <div className="relative bg-[url('./assets/img.svg')] bg-contain bg-no-repeat w-[385px] h-[297px] flex justify-center items-center transition-transform duration-300 group-hover:scale-105">
          <div className="w-[310px] h-[310px] bg-[url('./assets/img2.svg')] bg-center bg-contain bg-no-repeat relative flex justify-center items-center">
            <h2 className="text-[#E7B472] text-center text-xl font-abril-fatface z-20 group-hover:scale-110 transition-transform duration-300">
              {eventName}
            </h2>
          </div>
        </div>
        <img
          src={Circle}
          alt="rotating circle"
          className="absolute w-24 h-24 animate-spin-slow"
          style={{
            animationDuration: '30s',
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
};

export default Trial;
