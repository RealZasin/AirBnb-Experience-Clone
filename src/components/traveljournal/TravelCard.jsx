import styles from "./TravelCard.module.css";

export default function cardTravelDestinations(props) {
  return (
    <div className={styles.TravelCard}>
      <div>
        <img src={props.destination} className={styles.destinationIMGs} />
      </div>
      <div>
        <div className={styles.CountryTag}>
          <img src={props.locationpin} className={styles.locationpin} />
          {props.country}
        </div>
        <div className={styles.LocationDateDesc}>
          <h1>{props.location}</h1>
          <p className={styles.bold}>{props.date}</p>
          {props.description}
        </div>
      </div>
    </div>
  );
}
