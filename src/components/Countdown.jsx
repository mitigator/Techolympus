import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const renderCircle = (unit, max, value) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / max) * circumference;

    return (
      <svg
     
       className="w-16 h-16 transform -rotate-90 sm:w-20 sm:h-20 lg:w-24 lg:h-24" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="#2d3748"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="#e7b472"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <text
          x="60"
          y="60"
          dy=".3em"
          textAnchor="middle"
          className="text-2xl font font-abril-fatface sm:text-xl lg:text-3xl"
          fill="#FFD6A1"
          transform="rotate(90 60 60)" 
        >
          {value || '0'}
        </text>
      </svg>
    );
  };

  return (
    <div className="grid justify-center tracking-[1px] grid-cols-2 gap-6 m-6 sm:grid-cols-4 sm:gap-8 font-caesar-dressing">
      <div className="text-[40px] text-center">
        {renderCircle('days', 365, timeLeft.days)}
        <div className="text-xs sm:text-sm text-[#FFD6A1]">Days</div>
      </div>
      <div className="text-center">
        {renderCircle('hours', 24, timeLeft.hours)}
        <div className="text-xs sm:text-sm text-[#FFD6A1]">Hours</div>
      </div>
      <div className="text-center">
        {renderCircle('minutes', 60, timeLeft.minutes)}
        <div className="text-xs sm:text-sm text-[#FFD6A1]">Minutes</div>
      </div>
      <div className="text-center">
        {renderCircle('seconds', 60, timeLeft.seconds)}
        <div className="text-xs sm:text-sm text-[#FFD6A1]">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
