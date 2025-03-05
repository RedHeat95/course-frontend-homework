import styles from "./Button.module.css";

interface IBtnProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IBtnProps) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
