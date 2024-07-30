import styles from "./AirNavbar.module.css";
import {Link } from "react-router-dom";

export default function AirNavbar() {
    return (
      <>
        <nav>
          <img src="airbnb-logo.png" className={styles.navlogo} />
        </nav>
        <span className={styles.NxtPageFixedLocation}>
          <Link to="/traveljournal">Next Page</Link>
        </span>
      </>
    );
}