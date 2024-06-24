// import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.jsx"

function App() {
  const newCard = data.map(cardData => {
    return (
    <Card
    key={cardData.id}
    img={cardData.coverImg}
    rating={cardData.stats.rating}
    reviewCount={cardData.stats.reviewCount}
    location={cardData.location}
    title={cardData.title}
    price={cardData.price}
    />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {newCard}
      </section>
    </>
  );
}

export default App
