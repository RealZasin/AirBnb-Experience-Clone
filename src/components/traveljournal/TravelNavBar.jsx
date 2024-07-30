import styles from "./TravelNavBar.module.css";
import "../../../public/globe.png";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <img src="globe.png" className={styles.globeimg} />
      <h1>Travel Goals</h1>
    </div>
  );
}
