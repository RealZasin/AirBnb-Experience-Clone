import styles from "./HeroTravelJournal.module.css"
import "../../../public/dubai-palm-jumeirah-island.jpg"
import "../../../public/Japan.jpg";
import "../../../public/Maldivene.jpg";

export default function HeroTravelJournal() {
  return (
    <div>
      <div className={styles.Japan}>
        <img src="/Japan.jpg" className={styles.JapanIMG} />
        <h3>Japan</h3>
        <h1>Mount Fuji</h1>
      </div>
      <div className={styles.Maldives}>
        <img src="/Maldivene.jpg" className={styles.MaldivesIMG} />
        <h3>Maldives</h3>
        <h1>Male</h1>
      </div>
      <div className={styles.Dubai}>
        <img src="/dubai-palm-jumeirah-island.jpg" className={styles.DubaiIMG} />
        <h3>Dubai</h3>
        <h1>Burj Khalifa</h1>
      </div>
    </div>
  );
}