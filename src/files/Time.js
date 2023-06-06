import React, { useState, useEffect } from 'react';

export default function Time(props) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString(); // Get current time
      const formattedDate = now.toLocaleDateString(); // Get current date
      setCurrentTime(formattedTime);
    };

    updateTime();

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`time--container ${props.darkMode && "time--container-dark"}`}>
      <p>{currentTime}</p>
    </div>
  );
}
