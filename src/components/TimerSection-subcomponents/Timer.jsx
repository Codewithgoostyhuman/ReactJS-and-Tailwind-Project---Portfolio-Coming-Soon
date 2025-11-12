import React, { useEffect, useState } from "react";

const Timer = () => {
  const launchDate = new Date("2025-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());
  function calculateRemainingTime() {
    const timeDifference = launchDate - new Date();
    let timeLeft = {};
    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / 1000 / 60) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
    return timeLeft;
  }
  function formatTime(num) {
    return String(num).padStart(2, "0");
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (Object.keys(timeLeft).length === 0) {
    return (
      <div className="flex flex-row justify-center items-center  text-center lg:p-6 md:p-4 sm:p-2 bg-green-600/50 h-fit text-white relative">
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl  font-extrabold animate-bounce">
          Finally! Wait is over now...!!!
        </h1>
      </div>
    );
  } else {
    const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;
    return (
      <div className="flex flex-row justify-center items-center lg:gap-20 sm:gap-10 md:gap-15 text-center lg:p-4 md:p-3 sm:p-2 bg-gray-800/50 h-fit text-white relative border-b-2 border-t-2 border-gray-500">
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl  font-extrabold">Launch Count Down</h1>

        <div className="p-2">
          <div className="flex flex-row items-center justify-center lg:text-xl md:text-md sm:text-sm font-sans gap-2">
            <div className="bg-orange-700 lg:p-5 md:p-4 sm:p-3 rounded-xl">
              {formatTime(days)}
            </div>
            <span className="text-gray-400">:</span>
            <div className="bg-orange-700 lg:p-5 md:p-4 sm:p-3 rounded-xl">
              {formatTime(hours)}
            </div>
            <span className="text-gray-400">:</span>

            <div className="bg-orange-700 lg:p-5 md:p-4 sm:p-3 rounded-xl ">
              {formatTime(minutes)}
            </div>
            <span className="text-gray-400">:</span>
            <div className="bg-orange-700 lg:p-5 md:p-4 sm:p-3 rounded-xl">
              {formatTime(seconds)}
            </div>
          </div>

          <div className="text-gray-400 text-sm lg:mt-2 md:mt-2 sm:mt-2 tracking-widest">
            DAYS : HOURS : MINUTES : SECONDS
          </div>
        </div>
      </div>
    );
  }
};

export default Timer;
