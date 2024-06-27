import styles from "./Navbar.module.css";
import {Link } from "react-router-dom";

export default function Navbar() {
    return (

    <nav>
      <img src="airbnb-logo.png" className={styles.navlogo} />
      <Link to="/traveljournal">Next Page</Link>
    </nav>
    
    );
}