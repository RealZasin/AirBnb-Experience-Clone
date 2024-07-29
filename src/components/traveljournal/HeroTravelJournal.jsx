import styles from "./HeroTravelJournal.module.css"
import "../../../public/dubai-palm-jumeirah-island.jpg"
import "../../../public/Japan.jpg";
import "../../../public/Maldivene.jpg";

export default function HeroTravelJournal() {
  return (
    <div className={styles.WelcomeMSG}>
      <h2>Welcome, fellow adventurer! </h2>
      <p>
        I'm delighted to have you here on my travel journal. This space is
        dedicated to sharing the wonders of the world, one journey at a time.
        Whether you're a seasoned traveler or just dreaming of your next
        getaway, I hope you find inspiration and joy in these stories and tips.
        Thank you for taking the time to visit. Your presence here is truly
        appreciated, and I hope you feel as excited about these adventures as I
        do. Let's explore the world together, one page at a time. Happy travels!{" "}
        <br></br>
        <br></br>Warm regards, Eirik
      </p>
      {/* <div className={styles.Japan}>
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
      </div> */}
    </div>
  );
}