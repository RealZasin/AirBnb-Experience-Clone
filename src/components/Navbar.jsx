import styles from "./Navbar.module.css";

export default function Navbar() {
    return (

    <nav>
      <img src="airbnb-logo.png" className={styles.navlogo} />
      <p>Next Page</p>
    </nav>
    
    );
}