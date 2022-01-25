import styles from "./Card.module.css";

export function CardTelegram() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h3>Джентльмены</h3>
                <p>Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.</p>
                <img src="./images/film.png" className={styles.imgMain} />
                <div className={styles.rezult}>
                    <div className={styles.likes}>
                        <img src="./images/like.png" className={styles.imgLike} />
                        <p>1000</p>
                    </div>
                    <p>12:30</p>
                </div>
            </div>

            <div className={styles.chat}>
                <div className={styles.commmet}>
                    <img src="./images/chat.png" className={styles.imgChat} />
                    <h3>Прокомментировать</h3>
                </div>
                <img src="./images/next.png" className={styles.imgFull} />
            </div>
        </div>
    )
}