import styles from "./Button.module.css";

export function ButtonLike({ onClick }) {
  return (
    <div>
      <button className={styles.btnLike} onClick={onClick}>Like</button>
    </div>
  );
}

export function ButtonReply({ onClick }) {
  return (
    <div>
      <button className={styles.btnReply} onClick={onClick}>Reply</button>
    </div>
  );
}