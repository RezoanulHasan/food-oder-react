import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../Shared/Container";

const Discount = () => {
  const calculateTimeLeft = () => {
    const discountEndDate = new Date("2024-04-02");
    const currentDate = new Date();
    const difference = discountEndDate - currentDate;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center pt-16 mb-10">
        <h3 className="text-3xl text-center mb-6">
          Get{" "}
          <span className="text-orange-500 text-5xl font-semibold">35%</span>{" "}
          Discount For All Food items to,{" "}
          <span className="text-orange-400 font-semibold">May, 2024.</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-timer">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": value }}>{value}</span>
              </span>
              <span className="countdown-label">{unit}</span>
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="btn hover:bg-white bg-white text-orange-400 mt-6"
        >
          Order NOW
        </Link>
      </div>
    </Container>
  );
};

export default Discount;
