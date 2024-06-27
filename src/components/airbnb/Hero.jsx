import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <img src="photo-grid.png" className={styles.herophoto} />
            <h1 className={styles.heroheader}>Online Experiences</h1>
            <p className={styles.herotext}>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}