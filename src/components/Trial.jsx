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
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
    >
      <div
        className="relative flex items-center justify-center bg-transparent cursor-pointer h-60 w-60 group"
        onClick={handleCardClick} // Make the card clickable
      >
        <div className="relative bg-[url('../assets/img.svg')] bg-contain bg-no-repeat w-[385px] h-[297px] flex justify-center items-center transition-transform duration-300 group-hover:scale-105">
          <div className="w-[310px] h-[310px] bg-[url('./assets/img2.svg')] bg-center bg-contain bg-no-repeat relative flex justify-center items-center">
            <h2 className=" text-[#E7B472] text-center max-w-[200px] text-2xl break-words  font-abril-fatface z-[10000] group-hover:scale-110 transition-transform duration-300">
              {eventName}
            </h2>
          </div>
        </div>
        {/* <img
          src={Circle}
          alt="rotating circle"
          className="absolute z-0 w-24 h-24 animate-spin-slow"
          style={{
            animationDuration: '30s',
            // zIndex: 0,
          }}
        /> */}
      </div>
    </div>

    // <div
    // className='bg-[#352a2e77]'
    // ></div>
  );
};

export default Trial;
