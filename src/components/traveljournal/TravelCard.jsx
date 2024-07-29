import styles from "./TravelCard.module.css";

export default function cardTravelDestinations(props) {



    return (
      <div className={styles.TravelCard}>
        <div>
          <img src={props.destination} className={styles.destinationIMGs} />
        </div>
        <div>
          <div>
            <img src={props.locationpin} className={styles.locationpin} />
          </div>
          <div></div>
        </div>
      </div>
    );
}