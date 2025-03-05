import { useState } from "react";
import styles from "./Image.module.css";

export interface IImgProps {
  url: any;
  title: string;
  onClick: () => void;
}

export function Image({ url, title, onClick }: IImgProps) {
  const [imgBig, setImgBig] = useState(false);

  const imgBigest = () => {
    setImgBig((imgBig) => !imgBig);
  };
  return (
    <div className={styles.wrapper}>
      <img
        className={imgBig ? styles.imgBig : styles.img}
        src={url}
        onClick={imgBigest}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
}
