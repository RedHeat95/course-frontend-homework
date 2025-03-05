import { useState } from "react";
import styles from "./Timer.module.css";
import { Button } from "./Button/Button";

export const Clock = () => {
  const [time, setTime] = useState(0);

  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onClickStart = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    setTimerId(intervalId);
  };

  const onClickStop = () => {
    if (timerId) {
      clearInterval(timerId);
    }
  };

  const onClickReset = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    setTime(0);
  };

  return (
    <div className={styles.wrraper}>
      <h1 className={styles.title}>Timer</h1>
      <h2 className={styles.time}>{time}</h2>
      <div>
        <Button text="Start" onClick={onClickStart} />
        <Button text="Stop" onClick={onClickStop} />
        <Button text="Reset" onClick={onClickReset} />
      </div>
    </div>
  );
};
