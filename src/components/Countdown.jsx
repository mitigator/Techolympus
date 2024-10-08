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
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevTimeLeft(timeLeft); 
      setTimeLeft(calculateTimeLeft()); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const shouldFlip = (unit) => timeLeft[unit] !== prevTimeLeft[unit];

  return (
    <div className="flex justify-center space-x-10 m-6">
      <div className="text-center">
        <div className={`flip-container ${shouldFlip('days') ? 'animate-flip' : ''}`}>
          <div className="flip text-4xl font-bold text-[#e7b472]">
            {timeLeft.days || '0'}
          </div>
        </div>
        <div className="text-sm">Days</div>
      </div>
      <div className="text-center">
        <div className={`flip-container ${shouldFlip('hours') ? 'animate-flip' : ''}`}>
          <div className="flip text-4xl font-bold text-[#e7b472]">
            {timeLeft.hours || '0'}
          </div>
        </div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="text-center">
        <div className={`flip-container ${shouldFlip('minutes') ? 'animate-flip' : ''}`}>
          <div className="flip text-4xl font-bold text-[#e7b472]">
            {timeLeft.minutes || '0'}
          </div>
        </div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="text-center">
        <div className={`flip-container ${shouldFlip('seconds') ? 'animate-flip' : ''}`}>
          <div className="flip text-4xl font-bold text-[#e7b472]">
            {timeLeft.seconds || '0'}
          </div>
        </div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
