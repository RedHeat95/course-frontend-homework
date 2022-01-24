import styles from "./Button.module.css";

export function ButtonLike({ text, onClick }) {
  return (
    <div>
      <button className={styles.btnLike} onClick={onClick}>{text}</button>
    </div>
  );
}

export function ButtonReply({ text, onClick }) {
  return (
    <div>
      <button className={styles.btnReply} onClick={onClick}>{text}</button>
    </div>
  );
}