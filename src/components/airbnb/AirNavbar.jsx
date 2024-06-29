import styles from "./AirNavbar.module.css";
import {Link } from "react-router-dom";

export default function AirNavbar() {
    return (

    <nav>
      <img src="airbnb-logo.png" className={styles.navlogo} />
      <Link to="/traveljournal">Next Page</Link>
    </nav>
    
    );
}