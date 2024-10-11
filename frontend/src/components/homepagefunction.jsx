import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  // flashsales countdown timer
  // Calculate the target time which is 3 days (72 hours) from now in milliseconds
  const targetTime = Date.now() + 3 * 24 * 60 * 60 * 1000;

  // Function to calculate the time remaining
  const calculateTimeLeft = () => {
    // Get the difference between the target time and the current time
    const difference = targetTime - Date.now();

    // Initialize an empty object to store time left
    let timeLeft = {};

    // If there's still time remaining
    if (difference > 0) {
      // Calculate the remaining days, hours, minutes, and seconds
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), // Remaining days
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Remaining hours
        minutes: Math.floor((difference / 1000 / 60) % 60), // Remaining minutes
        seconds: Math.floor((difference / 1000) % 60), // Remaining seconds
      };
    } else {
      // If the countdown is over, set everything to 0
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    // Return the calculated time left
    return timeLeft;
  };

  // useState hook to store the time left, initialized with the calculateTimeLeft function
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect hook to update the countdown every second
  useEffect(() => {
    // Set an interval to update the time every 1000ms (1 second)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // Update the state with the new time left
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []); // Empty dependency array so the effect runs only once when the component mounts

  return (
    <div className="flashsales-countdown-main">
      <div className="flashsales-countdown-date">
        <p>Days</p>
        <p>Hours</p>
        <p>Minutes</p>
        <p>Seconds</p>
      </div>
      <span className="flashsales-countdown-time">
        {timeLeft.days}
        <h4>:</h4>
        {timeLeft.hours}
        <h4>:</h4> {timeLeft.minutes}
        <h4>:</h4>
        {timeLeft.seconds}
      </span>
    </div>
  );
};

export const Carousel = () => {};
