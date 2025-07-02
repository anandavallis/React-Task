import React, { useState, useEffect } from 'react';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start timer
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000); // run every 1000ms (1 second)

    // Cleanup function to stop timer when unmounted
    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    };
  }, []); // Empty dependency array: runs only on mount & unmount

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default TimerComponent;
