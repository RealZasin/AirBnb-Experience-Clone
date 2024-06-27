import styles from "./Airbnb.module.css"
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Card from "../components/Card.jsx";
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
      <Navbar />
      <Hero />
      <section className={styles.cardslist}>
          {newCard}
      </section>
    </>
  );
}

export default Airbnb;
