
import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    },1000);

    // return () =>{
    //     clearInterval(time)
    // }
  });

  return (
    <div className="clock bg-gray-600">
      <div
        className="hour_hand"
        style={{
          transform: `rotateZ(${time.getHours() * 30 + time.getMinutes() * 0.5}deg)`,
        }}
      />
      <div
        className="min_hand "
        style={{
          transform: `rotateZ(${time.getMinutes() * 6}deg)`,
        }}
      />
      <div
        className="sec_hand "
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`,
        // transform:` rotate(${time.getSeconds() * 6})`
        }}
      />
      <span className="twelve text-white">XII</span>
      <span className="one text-white"> I</span>
      <span className="two text-white">II</span>
      <span className="three text-white">III</span>
      <span className="four text-white"> IV</span>
      <span className="five text-white">V</span>
      <span className="six text-white">VI</span>
      <span className="seven text-white">VII</span>
      <span className="eight text-white">VIII</span>
      <span className="nine text-white">IX</span>
      <span className="ten text-white">X</span>
      <span className="eleven text-white">XI</span>
    </div>
  );
};
export default Clock;
