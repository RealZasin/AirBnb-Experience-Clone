import styles from "./Card.module.css"

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className={styles.card}>
      {badgeText && <div className={styles.cardbadge}>{badgeText}</div>}
      <img src={props.coverImg} className={styles.cardimage} />
      <div className={styles.cardstats}>
        <img src="star.png" className={styles.cardstar} />
        <span>{props.stats.rating}</span>
        <span className={styles.gray}>({props.stats.reviewCount}) • </span>
        <span className={styles.gray}>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className={styles.bold}>From ${props.price}</span> / person
      </p>
    </div>
  );
}
