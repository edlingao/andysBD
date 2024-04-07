import { useEffect, useState } from "react";

export function CountDown() {
  
  const [ping, setPing] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const may5_2024 = new Date("2024-05-05").getTime();
    const difference = may5_2024 - currentTime;
    setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
  }, [ping]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPing(ping + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [ping]);

  return (
    <div className="flex flex-row  max-w-80 gap-2 mx-auto w-[100%] text-center z-10  text-white text-sm">
      <div className="w-36 square flex flex-col p-2 rounded-lg">
        <span className="text-5xl font-bold rgb-animation-shadow">{days}</span>
        <span>Days</span>
      </div>
      <div className="w-36 square flex flex-col p-2 rounded-lg">
        <span className="text-5xl font-bold rgb-animation-shadow">{hours}</span>
        <span>Hours</span>
      </div>
      <div className="w-36 square flex flex-col p-2 rounded-lg">
        <span className="text-5xl font-bold rgb-animation-shadow">{minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="w-36 square flex flex-col p-2 rounded-lg">
        <span className="text-5xl font-bold rgb-animation-shadow">{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

