import styles from "./HeroTravelJournal.module.css"
import "../../../public/dubai-palm-jumeirah-island.jpg"
import "../../../public/Japan.jpg";
import "../../../public/Maldivene.jpg";

export default function HeroTravelJournal() {
  return (
    <div className={styles.WelcomeMSG}>
      <h1>Welcome, fellow adventurer! </h1>
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
    </div>
  );
}