
import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {

  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(59);


  const getTime = () => {
    const sec = seconds-1;

    if(minutes === 0 && sec === -1){
        setMinutes(9);
        setSeconds(59);
    }

    else if(sec === -1){
        setMinutes(minutes-1)
        setSeconds(59);
    }
    
    else
        setSeconds(sec);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [seconds]);

  return (
    <div className="text-pink-400 bg-gray-100 rounded-md w-[55px] flex justify-center">
        {minutes} : {seconds}
    </div>
  );
};

export default Timer;