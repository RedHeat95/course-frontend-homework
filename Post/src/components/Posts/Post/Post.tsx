import styles from "./Post.module.css";

export interface IPost {
  key: string;
  title: string;
  body: string;
  author: string;
}

export function Post({ key, title, body, author }: IPost) {
  return (
    <div key={key} className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{body}</p>

      <div className={styles.signature}>
        <span>Author: </span>
        <a href="#">{author}</a>
      </div>
    </div>
  );
}
