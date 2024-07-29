import styles from "./Airbnb.module.css"
import AirNavbar from "../components/airbnb/AirNavbar.jsx";
import Hero from "../components/airbnb/Hero.jsx";
import Card from "../components/airbnb/Card.jsx";
import data from "../data.js";

function Airbnb() {
  const newCard = data.map((item) => {
    return (
    <Card 
    key={item.id} 
    {...item} 
    />
    )
  })

  return (
    <>
      <AirNavbar />
      <Hero />
      <section className={styles.cardslist}>
          {newCard}
      </section>
    </>
  );
}

export default Airbnb;
