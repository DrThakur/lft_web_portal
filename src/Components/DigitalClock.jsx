import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Format the time
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="text-center">
      <h1 className="text-xxl font-semibold">{formattedTime}</h1>
    </div>
  );
};

export default DigitalClock;
