import styles from "./Banner.module.css";
import { Button } from "../Button/Button";

export function Banner({ title, backgroundImageUrl, commentCount, category, OnClickPress }) {
  return (
    <div className={styles.boxBanner} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>      
      <div className={styles.boxMenu}>
        <Button text={category} onClick={OnClickPress} />
        <h4 className={styles.commentCount}>{commentCount}</h4>        
      </div>
      
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>   
    </div>
  );
}