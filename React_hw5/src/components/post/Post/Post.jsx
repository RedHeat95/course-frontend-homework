import styles from "./Post.module.css";

export function Post({ title, subtitle, author }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <p>{subtitle}</p>
            </div>

            <div className={styles.signature}>
                <span>Author: </span>
                <a href="#">{author}</a>
            </div>
        </div>        
    )
}