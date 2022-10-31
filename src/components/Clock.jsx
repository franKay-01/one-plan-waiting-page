import React, { useEffect, useState } from "react";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="flex space-x-4">
      <div className="Clock-days time-card">
        <div className="grid grid-cols-1 place-items-center">
          <div className="text-default-blue text-4xl font-semibold">{leading0(days)}</div>
          <div className="text-default-blue text-sm font-normal">Days</div>
        </div>
      </div>
      <div className="Clock-hours time-card">
        <div className="grid grid-cols-1 place-items-center">
          <div className="text-default-blue text-4xl font-semibold">{leading0(hours)}</div>
          <div className="text-default-blue text-sm font-normal">Hours</div>
        </div>
      </div>
      <div className="Clock-minutes time-card">
        <div className="grid grid-cols-1 place-items-center">
          <div className="text-default-blue text-4xl font-semibold">{leading0(minutes)}</div>
          <div className="text-default-blue text-sm font-normal">Minutes</div>
        </div>
      </div>
      <div className="Clock-seconds time-card">
        <div className="grid grid-cols-1 place-items-center">
          <div className="text-default-blue text-4xl font-semibold">{leading0(seconds)}</div>
          <div className="text-default-blue text-sm font-normal">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;