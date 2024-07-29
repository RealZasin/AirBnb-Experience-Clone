import styles from "./NavBar.module.css";
import "../../../public/globe.png"

export default function NavBar() {
  return (
    <div className={styles.navbar}>
        <img src="globe.png" className={styles.globeimg} />
        <h2>My Future Travel Goals</h2>
    </div>
  );
}
