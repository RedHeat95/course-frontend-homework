import styles from "./PostFacebook.module.css"
import { ButtonLike, ButtonReply } from "../Button/Button";

export function PostFacebook({ name, postDescription, location, timeText, onClickLike, onClickReply }) {
    return (
        <div className={styles.boxPost}>
            <div className={styles.boxImg}>
                <img src="../images/REDHEAT.png" className={styles.img}/>
            </div>

            <div className={styles.boxText}>
                <div className={styles.user}>
                    <h4 className={styles.name}>{name}</h4>
                    <p className={styles.location}>{location}</p>
                </div>
                <p className={styles.userText}>{postDescription}</p>
                <div className={styles.action}>
                    <ButtonLike onClick={onClickLike} />
                    <ButtonReply onClick={onClickReply} />
                    <p>{timeText}</p>
                </div>
            </div>
        </div>
    )
}