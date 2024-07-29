import NavBar from "../components/traveljournal/TravelNavBar"
import HeroTravelJournal from "../components/traveljournal/HeroTravelJournal";
import styles from "./Traveljournal.module.css";
import DataTravel from "../DataTravel.js";
import TravelCard from "../components/traveljournal/TravelCard.jsx"


export default function TravelJournal() {

const newCardTravel = DataTravel.map((item) => {
  return <TravelCard key={item.id} {...item} />;
});

    return (
      <div>
        <NavBar />
        <HeroTravelJournal />
        <section className={styles.cardslistTravel}>{newCardTravel}</section>
      </div>
    );
}