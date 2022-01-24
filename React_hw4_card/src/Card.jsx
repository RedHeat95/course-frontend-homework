import styles from "./Card.module.css";

export function Card() {
    return (
        <div className={styles.cardBody}>
            
            <div className={styles.cardWrapper}>
                <div className={styles.cardHeader}>
                    <div>
                        <img className={styles.imgAva} src="images/REDHEAT.png" />
                    </div>

                    <div>
                        <h4 style={{ padding: "0 0 0 1.5rem", color: "#ffffff" }}>Aleksandr Shundrik</h4>
                        <p style={{ padding: "0 0 1rem 1.5rem", color: "#ffffff", fontSize: "0.8rem" }}>+375 29 689 3254</p>
                    </div>
                </div>
                
                <div className={styles.cardMain}>
                    <div style={{ display: "flex" }}>
                        <img className={styles.img} src="images/REDHEAT.png" />
                        <h5 className={styles.h5}>Создать группу</h5>
                    </div>

                    <div style={{ display: "flex" }}>
                        <img className={styles.img} src="images/REDHEAT.png" />
                        <h5 className={styles.h5}>Создать канал</h5>
                    </div>
                    
                    <div style={{ display: "flex" }}>
                        <img className={styles.img} src="images/REDHEAT.png" />
                        <h5 className={styles.h5}>Контакты</h5>
                    </div>

                    <div style={{ display: "flex" }}>
                        <img className={styles.img} src="images/REDHEAT.png" />
                        <h5 className={styles.h5}>Настройки</h5>
                    </div>
                        
                    <div style={{ display: "flex" }}>
                        <img className={styles.img} src="images/REDHEAT.png" />
                        <h5 className={styles.h5}>Ночной режим</h5>
                    </div> 
                </div>   

                <div className={styles.cardFooter}>
                    <a>Telegram Desktop</a>
                    <a>Версия 3.4.3 х64 - О программе </a>
                </div>
            </div>
        </div>
    )
}