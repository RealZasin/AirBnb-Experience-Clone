import styles from "./TravelNavBar.module.css";
import "../../../public/globe.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <img src="globe.png" className={styles.globeimg} />
      <h1>Travel Goals</h1>
      <span className={styles.BackOnePageFixedLocation}>
        <Link to="/">Back</Link>
      </span>
      <span className={styles.NextPageFixedLocation}>
        <Link to="/Memegenerator">Next</Link>
      </span>
    </div>
  );
}
