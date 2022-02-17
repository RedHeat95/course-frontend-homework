import { useState } from "react";
import styles from "./Converter.module.css";

export const Converter = () => {
  const [valueUSD, setValueUSD] = useState("");
  const [valueBIN, setValueBIN] = useState("");
  const currency = 2.6;

  const onChangeUSD = (e) => {
    setValueUSD(e.target.value);
    setValueBIN((e.target.value * currency).toFixed(2));
  };

  const onChangeBIN = (e) => {
    setValueBIN(e.target.value);
    setValueUSD((e.target.value / currency).toFixed(2));
  };

  return (
    <div className={styles.wrraper}>
      <h1>Live currency converter</h1>
      <h3>Enter currency in USD:</h3>
      <input type="text" value={valueUSD} onChange={onChangeUSD} />
      <h3>Enter currency in BYN:</h3>
      <input type="text" value={valueBIN} onChange={onChangeBIN} />
    </div>
  );
};
