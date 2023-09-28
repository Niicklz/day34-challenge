import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [counter, setCounter] = useState(3);

  const [intervalActive, setIntervalActive] = useState(true);
  let intervalId;

  const handleInterval = () => {
    if (intervalActive) {
      setCounter((prevCounter) => (prevCounter - 1) % 5);
     

      if (counter === 0) {
        clearInterval(intervalId);
        setIntervalActive(false);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(handleInterval, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter, intervalActive]);

  const resetCounter = () => {
    setCounter(3);
    setIntervalActive(true);
  };

  return (
    <div className="container">
      {intervalActive ? (
        <div className="anim">
          <div className="numbers">
            <div className={`one nums ${counter === 3 ? "in" : ""}`}>3</div>
            <div className={`two nums ${counter === 2 ? "in" : ""}`}>2</div>
            <div className={`three nums ${counter === 1 ? "in" : ""}`}>1</div>
            <div className={`four nums ${counter === 0 ? "in" : ""}`}>0</div>
          </div>
          <h1>Get Ready!</h1>
        </div>
      ) : (
        <div className="post-anim">
          <h2>GO</h2>
          <button onClick={resetCounter}>Replay</button>
        </div>
      )}
    </div>
  );
};
