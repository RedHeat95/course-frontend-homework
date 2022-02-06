import styles from "./Button.module.css";

export function Button({ text, onClick }) {
  return (
    <div>
      <button className={styles.category} onClick={onClick}>{text}</button>
    </div>
  );
}