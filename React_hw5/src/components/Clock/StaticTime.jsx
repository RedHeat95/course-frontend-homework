import styles from "./StaticTime.module.css"

export const StaticTime = () => {
    return (
        <div className={styles.clock}>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    );
}