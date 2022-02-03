import { useState } from "react";
import styles from "./Converter.module.css";


export const Converter = () => {
    const [count, setCount] = useState(0);

    const curs = 2;

    const Counter = (e) => {
        setCount(e.target.value * curs);   
    }

    return(
        <div>
            <h1>USD</h1>
            <input value={count} onChange={Counter} />
            <h1>BYN</h1>
            <input value={count} onChange={Counter} />
        </div>
    );
}